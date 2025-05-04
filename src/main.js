import { mount } from 'svelte'
import Index from "./Index.svelte";
import './app.css'

const app = mount(Index, {
  target: document.getElementById('app'),
})

export default app
