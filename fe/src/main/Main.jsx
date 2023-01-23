import { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import MainPostPreview from "../post/MainPreview/MainPostPreview";
import Board from "../post/DetailPreview/Board";

export default function Main() {
  const postType = useSelector((state) => state.type);

  return (
    <>
      <Header />
      {postType ? (
        <Board postType={postType} />
      ) : (
        <div className="mt-12">
          <MainPostPreview postType={0} />
          <MainPostPreview postType={1} />
          <MainPostPreview postType={2} />
          <MainPostPreview postType={3} />
        </div>
      )}

      <Footer />
    </>
  );
}
