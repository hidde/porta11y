
/**
 * @param {Block[]} blocks - Portable Text AST
 * @param {Object} [options = {}] - Options for the validation
 * @param {RegExp} [options.regex = /\n\s*[-*+–—]/] - Validation regex
 * @param {String} [options.message = "This looks like a list, but it is plain text. Use the bulleted list option."] - Message to display when the validation triggers
 */

function noFakeLists(blocks, options = {}) {
  const fakeListBlocks = (blocks || []).filter(
    block =>
      block._type === 'block' &&
      block.children.some(blockPart =>
        blockPart._type === 'span' &&
        blockPart.text.match(options.regex || /\n\s*[-*+–—]/)
      )
  ).map(
    (block, index) => [{_key: block._key}] || [index]
  ) || [];

  return fakeListBlocks.length === 0
    ? true
    : {
        message: options.message || 'This looks like a list, but it is plain text. Use the bulleted list option.',
        paths: fakeListBlocks
      }
}

export default noFakeLists

