import { useRef, useState } from "react";
import axios from "axios";

export default function SingUp() {
  const userid = useRef();
  const password = useRef();
  const repeatedPassword = useRef();
  const userName = useRef();
  const [errorMessage, setErrorMessage] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    if (userid.current.value === "") {
      setErrorMessage("아이디를 입력해주세요.");
      userid.current.focus();
      return;
    } else if (password.current.value === "") {
      setErrorMessage("비밀번호를 입력해주세요.");
      password.current.focus();
      return;
    } else if (repeatedPassword.current.value === "") {
      setErrorMessage("비밀번호 확인을 입력해주세요.");
      repeatedPassword.current.focus();
      return;
    } else if (userName.current.value === "") {
      setErrorMessage("닉네임을 입력해주세요.");
      userName.current.focus();
      return;
    }
    console.log(userid.current.value);
    console.log(password.current.value);
    console.log(repeatedPassword.current.value);
    console.log(userName.current.value);
  };

  //   const signUp = (e) => {
  //     e.preventDefault();
  //     if (userid.current.value === "") {
  //       setErrorMessage("아이디를 입력해주세요.");
  //       userid.current.focus();
  //       return;
  //     } else if (password.current.value === "") {
  //       setErrorMessage("비밀번호를 입력해주세요.");
  //       password.current.focus();
  //       return;
  //     } else if (repeatedPassword.current.value === "") {
  //       setErrorMessage("비밀번호 확인을 입력해주세요.");
  //       repeatedPassword.current.focus();
  //       return;
  //     } else if (userName.current.value === "") {
  //       setErrorMessage("닉네임을 입력해주세요.");
  //       userName.current.focus();
  //       return;
  //     }
  //     axios
  //       .post("/api/signup", {
  //         id: userid.current.value,
  //         password: password.current.value,
  //         username: userName.current.value,
  //       })
  //       .then((res) => {})
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  return (
    <div className="flex flex-col items-center">
      <img className="relative top-12" src="public_assets/titleIcon.png" alt="주사위 이미지" width="15%" />
      <form className="flex flex-col">
        <input className="relative mt-10 border border-border w-56 h-7 focus:outline-none text-sm px-3" type="text" placeholder="아이디" ref={userid} />
        <input className="relative mt-2 border border-border w-56 h-7 focus:outline-none text-sm px-3" type="password" placeholder="비밀번호" ref={password} />
        <input
          className="relative mt-2 border border-border w-56 h-7 focus:outline-none text-sm px-3"
          type="text"
          placeholder="비밀번호 확인"
          ref={repeatedPassword}
        />
        <input className="relative mt-2 border border-border w-56 h-7 focus:outline-none text-sm px-3" type="text" placeholder="닉네임" ref={userName} />
        <button className="flex flex-col justify-center items-center bg-green  w-56 h-7 mt-2 cursor-pointer" onClick={signUp}>
          <p className="text-center text-gray-50 font-semibold text-sm">회원가입</p>
        </button>
      </form>
      <p className={errorMessage === "" ? "hidden" : "mt-1 text-xs text-red-500"}>{errorMessage}</p>
    </div>
  );
}
