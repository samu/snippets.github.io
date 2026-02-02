# Attributes

Attributes are tags on steroids. Instead of being free-form labels, attributes are based on schemas that define their shape and behavior. This allows attributes to stay consistent, expressive, and useful across your entire knowledge base.

## Attribute schemas

An attribute schema defines what kind of information an attribute can hold, how it is presented, and how it behaves. This includes the attribute’s data type, its icon and color, and whether it supports a single value or multiple values. Once a schema is defined, the attribute can be reused anywhere in the app.

To create or manage attribute schemas, open User Settings (using Cmd + , or the application menu) and navigate to Attribute Schemas. From there, you can define the schema by choosing its type, icon, color, and available options.

## Types of attributes

Snippets currently supports several types of attribute schemas. Date attributes hold a single date value. String value attributes define a fixed set of values, each with its own label, color, and icon, and can be configured as single-value or multi-value; they are commonly used for things like priorities, statuses, or categories. Number attributes store numeric values, while rich-text attributes allow storing formatted text as structured data.

## Using attributes

Attributes are deeply integrated into Snippets and can be used in two complementary ways. They can appear inline inside rich-text documents, similar to tags, where they naturally blend into writing and thinking. At the same time, attributes can be used as structured fields in tables, where they behave more like properties in a database. This dual usage allows you to move smoothly between free-form notes and structured organization without switching tools or mental models.

Once a schema exists, using attributes is fast and lightweight. Inside a rich-text document, typing / opens the command menu, where available attributes can be inserted via autocomplete.

Attributes also power tables. Tables live inside dashboards and are created using snippet containers. After adding a snippet container to a dashboard, its configuration menu allows you to select which attributes should appear as table columns. Once added, these attributes become editable fields for each snippet in the table, turning collections of notes into structured, queryable views without losing their underlying flexibility.
