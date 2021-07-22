import { Route } from "react-router-dom";
import Announcements from "./announcements/announcements";
import Calendars from "./calendars/calendars";
import Contact from "./contact/contact";
import FamilyHistory from "./family-history/familyHistory";
import Login from './login/login';
import Landing from "./landing/landing";
import MissionStatement from "./mission-statement/missionStatement";
import Missionaries from "./missionaries/missionaries";
import SacramentMeeting from "./sacrament-meeting/sacramentMeeting";
import Service from "./service/service";
import Temple from "./temple/temple";
import WorshipWithUs from "./worship-with-us/worshipWithUs";

const Routes = (): JSX.Element => {

  return (
    <>
      <Route
        exact={true}
        path="/"
        render={() => <Landing />}
      />
      <Route
        exact={true}
        path="/announcements"
        render={() => <Announcements />}
      />
      <Route
        exact={true}
        path="/calendars"
        render={() => <Calendars />}
      />
      <Route
        exact={true}
        path="/contact"
        render={() => <Contact />}
      />
      <Route
        exact={true}
        path="/family-history"
        render={() => <FamilyHistory />}
      />
      <Route
        exact={true}
        path="/login"
        render={() => <Login />}
      />
      <Route
        exact={true}
        path="/mission-statement"
        render={() => <MissionStatement />}
      />
      <Route
        exact={true}
        path="/missionaries"
        render={() => <Missionaries />}
      />
      <Route
        exact={true}
        path="/sacrament-meeting"
        render={() => <SacramentMeeting />}
      />
      <Route
        exact={true}
        path="/service"
        render={() => <Service />}
      />
      <Route
        exact={true}
        path="/temple"
        render={() => <Temple />}
      />
      <Route
        exact={true}
        path="/worship-with-us"
        render={() => <WorshipWithUs />}
      />
    </>
  );
};

export default Routes;