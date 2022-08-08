import React from 'react'
import { MdHelpOutline } from 'react-icons/md'

/**
 * @param {Object} [options = {}] - Options for the annotation
 * @param {String} [options.title = "Abbreviation"] - Title for the annotation
 * @param {String} [options.name = "abbr"] - Name of the annotation
 * @param {String} [options.fieldTitle = "Definition"] - Title for the field
 * @param {String} [options.fieldName = "definition"] - Name of the field
 * @param {ReactElement} [options.icon = Material Design “Help Outline” icon] - JSX for the toolbar icon
 * @param {ReactComponent} [options.Component] - Portable Text renderer
 */
function abbr(options = {}) {
  const fieldName = options.fieldName || 'definition'
  const definition = {
    title: options.fieldTitle || 'Definition',
    name: fieldName,
    type: 'string',
    validation: Rule => Rule.required(),
  }

  const icon = options.icon || MdHelpOutline
  const render =
    options.Component ||
    (props => <abbr title={props[fieldName]}>{props.children}</abbr>)

  return {
    title: options.title || 'Abbreviation',
    name: options.name || 'abbr',
    type: 'object',
    fields: [definition],
    blockEditor: {
      icon: icon,
      render: render,
    },
  }
}

export default abbr
