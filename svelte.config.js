import { vitePreprocess } from '@sveltejs/kit/node';
import adapter from '@sveltejs/adapter-vercel';

const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter()
  }
};

export default config;
