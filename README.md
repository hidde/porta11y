# Porta11y

[Portable Text](https://www.sanity.io/guides/introduction-to-portable-text) is a JSON based rich text specification for modern content editing platforms. It is designed to be a format for text editing interfaces and for serializing into any human-readable format.

It provides an incredible opportunity to create editing experiences with accessibility in mind. This repository is a collection of Portable Text utilities to enrich the base editor with additional accessibility-related tools. Namely:

- [Language switcher](#language-switcher): an annotation to demark text snippets as being expressed in another language than the main content.
- [Fake lists validator](#no-fake-lists): a custom validation function to make sure lists are done via the appropriate list feature and not with text markers, resulting in more semantic HTML.

## Annotations

### Language switcher

The `lang` utility provides an annotation to demark an inline text snippet as being expressed in another language than the main content. This is important for screen-readers (WCAG 2.1 SC 3.1.2 and ATAG B.2.1.1). Refer to [this article](https://kittygiraudel.com/2022/07/25/international-content-with-sanity-portable-text/) for more information.

#### Options

| Option name | Default value                    | Required |
| :---------- | :------------------------------- | :------- |
| title       | Language switcher                | No       |
| name        | lang                             | No       |
| fieldTitle  | Language tag                     | No       |
| fieldName   | tag                              | No       |
| regex       | `/^[a-z]+(-[a-z]+)?$/i`          | No       |
| regexName   | language tag                     | No       |
| icon        | Material Design “Translate” icon | No       |
| Component   | Custom Portable Text renderer    | No       |

#### Example

```js
import { lang } from 'porta11y'

export default {
  title: 'Content',
  name: 'content',
  type: 'array',
  of: [
    {
      type: 'block',
      marks: {
        annotations: [
          lang({
            title: 'Autre langue',
            fieldTitle: 'Code de langue',
            /* Other options … */
          }),
        ],
      },
    },
  ],
}
```

## Validations

### No fake lists

Sometimes lists on web pages are not marked up as lists, with `ul`, `ol` or `dl` elements, but separate list items with merely returns instead. This validation rule finds those cases.

#### Options

| Option name | Default value | Required |
| :-- | :-- | :-- |
| message | This looks like a list, but it is plain text. Use the bulleted list option. | No |
| regex | `/^\s*[-*+–—]/` | No |

#### Example

```js
import { noFakeLists } from 'porta11y'

export default {
  title: 'Content',
  name: 'content',
  type: 'array',
  of: [
    {
      type: 'block',
    },
  ],
  validation: Rule => Rule.custom(noFakeLists()),
}
```
