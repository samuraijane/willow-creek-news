import { useState } from 'react';
import SVGImage, { FACEBOOK, GITHUB, GOOGLE, INSTAGRAM, TWITTER } from '../../components/svg';
import './login.scss';

const Login = (): JSX.Element => {

  return (
    <div className="y-wrap y-wrap--inner">
      <div className="login-block">
        <SVGImage className="svg__login" type={FACEBOOK} />
        <a href="/auth/github">
          <SVGImage className="svg__login" type={GITHUB} />
        </a>
        <SVGImage className="svg__login" type={GOOGLE} />
        <SVGImage className="svg__login" type={INSTAGRAM} />
        <SVGImage className="svg__login" type={TWITTER} />
      </div>
    </div>
  );
};

export default Login;
