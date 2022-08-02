import React from 'react'
import { MdSubscript } from 'react-icons/md'

/**
 * @param {Object} [options = {}] - Options for the decorator
 * @param {String} [options.title = "Sub"] - Title for the decorator
 * @param {String} [options.value = "sub"] - Value of the decorator
 * @param {ReactElement} [options.icon = Material Design “Subscript” icon] - JSX for the toolbar icon
 * @param {ReactComponent} [options.Component = "sub"] - Portable Text renderer
 */
function sub(options = {}) {
  const icon = options.icon || MdSubscript
  const render = options.Component || 'sub'

  return {
    title: options.title || 'Sub',
    value: options.value || 'sub',
    blockEditor: { icon, render },
  }
}

export default sub
