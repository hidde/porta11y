import React from 'react'
import { MdHorizontalRule } from 'react-icons/md'

/**
 * @param {Object} [options = {}] - Options for the decorator
 * @param {String} [options.title = "Horizontal rule"] - Title for the block
 * @param {String} [options.name = "hr"] - Name of the block
 * @param {ReactElement} [options.icon = Material Design “MdHorizontalRule” icon] - JSX for the toolbar icon
 */
function hr(options = {}) {
  return {
    title: options.title || 'Horizontal rule',
    name: options.name || 'hr',
    type: 'object',
    icon: options.icon || MdHorizontalRule,
    options: { editModal: 'popover' },
    fields: [
      {
        name: 'default',
        title: 'Obligatory field for validity',
        type: 'boolean',
        hidden: true,
        initialValue: true,
      },
    ],
    preview: {
      component: () => (
        <hr
          style={{
            position: 'absolute',
            top: '50%',
            left: '0.25rem',
            right: '0.25rem',
            transform: 'translateY(-50%)',
            margin: 0,
          }}
        />
      ),
    },
  }
}

export default hr
