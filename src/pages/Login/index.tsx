import * as React from 'react';

import './Login.css';
import loginBanner from '../../assets/login-banner.png';
import { StyledButton } from '../../components';
import makeRequest from '../../utils/makeRequest';
import { LOGIN } from '../../constants/apiEndpoints';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = (): JSX.Element => {
  const [emailText, setEmailText] = React.useState<string>();
  const [passwordText, setPasswordText] = React.useState<string>();

  const navigate = useNavigate();

  const handleLogin = (e: any) => {
    e.preventDefault();

    makeRequest(LOGIN, {
      data: {
        username: emailText,
        password: passwordText
      },
    }, false).then((data) => {
      if (data.jwt) {
        localStorage.setItem('jwt', data.jwt);
        navigate('/contentTypes') 
      }
    }).catch((err) => {
      alert('Could not login!');
      console.error(err);
    })
  };

  return <>
    <div className="relative flex flex-row min-h-screen max-h-screen">
      <div className="w-2/3 flex justify-center items-center bg-[#edefff]">
        <img src={loginBanner} className="h-2/3" />
      </div>

      <div className="font-semibold absolute top-20 left-16 text-4xl">
        Design APIs fast,<br />
        <div className="mt-5">Manage content easily.</div>
      </div>

      <div className="w-1/3 bg-slate-black flex flex-col justify-center items-center text-white">
        <div className="text-2xl font-semibold absolute top-20">
          <div className="mt-16">Login to your CMS+ account</div>
        </div>
        <form className="flex flex-col w-1/2 mt-20 items-center" onSubmit={handleLogin}>
          <div className="flex flex-col w-full">
            <label htmlFor="email" className="text-gray-400">Email</label>
            <input type="text" id="email" className="w-full mt-2 p-2 rounded-md text-black" 
              onChange={(e: any) => setEmailText(e.target.value)}
            />
          </div>

          <div className="flex flex-col w-full mt-6">
            <label htmlFor="password" className="text-gray-400">Password</label>
            <input type="password" id="password" className="w-full mt-2 p-2 rounded-md text-black" 
              onChange={(e: any) => setPasswordText(e.target.value)}
            />
          </div>

          <div className="w-full mt-10">
            <StyledButton type="submit" text="Login" className="w-full" />
          </div>

          <a href="#" className="mt-6 text-gray-400 underline">Forgot password?</a>
        </form>
      </div>
    </div>
  </>;
}

export default Login;
