import SvelteDemo from "./Addition.svelte";
import SvelteCode from "./Addition.svelte?raw";
// import VueDemo from "./Addition.vue";
// import VueCode from "./Addition.vue?raw";
import ReactDemo from "./Addition.tsx";
import ReactCode from "./Addition.tsx?raw";

export default {
  svelte: {
    demo: SvelteDemo,
    code: SvelteCode,
  },
  // vue: {
  //   demo: VueDemo,
  //   code: VueCode,
  // },
  react: {
    demo: ReactDemo,
    code: ReactCode,
  },
};
