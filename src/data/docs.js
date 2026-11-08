import groups from "./doc-navigation.json";

const modules = import.meta.glob("../content/docs/*.mdx", { eager: true });
const sources = import.meta.glob("../content/docs/*.mdx", {
  eager: true,
  query: "?raw",
  import: "default",
});
export { groups };
export const pages = groups.flatMap(([group, slugs]) =>
  slugs.map((slug) => {
    const key = `../content/docs/${slug}.mdx`;
    const module = modules[key];
    if (!module) throw new Error(`Missing documentation: ${slug}`);
    const words = sources[key]
      .replace(/^---[\s\S]*?---/, "")
      .replace(/<[^>]+>/g, " ")
      .split(/\s+/).length;
    return {
      slug,
      group,
      ...module.frontmatter,
      Content: module.Content,
      headings: module.getHeadings(),
      minutes: Math.max(1, Math.ceil(words / 220)),
    };
  }),
);
if (pages.length !== Object.keys(modules).length)
  throw new Error("Add every MDX article to doc-navigation.json.");
