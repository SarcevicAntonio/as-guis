import SvelteDemo from "./HelloWorld.svelte";
import SvelteCode from "./HelloWorld.svelte?raw";
import VueDemo from "./HelloWorld.vue";
import VueCode from "./HelloWorld.vue?raw";



export default {
  svelte: {
    demo: SvelteDemo,
    code: SvelteCode,
  },
  vue: {
    demo: VueDemo,
    code: VueCode,
  },
};
