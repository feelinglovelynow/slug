<script>
  import { slug } from './slug.js'

  /** @type { string } */
  let response

  /** @param { any } e */
  function setResponse (e) {
    /** @type { HTMLInputElement } */
    const target = e.target
    response = slug(target.value)
  }
</script>


<div class="fln__slug">
  <textarea on:input={ setResponse } />
  { #if response }
    <div class="fln__slug__generated">{ response }</div>
  { /if }
</div>


<style>
  .fln__slug {
    font-size: 15px;
    line-height: 1.369;
    font-family: Inter, ui-sans-serif, system-ui;
  }

  textarea {
    width: 270px;
    aspect-ratio: 1.618 / 1;
    outline: 0;
    padding: 6px 9px;
    line-height: 1.369;
    font-size: 15px;
    border-radius: 9px;
    border: 1px solid #ced3d6;
    font-family: Inter, ui-sans-serif, system-ui;
  }
</style>
