import React from 'react'

// “Translate” icon from the Material Design icon library
const MaterialDesignTranslate = (
  <svg
    viewBox="0 0 24 24"
    style={{
      width: '1em',
      height: '1em',
      color: 'inherit',

      fontSize: '100%',
      verticalAlign: 'middle',
    }}
  >
    <path
      fill="currentColor"
      d="M12.87,15.07L10.33,12.56L10.36,12.53C12.1,10.59 13.34,8.36 14.07,6H17V4H10V2H8V4H1V6H12.17C11.5,7.92 10.44,9.75 9,11.35C8.07,10.32 7.3,9.19 6.69,8H4.69C5.42,9.63 6.42,11.17 7.67,12.56L2.58,17.58L4,19L9,14L12.11,17.11L12.87,15.07M18.5,10H16.5L12,22H14L15.12,19H19.87L21,22H23L18.5,10M15.88,17L17.5,12.67L19.12,17H15.88Z"
    />
  </svg>
)

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

  const icon = options.icon || MaterialDesignTranslate
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
