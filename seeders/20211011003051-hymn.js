'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Hymns', [
      {
        href: "0010-the-morning-breaks",
        hymnNo: "1",
        isRestricted: false,
        title: "The Morning Breaks",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0020-the-spirit-of-god",
        hymnNo: "2",
        isRestricted: false,
        title: "The Spirit of God",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0030-now-let-us-rejoice",
        hymnNo: "3",
        isRestricted: false,
        title: "Now Let Us Rejoice",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0040-truth-eternal",
        hymnNo: "4",
        isRestricted: false,
        title: "Truth Eternal",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0050-high-on-the-mountain-top",
        hymnNo: "5",
        isRestricted: false,
        title: "High on the Mountain Top",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0060-redeemer-of-israel",
        hymnNo: "6",
        isRestricted: false,
        title: "Redeemer of Israel",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0070-israel-israel-god-is-calling",
        hymnNo: "7",
        isRestricted: false,
        title: "Israel, Israel, God Is Calling",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0080-awake-and-arise",
        hymnNo: "8",
        isRestricted: false,
        title: "Awake and Arise",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0090-come-rejoice",
        hymnNo: "9",
        isRestricted: false,
        title: "Come, Rejoice",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0100-come-sing-to-the-lord",
        hymnNo: "10",
        isRestricted: false,
        title: "Come, Sing to the Lord",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0110-what-was-witnessed-in-the-heavens",
        hymnNo: "11",
        isRestricted: false,
        title: "What Was Witnessed in the Heavens?",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0120-twas-witnessed-in-the-morning-sky",
        hymnNo: "12",
        isRestricted: true,
        title: "'Twas Witnessed in the Morning Sky",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0130-an-angel-from-on-high",
        hymnNo: "13",
        isRestricted: false,
        title: "An Angel from on High",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0140-sweet-is-the-peace-the-gospel-brings",
        hymnNo: "14",
        isRestricted: false,
        title: "Sweet Is the Peace the Gospel Brings",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0150-i-saw-a-mighty-angel-fly",
        hymnNo: "15",
        isRestricted: false,
        title: "I Saw a Mighty Angel Fly",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0160-what-glorious-scenes-mine-eyes-behold",
        hymnNo: "16",
        isRestricted: false,
        title: "What Glorious Scenes Mine Eyes Behold",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0170-awake-ye-saints-of-god-awake",
        hymnNo: "17",
        isRestricted: false,
        title: "Awake, Ye Saints of God, Awake!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0180-the-voice-of-god-again-is-heard",
        hymnNo: "18",
        isRestricted: false,
        title: "The Voice of God Again Is Heard",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0190-we-thank-thee-o-god-for-a-prophet",
        hymnNo: "19",
        isRestricted: false,
        title: "We Thank Thee, O God, for a Prophet",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0200-god-of-power-god-of-right",
        hymnNo: "20",
        isRestricted: false,
        title: "God of Power, God of Right",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0210-come-listen-to-a-prophets-voice",
        hymnNo: "21",
        isRestricted: false,
        title: "Come, Listen to a Prophet's Voice",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0220-we-listen-to-a-prophets-voice",
        hymnNo: "22",
        isRestricted: false,
        title: "We Listen to a Prophet's Voice",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0230-we-ever-pray-for-thee",
        hymnNo: "23",
        isRestricted: false,
        title: "We Ever Pray for Thee",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0240-god-bless-our-prophet-dear",
        hymnNo: "24",
        isRestricted: false,
        title: "God Bless Our Prophet Dear",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0250-now-well-sing-with-one-accord",
        hymnNo: "25",
        isRestricted: false,
        title: "Now We'll Sing with One Accord",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0260-joseph-smiths-first-prayer",
        hymnNo: "26",
        isRestricted: false,
        title: "Joseph Smith's First Prayer",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0270-praise-to-the-man",
        hymnNo: "27",
        isRestricted: false,
        title: "Praise to the Man",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0280-saints-behold-how-great-jehovah",
        hymnNo: "28",
        isRestricted: false,
        title: "Saints, Behold How Great Jehovah",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0290-a-poor-wayfaring-man-of-grief",
        hymnNo: "29",
        isRestricted: false,
        title: "A Poor Wayfaring Man of Grief",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0300-come-come-ye-saints",
        hymnNo: "30",
        isRestricted: false,
        title: "Come, Come, Ye Saints",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0310-o-god-our-help-in-ages-past",
        hymnNo: "31",
        isRestricted: false,
        title: "O God, Our Help in Ages Past",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0320-the-happy-day-at-last-has-come",
        hymnNo: "32",
        isRestricted: false,
        title: "The Happy Day at Last Has Come",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0330-our-mountain-home-so-dear",
        hymnNo: "33",
        isRestricted: false,
        title: "Our Mountain Home So Dear",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0340-o-ye-mountains-high",
        hymnNo: "34",
        isRestricted: false,
        title: "O Ye Mountains High",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0350-for-the-strength-of-the-hills",
        hymnNo: "35",
        isRestricted: false,
        title: "For the Strength of the Hills",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0360-they-the-builders-of-the-nation",
        hymnNo: "36",
        isRestricted: false,
        title: "They, the Builders of the Nation",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0370-the-wintry-day-descending-to-its-close",
        hymnNo: "37",
        isRestricted: false,
        title: "The Wintry Day, Descending to Its Close",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0380-come-all-ye-saints-of-zion",
        hymnNo: "38",
        isRestricted: false,
        title: "Come, All Ye Saints of Zion",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0390-o-saints-of-zion",
        hymnNo: "39",
        isRestricted: false,
        title: "O Saints of Zion",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0400-arise-o-glorious-zion",
        hymnNo: "40",
        isRestricted: false,
        title: "Arise, O Glorious Zion",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0410-let-zion-in-her-beauty-rise",
        hymnNo: "41",
        isRestricted: false,
        title: "Let Zion in Her Beauty Rise",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0420-hail-to-the-brightness-of-zions-glad-morning",
        hymnNo: "42",
        isRestricted: false,
        title: "Hail to the Brightness of Zion's Glad Morning!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0430-zion-stands-with-hills-surrounded",
        hymnNo: "43",
        isRestricted: false,
        title: "Zion Stands with Hills Surrounded",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0440-beautiful-zion-built-above",
        hymnNo: "44",
        isRestricted: false,
        title: "Beautiful Zion, Built Above",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0450-lead-me-into-life-eternal",
        hymnNo: "45",
        isRestricted: false,
        title: "Lead Me into Life Eternal",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0460-glorious-things-of-thee-are-spoken",
        hymnNo: "46",
        isRestricted: false,
        title: "Glorious Things of Thee Are Spoken",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0470-we-will-sing-of-zion",
        hymnNo: "47",
        isRestricted: false,
        title: "We Will Sing of Zion",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0480-glorious-things-are-sung-of-zion",
        hymnNo: "48",
        isRestricted: false,
        title: "Glorious Things Are Sung of Zion",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0490-adam-ondi-ahman",
        hymnNo: "49",
        isRestricted: false,
        title: "Adam-ondi-Ahman",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0500-come-thou-glorious-day-of-promise",
        hymnNo: "50",
        isRestricted: false,
        title: "Come, Thou Glorious Day of Promise",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0510-sons-of-michael-he-approaches",
        hymnNo: "51",
        isRestricted: false,
        title: "Sons of Michael, He Approaches",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0520-the-day-dawn-is-breaking",
        hymnNo: "52",
        isRestricted: false,
        title: "The Day Dawn Is Breaking",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0530-let-earths-inhabitants-rejoice",
        hymnNo: "53",
        isRestricted: false,
        title: "Let Earth's Inhabitants Rejoice",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0540-behold-the-mountain-of-the-lord",
        hymnNo: "54",
        isRestricted: false,
        title: "Behold, the Mountain of the Lord",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0550-lo-the-mighty-god-appearing",
        hymnNo: "55",
        isRestricted: false,
        title: "Lo, the Mighty God Appearing!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0560-softly-beams-the-sacred-dawning",
        hymnNo: "56",
        isRestricted: false,
        title: "Softly Beams the Sacred Dawning",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0570-were-not-ashamed-to-own-our-lord",
        hymnNo: "57",
        isRestricted: false,
        title: "We're Not Ashamed to Own Our Lord",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0580-come-ye-children-of-the-lord",
        hymnNo: "58",
        isRestricted: false,
        title: "Come, Ye Children of the Lord",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0590-come-o-thou-king-of-kings",
        hymnNo: "59",
        isRestricted: false,
        title: "Come, O Thou King of Kings",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0600-battle-hymn-of-the-republic",
        hymnNo: "60",
        isRestricted: false,
        title: "Battle Hymn of the Republic",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0610-raise-your-voices-to-the-lord",
        hymnNo: "61",
        isRestricted: false,
        title: "Raise Your Voices to the Lord",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0620-all-creatures-of-our-god-and-king",
        hymnNo: "62",
        isRestricted: false,
        title: "All Creatures of Our God and King",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0630-great-king-of-heaven",
        hymnNo: "63",
        isRestricted: false,
        title: "Great King of Heaven",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0640-on-this-day-of-joy-and-gladness",
        hymnNo: "64",
        isRestricted: false,
        title: "On This Day of Joy and Gladness",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0650-come-all-ye-saints-who-dwell-on-earth",
        hymnNo: "65",
        isRestricted: false,
        title: "Come, All Ye Saints Who Dwell on Earth",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0660-rejoice-the-lord-is-king",
        hymnNo: "66",
        isRestricted: false,
        title: "Rejoice, the Lord Is King!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0670-glory-to-god-on-high",
        hymnNo: "67",
        isRestricted: false,
        title: "Glory to God on High",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0680-a-mighty-fortress-is-our-god",
        hymnNo: "68",
        isRestricted: false,
        title: "A Mighty Fortress Is Our God",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0690-all-glory-laud-and-honor",
        hymnNo: "69",
        isRestricted: false,
        title: "All Glory, Laud, and Honor",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0700-sing-praise-to-him",
        hymnNo: "70",
        isRestricted: false,
        title: "Sing Praise to Him",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0710-with-songs-of-praise",
        hymnNo: "71",
        isRestricted: false,
        title: "With Songs of Praise",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0720-praise-to-the-lord-the-almighty",
        hymnNo: "72",
        isRestricted: false,
        title: "Praise to the Lord, the Almighty",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0730-praise-the-lord-with-heart-and-voice",
        hymnNo: "73",
        isRestricted: false,
        title: "Praise the Lord with Heart and Voice",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0740-praise-ye-the-lord",
        hymnNo: "74",
        isRestricted: false,
        title: "Praise Ye the Lord",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0750-in-hymns-of-praise",
        hymnNo: "75",
        isRestricted: false,
        title: "In Hymns of Praise",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0760-god-of-our-fathers-we-come-unto-thee",
        hymnNo: "76",
        isRestricted: false,
        title: "God of Our Fathers, We Come unto Thee",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0770-great-is-the-lord",
        hymnNo: "77",
        isRestricted: false,
        title: "Great Is the Lord",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0780-god-of-our-fathers-whose-almighty-hand",
        hymnNo: "78",
        isRestricted: false,
        title: "God of Our Fathers, Whose Almighty Hand",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0790-with-all-the-power-of-heart-and-tongue",
        hymnNo: "79",
        isRestricted: false,
        title: "With All the Power of Heart and Tongue",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0800-god-of-our-fathers-known-of-old",
        hymnNo: "80",
        isRestricted: false,
        title: "God of Our Fathers, Known of Old",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0810-press-forward-saints",
        hymnNo: "81",
        isRestricted: false,
        title: "Press Forward, Saints",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0820-for-all-the-saints",
        hymnNo: "82",
        isRestricted: false,
        title: "For All the Saints",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0830-guide-us-o-thou-great-jehovah",
        hymnNo: "83",
        isRestricted: false,
        title: "Guide Us, O Thou Great Jehovah",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0840-faith-of-our-fathers",
        hymnNo: "84",
        isRestricted: false,
        title: "Faith of Our Fathers",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0850-how-firm-a-foundation",
        hymnNo: "85",
        isRestricted: false,
        title: "How Firm a Foundation",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0860-how-great-thou-art",
        hymnNo: "86",
        isRestricted: false,
        title: "How Great Thou Art",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0870-god-is-love",
        hymnNo: "87",
        isRestricted: false,
        title: "God Is Love",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0880-great-god-attend-while-zion-sings",
        hymnNo: "88",
        isRestricted: false,
        title: "Great God, Attend While Zion Sings",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0890-the-lord-is-my-light",
        hymnNo: "89",
        isRestricted: false,
        title: "The Lord Is My Light",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0900-from-all-that-dwell-below-the-skies",
        hymnNo: "90",
        isRestricted: false,
        title: "From All That Dwell below the Skies",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0910-father-thy-children-to-thee-now-raise",
        hymnNo: "91",
        isRestricted: false,
        title: "Father, Thy Children to Thee Now Raise",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0920-for-the-beauty-of-the-earth",
        hymnNo: "92",
        isRestricted: false,
        title: "For the Beauty of the Earth",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0930-prayer-of-thanksgiving",
        hymnNo: "93",
        isRestricted: false,
        title: "Prayer of Thanksgiving",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0940-come-ye-thankful-people",
        hymnNo: "94",
        isRestricted: false,
        title: "Come, Ye Thankful People",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0950-now-thank-we-all-our-god",
        hymnNo: "95",
        isRestricted: false,
        title: "Now Thank We All Our God",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0960-dearest-children-god-is-near-you",
        hymnNo: "96",
        isRestricted: false,
        title: "Dearest Children, God Is Near You",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0970-lead-kindly-light",
        hymnNo: "97",
        isRestricted: false,
        title: "Lead, Kindly Light",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0980-i-need-thee-every-hour",
        hymnNo: "98",
        isRestricted: false,
        title: "I Need Thee Every Hour",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "0990-nearer-dear-savior-to-thee",
        hymnNo: "99",
        isRestricted: false,
        title: "Nearer, Dear Savior, to Thee",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1000-nearer-my-god-to-thee",
        hymnNo: "100",
        isRestricted: false,
        title: "Nearer, My God, to Thee",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1010-guide-me-to-thee",
        hymnNo: "101",
        isRestricted: false,
        title: "Guide Me to Thee",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1020-jesus-lover-of-my-soul",
        hymnNo: "102",
        isRestricted: false,
        title: "Jesus, Lover of My Soul",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1030-precious-savior-dear-redeemer",
        hymnNo: "103",
        isRestricted: false,
        title: "Precious Savior, Dear Redeemer",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1040-jesus-savior-pilot-me",
        hymnNo: "104",
        isRestricted: false,
        title: "Jesus, Savior, Pilot Me",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1050-master-the-tempest-is-raging",
        hymnNo: "105",
        isRestricted: false,
        title: "Master, the Tempest Is Raging",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1060-god-speed-the-right",
        hymnNo: "106",
        isRestricted: false,
        title: "God Speed the Right",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1070-lord-accept-our-true-devotion",
        hymnNo: "107",
        isRestricted: false,
        title: "Lord, Accept Our True Devotion",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1080-the-lord-is-my-shepherd",
        hymnNo: "108",
        isRestricted: false,
        title: "The Lord Is My Shepherd",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1090-the-lord-my-pasture-will-prepare",
        hymnNo: "109",
        isRestricted: false,
        title: "The Lord My Pasture Will Prepare",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1100-cast-thy-burden-upon-the-lord",
        hymnNo: "110",
        isRestricted: false,
        title: "Cast Thy Burden upon the Lord",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1110-rock-of-ages",
        hymnNo: "111",
        isRestricted: false,
        title: "Rock of Ages",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1120-savior-redeemer-of-my-soul",
        hymnNo: "112",
        isRestricted: false,
        title: "Savior, Redeemer of My Soul",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1130-our-saviors-love",
        hymnNo: "113",
        isRestricted: false,
        title: "Our Savior's Love",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1140-come-unto-him",
        hymnNo: "114",
        isRestricted: false,
        title: "Come unto Him",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1150-come-ye-disconsolate",
        hymnNo: "115",
        isRestricted: false,
        title: "Come, Ye Disconsolate",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1160-come-follow-me",
        hymnNo: "116",
        isRestricted: false,
        title: "Come, Follow Me",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1170-come-unto-jesus",
        hymnNo: "117",
        isRestricted: false,
        title: "Come unto Jesus",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1180-ye-simple-souls-who-stray",
        hymnNo: "118",
        isRestricted: false,
        title: "Ye Simple Souls Who Stray",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1190-come-we-that-love-the-lord",
        hymnNo: "119",
        isRestricted: false,
        title: "Come, We That Love the Lord",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1200-lean-on-my-ample-arm",
        hymnNo: "120",
        isRestricted: false,
        title: "Lean on My Ample Arm",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1210-im-a-pilgrim-im-a-stranger",
        hymnNo: "121",
        isRestricted: false,
        title: "I'm a Pilgrim, I'm a Stranger",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1220-though-deepening-trials",
        hymnNo: "122",
        isRestricted: false,
        title: "Though Deepening Trials",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1230-oh-may-my-soul-commune-with-thee",
        hymnNo: "123",
        isRestricted: false,
        title: "Oh, May My Soul Commune with Thee",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1240-be-still-my-soul",
        hymnNo: "124",
        isRestricted: false,
        title: "Be Still, My Soul",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1250-how-gentle-gods-commands",
        hymnNo: "125",
        isRestricted: false,
        title: "How Gentle God's Commands",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1260-how-long-o-lord-most-holy-and-true",
        hymnNo: "126",
        isRestricted: false,
        title: "How Long, O Lord Most Holy and True",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1270-does-the-journey-seem-long",
        hymnNo: "127",
        isRestricted: false,
        title: "Does the Journey Seem Long?",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1280-when-faith-endures",
        hymnNo: "128",
        isRestricted: false,
        title: "When Faith Endures",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1290-where-can-i-turn-for-peace",
        hymnNo: "129",
        isRestricted: false,
        title: "Where Can I Turn for Peace?",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1300-be-thou-humble",
        hymnNo: "130",
        isRestricted: false,
        title: "Be Thou Humble",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1310-more-holiness-give-me",
        hymnNo: "131",
        isRestricted: false,
        title: "More Holiness Give Me",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1320-god-is-in-his-holy-temple",
        hymnNo: "132",
        isRestricted: false,
        title: "God Is in His Holy Temple",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1330-father-in-heaven",
        hymnNo: "133",
        isRestricted: false,
        title: "Father in Heaven",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1340-i-believe-in-christ",
        hymnNo: "134",
        isRestricted: false,
        title: "I Believe in Christ",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1350-my-redeemer-lives",
        hymnNo: "135",
        isRestricted: false,
        title: "My Redeemer Lives",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1360-i-know-that-my-redeemer-lives",
        hymnNo: "136",
        isRestricted: false,
        title: "I Know That My Redeemer Lives",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1370-testimony",
        hymnNo: "137",
        isRestricted: false,
        title: "Testimony",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1380-bless-our-fast-we-pray",
        hymnNo: "138",
        isRestricted: false,
        title: "Bless Our Fast, We Pray",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1390-in-fasting-we-approach-thee",
        hymnNo: "139",
        isRestricted: false,
        title: "In Fasting We Approach Thee",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1400-did-you-think-to-pray",
        hymnNo: "140",
        isRestricted: false,
        title: "Did You Think to Pray?",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1410-jesus-the-very-thought-of-thee",
        hymnNo: "141",
        isRestricted: false,
        title: "Jesus, the Very Thought of Thee",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1420-sweet-hour-of-prayer",
        hymnNo: "142",
        isRestricted: false,
        title: "Sweet Hour of Prayer",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1430-let-the-holy-spirit-guide",
        hymnNo: "143",
        isRestricted: false,
        title: "Let the Holy Spirit Guide",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1440-secret-prayer",
        hymnNo: "144",
        isRestricted: false,
        title: "Secret Prayer",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1450-prayer-is-the-souls-sincere-desire",
        hymnNo: "145",
        isRestricted: false,
        title: "Prayer Is the Soul's Sincere Desire",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1460-gently-raise-the-sacred-strain",
        hymnNo: "146",
        isRestricted: false,
        title: "Gently Raise the Sacred Strain",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1470-sweet-is-the-work",
        hymnNo: "147",
        isRestricted: false,
        title: "Sweet Is the Work",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1480-sabbath-day",
        hymnNo: "148",
        isRestricted: false,
        title: "Sabbath Day",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1490-as-the-dew-from-heaven-distilling",
        hymnNo: "149",
        isRestricted: false,
        title: "As the Dew from Heaven Distilling",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1500-o-thou-kind-and-gracious-father",
        hymnNo: "150",
        isRestricted: false,
        title: "O Thou Kind and Gracious Father",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1510-we-meet-dear-lord",
        hymnNo: "151",
        isRestricted: false,
        title: "We Meet, Dear Lord",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1520-god-be-with-you-till-we-meet-again",
        hymnNo: "152",
        isRestricted: false,
        title: "God Be with You Till We Meet Again",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1530-lord-we-ask-thee-ere-we-part",
        hymnNo: "153",
        isRestricted: false,
        title: "Lord, We Ask Thee Ere We Part",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1540-father-this-hour-has-been-one-of-joy",
        hymnNo: "154",
        isRestricted: false,
        title: "Father, This Hour Has Been One of Joy",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1550-we-have-partaken-of-thy-love",
        hymnNo: "155",
        isRestricted: false,
        title: "We Have Partaken of Thy Love",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1560-sing-we-now-at-parting",
        hymnNo: "156",
        isRestricted: false,
        title: "Sing We Now at Parting",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1570-thy-spirit-lord-has-stirred-our-souls",
        hymnNo: "157",
        isRestricted: false,
        title: "Thy Spirit, Lord, Has Stirred Our Souls",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1580-before-thee-lord-i-bow-my-head",
        hymnNo: "158",
        isRestricted: false,
        title: "Before Thee, Lord, I Bow My Head",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1590-now-the-day-is-over",
        hymnNo: "159",
        isRestricted: false,
        title: "Now the Day Is Over",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1600-softly-now-the-light-of-day",
        hymnNo: "160",
        isRestricted: false,
        title: "Softly Now the Light of Day",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1610-the-lord-be-with-us",
        hymnNo: "161",
        isRestricted: false,
        title: "The Lord Be with Us",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1620-lord-we-come-before-thee-now",
        hymnNo: "162",
        isRestricted: false,
        title: "Lord, We Come before Thee Now",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1630-lord-dismiss-us-with-thy-blessing",
        hymnNo: "163",
        isRestricted: false,
        title: "Lord, Dismiss Us with Thy Blessing",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1640-great-god-to-thee-my-evening-song",
        hymnNo: "164",
        isRestricted: false,
        title: "Great God, to Thee My Evening Song",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1650-abide-with-me;-tis-eventide",
        hymnNo: "165",
        isRestricted: false,
        title: "Abide with Me; 'Tis Eventide",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1660-abide-with-me",
        hymnNo: "166",
        isRestricted: false,
        title: "Abide with Me!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1670-come-let-us-sing-an-evening-hymn",
        hymnNo: "167",
        isRestricted: false,
        title: "Come, Let Us Sing an Evening Hymn",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1680-as-the-shadows-fall",
        hymnNo: "168",
        isRestricted: false,
        title: "As the Shadows Fall",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1690-as-now-we-take-the-sacrament",
        hymnNo: "169",
        isRestricted: false,
        title: "As Now We Take the Sacrament",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1700-god-our-father-hear-us-pray",
        hymnNo: "170",
        isRestricted: false,
        title: "God, Our Father, Hear Us Pray",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1710-with-humble-heart",
        hymnNo: "171",
        isRestricted: false,
        title: "With Humble Heart",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1720-in-humility-our-savior",
        hymnNo: "172",
        isRestricted: false,
        title: "In Humility, Our Savior",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1730-while-of-these-emblems-we-partake-saul",
        hymnNo: "173",
        isRestricted: false,
        title: "While of These Emblems We Partake (SAUL)",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1740-while-of-these-emblems-we-partake-aeolian",
        hymnNo: "174",
        isRestricted: false,
        title: "While of These Emblems We Partake (AEOLIAN)",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1750-o-god-the-eternal-father",
        hymnNo: "175",
        isRestricted: false,
        title: "O God, the Eternal Father",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1760-tis-sweet-to-sing-the-matchless-love-meredith",
        hymnNo: "176",
        isRestricted: false,
        title: "'Tis Sweet to Sing the Matchless Love (MEREDITH)",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1770-tis-sweet-to-sing-the-matchless-love-hancock",
        hymnNo: "177",
        isRestricted: false,
        title: "'Tis Sweet to Sing the Matchless Love (HANCOCK)",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1780-o-lord-of-hosts",
        hymnNo: "178",
        isRestricted: false,
        title: "O Lord of Hosts",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1790-again-our-dear-redeeming-lord",
        hymnNo: "179",
        isRestricted: false,
        title: "Again, Our Dear Redeeming Lord",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1800-father-in-heaven-we-do-believe",
        hymnNo: "180",
        isRestricted: false,
        title: "Father in Heaven, We Do Believe",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1810-jesus-of-nazareth-savior-and-king",
        hymnNo: "181",
        isRestricted: false,
        title: "Jesus of Nazareth, Savior and King",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1820-well-sing-all-hail-to-jesus-name",
        hymnNo: "182",
        isRestricted: false,
        title: "We'll Sing All Hail to Jesus' Name",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1830-in-remembrance-of-thy-suffering",
        hymnNo: "183",
        isRestricted: false,
        title: "In Remembrance of Thy Suffering",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1840-upon-the-cross-of-calvary",
        hymnNo: "184",
        isRestricted: false,
        title: "Upon the Cross of Calvary",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1850-reverently-and-meekly-now",
        hymnNo: "185",
        isRestricted: false,
        title: "Reverently and Meekly Now",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1860-again-we-meet-around-the-board",
        hymnNo: "186",
        isRestricted: false,
        title: "Again We Meet around the Board",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1870-god-loved-us-so-he-sent-his-son",
        hymnNo: "187",
        isRestricted: false,
        title: "God Loved Us, So He Sent His Son",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1880-thy-will-o-lord-be-done",
        hymnNo: "188",
        isRestricted: false,
        title: "Thy Will, O Lord, Be Done",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1890-o-thou-before-the-world-began",
        hymnNo: "189",
        isRestricted: false,
        title: "O Thou, Before the World Began",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1900-in-memory-of-the-crucified",
        hymnNo: "190",
        isRestricted: false,
        title: "In Memory of the Crucified",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1910-behold-the-great-redeemer-die",
        hymnNo: "191",
        isRestricted: false,
        title: "Behold the Great Redeemer Die",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1920-he-died-the-great-redeemer-died",
        hymnNo: "192",
        isRestricted: false,
        title: "He Died! The Great Redeemer Died",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1930-i-stand-all-amazed",
        hymnNo: "193",
        isRestricted: false,
        title: "I Stand All Amazed",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1940-there-is-a-green-hill-far-away",
        hymnNo: "194",
        isRestricted: false,
        title: "There Is a Green Hill Far Away",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1950-how-great-the-wisdom-and-the-love",
        hymnNo: "195",
        isRestricted: false,
        title: "How Great the Wisdom and the Love",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1960-jesus-once-of-humble-birth",
        hymnNo: "196",
        isRestricted: false,
        title: "Jesus, Once of Humble Birth",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1970-o-savior-thou-who-wearest-a-crown",
        hymnNo: "197",
        isRestricted: false,
        title: "O Savior, Thou Who Wearest a Crown",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1980-that-easter-morn",
        hymnNo: "198",
        isRestricted: false,
        title: "That Easter Morn",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "1990-he-is-risen",
        hymnNo: "199",
        isRestricted: false,
        title: "He Is Risen!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2000-christ-the-lord-is-risen-today",
        hymnNo: "200",
        isRestricted: false,
        title: "Christ the Lord Is Risen Today",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2010-joy-to-the-world",
        hymnNo: "201",
        isRestricted: false,
        title: "Joy to the World",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2020-oh-come-all-ye-faithful",
        hymnNo: "202",
        isRestricted: false,
        title: "Oh, Come, All Ye Faithful",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2030-angels-we-have-heard-on-high",
        hymnNo: "203",
        isRestricted: false,
        title: "Angels We Have Heard on High",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2040-silent-night",
        hymnNo: "204",
        isRestricted: false,
        title: "Silent Night",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2050-once-in-royal-davids-city",
        hymnNo: "205",
        isRestricted: false,
        title: "Once in Royal David's City",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2060-away-in-a-manger",
        hymnNo: "206",
        isRestricted: false,
        title: "Away in a Manger",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2070-it-came-upon-the-midnight-clear",
        hymnNo: "207",
        isRestricted: false,
        title: "It Came upon the Midnight Clear",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2080-o-little-town-of-bethlehem",
        hymnNo: "208",
        isRestricted: false,
        title: "O Little Town of Bethlehem",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2090-hark-the-herald-angels-sing",
        hymnNo: "209",
        isRestricted: false,
        title: "Hark! The Herald Angels Sing",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2100-with-wondering-awe",
        hymnNo: "210",
        isRestricted: false,
        title: "With Wondering Awe",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2110-while-shepherds-watched-their-flocks",
        hymnNo: "211",
        isRestricted: false,
        title: "While Shepherds Watched Their Flocks",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2120-far-far-away-on-judeas-plains",
        hymnNo: "212",
        isRestricted: false,
        title: "Far, Far Away on Judea's Plains",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2130-the-first-noel",
        hymnNo: "213",
        isRestricted: false,
        title: "The First Noel",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2140-i-heard-the-bells-on-christmas-day",
        hymnNo: "214",
        isRestricted: false,
        title: "I Heard the Bells on Christmas Day",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2150-ring-out-wild-bells",
        hymnNo: "215",
        isRestricted: false,
        title: "Ring Out, Wild Bells",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2160-we-are-sowing",
        hymnNo: "216",
        isRestricted: false,
        title: "We Are Sowing",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2170-come-let-us-anew",
        hymnNo: "217",
        isRestricted: false,
        title: "Come, Let Us Anew",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2180-we-give-thee-but-thine-own",
        hymnNo: "218",
        isRestricted: false,
        title: "We Give Thee But Thine Own",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2190-because-i-have-been-given-much",
        hymnNo: "219",
        isRestricted: false,
        title: "Because I Have Been Given Much",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2200-lord-i-would-follow-thee",
        hymnNo: "220",
        isRestricted: false,
        title: "Lord, I Would Follow Thee",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2210-dear-to-the-heart-of-the-shepherd",
        hymnNo: "221",
        isRestricted: false,
        title: "Dear to the Heart of the Shepherd",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2220-hear-thou-our-hymn-o-lord",
        hymnNo: "222",
        isRestricted: false,
        title: "Hear Thou Our Hymn, O Lord",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2230-have-i-done-any-good",
        hymnNo: "223",
        isRestricted: false,
        title: "Have I Done Any Good?",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2240-i-have-work-enough-to-do",
        hymnNo: "224",
        isRestricted: false,
        title: "I Have Work Enough to Do",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2250-we-are-marching-on-to-glory",
        hymnNo: "225",
        isRestricted: false,
        title: "We Are Marching On to Glory",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2260-improve-the-shining-moments",
        hymnNo: "226",
        isRestricted: false,
        title: "Improve the Shining Moments",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2270-there-is-sunshine-in-my-soul-today",
        hymnNo: "227",
        isRestricted: false,
        title: "There Is Sunshine in My Soul Today",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2280-you-can-make-the-pathway-bright",
        hymnNo: "228",
        isRestricted: false,
        title: "You Can Make the Pathway Bright",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2290-today-while-the-sun-shines",
        hymnNo: "229",
        isRestricted: false,
        title: "Today, While the Sun Shines",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2300-scatter-sunshine",
        hymnNo: "230",
        isRestricted: false,
        title: "Scatter Sunshine",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2310-father-cheer-our-souls-tonight",
        hymnNo: "231",
        isRestricted: false,
        title: "Father, Cheer Our Souls Tonight",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2320-let-us-oft-speak-kind-words",
        hymnNo: "232",
        isRestricted: false,
        title: "Let Us Oft Speak Kind Words",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2330-nay-speak-no-ill",
        hymnNo: "233",
        isRestricted: false,
        title: "Nay, Speak No Ill",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2340-jesus-mighty-king-in-zion",
        hymnNo: "234",
        isRestricted: false,
        title: "Jesus, Mighty King in Zion",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2350-should-you-feel-inclined-to-censure",
        hymnNo: "235",
        isRestricted: false,
        title: "Should You Feel Inclined to Censure",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2360-lord-accept-into-thy-kingdom",
        hymnNo: "236",
        isRestricted: false,
        title: "Lord, Accept into Thy Kingdom",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2370-do-what-is-right",
        hymnNo: "237",
        isRestricted: false,
        title: "Do What Is Right",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2380-behold-thy-sons-and-daughters-lord",
        hymnNo: "238",
        isRestricted: false,
        title: "Behold Thy Sons and Daughters, Lord",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2390-choose-the-right",
        hymnNo: "239",
        isRestricted: false,
        title: "Choose the Right",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2400-know-this-that-every-soul-is-free",
        hymnNo: "240",
        isRestricted: false,
        title: "Know This, That Every Soul Is Free",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2410-count-your-blessings",
        hymnNo: "241",
        isRestricted: false,
        title: "Count Your Blessings",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2420-praise-god-from-whom-all-blessings-flow",
        hymnNo: "242",
        isRestricted: false,
        title: "Praise God, from Whom All Blessings Flow",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2430-let-us-all-press-on",
        hymnNo: "243",
        isRestricted: false,
        title: "Let Us All Press On",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2440-come-along-come-along",
        hymnNo: "244",
        isRestricted: false,
        title: "Come Along, Come Along",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2450-this-house-we-dedicate-to-thee",
        hymnNo: "245",
        isRestricted: false,
        title: "This House We Dedicate to Thee",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2460-onward-christian-soldiers",
        hymnNo: "246",
        isRestricted: false,
        title: "Onward, Christian Soldiers",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2470-we-love-thy-house-o-god",
        hymnNo: "247",
        isRestricted: false,
        title: "We Love Thy House, O God",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2480-up-awake-ye-defenders-of-zion",
        hymnNo: "248",
        isRestricted: false,
        title: "Up, Awake, Ye Defenders of Zion",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2490-called-to-serve",
        hymnNo: "249",
        isRestricted: false,
        title: "Called to Serve",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2500-we-are-all-enlisted",
        hymnNo: "250",
        isRestricted: false,
        title: "We Are All Enlisted",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2510-behold-a-royal-army",
        hymnNo: "251",
        isRestricted: false,
        title: "Behold! A Royal Army",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2520-put-your-shoulder-to-the-wheel",
        hymnNo: "252",
        isRestricted: false,
        title: "Put Your Shoulder to the Wheel",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2530-like-ten-thousand-legions-marching",
        hymnNo: "253",
        isRestricted: false,
        title: "Like Ten Thousand Legions Marching",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2540-true-to-the-faith",
        hymnNo: "254",
        isRestricted: false,
        title: "True to the Faith",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2550-carry-on",
        hymnNo: "255",
        isRestricted: false,
        title: "Carry On",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2560-as-zions-youth-in-latter-days",
        hymnNo: "256",
        isRestricted: false,
        title: "As Zion's Youth in Latter Days",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2570-rejoice-a-glorious-sound-is-heard",
        hymnNo: "257",
        isRestricted: false,
        title: "Rejoice! A Glorious Sound Is Heard",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2580-o-thou-rock-of-our-salvation",
        hymnNo: "258",
        isRestricted: false,
        title: "O Thou Rock of Our Salvation",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2590-hope-of-israel",
        hymnNo: "259",
        isRestricted: false,
        title: "Hope of Israel",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2600-whos-on-the-lords-side",
        hymnNo: "260",
        isRestricted: false,
        title: "Who's on the Lord's Side?",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2610-thy-servants-are-prepared",
        hymnNo: "261",
        isRestricted: false,
        title: "Thy Servants Are Prepared",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2620-go-ye-messengers-of-glory",
        hymnNo: "262",
        isRestricted: false,
        title: "Go, Ye Messengers of Glory",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2630-go-forth-with-faith",
        hymnNo: "263",
        isRestricted: false,
        title: "Go Forth with Faith",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2640-hark-all-ye-nations",
        hymnNo: "264",
        isRestricted: false,
        title: "Hark, All Ye Nations!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2650-arise-o-god-and-shine",
        hymnNo: "265",
        isRestricted: false,
        title: "Arise, O God, and Shine",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2660-the-time-is-far-spent",
        hymnNo: "266",
        isRestricted: false,
        title: "The Time Is Far Spent",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2670-how-wondrous-and-great",
        hymnNo: "267",
        isRestricted: false,
        title: "How Wondrous and Great",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2680-come-all-whose-souls-are-lighted",
        hymnNo: "268",
        isRestricted: false,
        title: "Come, All Whose Souls Are Lighted",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2690-jehovah-lord-of-heaven-and-earth",
        hymnNo: "269",
        isRestricted: false,
        title: "Jehovah, Lord of Heaven and Earth",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2700-ill-go-where-you-want-me-to-go",
        hymnNo: "270",
        isRestricted: false,
        title: "I'll Go Where You Want Me to Go",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2710-oh-holy-words-of-truth-and-love",
        hymnNo: "271",
        isRestricted: false,
        title: "Oh, Holy Words of Truth and Love",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2720-oh-say-what-is-truth",
        hymnNo: "272",
        isRestricted: false,
        title: "Oh Say, What Is Truth?",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2730-truth-reflects-upon-our-senses",
        hymnNo: "273",
        isRestricted: false,
        title: "Truth Reflects upon Our Senses",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2740-the-iron-rod",
        hymnNo: "274",
        isRestricted: false,
        title: "The Iron Rod",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2750-men-are-that-they-might-have-joy",
        hymnNo: "275",
        isRestricted: false,
        title: "Men Are That They Might Have Joy",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2760-come-away-to-the-sunday-school",
        hymnNo: "276",
        isRestricted: false,
        title: "Come Away to the Sunday School",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2770-as-i-search-the-holy-scriptures",
        hymnNo: "277",
        isRestricted: false,
        title: "As I Search the Holy Scriptures",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2780-thanks-for-the-sabbath-school",
        hymnNo: "278",
        isRestricted: false,
        title: "Thanks for the Sabbath School",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2790-thy-holy-word",
        hymnNo: "279",
        isRestricted: false,
        title: "Thy Holy Word",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2800-welcome-welcome-sabbath-morning",
        hymnNo: "280",
        isRestricted: false,
        title: "Welcome, Welcome, Sabbath Morning",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2810-help-me-teach-with-inspiration",
        hymnNo: "281",
        isRestricted: false,
        title: "Help Me Teach with Inspiration",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2820-we-meet-again-in-sabbath-school",
        hymnNo: "282",
        isRestricted: false,
        title: "We Meet Again in Sabbath School",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2830-the-glorious-gospel-light-has-shone",
        hymnNo: "283",
        isRestricted: false,
        title: "The Glorious Gospel Light Has Shone",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2840-if-you-could-hie-to-kolob",
        hymnNo: "284",
        isRestricted: false,
        title: "If You Could Hie to Kolob",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2850-god-moves-in-a-mysterious-way",
        hymnNo: "285",
        isRestricted: false,
        title: "God Moves in a Mysterious Way",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2860-oh-what-songs-of-the-heart",
        hymnNo: "286",
        isRestricted: false,
        title: "Oh, What Songs of the Heart",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2870-rise-ye-saints-and-temples-enter",
        hymnNo: "287",
        isRestricted: false,
        title: "Rise, Ye Saints, and Temples Enter",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2880-how-beautiful-thy-temples-lord",
        hymnNo: "288",
        isRestricted: false,
        title: "How Beautiful Thy Temples, Lord",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2890-holy-temples-on-mount-zion",
        hymnNo: "289",
        isRestricted: false,
        title: "Holy Temples on Mount Zion",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2900-rejoice-ye-saints-of-latter-days",
        hymnNo: "290",
        isRestricted: false,
        title: "Rejoice, Ye Saints of Latter Days",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2910-turn-your-hearts",
        hymnNo: "291",
        isRestricted: false,
        title: "Turn Your Hearts",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2920-o-my-father",
        hymnNo: "292",
        isRestricted: false,
        title: "O My Father",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2930-each-life-that-touches-ours-for-good",
        hymnNo: "293",
        isRestricted: false,
        title: "Each Life That Touches Ours for Good",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2940-love-at-home",
        hymnNo: "294",
        isRestricted: false,
        title: "Love at Home",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2950-o-love-that-glorifies-the-son",
        hymnNo: "295",
        isRestricted: false,
        title: "O Love That Glorifies the Son",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2960-our-father-by-whose-name",
        hymnNo: "296",
        isRestricted: false,
        title: "Our Father, by Whose Name",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2970-from-homes-of-saints-glad-songs-arise",
        hymnNo: "297",
        isRestricted: false,
        title: "From Homes of Saints Glad Songs Arise",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2980-home-can-be-a-heaven-on-earth",
        hymnNo: "298",
        isRestricted: false,
        title: "Home Can Be a Heaven on Earth",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "2990-children-of-our-heavenly-father",
        hymnNo: "299",
        isRestricted: false,
        title: "Children of Our Heavenly Father",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "3000-families-can-be-together-forever",
        hymnNo: "300",
        isRestricted: false,
        title: "Families Can Be Together Forever",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "3010-i-am-a-child-of-god",
        hymnNo: "301",
        isRestricted: false,
        title: "I Am a Child of God",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "3020-i-know-my-father-lives",
        hymnNo: "302",
        isRestricted: false,
        title: "I Know My Father Lives",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "3030-keep-the-commandments",
        hymnNo: "303",
        isRestricted: false,
        title: "Keep the Commandments",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "3040-teach-me-to-walk-in-the-light",
        hymnNo: "304",
        isRestricted: false,
        title: "Teach Me to Walk in the Light",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "3050-the-light-divine",
        hymnNo: "305",
        isRestricted: false,
        title: "The Light Divine",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "3060-gods-daily-care",
        hymnNo: "306",
        isRestricted: false,
        title: "God's Daily Care",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "3070-in-our-lovely-deseret",
        hymnNo: "307",
        isRestricted: false,
        title: "In Our Lovely Deseret",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "3080-love-one-another",
        hymnNo: "308",
        isRestricted: false,
        title: "Love One Another",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "3090-as-sisters-in-zion-women",
        hymnNo: "309",
        isRestricted: false,
        title: "As Sisters in Zion (Women)",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "3100-a-key-was-turned-in-latter-days-women",
        hymnNo: "310",
        isRestricted: false,
        title: "A Key Was Turned in Latter Days (Women)",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "3110-we-meet-again-as-sisters-women",
        hymnNo: "311",
        isRestricted: false,
        title: "We Meet Again as Sisters (Women)",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "3120-we-ever-pray-for-thee-women",
        hymnNo: "312",
        isRestricted: false,
        title: "We Ever Pray for Thee (Women)",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "3130-god-is-love-women",
        hymnNo: "313",
        isRestricted: false,
        title: "God Is Love (Women)",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "3140-how-gentle-gods-commands-women",
        hymnNo: "314",
        isRestricted: false,
        title: "How Gentle God's Commands (Women)",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "3150-jesus-the-very-thought-of-thee-women",
        hymnNo: "315",
        isRestricted: false,
        title: "Jesus, the Very Thought of Thee (Women)",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "3160-the-lord-is-my-shepherd-women",
        hymnNo: "316",
        isRestricted: false,
        title: "The Lord Is My Shepherd (Women)",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "3170-sweet-is-the-work-women",
        hymnNo: "317",
        isRestricted: false,
        title: "Sweet Is the Work (Women)",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "3180-love-at-home-women",
        hymnNo: "318",
        isRestricted: false,
        title: "Love at Home (Women)",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "3190-ye-elders-of-israel-men",
        hymnNo: "319",
        isRestricted: false,
        title: "Ye Elders of Israel (Men)",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "3200-the-priesthood-of-our-lord-men",
        hymnNo: "320",
        isRestricted: false,
        title: "The Priesthood of Our Lord (Men)",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "3210-ye-who-are-called-to-labor-men",
        hymnNo: "321",
        isRestricted: false,
        title: "Ye Who Are Called to Labor (Men)",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "3220-come-all-ye-sons-of-god-men",
        hymnNo: "322",
        isRestricted: false,
        title: "Come, All Ye Sons of God (Men)",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "3230-rise-up-o-men-of-god-mens-choir",
        hymnNo: "323",
        isRestricted: false,
        title: "Rise Up, O Men of God (Men's Choir)",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "3240-rise-up-o-men-of-god-men",
        hymnNo: "324",
        isRestricted: false,
        title: "Rise Up, O Men of God (Men)",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "3250-see-the-mighty-priesthood-gathered-mens-choir",
        hymnNo: "325",
        isRestricted: false,
        title: "See the Mighty Priesthood Gathered (Men's Choir)",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "3260-come-come-ye-saints-mens-choir",
        hymnNo: "326",
        isRestricted: false,
        title: "Come, Come, Ye Saints (Men's Choir)",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "3270-go-ye-messengers-of-heaven-mens-choir",
        hymnNo: "327",
        isRestricted: false,
        title: "Go, Ye Messengers of Heaven (Men's Choir)",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "3280-an-angel-from-on-high-mens-choir",
        hymnNo: "328",
        isRestricted: false,
        title: "An Angel from on High (Men's Choir)",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "3290-thy-servants-are-prepared-mens-choir",
        hymnNo: "329",
        isRestricted: false,
        title: "Thy Servants Are Prepared (Men's Choir)",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "3300-see-the-mighty-angel-flying-mens-choir",
        hymnNo: "330",
        isRestricted: false,
        title: "See, the Mighty Angel Flying (Men's Choir)",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "3310-oh-say-what-is-truth-mens-choir",
        hymnNo: "331",
        isRestricted: false,
        title: "Oh Say, What Is Truth? (Men's Choir)",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "3320-come-o-thou-king-of-kings-mens-choir",
        hymnNo: "332",
        isRestricted: false,
        title: "Come, O Thou King of Kings (Men's Choir)",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "3330-high-on-the-mountain-top-mens-choir",
        hymnNo: "333",
        isRestricted: false,
        title: "High on the Mountain Top (Men's Choir)",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "3340-i-need-thee-every-hour-mens-choir",
        hymnNo: "334",
        isRestricted: false,
        title: "I Need Thee Every Hour (Men's Choir)",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "3350-brightly-beams-our-fathers-mercy-mens-choir",
        hymnNo: "335",
        isRestricted: false,
        title: "Brightly Beams Our Father's Mercy (Men's Choir)",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "3360-school-thy-feelings-mens-choir",
        hymnNo: "336",
        isRestricted: false,
        title: "School Thy Feelings (Men's Choir)",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "3370-o-home-beloved-mens-choir",
        hymnNo: "337",
        isRestricted: false,
        title: "O Home Beloved (Men's Choir)",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "3380-america-the-beautiful",
        hymnNo: "338",
        isRestricted: false,
        title: "America the Beautiful",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "3390-my-country-tis-of-thee",
        hymnNo: "339",
        isRestricted: false,
        title: "My Country, 'Tis of Thee",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "3400-the-star-spangled-banner",
        hymnNo: "340",
        isRestricted: false,
        title: "The Star-Spangled Banner",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        href: "3410-god-save-the-king",
        hymnNo: "341",
        isRestricted: false,
        title: "God Save the King",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Hymns', null, {});
  }
};
