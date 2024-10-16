import moment from "moment";
import { NewsItem } from "../models/NewsItem";

type NewsCardType = { newsItem: NewsItem };

const NewsCard = ({ newsItem: { id, by, time, title, url } }: NewsCardType) => {
  const formattedTime = moment(time).format("Do MMM YYYY hh:mm a");
  return (
    <div
      className="border p-4 cursor-pointer hover:bg-blue-300 m-2 rounded-lg"
      onClick={onClick}
    >
      <p>
        ID: <span className="text-blue-400">{id}</span>
      </p>
      <p className="font-bold">{title}</p>
      <p>{formattedTime}</p>
      <p>
        Posted by: <span className="text-blue-400">{by}</span>
      </p>
    </div>
  );

  function onClick() {
    window.open(url, "_blank");
  }
};

export default NewsCard;
