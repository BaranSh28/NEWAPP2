import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/node';

export default {
  kit: {
    adapter: adapter()
  },
  preprocess: vitePreprocess()
};
