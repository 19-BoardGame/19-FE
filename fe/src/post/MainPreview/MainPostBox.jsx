import { HiThumbUp } from "react-icons/hi";
import { MdModeComment } from "react-icons/md";
import { AiTwotoneCalendar } from "react-icons/ai";

export default function MainPostBox({
  title,
  writer,
  likes,
  comments,
  date,
  imgURL,
}) {
  return (
    <div className="flex flex-row mx-3 mt-3 p-3 w-[46%] border-b">
      <img
        className="rounded-lg h-20 w-20"
        src={imgURL ? imgURL : "public_assets/image_placeholder.png"}
      />
      <div className="flex flex-col justify-between ml-4 pt-1">
        <p className="font-bold">{title}</p>
        <div className="flex flex-row text-xs w-72">
          <span className="w-1/4">{writer}</span>
          <span className="flex flex-row items-center w-1/5">
            <HiThumbUp />
            <p className="pl-1">{likes}</p>
          </span>
          <span className="flex flex-row items-center w-1/5">
            <MdModeComment />
            <p className="pl-1">{comments}</p>
          </span>
          <span className="flex flex-row items-center w-1/3">
            <AiTwotoneCalendar />
            <p className="pl-1">
              {date.slice(2, 4) +
                "-" +
                date.slice(4, 6) +
                "-" +
                date.slice(6, 8)}
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}
