import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from 'svelte-preprocess';

export default {
  kit: {
    adapter: adapter()
  },
  preprocess: vitePreprocess()
};
