/* empty css                                  */
import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, e as renderScript, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_BhOmpjMx.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BClVjHar.mjs';
import { a as SITE_TITLE, b as SEARCH_PAGE_DESCRIPTION, c as SEARCH_PAGE_TITLE } from '../chunks/consts_BvU6ORtR.mjs';
import 'clsx';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://verse-astro.vercel.app");
const $$Search$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search$1;
  const { id, className, query, uiOptions = {} } = Astro2.props;
  const bundlePath = `${"/"}pagefind/`;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")}${addAttribute([className, "pagefind-init"], "class:list")} data-pagefind-ui${addAttribute(bundlePath, "data-bundle-path")}${addAttribute(query, "data-query")}${addAttribute(JSON.stringify(uiOptions), "data-ui-options")}></div> ${renderScript($$result, "/Users/erinkirsten/Desktop/asb-website/node_modules/astro-pagefind/src/components/Search.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/erinkirsten/Desktop/asb-website/node_modules/astro-pagefind/src/components/Search.astro", void 0);

const $$Search = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": SEARCH_PAGE_TITLE, "description": SEARCH_PAGE_DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <section class="mx-auto w-full max-w-screen-2xl px-4 md:px-6 pb-32"> <div class="min-h-[500px] flex flex-col items-center justify-start pt-6 mt-32"> <a href="/" class="mb-4 flex-none text-xl font-semibold text-neutral-900 hover:text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-200">${SITE_TITLE}</a> <div class="w-full max-w-[500px] h-auto max-h-[500px] md:w-[400px] lg:w-[500px] overflow-y-auto"> ${renderComponent($$result2, "Pagefind", $$Search$1, { "id": "search", "className": "pagefind-ui w-full h-full", "uiOptions": { showImages: false } })} </div> </div> </section> </main> ` })}`;
}, "/Users/erinkirsten/Desktop/asb-website/src/pages/search.astro", void 0);

const $$file = "/Users/erinkirsten/Desktop/asb-website/src/pages/search.astro";
const $$url = "/search/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Search,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
