/* empty css                                     */
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_BhOmpjMx.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_BA4l-VwM.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BClVjHar.mjs';
import { $ as $$HeroCard } from '../../chunks/HeroCard_DBFgJDoQ.mjs';
import { $ as $$CommonCard, a as $$Pagination } from '../../chunks/Pagination_6n4-iOK8.mjs';
import { S as SITE_DESCRIPTION, a as SITE_TITLE } from '../../chunks/consts_BvU6ORtR.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://verse-astro.vercel.app");
async function getStaticPaths() {
  const allPosts = await getCollection("posts");
  allPosts.sort(
    (a, b) => new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf()
  );
  const firstPagePosts = allPosts.slice(0, 15);
  const remainingPosts = allPosts.slice(15);
  const totalPages = 1 + Math.ceil(remainingPosts.length / 12);
  const paths = [
    {
      params: { page: "1" },
      props: {
        page: {
          data: firstPagePosts,
          currentPage: 1,
          lastPage: totalPages
        }
      }
    }
  ];
  for (let i = 2; i <= totalPages; i++) {
    const pagePosts = remainingPosts.slice((i - 2) * 12, (i - 1) * 12);
    paths.push({
      params: { page: i.toString() },
      props: {
        page: { data: pagePosts, currentPage: i, lastPage: totalPages }
      }
    });
  }
  return paths;
}
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const { page } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": SITE_TITLE, "description": SITE_DESCRIPTION }, { "default": async ($$result2) => renderTemplate`${page.currentPage === 1 ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="mb-4 grid grid-cols-1"> ${page.data.length > 0 && renderTemplate`${renderComponent($$result3, "HeroCard", $$HeroCard, { "post": page.data[0] })}`} </div> <div class="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2"> ${page.data.slice(1, 3).map((post) => renderTemplate`${renderComponent($$result3, "PostCard", $$CommonCard, { "post": post })}`)} </div> <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"> ${page.data.slice(3).map((post) => renderTemplate`${renderComponent($$result3, "PostCard", $$CommonCard, { "post": post })}`)} </div> ` })}` : renderTemplate`<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"> ${page.data.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$CommonCard, { "post": post })}`)} </div>`}${renderComponent($$result2, "Pagination", $$Pagination, { "currentPage": page.currentPage, "lastPage": page.lastPage, "urlPrev": page.currentPage > 1 ? `/page/${page.currentPage - 1}` : null, "urlNext": page.currentPage < page.lastPage ? `/page/${page.currentPage + 1}` : null, "basePath": "/page", "maxDisplayedPages": 5 })} ` })}`;
}, "/Users/erinkirsten/Desktop/asb-website/src/pages/page/[page].astro", void 0);

const $$file = "/Users/erinkirsten/Desktop/asb-website/src/pages/page/[page].astro";
const $$url = "/page/[page]/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$page,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
