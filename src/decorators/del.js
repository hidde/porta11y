import React from 'react'

const MaterialDesignPencilMinus = React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    style: {
      width: '1em',
      height: '1em',
      color: 'inherit',
      fontSize: '100%',
      verticalAlign: 'middle',
    },
  },
  React.createElement('path', {
    fill: 'currentColor',
    d: 'M14.1,9L15,9.9L5.9,19H5V18.1L14.1,9M17.7,3C17.5,3 17.2,3.1 17,3.3L15.2,5.1L18.9,8.9L20.7,7C21.1,6.6 21.1,6 20.7,5.6L18.4,3.3C18.2,3.1 17.9,3 17.7,3M14.1,6.2L3,17.2V21H6.8L17.8,9.9L14.1,6.2M10,5V7H2V5H10Z',
  })
)

/**
 * @param {Object} [options = {}] - Options for the decorator
 * @param {String} [options.title = "Deletion"] - Title for the decorator
 * @param {String} [options.value = "del"] - Value of the decorator
 * @param {ReactElement} [options.icon = Material Design “PencilMinus” icon] - JSX for the toolbar icon
 * @param {ReactComponent} [options.Component = "del"] - Portable Text renderer
 */
function del(options = {}) {
  const icon = options.icon || MaterialDesignPencilMinus
  const render =
    options.Component ||
    (props => (
      <del
        style={{
          display: 'inline-block',
          backgroundColor: 'rgb(255 235 233 / 1)',
          border: '1px solid rgb(0 0 0 / 0.1)',
          borderRadius: '0.25em',
          padding: '0 0.25em',
        }}
      >
        {props.children}
      </del>
    ))

  return {
    title: options.title || 'Deletion',
    value: options.value || 'del',
    blockEditor: { icon, render },
  }
}

export default del
