/**
 * Helper function to create a slug (does not require Svelte)
 * @param { string } value 
 * @returns string
 */
export function slug (value) {
  let response = ''

  if (value) {
    response = value.toLowerCase()
      .replace(/[\,\.\:\?\!\½\)\(\@\#\$\%\^\&\*\;\'\"\{\}\[\]\\\|\/\`\~\<\>\_\=\+\&\¢\£\¥\€\©\®\™\·\’]/g, '')
      .trim()
      .replace(/\s/g, '-')
  }

  return response
}
