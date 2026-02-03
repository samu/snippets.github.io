# Introduction

Snippets is built with a focus on craft and detail. It is designed to stay light and responsive, while still being capable enough to grow with you over time. The app works offline by default, keeps your data local, and only syncs when you explicitly choose to. Structure is available when it helps, but never imposed. Snippets is meant to stay out of your way and feel reliable, fluid, and pleasant to use.

## A great rich text editing experience

### Why editing quality matters

Good rich-text editing is easy to underestimate, but it matters a lot. Writing is the thing you do most in a note-taking app, and when the editor feels awkward or unpredictable, everything else becomes harder.

### Where editors often fall short

Many rich-text editors struggle with the basics. Creating or removing formatting can feel clumsy, it’s often unclear whether the cursor is inside or outside a formatting, pasting content produces odd results, and clicking a link may open a browser instead of letting you edit it. These, among others, are small issues on their own, but they quickly add friction to everyday writing.

### Why Markdown and block-based apps don’t fully solve this

Markdown-based editors avoid some of this, but often feel jumpy and hacky when editing. Block-based apps take another approach, but by splitting everything into separate blocks they introduce hard boundaries that get in the way of simple text editing.

### Closing the gap

Snippets tries to take the good parts from all of this and leave the rest behind. Writing is rich-text-first and continuous, but you can still use familiar keyboard shortcuts to create and remove formatting. You can move cleanly in and out of formatted text, rearrange content when needed, and fall back to a toolbar for more explicit actions.

The result is an editor that feels predictable and unobtrusive, and lets you focus on writing instead of managing the editor.

### Purposely not Markdown-Based

Snippets is intentionally not based on Markdown. Markdown works well for technical documentation and collaborative workflows where content lives in version control. For note-taking, it quickly becomes a constraint.

By moving beyond Markdown, Snippets can rely on rich, structured data instead of plain text files. This enables far more expressive content and supports a wide range of use cases without forcing everything into a text-only format. Concerns about vendor lock-in are addressed through a simple export-to-Markdown option.

## 5 Core concepts

Snippets is made up of 5 core concepts. They exist in isolation and accumulate to great power once combined.

### Snippets

Everything you create in the app is a _Snippet_.

- Rich-text notes are snippets
- Folders are snippets
- Dashboards, flashcards, and flashcard decks are snippets

Snippets is based on a flexible architecture: anything that can be described as a JSON document and represented with a UI can exist in the app. This makes Snippets adaptable to many workflows, including personal knowledge management,writing and journaling, task and habit tracking and studying and learning systems.

### References

Snippets can reference other snippets.

- Notes can reference other notes
- Folders and dashboards can reference notes
- Flashcard decks can reference flashcards

This allows multiple organizational styles:

- hierarchical, like traditional folders
- network-based, using wiki-style links
- visual, using dashboards

You are free to mix and match these.

### Attributes

Attributes are structured pieces of information attached to snippets. They are best thought of as a hybrid between classic tags and structured properties. Attributes have a defined data type (e.g. string, number, date), can be assigned an icon and a color and can be used inline in rich text or as table fields.

### Filters _(coming soon)_

Filters implicitly reference snippets based on queries. Instead of manually organizing content, filters automatically collect snippets that match certain criteria.

### Origins

Origins define where your data lives and how it is synced. Your data can be divided into workspaces, and every workspace is synced to an origin you define.
