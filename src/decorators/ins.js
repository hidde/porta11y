import React from 'react'

const MaterialDesignPencilPlus = React.createElement(
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
    d: 'M14.1,9L15,9.9L5.9,19H5V18.1L14.1,9M17.7,3C17.5,3 17.2,3.1 17,3.3L15.2,5.1L18.9,8.9L20.7,7C21.1,6.6 21.1,6 20.7,5.6L18.4,3.3C18.2,3.1 17.9,3 17.7,3M14.1,6.2L3,17.2V21H6.8L17.8,9.9L14.1,6.2M7,2V5H10V7H7V10H5V7H2V5H5V2H7Z',
  })
)

/**
 * @param {Object} [options = {}] - Options for the decorator
 * @param {String} [options.title = "Insertion"] - Title for the decorator
 * @param {String} [options.value = "ins"] - Value of the decorator
 * @param {ReactElement} [options.icon = Material Design “PencilPlus” icon] - JSX for the toolbar icon
 * @param {ReactComponent} [options.Component = "ins"] - Portable Text renderer
 */
function ins(options = {}) {
  const icon = options.icon || MaterialDesignPencilPlus
  const render =
    options.Component ||
    (props => (
      <ins
        style={{
          display: 'inline-block',
          background: 'rgb(230 255 236 / 1)',
          border: '1px solid rgb(0 0 0 / 0.1)',
          borderRadius: '0.25em',
          padding: '0 0.25em',
        }}
      >
        {props.children}
      </ins>
    ))

  return {
    title: options.title || 'Insertion',
    value: options.value || 'ins',
    blockEditor: { icon, render },
  }
}

export default ins
