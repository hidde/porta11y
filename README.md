# Portable Text tools

[Portable Text](https://www.sanity.io/guides/introduction-to-portable-text) is a JSON based rich text specification for modern content editing platforms. It is designed to be a format for text editing interfaces and for serializing into any human-readable format.

It provides an incredible opportunity to create editing experiences with accessibility in mind. This repository is a collection of Portable Text utilities to enrich the base editor with additional accessibility-related tools. Namely:

- [Language switcher](#language-switcher): an annotation to demark text snippets as being expressed in another language than the main content.

## Language switcher

The `lang` utility provides an annotation to demark an inline text snippet as being expressed in another language than the main content. This is important for screen-readers (WCAG 2.1 SC 3.1.2 and ATAG B.2.1.1). Refer to [this article](https://kittygiraudel.com/2022/07/25/international-content-with-sanity-portable-text/) for more information.

### Options

| Option name | Default value           | Required |
| :---------- | :---------------------- | :------- |
| title       | Language switcher       | No       |
| name        | lang                    | No       |
| fieldTitle  | Language tag            | No       |
| fieldName   | tag                     | No       |
| regex       | `/^[a-z]+(-[a-z]+)?$/i` | No       |
| regexName   | language tag            | No       |

### Example

```js
import { lang } from 'portable-text-tools'

export default {
  title: 'Contenu',
  name: 'content',
  type: 'array',
  of: [
    {
      type: 'block',
      annotations: [
        lang({
          title: 'Autre langue',
          fieldTitle: 'Code de langue',
          /* Other options … */
        }),
      ],
    },
  ],
}
```
