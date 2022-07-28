/**
 * @param {Object} [options = {}] - Options for the annotation
 * @param {String} [options.title = "Language switcher"] - Title for the annotation
 * @param {String} [options.name = "lang"] - Name of the annotation
 * @param {String} [options.fieldTitle = "Language tag"] - Title for the field
 * @param {String} [options.fieldName = "tag"] - Name of the field
 * @param {RegExp} [options.regex = /^[a-z]+(-[a-z]+)?$/i] - Validation regex
 * @param {String} [options.regexName = "language tag"] - Name of the regex
 */
function lang(options = {}) {
  const validation = Rule =>
    Rule.required().regex(options.regex || /^[a-z]+(-[a-z]+)?$/i, {
      name: options.regexName || 'language tag',
    })

  const tag = {
    title: options.fieldTitle || 'Language tag',
    name: options.fieldName || 'tag',
    type: 'string',
    validation,
  }

  return {
    title: options.title || 'Language switcher',
    name: options.lang || 'lang',
    type: 'object',
    fields: [tag],
  }
}

export default lang
