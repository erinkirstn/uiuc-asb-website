/* empty css                                  */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_BhOmpjMx.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_Wzi96bNS.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_-JKq6QpK.mjs';
import { T as Tags_DESCRIPTION, e as Tags_TITLE } from '../chunks/consts_BvU6ORtR.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("posts");
  let tagCounts = {};
  allPosts.forEach((post) => {
    (post.data.tags || []).forEach((tag) => {
      if (tag in tagCounts) {
        tagCounts[tag] += 1;
      } else {
        tagCounts[tag] = 1;
      }
    });
  });
  const tags = Object.keys(tagCounts);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": Tags_TITLE, "description": Tags_DESCRIPTION }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="prose prose-lg mx-auto p-6"> <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"> ${tags.map((tag) => renderTemplate`<a${addAttribute(`/tags/${tag}/1/`, "href")} class="rounded-full bg-neutral-200 px-3 py-2 text-center text-sm font-semibold no-underline hover:bg-neutral-300"> ${tag} <span>(${tagCounts[tag]})</span> </a>`)} </div> </div> ` })}`;
}, "/Users/erinkirsten/Desktop/asb-website/src/pages/tags/index.astro", void 0);

const $$file = "/Users/erinkirsten/Desktop/asb-website/src/pages/tags/index.astro";
const $$url = "/tags/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
