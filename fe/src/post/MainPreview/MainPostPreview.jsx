import { IoIosArrowForward } from "react-icons/io";
import MainPostBox from "./MainPostBox";
import { useDispatch } from "react-redux";

export default function MainPostPreview({ postType }) {
  const posts = [
    {
      title: "이거는 제목",
      writer: "writer1",
      likes: 7,
      comments: 4,
      date: "20230124",
      imgURL: null,
    },
    {
      title: "이거는 제목",
      writer: "writer1",
      likes: 7,
      comments: 4,
      date: "20230124",
      imgURL:
        "https://w.namu.la/s/3028d8b5373d5934e09bacd37bc80fdf6ac067f68276eac28083dfd5bf49b578af3db1ccad489a35b2c8a1e0c87b548797d4f2b5f17178d29a7288e44a8d501b50c1298dcc55ecb0557e734a8ea014841b7ab671d13b828cacdcabbe86b73d18",
    },
    {
      title: "이거는 제목",
      writer: "writer1",
      likes: 7,
      comments: 4,
      date: "20230124",
      imgURL: null,
    },
    {
      title: "이거는 제목",
      writer: "writer1",
      likes: 7,
      comments: 4,
      date: "20230124",
      imgURL: null,
    },
    {
      title: "이거는 제목",
      writer: "writer1",
      likes: 7,
      comments: 4,
      date: "20230124",
      imgURL: null,
    },
    {
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

  const dispatch = useDispatch();

  const postTypeChange = () => {
    if (postType === 1) dispatch({ type: "post_review" });
    else if (postType === 2) {
      dispatch({ type: "post_party" });
    } else {
      dispatch({ type: "post_free" });
    }
  };

  const Posts = () => {
    return posts.map((post) => {
      return (
        <MainPostBox
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
    <div className="relative ml-60 mb-24 w-7/12">
      <div className="flex flex-row justify-between my-3 border-b-2 border-black">
        <p className="font-bold text-xl pl-4 pb-1">{title[postType]}</p>
        {postType !== 0 ? (
          <span
            className="flex flex-row items-center text-xs text-slate-400 cursor-pointer"
            onClick={postTypeChange}
          >
            <p>더보기</p>
            <IoIosArrowForward />
          </span>
        ) : null}
      </div>
      <div className="flex flex-row flex-wrap justify-between">
        <Posts />
      </div>
    </div>
  );
}
