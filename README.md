# portable-text-tools

Functions and objects that make it easier to add fields to Portable Text editors for accessibility meta information, like language changes or abbreviations.

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
