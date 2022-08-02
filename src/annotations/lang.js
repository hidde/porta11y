import React from 'react'
import { MdTranslate } from 'react-icons/md'

const badge = {
  display: 'inline-block',
  backgroundColor: 'rgb(0 0 0 / 0.1)',
  border: '1px solid rgb(0 0 0 / 0.1)',
  padding: '0 0.2em 0 0.3em',
  marginLeft: '0.2em',
  borderRadius: '0.2em',
  fontSize: '70%',
  whiteSpace: 'nowrap',
  transform: 'translateY(-15%)',
}

/**
 * @param {Object} [options = {}] - Options for the annotation
 * @param {String} [options.title = "Language switcher"] - Title for the annotation
 * @param {String} [options.name = "lang"] - Name of the annotation
 * @param {String} [options.fieldTitle = "Language tag"] - Title for the field
 * @param {String} [options.fieldName = "tag"] - Name of the field
 * @param {RegExp} [options.regex = /^[a-z]+(-[a-z]+)?$/i] - Validation regex
 * @param {String} [options.regexName = "language tag"] - Name of the regex
 * @param {ReactElement} [options.icon = Material Design “Translate” icon] - JSX for the toolbar icon
 * @param {ReactComponent} [options.Component] - Portable Text renderer
 */
function lang(options = {}) {
  const validation = Rule =>
    Rule.required().regex(options.regex || /^[a-z]+(-[a-z]+)?$/i, {
      name: options.regexName || 'language tag',
    })

  const fieldName = options.fieldName || 'tag'
  const tag = {
    title: options.fieldTitle || 'Language tag',
    name: fieldName,
    type: 'string',
    validation,
  }

  const icon = options.icon || MdTranslate
  const render =
    options.Component ||
    (props => (
      <>
        <span lang={props[fieldName]}>{props.children}</span>
        <span style={badge}>
          {icon}&nbsp;{props[fieldName]}
        </span>
      </>
    ))

  return {
    title: options.title || 'Language switcher',
    name: options.name || 'lang',
    type: 'object',
    fields: [tag],
    blockEditor: {
      icon: icon,
      render: render,
    },
  }
}

export default lang
