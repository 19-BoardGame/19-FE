import TopHeader from "./TopHeader";
import ScrolledHeader from "./ScrolledHeader";

export default function Header() {
  return (
    <header>
      <TopHeader />
      <ScrolledHeader />
      <div className="h-96"></div>
      <div className="h-96"></div>
      <div className="h-96"></div>
      <div className="h-96"></div>
      <div className="h-96"></div>
    </header>
  );
}
