import { simpleRandomInt } from "../../helpers/simpleRandomInt";
import { SacramentMeetingProps } from "./sacrament-meeting-types";
import { ProgramItemType } from "./sacrament-meeting-types";
import "./sacrament-meeting.scss";

export const SacramentMeeting = ({
  admins,
  date,
  programItems,
  unitName
}: SacramentMeetingProps) => {

  const _admins = admins.map(admin => (
    <div className="s-mtg__admin" key={admin.id}>
      <span>{admin.role}</span>
      <span>{admin.name}</span>
    </div>
  ));

  const _programItems = programItems.map(programItem => {
    const { type } = programItem;
    const className = type === ProgramItemType.PAIR ? "pair" : "static";
    const id = simpleRandomInt();
    
    return (
      <div className={`s-mtg__row s-mtg__${className}`} key={id}>
        {type === ProgramItemType.PAIR && (
          <>
            <span>{programItem.pair?.length && programItem.pair[0]}</span>
            <span>{programItem.pair?.length && programItem.pair[1]}</span>
          </>
        )}
        {type === ProgramItemType.STATIC && <>{programItem?.value}</>}
      </div>
    );


  });

  return (
    <div className="s-mtg">
      <h2>{`${unitName} Sacrament Meeting`}</h2>
      <p className="s-mtg__row s-mtg__date">{date}</p>
      <div className="s-mtg__row s-mtg__admins">
        {_admins}
      </div>
      {_programItems}
    </div>
  );
}
