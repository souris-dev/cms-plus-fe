import * as React from 'react';

import './Login.css';
import loginBanner from '../../assets/login-banner.png';

const Login: React.FC = (): JSX.Element => {
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
        <form className="flex flex-col w-1/2 mt-20 items-center">
          <div className="flex flex-col w-full">
            <label htmlFor="email" className="text-gray-400">Email</label>
            <input type="text" id="email" className="w-full mt-2 p-2 rounded-md text-black" />
          </div>

          <div className="flex flex-col w-full mt-6">
            <label htmlFor="password" className="text-gray-400">Password</label>
            <input type="password" id="password" className="w-full mt-2 p-2 rounded-md text-black" />
          </div>

          <div className="w-full mt-10">
            <button type="submit" className="bg-gradient-to-r from-btn-start to-btn-end text-white w-full p-2 rounded-md">Login</button>
          </div>

          <a href="#" className="mt-6 text-gray-400 underline">Forgot password?</a>
        </form>
      </div>
    </div>
  </>;
}

export default Login;
