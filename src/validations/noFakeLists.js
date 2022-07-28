/**
 * @param {Object} [options = {}] - Options for the validation
 * @param {RegExp} [options.regex = /^\s*[-*+–—]/] - Validation regex
 * @param {String} [options.message = "This looks like a list, but it is plain text. Use the bulleted list option."] - Message to display when the validation triggers
 */
function noFakeLists(options = {}) {
  return function (blocks) {
    const regex = options.regex || /^\s*[-*+–—]/
    const fakeListBlocks =
      (blocks || [])
        .filter(
          block =>
            block._type === 'block' &&
            block.children.some(
              blockPart =>
                blockPart._type === 'span' && regex.test(blockPart.text)
            )
        )
        .map((block, index) => [{ _key: block._key }] || [index]) || []

    return (
      fakeListBlocks.length === 0 || {
        message:
          options.message ||
          'This looks like a list, but it is plain text. Use the bulleted list option.',
        paths: fakeListBlocks,
      }
    )
  }
}

export default noFakeLists
