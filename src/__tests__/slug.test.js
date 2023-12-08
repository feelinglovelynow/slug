import Slug from '../Slug.svelte'
import { slug } from '../slug.js'
import { describe, test, expect } from '@jest/globals'
import { render, fireEvent } from '@testing-library/svelte'


const options = [
  null,
  undefined,
  9,
  '',
  ' ,.:foo ?!½)(@#$%^&*   ;\'"{}[]|/`~bar    <>_=+&¢£¥hello €© world®    123™·’\\ ',
]


describe('slug()', () => {
  test('creates a slug', () => {
    for (let i = 0; i < options.length; i++) {
      // @ts-ignore
      if (i === 4) expect(slug(options[i])).toEqual('foo-bar-hello-world-123')
      // @ts-ignore
      else expect(slug(options[i])).toEqual('')
    }
  })
})


describe('Slug.svelte', () => {
  test('creates a slug', async () => {
    const base = '<div><div class="fln__slug svelte-1b48ov3"><textarea class="svelte-1b48ov3"></textarea> </div></div>'
    document.body.innerHTML = ''
    render(Slug)
    expect(document.body.innerHTML).toEqual(base)

    const textarea = document.querySelector('textarea')

    if (textarea) {
      for (let i = 0; i < options.length; i++) {
        if (typeof options[i] === 'string') {
          // @ts-ignore
          textarea.value = options[i]

          await fireEvent(textarea, new InputEvent('input') )

          if (i === 3) expect(document.body.innerHTML).toEqual(base)
          else if (i === 4) expect(document.body.innerHTML).toEqual('<div><div class=\"fln__slug svelte-1b48ov3\"><textarea class=\"svelte-1b48ov3\"></textarea> <div class=\"fln__slug__generated\">foo-bar-hello-world-123</div></div></div>')
        }
      }
    }
  })
})
