export default function Header() {
  return (
    <div className="flex flex-row justify-between items-center mx-52 my-10 font-bold ">
      <div className="flex flex-row items-center">
        <img
          src="public_assets/titleIcon.png"
          alt="주사위 이미지"
          width="32%"
        />
        <p className="text-sky text-2xl mx-6">1-9 보드게임</p>
      </div>
      <ul className="inline-block text-center text-lg">
        <li className="float-left pr-16 border-r">
          <p className="cursor-pointer">게임 후기</p>
        </li>
        <li className="float-left px-16">
          <p className="cursor-pointer">게임 모임</p>
        </li>
        <li className="float-left pl-16 border-l">
          <p className="cursor-pointer">자유게시판</p>
        </li>
      </ul>
      <div className="flex w-40 justify-end">
        <img
          className="cursor-pointer"
          src="public_assets/user.png"
          alt="유저 이미지"
          width="15%"
        />
      </div>
    </div>
  );
}
