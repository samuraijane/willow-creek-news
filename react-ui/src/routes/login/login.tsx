import SVGImage, { FACEBOOK, GITHUB } from '../../components/svg';
import './login.scss';

const Login = (): JSX.Element => {

  return (
    <div className="y-wrap y-wrap--inner">
      <div className="login-block">
        <a href="/auth/github">
          <SVGImage className="svg__login" type={GITHUB} />
        </a>
        <a href="/auth/facebook">
          <SVGImage className="svg__login" type={FACEBOOK} />
        </a>
      </div>
    </div>
  );
};

export default Login;
