import { Switch } from "react-router-dom";
import Routes from '../../routes';
import './main.scss';

const Main = (): JSX.Element => {
  return (
    <main className="y-push-down">
      <Switch>
        <Routes />
      </Switch>
    </main>
  );
};

export default Main;