import { useState, useMemo, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { throttle } from "lodash";
import classNames from "classnames";

export default function ScrolledHeader() {
  const dispatch = useDispatch();
  const postType = useSelector((state) => state.type);
  const [choosing, setChoosing] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [rendered, setRendered] = useState(false);
  const handleScroll = useMemo(
    () =>
      throttle(() => {
        if (window.scrollY > 110) {
          setScrolled(true);
          setRendered(true);
        } else {
          setScrolled(false);
          setChoosing(false);
        }
      }, 200),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

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

  const PostTypeText = () => {
    if (postType === 0) return <p>게시판 선택</p>;
    else if (postType === 1) return <p>게임 후기</p>;
    else if (postType === 2) return <p>게임 모임</p>;
    else if (postType === 3) return <p>자유게시판</p>;
    else return <p>good</p>;
  };

  const choosePostType = () => {
    setChoosing(!choosing);
  };

  return (
    <>
      <div
        className={classNames(
          "fixed flex items-center w-full h-20 bg-title z-[9999] drop-shadow-default",
          {
            "-top-[80px]": !rendered,
            "animate-header top-0": scrolled,
            "animate-headerout -top-[80px]": !scrolled && rendered,
          }
        )}
        onClick={choosePostType}
      >
        <div className="flex flex-row justify-start items-center h-full mx-52 font-bold ">
          <p className="text-3xl ml-6 text-scrolledTitle" onClick={main}>
            1-9 보드게임
          </p>
          <span className="flex flex-row h-full justify-center items-center mx-28 w-48 text-lg text-scrolledTitle font-semibold border-x border-scrolledTitle/50 cursor-pointer">
            <PostTypeText />
            <IoIosArrowDown className="ml-8" />
          </span>
        </div>
        {choosing ? (
          <div className="overflow-hidden fixed text-center top-[80px] left-[502px] w-48 cursor-pointer bg-white">
            <ul className="relative border-x animate-list">
              <li className="py-2" onClick={reviewPost}>
                게임 후기
              </li>
              <li className="py-2 border-y" onClick={partyPost}>
                게임 모임
              </li>
              <li className="py-2 border-b" onClick={freePost}>
                자유게시판
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
}
