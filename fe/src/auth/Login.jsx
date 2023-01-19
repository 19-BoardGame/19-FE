import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex flex-col items-center">
      <img className="relative top-12" src="public_assets/titleIcon.png" alt="주사위 이미지" width="15%" />
      <input className="relative mt-10 border border-border w-56 h-7 focus:outline-none text-sm px-3" type="text" placeholder="아이디" />
      <input className="relative mt-2 border border-border w-56 h-7 focus:outline-none text-sm px-3" type="password" placeholder="비밀번호" />
      <div className="flex flex-col justify-center bg-green  w-56 h-7 mt-2 cursor-pointer">
        <p className="text-center text-gray-50 font-semibold text-sm">로그인</p>
      </div>
      <p className="mt-2 text-stone-400 text-sm">
        아직 회원이 아니세요?{" "}
        <Link className="text-sky font-semibold" to="/signup">
          회원가입
        </Link>
      </p>
    </div>
  );
}
