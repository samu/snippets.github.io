const modules = import.meta.glob("../content/news/*.mdx", { eager: true });

export const newsKinds = {
  blog: { label: "Blog", action: "Read the story", icon: "pen" },
  announcement: {
    label: "Announcement",
    action: "Read the announcement",
    icon: "spark",
  },
  release: {
    label: "Release notes",
    action: "See what’s changed",
    icon: "release",
  },
};

const dateFormat = new Intl.DateTimeFormat("en", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

// Files are the source of truth: no separate list or page generator to maintain.
export const news = Object.entries(modules)
  .map(([file, module]) => {
    const slug = file
      .split("/")
      .at(-1)
      .replace(/\.mdx$/, "");
    const {
      title,
      description,
      date,
      kind,
      version,
      cover,
      sample = false,
      draft = false,
    } = module.frontmatter;
    const validDate =
      typeof date === "string" &&
      /^\d{4}-\d{2}-\d{2}$/.test(date) &&
      !Number.isNaN(Date.parse(date)) &&
      new Date(date).toISOString().slice(0, 10) === date;
    if (
      !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) ||
      typeof title !== "string" ||
      !title.trim() ||
      typeof description !== "string" ||
      !description.trim() ||
      !Object.hasOwn(newsKinds, kind) ||
      !validDate ||
      typeof sample !== "boolean" ||
      typeof draft !== "boolean" ||
      (version !== undefined && typeof version !== "string") ||
      (cover !== undefined &&
        (!cover ||
          typeof cover.light !== "string" ||
          (cover.dark !== undefined && typeof cover.dark !== "string") ||
          typeof cover.alt !== "string"))
    ) {
      throw new Error(
        `Invalid news metadata in ${file}. Check title, description, kind, date (YYYY-MM-DD), sample, draft and version.`,
      );
    }
    return {
      slug,
      title,
      description,
      date,
      kind,
      version,
      cover,
      sample,
      draft,
      ...newsKinds[kind],
      href: `/news/${slug}/`,
      dateLabel: dateFormat.format(new Date(date)),
      Content: module.Content,
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
