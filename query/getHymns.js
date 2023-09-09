const { Agenda, Hymn, Agenda_Hymn } = require('../models');

const hymnsWithAgendas = async () => {
  const hymns = await Hymn.findAll({
    attributes: {
      exclude: ['createdAt', 'updatedAt']  // exclude these from being returned from Hymns since we do not need them
    },
    include: [{
        model: Agenda,
        as: 'agendas',
        required: false,
        attributes: ['id', 'date', 'name'],  // columns from Agenda we want included in the query
        // the `through` object is optional– without it, Sequelize includes agendaId, hymnId, createdAt, and updatedAt from Agenda_Hymn (no idea how it knows about Agenda_Hymn, though)
        through: {
          model: Agenda_Hymn,
          as: 'Agenda_Hymns',
          attributes: ['agendaId', 'hymnId', 'order'],  // columns from Agenda_Hymn we want included in the query
        }
    }]
  });
  console.log("All hymns with their associated agendas:", JSON.stringify(hymns, null, 4))
};

const run = async () => {
    await hymnsWithAgendas();
    process.exit();
}

run();

/*
The query above runs as the SQL below.

SELECT
  "Hymn"."id",
  "Hymn"."title",
  "Hymn"."hymnNo",
  "Hymn"."isRestricted",
  "Hymn"."href",
  "Hymn"."createdAt",
  "Hymn"."updatedAt",
  "agendas"."id" AS "agendas.id",
  "agendas"."date" AS "agendas.date",
  "agendas"."name" AS "agendas.name",
  "agendas->Agenda_Hymns"."id" AS "agendas.Agenda_Hymns.id",
  "agendas->Agenda_Hymns"."agendaId" AS "agendas.Agenda_Hymns.agendaId",
  "agendas->Agenda_Hymns"."hymnId" AS "agendas.Agenda_Hymns.hymnId",
  "agendas->Agenda_Hymns"."order" AS "agendas.Agenda_Hymns.order"
FROM
  "Hymns" AS "Hymn"
LEFT OUTER JOIN (
  "Agenda_Hymns" AS "agendas->Agenda_Hymns"
  INNER JOIN
    "Agendas" AS "agendas"
    ON
      "agendas"."id" = "agendas->Agenda_Hymns"."agendaId"
)
ON
  "Hymn"."id" = "agendas->Agenda_Hymns"."hymnId";

** NOTES **
SELECT --> The items indented beneath this are the columns we want to include in our query. Columns loosely translate to the keys in a JSON response. They don't have the exact same names but their naming allows Sequelize to create an object that is shaped in such a way that we can easily extract the values we need.
"agendas"."id" AS "agendas.id" --> Each time we see AS, we are aliasing what's on the left (e.g. "agendas"."id") to what's on the right (e.g. "agendas.id"). I think one reason for aliasing is so we can reference it throughout the query. If my assumption is correct, aliasing does not have to happen before it is referenced. Also, aliasing "agendas"."id" as "agendas.id" is so we see "agendas.id" in the table whereas if we did "agendas"."id", we would see only "id" and not be sure if this was the id for Hymns or Agendas.
FROM --> I think the first table named after this is considered the left table.
"Hymns" AS "Hymn" --> Here we alias the Hymns table as Hymn. I don't know whether this is absolutely necessary but note that we refer to Hymn above this line which would suggest that we can reference the alias before it is defined.
LEFT OUTER JOIN --> This says get all the records from the left table which, in this case, is Hymns because it is named before this statement.
--- RIGHT TABLE STARTS HERE ---
    ( ... ) --> I think everything contained within the parentheses is considered the right table. Because it does not exist permanently on its own in the database, it is a virtual table. This virtual right table is a combination of two other tables, Agenda_Hymns and Agendas, and exists with the name agendas->Agenda_Hymns only while this query is executing. Not sure but "->" may also be Sequelize's way of denoting that the table is virtual.
    "Agenda_Hymns" AS "agendas->Agenda_Hymns" --> This establishes Agenda_Hymns as the left table within the virtual right table. The alias may be Sequelize's convention as a way to say that this virtual table will be comprised of Agenda_Hymns and Agendas. My guess is that Agendas comes first as if to say that it's a normal table whereas Agenda_Hymns is a lookup table. It may also be possible that this is the in-memory name of the virtual table that we are building in between the open and closing parenthesis.
    INNER JOIN --> This says find all the records which match in both the left and right tables. At this point we know that the left table is Agenda_Hymns because it was named right before this statement. The right table will be named following this line.
    "Agendas" AS "agendas" --> This defines the right table within the right virtual table mentioned previously. My guess is that going from "Agendas" to "agendas" by aliasing with a lowercase "a" is Sequelize's convention to say that Agendas is secondary in the overall scheme of things since we are querying Hymns but want also to know the agendas that are tied to those hymns.
    ON --> We use this exclusively (?) with JOIN to stipulate on which columns, which we specify following ON, that the join will happen.
    "agendas"."id" = "agendas->Agenda_Hymns"."agendaId" --> This is the condition where the join occurs, when the id from Agendas equals the agendaId in Agenda_Hymns.
--- RIGHT` TABLE ENDS HERE ---
ON --> Now that we are done defining the virtual table as the right table in our query, we get ready to stipulate on which columns we depend to find a match.
"Hymn"."id" = "agendas->Agenda_Hymns"."hymnId" --> This joins the records when the id in Hymns is equal to hymnId in Agenda_Hymns.
*/

/*
If we copy/paste the SQL generated by Sequelize to a PostgreSQL shell, we get a table that looks like this.

 id  |              title              | hymnNo | isRestricted |                 href                 |         createdAt          |         updatedAt          | agendas.id |         agendas.date          | agendas.name | agendas.Agenda_Hymns.createdAt | agendas.Agenda_Hymns.updatedAt | agendas.Agenda_Hymns.agendaId | agendas.Agenda_Hymns.hymnId 
-----+---------------------------------+--------+--------------+--------------------------------------+----------------------------+----------------------------+------------+-------------------------------+--------------+--------------------------------+--------------------------------+-------------------------------+-----------------------------
   1 | The Morning Breaks              |      1 | f            | 0010-the-morning-breaks              | 2022-04-23 12:00:41.788-04 | 2022-04-23 12:00:41.788-04 |          1 | 3 Oct 2021 12:00:00 GMT-0400  | Oct-A        | 2022-04-23 12:00:41.827-04     | 2022-04-23 12:00:41.827-04     |                             1 |                           1
   2 | The Spirit of God               |      2 | f            | 0020-the-spirit-of-god               | 2022-04-23 12:00:41.788-04 | 2022-04-23 12:00:41.788-04 |          1 | 3 Oct 2021 12:00:00 GMT-0400  | Oct-A        | 2022-04-23 12:00:41.827-04     | 2022-04-23 12:00:41.827-04     |                             1 |                           2
   3 | Now Let Us Rejoice              |      3 | f            | 0030-now-let-us-rejoice              | 2022-04-23 12:00:41.788-04 | 2022-04-23 12:00:41.788-04 |          1 | 3 Oct 2021 12:00:00 GMT-0400  | Oct-A        | 2022-04-23 12:00:41.827-04     | 2022-04-23 12:00:41.827-04     |                             1 |                           3
 117 | Come unto Jesus                 |    117 | f            | 1170-come-unto-jesus                 | 2022-04-23 12:00:41.788-04 | 2022-04-23 12:00:41.788-04 |          2 | 10 Oct 2021 12:00:00 GMT-0400 | Oct-B        | 2022-04-23 12:00:41.827-04     | 2022-04-23 12:00:41.827-04     |                             2 |                         117
 175 | O God, the Eternal Father       |    175 | f            | 1750-o-god-the-eternal-father        | 2022-04-23 12:00:41.788-04 | 2022-04-23 12:00:41.788-04 |          2 | 10 Oct 2021 12:00:00 GMT-0400 | Oct-B        | 2022-04-23 12:00:41.827-04     | 2022-04-23 12:00:41.827-04     |                             2 |                         175
  64 | On This Day of Joy and Gladness |     64 | f            | 0640-on-this-day-of-joy-and-gladness | 2022-04-23 12:00:41.788-04 | 2022-04-23 12:00:41.788-04 |          2 | 10 Oct 2021 12:00:00 GMT-0400 | Oct-B        | 2022-04-23 12:00:41.827-04     | 2022-04-23 12:00:41.827-04     |                             2 |                          64
( ... and all the other hymns without related agendas )

*/


/*
The query above returns the JSON below when executed in Node.

[
  {
      "id": 1,
      "title": "The Morning Breaks",
      "hymnNo": 1,
      "isRestricted": false,
      "href": "0010-the-morning-breaks",
      "agendas": [
          {
              "id": 1,
              "date": "3 Oct 2021 12:00:00 GMT-0400",
              "name": "Oct-A",
              "Agenda_Hymns": {
                  "agendaId": 1,
                  "hymnId": 1,
                  "order": 0
              }
          }
      ]
  },
  {
      "id": 2,
      "title": "The Spirit of God",
      "hymnNo": 2,
      "isRestricted": false,
      "href": "0020-the-spirit-of-god",
      "agendas": [
          {
              "id": 1,
              "date": "3 Oct 2021 12:00:00 GMT-0400",
              "name": "Oct-A",
              "Agenda_Hymns": {
                  "agendaId": 1,
                  "hymnId": 2,
                  "order": 0
              }
          }
      ]
  },
  {
      "id": 3,
      "title": "Now Let Us Rejoice",
      "hymnNo": 3,
      "isRestricted": false,
      "href": "0030-now-let-us-rejoice",
      "agendas": [
          {
              "id": 1,
              "date": "3 Oct 2021 12:00:00 GMT-0400",
              "name": "Oct-A",
              "Agenda_Hymns": {
                  "agendaId": 1,
                  "hymnId": 3,
                  "order": 0
              }
          }
      ]
  },
  {
      "id": 117,
      "title": "Come unto Jesus",
      "hymnNo": 117,
      "isRestricted": false,
      "href": "1170-come-unto-jesus",
      "agendas": [
          {
              "id": 2,
              "date": "10 Oct 2021 12:00:00 GMT-0400",
              "name": "Oct-B",
              "Agenda_Hymns": {
                  "agendaId": 2,
                  "hymnId": 117,
                  "order": 1
              }
          }
      ]
  },
  {
      "id": 175,
      "title": "O God, the Eternal Father",
      "hymnNo": 175,
      "isRestricted": false,
      "href": "1750-o-god-the-eternal-father",
      "agendas": [
          {
              "id": 2,
              "date": "10 Oct 2021 12:00:00 GMT-0400",
              "name": "Oct-B",
              "Agenda_Hymns": {
                  "agendaId": 2,
                  "hymnId": 175,
                  "order": 2
              }
          }
      ]
  },
  {
      "id": 64,
      "title": "On This Day of Joy and Gladness",
      "hymnNo": 64,
      "isRestricted": false,
      "href": "0640-on-this-day-of-joy-and-gladness",
      "agendas": [
          {
              "id": 2,
              "date": "10 Oct 2021 12:00:00 GMT-0400",
              "name": "Oct-B",
              "Agenda_Hymns": {
                  "agendaId": 2,
                  "hymnId": 64,
                  "order": 3
              }
          }
      ]
  },
  { ... and all the other hymns without related agendas }
]

*/


