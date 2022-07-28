# Contributing

To try and work on the annotations and validators, one can initialize a new Sanity project within the repository with `sanity init` (make sure you have [Sanity globally installed](https://www.sanity.io/docs/getting-started-with-sanity-cli) first). Follow the instructions to get a Sanity project going.

Then, update the `schema.js` file so it looks like this (adjust to suit your needs):

```js
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import { lang, noFakeLists } from '../../src'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    {
      title: 'Test',
      name: 'test',
      type: 'document',
      fields: [
        {
          name: 'content',
          type: 'array',
          of: [{ type: 'block', marks: { annotations: [lang()] } }],
          validation: Rule => Rule.custom(noFakeLists()),
        },
      ],
    },
  ]),
})
```

Finally, start the project as you would with `sanity start` in the Sanity directory.

## Ignoring local project

You can make sure your local project doesn’t get committed by adding your Sanity directory to your [local exclude file](https://www.codejam.info/2022/01/a-second-gitignore-that-ignores-itself.html), like so:

```
echo your-sanity-dir-name >> .git/info/exclude
```
