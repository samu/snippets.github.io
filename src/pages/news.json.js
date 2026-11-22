import { news } from "../data/news.js";

export function GET() {
  return Response.json(
    news
      .filter((post) => !post.draft)
      .map((post) => ({
        id: post.slug,
        title: post.title,
        summary: post.description,
        date: Date.parse(post.date),
      })),
  );
}
