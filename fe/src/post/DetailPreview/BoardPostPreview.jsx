import { BsImage } from "react-icons/bs";

export default function BoardPostPreview({
  title,
  writer,
  likes,
  comments,
  date,
  imgURL,
}) {
  return (
    <div className="flex flex-row items-center font-light text-xs text-center w-3/4 h-12 border-b">
      <span className="flex flex-row pl-4 items-center font-semibold text-sm w-6/12">
        <p className="p-2 cursor-pointer">{title}</p>
        {imgURL ? <BsImage className="text-xs" /> : null}
      </span>
      <span className="w-2/12">{writer}</span>
      <span className="w-1/12">{likes}</span>
      <span className="w-1/12">{comments}</span>
      <span className="w-2/12">
        {date.slice(2, 4) + "-" + date.slice(4, 6) + "-" + date.slice(6, 8)}
      </span>
    </div>
  );
}
