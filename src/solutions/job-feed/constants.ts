export const getIdsUrl =
  "https://hacker-news.firebaseio.com/v0/jobstories.json";

export const getNewsUrl = (postId: number) =>
  `https://hacker-news.firebaseio.com/v0/item/${postId}.json`;
