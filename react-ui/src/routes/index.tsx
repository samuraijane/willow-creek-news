import { Route } from "react-router-dom";
import Admin from "./admin/admin";
import Calendars from "./calendars/calendars";
import Contact from "./contact/contact";
import FamilyHistory from "./family-history/familyHistory";
import Login from './login/login';
import Landing from "./landing/landing";
import MissionStatement from "./mission-statement/missionStatement";
import Profile from "./profile/profile";
import SacramentMeeting from "./sacrament-meeting/sacramentMeeting";
import Service from "./service/service";
import TempleAndFamilyHistory from "./temple-and-family-history/templeAndFamilyHistory";
import WardMission from "./ward-mission/wardMission";
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
        path="/admin"
        render={() => <Admin />}
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
        path="/login"
        render={() => <Login />}
      />
      <Route
        exact={true}
        path="/mission-statement"
        render={() => <MissionStatement />}
      />
      <Route
        path="/profile"
        render={() => <Profile />}
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
        path="/temple-and-family-history"
        render={() => <TempleAndFamilyHistory />}
      />
      <Route
        exact={true}
        path="/ward-mission"
        render={() => <WardMission />}
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