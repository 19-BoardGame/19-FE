import { BiSearchAlt2 } from "react-icons/bi";
import { useRef } from "react";

export default function Board({ postType }) {
  const searchString = useRef();

  const title = {
    0: "베스트 게시물",
    1: "게임 후기",
    2: "게임 모임",
    3: "자유게시판",
  };

  const search = (e) => {
    e.preventDefault();
    console.log(searchString.current.value);
  };

  return (
    <div className="mx-64 mb-12">
      <form>
        <input
          className="fixed border rounded-2xl right-64 top-48 w-56 py-1 pl-4 pr-8 focus:outline-none text-sm"
          type="text"
          placeholder="검색어를 입력하세요."
          ref={searchString}
        />
        <button
          className="fixed right-[262px] top-[197px] text-xl text-sky"
          onClick={search}
        >
          <BiSearchAlt2 />
        </button>
      </form>
      <p className="font-bold text-2xl">{title[postType]}</p>
      <div className="border-t-2 border-black w-3/4">
        <div className="flex flex-row items-center font-semibold text-sm text-center h-14 bg-[#EEEEEE]">
          <span className="w-6/12">제목</span>
          <span className="w-2/12">글쓴이</span>
          <span className="w-1/12">추천</span>
          <span className="w-1/12">댓글</span>
          <span className="w-2/12">작성일</span>
        </div>
      </div>
    </div>
  );
}
