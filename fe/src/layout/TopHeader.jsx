import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames";

export default function TopHeader() {
  const dispatch = useDispatch();
  const postType = useSelector((state) => state.type);

  const main = () => {
    dispatch({ type: "main" });
  };

  const reviewPost = () => {
    dispatch({ type: "post_review" });
  };

  const partyPost = () => {
    dispatch({ type: "post_party" });
  };

  const freePost = () => {
    dispatch({ type: "post_free" });
  };

  return (
    <div className="flex flex-row justify-between w-full bg-white items-center px-52 py-5 font-bold">
      <div className="flex flex-row items-center cursor-pointer" onClick={main}>
        <img
          src="public_assets/titleIcon.png"
          alt="주사위 이미지"
          width="30%"
        />
        <p className="text-title text-3xl ml-6">1-9 보드게임</p>
      </div>
      <ul className="inline-block text-center text-lg">
        <li className="float-left pr-14 border-r">
          <p
            className={classnames("cursor-pointer p-1", {
              "text-focus": postType === 1,
            })}
            onClick={reviewPost}
          >
            게임 후기
          </p>
        </li>
        <li className="float-left px-14">
          <p
            className={classnames("cursor-pointer p-1", {
              "text-focus": postType === 2,
            })}
            onClick={partyPost}
          >
            게임 모임
          </p>
        </li>
        <li className="float-left pl-14 border-l">
          <p
            className={classnames("cursor-pointer p-1", {
              "text-focus": postType === 3,
            })}
            onClick={freePost}
          >
            자유게시판
          </p>
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
