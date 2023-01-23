import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { useEffect } from "react";
import MainPostPreview from "../post/MainPreview/MainPostPreview";

export default function Main() {
  useEffect(() => {
    console.log("rendered");
  });
  return (
    <>
      <Header />
      <div className="mt-12">
        <MainPostPreview postType={0} />
        <MainPostPreview postType={1} />
        <MainPostPreview postType={2} />
        <MainPostPreview postType={3} />
      </div>
      <Footer />
    </>
  );
}
