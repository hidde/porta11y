# Porta11y

Porta11y is a collection of accessibility-focused blocks, annotations, decorators and validators for Sanity’s Portable Text editor.

[Portable Text](https://www.sanity.io/guides/introduction-to-portable-text) is a JSON based rich text specification for modern content editing platforms. It is designed to be a format for text editing interfaces and for serializing into any human-readable format.

It provides an incredible opportunity to create editing experiences with accessibility in mind. This repository is a collection of Portable Text utilities to enrich the base editor with additional accessibility-related tools. Namely:

- [Lang annotation](#language-switcher): an annotation to demark text snippets as being expressed in another language than the main content.
- [Abbr annotation](#abbreviation): an annotation to provide a definition to an abbreviation or an acronym.
- [Del](#deletion) and [ins](#insertion) decorators: a pair of decorators to demark text snippets as being inserted or deleted.
- [Sub](#sub) and [sup](#sup) decorators: a pair of decorators to demark text snippets as being subscript or superscript.
- [Horizontal rule](#horizontal-rule): a block to author a horizontal rule which can then be mapped to a `<hr>` element.
- [Fake lists validator](#no-fake-lists): a custom validation function to make sure lists are done via the appropriate list feature and not with text markers, resulting in more semantic HTML.

## Installation

```sh
npm install porta11y
```

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

### Abbreviation

The `abbr` annotation can be used to give a definition to an abbreviation or an acronym.

#### Options

| Option name | Default value                       | Required |
| :---------- | :---------------------------------- | :------- |
| title       | Abbreviation                        | No       |
| name        | abbr                                | No       |
| fieldTitle  | Definition                          | No       |
| fieldName   | definition                          | No       |
| icon        | Material Design “Help Outline” icon | No       |
| Component   | Custom Portable Text renderer       | No       |

#### Example

```js
import { abbr } from 'porta11y'

export default {
  title: 'Content',
  name: 'content',
  type: 'array',
  of: [
    {
      type: 'block',
      marks: {
        annotations: [abbr()],
      },
    },
  ],
}
```

## Decorators

### Sub

The `sub` utility is a decorator to mark a text snippet as being subscript.

#### Options

| Option name | Default value                    | Required |
| :---------- | :------------------------------- | :------- |
| title       | Sub                              | No       |
| value       | sub                              | No       |
| icon        | Material Design “Subscript” icon | No       |
| Component   | sub                              | No       |

#### Example

```js
import { sub } from 'porta11y'

export default {
  title: 'Content',
  name: 'content',
  type: 'array',
  of: [
    {
      type: 'block',
      marks: {
        decorators: [{ title: 'Strong', value: 'strong' }, sub()],
      },
    },
  ],
}
```

### Sup

The `sup` utility is a decorator to mark a text snippet as being superscript.

#### Options

| Option name | Default value                      | Required |
| :---------- | :--------------------------------- | :------- |
| title       | Sup                                | No       |
| value       | sup                                | No       |
| icon        | Material Design “Superscript” icon | No       |
| Component   | sup                                | No       |

#### Example

```js
import { sup } from 'porta11y'

export default {
  title: 'Content',
  name: 'content',
  type: 'array',
  of: [
    {
      type: 'block',
      marks: {
        decorators: [{ title: 'Strong', value: 'strong' }, sup()],
      },
    },
  ],
}
```

### Deletion

The `del` utility is a decorator to mark a text snippet as being a text deletion.

#### Options

| Option name | Default value             | Required |
| :---------- | :------------------------ | :------- |
| title       | Deletion                  | No       |
| value       | del                       | No       |
| icon        | VSC “DiffRemoved” icon    | No       |
| Component   | del (+ additional styles) | No       |

#### Example

```js
import { del } from 'porta11y'

export default {
  title: 'Content',
  name: 'content',
  type: 'array',
  of: [
    {
      type: 'block',
      marks: {
        decorators: [{ title: 'Strong', value: 'strong' }, del()],
      },
    },
  ],
}
```

### Insertion

The `ins` utility is a decorator to mark a text snippet as being a text insertion.

#### Options

| Option name | Default value             | Required |
| :---------- | :------------------------ | :------- |
| title       | Insertion                 | No       |
| value       | ins                       | No       |
| icon        | VSC “DiffAdded” icon      | No       |
| Component   | ins (+ additional styles) | No       |

#### Example

```js
import { ins } from 'porta11y'

export default {
  title: 'Content',
  name: 'content',
  type: 'array',
  of: [
    {
      type: 'block',
      marks: {
        decorators: [{ title: 'Strong', value: 'strong' }, ins()],
      },
    },
  ],
}
```

## Blocks

### Horizontal rule

#### Options

| Option name | Default value                         | Required |
| :---------- | :------------------------------------ | :------- |
| title       | Horizontal rule                       | No       |
| name        | hr                                    | No       |
| icon        | Material Design “HorizontalRule” icon | No       |

#### Example

```js
import { hr } from 'porta11y'

export default {
  title: 'Content',
  name: 'content',
  type: 'array',
  of: [{ type: 'block' }, hr()],
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
