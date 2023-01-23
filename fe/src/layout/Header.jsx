import TopHeader from "./TopHeader";
import ScrolledHeader from "./ScrolledHeader";

export default function Header() {
  return (
    <div>
      <TopHeader />
      <ScrolledHeader />
      <div className="h-96 bg-slate-500"></div>
      <div className="h-96 bg-slate-500"></div>
      <div className="h-96 bg-slate-500"></div>
      <div className="h-96 bg-slate-500"></div>
      <div className="h-96 bg-slate-500"></div>
    </div>
  );
}
