import groups from "./doc-navigation.json";

const modules = import.meta.glob("../content/docs/*.mdx", { eager: true });
export { groups };
export const pages = groups.flatMap(([group, slugs]) =>
  slugs.map((slug) => {
    const key = `../content/docs/${slug}.mdx`;
    const module = modules[key];
    if (!module) throw new Error(`Missing documentation: ${slug}`);
    return {
      slug,
      group,
      ...module.frontmatter,
      Content: module.Content,
      headings: module.getHeadings(),
    };
  }),
);
if (pages.length !== Object.keys(modules).length)
  throw new Error("Add every MDX article to doc-navigation.json.");
