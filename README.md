# 🕉 @feelinglovelynow/slug


## 💎 Install
```bash
pnpm add @feelinglovelynow/slug
```


## 🤓 Unit Tests
![Statements](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg?style=flat)


## 🙏 Description
* Helper function to create a slug (does not require Svelte) and a Svelte component to generate slugs in the browser (requires Svelte)
* Converts `Hello World  123!` to `hello-world-123`


## 💚 How it works
1. Lowercase all letters
1. Remove anything that is not a space, a-z, or 0-9
1. Remove space at end and beginning
1. IF two or more spaces found next to each other, convert to one space
1. Convert spaces to dashes



## 💛 Example: Slug function
```ts
import { slug } from '@feelinglovelynow/slug'

// foo-bar-hello-world-123
const response = slug(' ,.:foo ?!½)(@#$%^&*   ;\'"{}[]|/`~bar    <>_=+&¢£¥hello €© world®    123™·’\\ ')
```


## 🧡 Example: Slug component
```ts
<script lang="ts">
  import { Slug } from '@feelinglovelynow/slug'
</script>

<Slug />
```


## ❤️ Add custom styling to svelte component
```scss
.fln__slug {

  textarea {

  }

  &__generated {

  }
}
```


## 🎁 All Our Packages
1. @feelinglovelynow/datetime-local: [NPM](https://www.npmjs.com/package/@feelinglovelynow/datetime-local) ⋅ [Github](https://github.com/feelinglovelynow/datetime-local)
1. @feelinglovelynow/dgraph: [NPM](https://www.npmjs.com/package/@feelinglovelynow/dgraph) ⋅ [Github](https://github.com/feelinglovelynow/dgraph)
1. @feelinglovelynow/env-write: [NPM](https://www.npmjs.com/package/@feelinglovelynow/env-write) ⋅ [Github](https://github.com/feelinglovelynow/env-write)
1. @feelinglovelynow/get-form-entries: [NPM](https://www.npmjs.com/package/@feelinglovelynow/get-form-entries) ⋅ [Github](https://github.com/feelinglovelynow/get-form-entries)
1. @feelinglovelynow/get-relative-time: [NPM](https://www.npmjs.com/package/@feelinglovelynow/get-relative-time) ⋅ [Github](https://github.com/feelinglovelynow/get-relative-time)
1. @feelinglovelynow/global-style: [NPM](https://www.npmjs.com/package/@feelinglovelynow/global-style) ⋅ [Github](https://github.com/feelinglovelynow/global-style)
1. @feelinglovelynow/jwt: [NPM](https://www.npmjs.com/package/@feelinglovelynow/jwt) ⋅ [Github](https://github.com/feelinglovelynow/jwt)
1. @feelinglovelynow/loop-backwards: [NPM](https://www.npmjs.com/package/@feelinglovelynow/loop-backwards) ⋅ [Github](https://github.com/feelinglovelynow/loop-backwards)
1. @feelinglovelynow/slug: [NPM](https://www.npmjs.com/package/@feelinglovelynow/slug) ⋅ [Github](https://github.com/feelinglovelynow/slug)
1. @feelinglovelynow/svelte-catch: [NPM](https://www.npmjs.com/package/@feelinglovelynow/svelte-catch) ⋅ [Github](https://github.com/feelinglovelynow/svelte-catch)
1. @feelinglovelynow/svelte-kv: [NPM](https://www.npmjs.com/package/@feelinglovelynow/svelte-kv) ⋅ [Github](https://github.com/feelinglovelynow/svelte-kv)
1. @feelinglovelynow/svelte-loading-anchor: [NPM](https://www.npmjs.com/package/@feelinglovelynow/svelte-loading-anchor) ⋅ [Github](https://github.com/feelinglovelynow/svelte-loading-anchor)
1. @feelinglovelynow/svelte-modal: [NPM](https://www.npmjs.com/package/@feelinglovelynow/svelte-modal) ⋅ [Github](https://github.com/feelinglovelynow/svelte-modal)
1. @feelinglovelynow/svelte-turnstile: [NPM](https://www.npmjs.com/package/@feelinglovelynow/svelte-turnstile) ⋅ [Github](https://github.com/feelinglovelynow/svelte-turnstile)
1. @feelinglovelynow/toast: [NPM](https://www.npmjs.com/package/@feelinglovelynow/toast) ⋅ [Github](https://github.com/feelinglovelynow/toast)
