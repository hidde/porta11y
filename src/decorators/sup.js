import React from 'react'
import { MdSuperscript } from 'react-icons/md'

/**
 * @param {Object} [options = {}] - Options for the decorator
 * @param {String} [options.title = "Sup"] - Title for the decorator
 * @param {String} [options.value = "sup"] - Value of the decorator
 * @param {ReactElement} [options.icon = Material Design “Superscript” icon] - JSX for the toolbar icon
 * @param {ReactComponent} [options.Component = "sup"] - Portable Text renderer
 */
function sup(options = {}) {
  const icon = options.icon || MdSuperscript
  const render = options.Component || 'sup'

  return {
    title: options.title || 'Sup',
    value: options.value || 'sup',
    blockEditor: { icon, render },
  }
}

export default sup
