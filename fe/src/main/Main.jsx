import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { useEffect } from "react";

export default function Main() {
  useEffect(() => {
    console.log("rendered");
  }, []);
  return (
    <>
      <Header />
      <div className="h-96"></div>
      <div className="h-96"></div>
      <div className="h-96"></div>
      <div className="h-96"></div>
      <div className="h-96"></div>
      <Footer />
    </>
  );
}
