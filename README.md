# as-guis (WIP)

Basically some component examples and [7guis](https://eugenkiss.github.io/7guis/) tasks implemented in [Angular](https://angular.io/), [Next](https://nextjs.org/) ([React](https://reactjs.org/)), [Nuxt](https://v3.nuxtjs.org/) ([Vue](https://vuejs.org/)) and [SvelteKit](https://kit.svelte.dev/) ([Svelte](https://svelte.dev/)).

View live versions for [Angular](https://as-guis-angular.netlify.app/), [Next](https://as-guis-next.vercel.app/), [Nuxt](https://as-guis-nuxt.netlify.app/) and [SvelteKit](https://as-guis-sveltekit.netlify.app/).

View source code for [Angular](/angular), [Next](/next), [Nuxt](/nuxt) and [SvelteKit](/sveltekit).

---

Below I compare component syntax for these technologies.

Character counts done with VSCode with code formatted using Prettier (with default SvelteKit `.prettierrc`) and with as few empty lines as Prettier allows.

Click the name of the technology in the tables to view source of each component.

## 00 - Hello World

Task: Show the text "Hello World".
This is the most minimal component you can make, which lets us closely inspect how the technology deals with components.

|                          | [Angular][00-angular]              | [Next][00-next]        | [Nuxt][00-nuxt]       | [SvelteKit][00-sveltekit] |
| ------------------------ | ---------------------------------- | ---------------------- | --------------------- | ------------------------- |
| character count          | 150                                | 57                     | 33                    | 12                        |
| component declared as    | class with `@Component` decorator  | function returning JSX | SFC (`.vue`)          | SFC (`.svelte`)           |
| component imported in    | class with `@NgModule` decorator   | parent component       | (done automatically)  | parent component          |
| self closing tag allowed | ❌                                 | ✅                     | ✅                    | ✅                        |
| renders wrapper element  | ❌                                 | ✅                     | ✅                    | ✅                        |
| notes                    | template (linked) inside decorator | requires fragment      | requires `<template>` |                           |

[00-angular]: /angular/src/app/components/hello-world.component.ts
[00-next]: /next/lib/HelloWorld.tsx
[00-nuxt]: /nuxt/components/HelloWorld.vue
[00-sveltekit]: /sveltekit/src/lib/HelloWorld.svelte

## 01 - [Counter](https://eugenkiss.github.io/7guis/tasks#counter)

Binding count state in a `<span>` and handling click event from a `<button>`.

|                       | [Angular][01-angular]      | [Next][01-next]                        | [Nuxt][01-nuxt]                                     | [SvelteKit][01-sveltekit] |
| --------------------- | -------------------------- | -------------------------------------- | --------------------------------------------------- | ------------------------- |
| character count       | 266                        | 258                                    | 228                                                 | 162                       |
| declaring state as    | class property             | variable + destructuring function call | variable + function call                            | variable                  |
| setting state         | mutation of class property | calling function                       | assigning variable property                         | assigning variable        |
| binding state to view | double curly braces        | curly braces                           | double curly braces                                 | curly braces              |
| adding event listener | `(click)="increment()"`    | `onClick={increment}`                  | `@click="increment"` or <br> `@click="increment()"` | `on:click={increment}`    |

[01-angular]: /angular/src/app/components/counter.component.ts
[01-next]: /next/lib/Counter.tsx
[01-nuxt]: /nuxt/components/Counter.vue
[01-sveltekit]: /sveltekit/src/lib/Counter.svelte

## 02 - [Temperature Converter](https://eugenkiss.github.io/7guis/tasks/#temp)

Bidirectional data flow.

|                 | [Angular][02-angular] | [Next][02-next]                                                | [Nuxt][02-nuxt] | [SvelteKit][02-sveltekit] |
| --------------- | --------------------- | -------------------------------------------------------------- | --------------- | ------------------------- |
| character count | 547                   | 734                                                            | 505             | 387                       |
| two way binding | `[(ngModel)]="c"`     | none (manually set value on in event listener)                 | `v-model="c"`   | `bind:value={c}`          |
| notes           |                       | can't have undefined initial value;<br> ts requires unary plus |                 |                           |

[02-angular]: /angular/src/app/components/temperature-converter.component.ts
[02-next]: /next/lib/TemperatureConverter.tsx
[02-nuxt]: /nuxt/components/TemperatureConverter.vue
[02-sveltekit]: /sveltekit/src/lib/TemperatureConverter.svelte

---

# Further UI benchmarks

Maybe coming in the future:

- [] [Flight Booker](https://eugenkiss.github.io/7guis/tasks/#flight)
- [] [Timer](https://eugenkiss.github.io/7guis/tasks/#timer)
- [] [CRUD](https://eugenkiss.github.io/7guis/tasks/#crud)
- [] [Circle Drawer](https://eugenkiss.github.io/7guis/tasks/#circle)
- [] [Cells](https://eugenkiss.github.io/7guis/tasks/#cells)
- [] [Flux Challenge](https://github.com/staltz/flux-challenge)
- [] [ThreaditJS](http://threaditjs.com/)

Benchmarks with existing examples in all technologies (though partly outdated):

- [TodoMVC](https://codebase.show/projects/todomvc)
- [RealWorld App](https://codebase.show/projects/realworld)
- [HackerNewsPWA](https://hnpwa.com/)
