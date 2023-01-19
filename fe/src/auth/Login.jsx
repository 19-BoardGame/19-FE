import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const userid = useRef();
  const password = useRef();
  const [errorMessage, setErrorMessage] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    if (userid.current.value === "") {
      setErrorMessage("아이디를 입력해주세요.");
      userid.current.focus();
      return;
    } else if (password.current.value === "") {
      setErrorMessage("비밀번호를 입력해주세요.");
      password.current.focus();
      return;
    }
    console.log(userid.current.value);
    console.log(password.current.value);
  };

  //   const signIn = (e) => {
  //     e.preventDefault();

  //     if (userid.current.value === "") {
  //       alert("아이디를 입력해주세요.");
  //       return;
  //     } else if (password.current.value === "") {
  //       alert("비밀번호를 입력해주세요.");
  //       return;
  //     }
  //     axios
  //       .post("/api/signin", {
  //         id: userid.current.value,
  //         password: userid.current.value,
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
        <button className="flex flex-col justify-center items-center bg-green  w-56 h-7 mt-2 cursor-pointer" onClick={signIn}>
          <p className="text-center text-gray-50 font-semibold text-sm">로그인</p>
        </button>
      </form>
      <p className={errorMessage === "" ? "hidden" : "mt-1 text-xs text-red-500"}>{errorMessage}</p>
      <p className="mt-2 text-stone-400 text-sm">
        아직 회원이 아니세요?{" "}
        <Link className="text-sky font-semibold" to="/signup">
          회원가입
        </Link>
      </p>
    </div>
  );
}
