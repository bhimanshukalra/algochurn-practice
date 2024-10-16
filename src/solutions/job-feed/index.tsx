import NewsCard from "./components/NewsCard";
import { useGetNews } from "./hooks/useGetNews";

export function JobFeed() {
  const { news, state, isEndOfList, onPressLoadMore } = useGetNews();

  const isLoadMoreButtonDisabled = isEndOfList || state === "Loading";

  return (
    <div className="flex items-center justify-center flex-col">
      <p className="my-2 font-bold text-2xl">JobFeed</p>
      <div className="grid grid-cols-1 md:grid-cols-2 my-2">
        {news.map((newsItem) => (
          <NewsCard key={newsItem.id} newsItem={newsItem} />
        ))}
      </div>
      <p>{state}</p>
      <input
        type="button"
        onClick={onPressLoadMore}
        disabled={isLoadMoreButtonDisabled}
        value={"Load More"}
        className={`px-5 py-2 my-4 bg-green-500 ${
          isLoadMoreButtonDisabled ? "cursor-not-allowed" : "cursor-pointer"
        }`}
      />
    </div>
  );
}
