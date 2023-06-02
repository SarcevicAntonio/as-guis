import SvelteDemo from "./HelloWorld.svelte";
import SvelteCode from "./HelloWorld.svelte?raw";
import VueDemo from "./HelloWorld.vue";
import VueCode from "./HelloWorld.vue?raw";
import ReactDemo from "./HelloWorld.tsx";
import ReactCode from "./HelloWorld.tsx?raw";

export default {
  svelte: {
    demo: SvelteDemo,
    code: SvelteCode,
  },
  vue: {
    demo: VueDemo,
    code: VueCode,
  },
  react: {
    demo: ReactDemo,
    code: ReactCode,
  },
};
