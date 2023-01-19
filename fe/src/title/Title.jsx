import React from "react";
import { useNavigate } from "react-router-dom";

export default function Title() {
  const navigate = useNavigate();

  const toLogin = () => {
    navigate("/login");
  };

  const toSignUp = () => {
    navigate("/signup");
  };

  return (
    <div>
      <div className="flex flex-col items-center w-80 h-screen bg-neutral-300">
        <img className="relative top-12" src="public_assets/titleIcon.png" alt="주사위 이미지" width="70%" />
        <div className="relative top-24">
          <div className="flex flex-col justify-center bg-gray-50 drop-shadow-default rounded-lg w-60 h-9 cursor-pointer" onClick={toLogin}>
            <p className="text-center text-green font-semibold">로그인</p>
          </div>
          <div className="flex flex-col justify-center bg-green drop-shadow-default rounded-lg w-60 h-9 mt-4 cursor-pointer" onClick={toSignUp}>
            <p className="text-center text-gray-50 font-semibold">1-9 보드게임 회원가입</p>
          </div>
        </div>
      </div>
      <p className="absolute top-64 left-1/3 font-semibold text-9xl">Board Game Post!!</p>
    </div>
  );
}
