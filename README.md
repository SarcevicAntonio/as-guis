<img src="favicon.svg" width="64" height="64" alt="" />

# as-guis (WIP)

Basically some component examples and [7guis](https://eugenkiss.github.io/7guis/) tasks implemented in [Angular](https://angular.io/), [Next](https://nextjs.org/) ([React](https://reactjs.org/)), [Nuxt](https://v3.nuxtjs.org/) ([Vue](https://vuejs.org/)), [SvelteKit](https://kit.svelte.dev/) ([Svelte](https://svelte.dev/)) and [Marko](https://markojs.com/) (using the [new Tags API](https://dev.to/ryansolid/introducing-the-marko-tags-api-preview-37o4)).

View live versions for [Angular](https://as-guis-angular.netlify.app/), [Next](https://as-guis-next.vercel.app/), [Nuxt](https://as-guis-nuxt.netlify.app/) and [SvelteKit](https://as-guis-sveltekit.netlify.app/).

View source code for [Angular](/angular), [Next](/next), [Nuxt](/nuxt) and [SvelteKit](/sveltekit).

---

Below I compare component syntax for these technologies.

- All except Marko are using TypeScript (which gives Marko an advantage in this comparison when it comes to character count, maybe TypeScript should be stripped for all or have a separate comparison)
- Character counts done with VSCode with code formatted using Prettier (with default SvelteKit `.prettierrc`) and with as few empty lines as Prettier allows.
- Trying to get the tersest valid syntax that doesn't give framework warnings / ts errors (with framework default tsconfig; might need to unify tsconfigs later).

Click the name of the technology in the tables to view source of each component.

## 00 - Hello World

Task: Show the text "Hello World".
This is the most minimal component you can make, which lets us closely inspect how the technology deals with components.

|                             | [Angular][00-angular]             | [Next][00-next]        | [Nuxt][00-nuxt]         | [SvelteKit][00-sveltekit] | [Marko][00-marko]                         |
| --------------------------- | --------------------------------- | ---------------------- | ----------------------- | ------------------------- | ----------------------------------------- |
| character count             | 150                               | 57                     | 33                      | 12                        | 14 (because of concise mode)              |
| component declared as       | class with `@Component` decorator | function returning JSX | SFC (`.vue`)            | SFC (`.svelte`)           | SFC (`.marko`)                            |
| component imported in       | class with `@NgModule` decorator  | parent component       | _auto-import_           | parent component          | _auto-import_                             |
| self closing tag allowed    | ❌                                | ✅                     | ✅                      | ✅                        | ✅                                        |
| renders w/o wrapper element | ❌                                | ✅                     | ✅                      | ✅                        | ✅                                        |
| template / markup           | linked / defined inside decorator | JSX, requires fragment | defined in `<template>` | defined at top level      | defined at top level, two modes available |

[00-angular]: /angular/src/app/components/hello-world.component.ts
[00-next]: /next/lib/HelloWorld.tsx
[00-nuxt]: /nuxt/components/HelloWorld.vue
[00-sveltekit]: /sveltekit/src/lib/HelloWorld.svelte
[00-marko]: /marko/src/components/hello-world.marko

## 01 - [Counter](https://eugenkiss.github.io/7guis/tasks#counter)

Binding count state in a `<span>` and handling click event from a `<button>`.

|                       | [Angular][01-angular]      | [Next][01-next]                        | [Nuxt][01-nuxt]                                     | [SvelteKit][01-sveltekit] | [Marko][01-marko]   |
| --------------------- | -------------------------- | -------------------------------------- | --------------------------------------------------- | ------------------------- | ------------------- |
| character count       | 266                        | 258                                    | 201                                                 | 160                       | 97                  |
| declaring state as    | class property             | variable + destructuring function call | variable + function call                            | variable                  | let tag (variable)  |
| setting state         | mutation of class property | calling function                       | assigning variable property                         | assigning variable        | assigning variable  |
| binding state to view | double curly braces        | curly braces                           | double curly braces                                 | curly braces              | dollar curly braces |
| adding event listener | `(click)="increment()"`    | `onClick={increment}`                  | `@click="increment"` or <br> `@click="increment()"` | `on:click={increment}`    | `onClick=increment` |
| notes                 |                            |                                        | auto-import of Reactivity APIs                      |                           |

[01-angular]: /angular/src/app/components/counter.component.ts
[01-next]: /next/lib/Counter.tsx
[01-nuxt]: /nuxt/components/Counter.vue
[01-sveltekit]: /sveltekit/src/lib/Counter.svelte
[01-marko]: /marko/src/components/counter.marko

## 02 - [Temperature Converter](https://eugenkiss.github.io/7guis/tasks/#temp)

Bidirectional data flow.

|                 | [Angular][02-angular] | [Next][02-next]                                                | [Nuxt][02-nuxt] | [SvelteKit][02-sveltekit] |
| --------------- | --------------------- | -------------------------------------------------------------- | --------------- | ------------------------- |
| character count | 547                   | 734                                                            | 478             | 387                       |
| two way binding | `[(ngModel)]="c"`     | none (manually set value on in event listener)                 | `v-model="c"`   | `bind:value={c}`          |
| notes           |                       | can't have undefined initial value;<br> ts requires unary plus |                 |                           |

[02-angular]: /angular/src/app/components/temperature-converter.component.ts
[02-next]: /next/lib/TemperatureConverter.tsx
[02-nuxt]: /nuxt/components/TemperatureConverter.vue
[02-sveltekit]: /sveltekit/src/lib/TemperatureConverter.svelte

## 03 - [Flight Booker](https://eugenkiss.github.io/7guis/tasks/#flight)

|                           | [Angular][03-angular]                                       | [Next][03-next] + [module.css][03-next-styles]        | [Nuxt][03-nuxt]                    | [SvelteKit][03-sveltekit]             |
| ------------------------- | ----------------------------------------------------------- | ----------------------------------------------------- | ---------------------------------- | ------------------------------------- |
| character count           | 1965                                                        | 1454                                                  | 1122                               | 985                                   |
| constraints / reactivity  | subscribing on `FormControl` `valueChanges` + unsubscribing | variables get re-declared every update                | variable + function call           | labeled variable                      |
| scoped css                | linked / defined inside decorator                           | imports from `.module.css`                            | defined in `<styles scoped>`       | defined `<styles>`                    |
| conditional class         | `[class.error]="startInvalid"`                              | `className={startInvalid ? styles.error : undefined}` | `:class="{ error: startInvalid }"` | `class:error={startInvalid}`          |
| class attribute initially | `ng-untouched ng-pristine` _(formControl status)_           | _(correctly missing)_                                 | _(empty)_                          | `s-AlKFmgiKvTi_` _(css scoping hash)_ |

[03-angular]: /angular/src/app/components/flight-booker.component.ts
[03-next]: /next/lib/FlightBooker.tsx
[03-next-styles]: /next/lib/FlightBooker.module.css
[03-nuxt]: /nuxt/components/FlightBooker.vue
[03-sveltekit]: /sveltekit/src/lib/FlightBooker.svelte

## [Addition](https://svelte.dev/blog/write-less-code)

|                 | [Angular][add-angular] | [Next][add-next] | [Nuxt][add-nuxt] | [SvelteKit][add-sveltekit] |
| --------------- | ---------------------- | ---------------- | ---------------- | -------------------------- |
| character count |                        | 447              |                  | 150                        |

<!-- [add-angular]: /angular/src/app/components/flight-booker.component.ts -->

[add-next]: /next/lib/Addition.tsx

<!-- [add-nuxt]: /nuxt/components/FlightBooker.vue -->

[add-sveltekit]: /sveltekit/src/lib/Addition.svelte

---

# Further UI benchmarks

Maybe coming in the future:

- custom table component
- [Timer](https://eugenkiss.github.io/7guis/tasks/#timer)
- [CRUD](https://eugenkiss.github.io/7guis/tasks/#crud)
- [Circle Drawer](https://eugenkiss.github.io/7guis/tasks/#circle)
- [Cells](https://eugenkiss.github.io/7guis/tasks/#cells)
- [Flux Challenge](https://github.com/staltz/flux-challenge)
- [ThreaditJS](http://threaditjs.com/)

Benchmarks with existing examples in all technologies (though partly outdated):

- [TodoMVC](https://codebase.show/projects/todomvc)
- [RealWorld App](https://codebase.show/projects/realworld)
- [HackerNewsPWA](https://hnpwa.com/)
