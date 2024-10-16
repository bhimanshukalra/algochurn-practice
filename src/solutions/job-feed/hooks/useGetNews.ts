import { useEffect, useState } from "react";
import { getIdsUrl, getNewsUrl } from "../constants";
import { NewsItem } from "../models/NewsItem";
import axios from "axios";

const PAGE_LENGTH = 5;

export function useGetNews() {
  const [ids, setIds] = useState<number[]>([]);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [state, setState] = useState<"Loading" | "Loaded">("Loading");
  const [isEndOfList, setIsEndOfList] = useState(false);

  useEffect(() => {
    init();
  }, []);

  async function init() {
    const ids = await getIds();
    await getNews(ids);
  }

  async function getIds() {
    const data = (await axios.get(getIdsUrl)).data;
    setIds(data);
    return data;
  }

  async function getNews(postIds?: number[]) {
    const newsIds = postIds ?? ids;
    if (isEndOfList) {
      return;
    }
    const latestNews: NewsItem[] = [];
    for (
      let index = news.length;
      index < news.length + PAGE_LENGTH && index < newsIds.length;
      index++
    ) {
      const data = (await axios.get(getNewsUrl(newsIds[index]))).data;
      latestNews.push(data);
    }
    const updatedNews = [...news, ...latestNews];
    setNews(updatedNews);
    setIsEndOfList(updatedNews.length == newsIds.length);
    setState("Loaded");
  }

  function onPressLoadMore() {
    setState("Loading");
    getNews();
  }

  return { news, state, isEndOfList, onPressLoadMore };
}
