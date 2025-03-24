/* empty css                                        */
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_BhOmpjMx.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../../chunks/_astro_content_Wzi96bNS.mjs';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_-JKq6QpK.mjs';
import { $ as $$CommonCard } from '../../../chunks/CommonCard_DeQJgvEu.mjs';
import { g as getCategoryMetadata } from '../../../chunks/consts_BvU6ORtR.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://verse-astro.vercel.app");
async function getStaticPaths() {
  const allPosts = await getCollection("posts");
  const uniqueCategory = [
    ...new Set(allPosts.map((post) => post.data.category).flat())
  ];
  return uniqueCategory.flatMap((category) => {
    const filteredPosts = allPosts.filter(
      (post) => post.data.category.includes(category)
    );
    filteredPosts.sort(
      (a, b) => new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf()
    );
    const pageSize = 12;
    const totalPages = Math.ceil(filteredPosts.length / pageSize);
    return Array.from({ length: totalPages }, (_, index) => ({
      params: { category, page: (index + 1).toString() },
      props: {
        page: {
          data: filteredPosts.slice(index * pageSize, (index + 1) * pageSize),
          currentPage: index + 1,
          lastPage: totalPages
        }
      }
    }));
  });
}
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const params = Astro2.params;
  const { page } = Astro2.props;
  const { title, description } = getCategoryMetadata(params.category);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"> ${page.data.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$CommonCard, { "post": post })}`)} </div>  ` })}`;
}, "/Users/erinkirsten/Desktop/asb-website/src/pages/category/[category]/[page].astro", void 0);

const $$file = "/Users/erinkirsten/Desktop/asb-website/src/pages/category/[category]/[page].astro";
const $$url = "/category/[category]/[page]/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$page,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
