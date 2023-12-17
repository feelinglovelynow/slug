import Slug from '../Slug.svelte'
import { slug } from '../slug.js'
import { describe, test, expect } from '@jest/globals'
import { render, fireEvent, screen } from '@testing-library/svelte'


const expected = 'foo-bar-hello-world-123'
const primary = ' ,.:foo ?!½)(@#$%^&*   ;\'"{}[]|/`~bar    <>_=+&¢£¥hello €© world®    123™·’\\ '
const options = [ null, undefined, 9, '', primary ]


describe('slug()', () => {
  test('creates a slug', () => {
    for (let i = 0; i < options.length; i++) {
      // @ts-ignore
      if (i === 4) expect(slug(options[i])).toEqual(expected)
      // @ts-ignore
      else expect(slug(options[i])).toEqual('')
    }
  })
})


describe('Slug.svelte', () => {
  test('creates a slug', async () => {
    expect(screen.queryByText(expected)).toBeFalsy()

    const { queryByText, getByText, container } = render(Slug)
    const base = '<div><div class="fln__slug svelte-1b48ov3"><textarea class="svelte-1b48ov3"></textarea> </div></div>'

    expect(container.innerHTML).toEqual(base)

    const textarea = document.querySelector('textarea')

    if (textarea) {
      for (let i = 0; i < options.length; i++) {
        if (typeof options[i] === 'string') {
          // @ts-ignore
          textarea.value = options[i]

          await fireEvent(textarea, new InputEvent('input'))

          if (i === 3) expect(queryByText(expected)).toBeFalsy()
          else if (i === 4) expect(queryByText(expected)).toBeTruthy()
        }
      }
    }
  })
})
