import { BiSearchAlt2 } from "react-icons/bi";
import { useRef } from "react";
import BoardPostPreview from "./BoardPostPreview";

export default function Board({ postType }) {
  const searchString = useRef();
  const posts = [
    {
      id: "a",
      title: "이거는 제목",
      writer: "writer1",
      likes: 7,
      comments: 4,
      date: "20230124",
      imgURL: null,
    },
    {
      id: "b",
      title: "이거는 제목",
      writer: "writer1",
      likes: 7,
      comments: 4,
      date: "20230124",
      imgURL:
        "https://w.namu.la/s/3028d8b5373d5934e09bacd37bc80fdf6ac067f68276eac28083dfd5bf49b578af3db1ccad489a35b2c8a1e0c87b548797d4f2b5f17178d29a7288e44a8d501b50c1298dcc55ecb0557e734a8ea014841b7ab671d13b828cacdcabbe86b73d18",
    },
    {
      id: "c",
      title: "이거는 제목",
      writer: "writer1",
      likes: 7,
      comments: 4,
      date: "20230124",
      imgURL: null,
    },
    {
      id: "d",
      title: "이거는 제목",
      writer: "writer1",
      likes: 7,
      comments: 4,
      date: "20230124",
      imgURL: null,
    },
    {
      id: "e",
      title: "이거는 제목",
      writer: "writer1",
      likes: 7,
      comments: 4,
      date: "20230124",
      imgURL: null,
    },
    {
      id: "f",
      title: "이거는 제목",
      writer: "writer1",
      likes: 7,
      comments: 4,
      date: "20230124",
      imgURL: null,
    },
  ];

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

  const Posts = () => {
    return posts.map((post) => {
      return (
        <BoardPostPreview
          key={post.id}
          title={post.title}
          writer={post.writer}
          likes={post.likes}
          comments={post.comments}
          date={post.date}
          imgURL={post.imgURL}
        />
      );
    });
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
      <div className="flex flex-row items-center font-semibold text-sm text-center h-14 border-t-2 border-b-inherit border-black w-3/4 bg-[#EEEEEE]">
        <span className="w-6/12">제목</span>
        <span className="w-2/12">글쓴이</span>
        <span className="w-1/12">추천</span>
        <span className="w-1/12">댓글</span>
        <span className="w-2/12">작성일</span>
      </div>
      <Posts />
    </div>
  );
}
