import React from 'react'
import { VscDiffRemoved } from 'react-icons/vsc'

/**
 * @param {Object} [options = {}] - Options for the decorator
 * @param {String} [options.title = "Deletion"] - Title for the decorator
 * @param {String} [options.value = "del"] - Value of the decorator
 * @param {ReactElement} [options.icon = VSC “DiffRemoved” icon] - JSX for the toolbar icon
 * @param {ReactComponent} [options.Component = "del"] - Portable Text renderer
 */
function del(options = {}) {
  const icon = options.icon || VscDiffRemoved
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
