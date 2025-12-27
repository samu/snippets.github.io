---
description: Snippets is a productivity app, focusing on note taking and task management. It uses the local first principle, giving users control over where their data is stored.
---

import DocVideo from '@site/src/components/DocVideo/DocVideo';

# Docs

## The Snippets Philosophy

Note-Taking is a relatively simple process. Most of the time, you just want to write down some thoughts or a todo or take a note of something you know will be useful in the future. Notes are often ephemeral: you need them in a particular moment and discard them soon thereafter.

Snippets focuses on keeping this simple process simple, while providing useful features. It provides a super-slick, completely decluttered user interface with only a handful of controls, giving you a distraction free experience when working with notes.

## Regarding Markdown

Snippets is not a markdown-based note taking app.
Using markdown for taking notes is quite common in other note taking apps. Snippets intentionally does not follow that trend. The main reason is that users will still want to have a rich-text-editor-like experience. Markdown is really just the format in which a note is stored. For presenting and editing the content, we usually want a more sophisticated interface.
Please note that it is still possible to _export_ a rich-text-note to markdown.

## Origins

You don't need an account to store your data. Snippets is designed to allow users to pick the destination to which their data is syned. This is done with origins.

Origins allow you to specificy how your data shall be persisted. Currently,
there's two origins available:

- the _file_ origin lets you store your data on your local disk
- the _github_ origin lets you store your data in a github repo

The advantage of the github origin is that you'll be able to sync your data
across multiple devices without any costs. Apart from that, the functionality of the application remains the same.

There's plans to introduce other origins, such as a dropbox origin, which would allow you to sync your data to your dropbox account.

## Editing Rich Text

### Using Markdown-like syntax

Using the toolbar can feel cumbersome at times, since it forces you to switch
between your mouse and keyboard often. You can use [markdown](https://en.wikipedia.org/wiki/Markdown)
syntax to avoid this.

- Use `# `&nbsp; for headings
- Use `**text**`&nbsp; for bold formatting
- Use `*text*`&nbsp; for italic formatting
- Use `* `&nbsp; for bullet lists
- Use `1. `&nbsp; for ordered lists
- Use `+ `&nbsp; for todo lists

<DocVideo name="markdown-formatting" />

### Jumping in and out of inline formattings

The editor gives an indication whether you are inside an inline formatting
(such as bold formatting) by rendering a dashed line underneath the formatting.
You can jump in and out of the formatting boundaries by using the left and right
arrow keys. This allows you to, for example, escape a bold-formatted text and
continue writing unformatted.

<DocVideo name="formatting-jump" />

### Destroying formattings with backspace

You can destroy inline formatting (such as bold formatting) using backspace.
Jump out of the formatting with your arrow-right key, then use backspace to
destroy the formatting.

<DocVideo name="destroying-inline-formatting" />

Similarly, you can destroy block formattings, such as headings and code blocks,
by placing the cursor at the beginning of the formatting and using backspace.

<DocVideo name="destroying-nodes" />

### Interaction with links

The editor will detect urls such as `https://example.com` and give an indication
once the cursor is close to such a pattern. Pressing Enter will put
focus on the label input field. Once focus is inside the label input field,
pressing Escape will put focus back on the editor. Pressing Cmd+Enter
will turn the pattern into a highlighted, interactable link.

Once an interactable link is created, interacting with it is the same: use Enter
to focus the url input field, use Escape to give focus back to the editor.

<DocVideo name="interacting-with-links" />

### Drag and Drop

Parts of text can be dragged around. This is useful, for example, when you want
to reorder items in a list, or put a paragraph before another one.

You can drag text by selecting some text inside the paragraph or list item
you want to drag. This will create a drag handle, which you can drag-and-drop
to whichever part in the document you want.

<DocVideo name="drag-n-drop-via-text-selection" />

Another option is to hit Escape when the editor is focused. This will create a
node selection around the paragraph where the cursor is placed. The node selection
becomes draggable and can be dragged accordingly.

<DocVideo name="drag-n-drop-via-node-selection" />

## Organizing Notes

### With folders

You can create folders in the folder sidebar to group notes. You can nest folders and define icons.

## Note References

As the name suggests, note references enable you to reference notes from
one another. Set up note references as follows:

- using autocomplete: type `/` inside a note and start typing some text. You'll
  be presented with an autocomplete. If the text you type matches an already
  existing note, it will be presented as an option. In addition, you'll have
  the option to create a new note and auto-reference it into the note you're
  editing.

<DocVideo name="snippet-references" />

## Search and Quick Access

Snippets comes with an effective search-all feature, which you can use to search
your notes. It presents results in a compact, easy-to-read manner. You can use
[regular expressions](https://en.wikipedia.org/wiki/Regular_expression) if you
like.

It also allows you to search for and jump to tags. Additionally, it shows you
notes and folders you've visited recently.

The Quick Access feature allows you to quickly copy links and code blocks from
your notes to the clipboard.
