/* empty css                                  */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BhOmpjMx.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_BA4l-VwM.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BClVjHar.mjs';
import { $ as $$HeroCard } from '../chunks/HeroCard_DBFgJDoQ.mjs';
import { $ as $$CommonCard, a as $$Pagination } from '../chunks/Pagination_6n4-iOK8.mjs';
import { S as SITE_DESCRIPTION, a as SITE_TITLE } from '../chunks/consts_BvU6ORtR.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("posts");
  allPosts.sort(
    (a, b) => new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf()
  );
  const postsPerPage = 15;
  const firstPagePosts = allPosts.slice(0, postsPerPage);
  const totalPages = Math.ceil(allPosts.length / postsPerPage);
  const basePath = "/page/";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": SITE_TITLE, "description": SITE_DESCRIPTION }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1"> <div class="col-span-1 mb-4"> ${firstPagePosts.length > 0 && renderTemplate`${renderComponent($$result2, "HeroCard", $$HeroCard, { "post": firstPagePosts[0] })}`} </div> <div class="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2"> ${firstPagePosts.slice(1, 3).map((post) => renderTemplate`${renderComponent($$result2, "Card", $$CommonCard, { "post": post })}`)} </div> <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"> ${firstPagePosts.slice(3).map((post) => renderTemplate`${renderComponent($$result2, "Card", $$CommonCard, { "post": post })}`)} </div> </div> ${renderComponent($$result2, "Pagination", $$Pagination, { "currentPage": 1, "lastPage": totalPages, "urlPrev": null, "urlNext": totalPages > 1 ? `/page/2` : null, "basePath": basePath, "maxDisplayedPages": 5 })} ` })}`;
}, "/Users/erinkirsten/Desktop/asb-website/src/pages/index.astro", void 0);

const $$file = "/Users/erinkirsten/Desktop/asb-website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
