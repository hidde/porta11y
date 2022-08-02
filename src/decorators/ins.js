import React from 'react'
import { VscDiffAdded } from 'react-icons/vsc'

/**
 * @param {Object} [options = {}] - Options for the decorator
 * @param {String} [options.title = "Insertion"] - Title for the decorator
 * @param {String} [options.value = "ins"] - Value of the decorator
 * @param {ReactElement} [options.icon = VSC “DiffAdded” icon] - JSX for the toolbar icon
 * @param {ReactComponent} [options.Component = "ins"] - Portable Text renderer
 */
function ins(options = {}) {
  const icon = options.icon || VscDiffAdded
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
