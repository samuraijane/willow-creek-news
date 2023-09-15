export interface SacramentMeetingProps {
  admins: Admin[];
  date: string;
  programItems: ProgramItem[];
  unitName: string;
}

interface Admin {
  id: string;
  name: string;
  role: AdminRole;
}

// TODO separate the optional keys and create new unions (couldn't figure this out)
interface ProgramItem {
  pair?: string[]
  subtype: ProgramItemSubtype;
  type: ProgramItemType;
  value?: string;
}

enum AdminRole {
  ACCOMPANIST = "Accompanist",
  CONDUCTING = "Conducting",
  MUSIC_LEADER = "Music Leader",
  PRESIDING = "Presiding"
}

enum ProgramItemSubtype {
  MUSIC = "music",
  PRAYER = "prayer",
  SINGLE = "single",
  SPEAKER = "speaker"
}

export enum ProgramItemType {
  PAIR = "pair",
  STATIC = "static"
}