/* empty css                                  */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BhOmpjMx.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, a as $$Icon } from '../chunks/BaseLayout_-JKq6QpK.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const title = `Error 404`;
  const description = `Error 404`;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main id="content"> <div class="text-center py-10 px-4 sm:px-6 lg:px-8"> <h1 class="block text-7xl font-bold text-gray-800 sm:text-9xl dark:text-white">404</h1> <p class="mt-3 text-gray-600 dark:text-neutral-400">Oops, something went wrong.</p> <p class="text-gray-600 dark:text-neutral-400">Sorry, we couldn't find your page.</p> <div class="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3"> <a class="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-neutral-400 text-white hover:bg-neutral-600 disabled:opacity-50 disabled:pointer-events-none" href="/"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:chevron-left", "class": "icon-base" })}
Back to homepage
</a> </div> </div> </main> ` })}`;
}, "/Users/erinkirsten/Desktop/asb-website/src/pages/404.astro", void 0);

const $$file = "/Users/erinkirsten/Desktop/asb-website/src/pages/404.astro";
const $$url = "/404/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
