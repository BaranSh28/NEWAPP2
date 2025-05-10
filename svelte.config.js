import { vitePreprocess } from 'svelte';
import adapter from '@sveltejs/adapter-vercel';

const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter()
  }
};

export default config;
