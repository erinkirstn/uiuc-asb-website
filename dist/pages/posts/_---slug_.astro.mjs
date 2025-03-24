/* empty css                                     */
import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_BhOmpjMx.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_Wzi96bNS.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_-JKq6QpK.mjs';
import { $ as $$OptimizedPicture, a as $$FormattedDate } from '../../chunks/FormattedDate_CkpOG7Gt.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://verse-astro.vercel.app");
const $$RelatedPostsCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$RelatedPostsCard;
  const { currentCategory, currentSlug } = Astro2.props;
  async function getRelatedArticlesByCategory() {
    const allPosts = await getCollection("posts");
    return allPosts.filter(
      (post) => post.data.category.includes(currentCategory) && post.slug !== currentSlug
    ).sort(
      (a, b) => new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf()
    ).slice(0, 3);
  }
  const relatedPosts = await getRelatedArticlesByCategory();
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-1 gap-4 md:grid-cols-3"> ${relatedPosts.map((post) => renderTemplate`<div class="relative mb-4 overflow-hidden rounded-xl bg-white transition-transform duration-500 hover:-translate-y-1 hover:scale-105 dark:bg-neutral-900"> <a${addAttribute(`/posts/${post.slug}/`, "href")}> ${renderComponent($$result, "OptimizedCover", $$OptimizedPicture, { "src": post.data.cover, "alt": post.data.coverAlt })} <div class="absolute bottom-0 end-0 start-0 bg-gradient-to-t p-4 md:p-5"> <div class="mt-16 flex items-center gap-4 text-xs text-white"> <span>${post.data.tags.join(" ")}</span> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate })} </div> <h2 class="mt-2 text-lg font-bold text-white">${post.data.title}</h2> </div> </a> </div>`)} </div>`;
}, "/Users/erinkirsten/Desktop/asb-website/src/components/RelatedPostsCard.astro", void 0);

const $$Astro = createAstro("https://verse-astro.vercel.app");
async function getStaticPaths() {
  const posts = await getCollection("posts");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const post = Astro2.props;
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": post.data.title, "description": post.data.description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <article class="prose mx-auto dark:prose-invert"> <div class="prose-h1 text-center"> <h1>${post.data.title}</h1> </div> <div> ${post.data.cover && renderTemplate`${renderComponent($$result2, "OptimizedCover", $$OptimizedPicture, { "src": post.data.cover, "alt": post.data.coverAlt })}`} </div> <div> ${renderComponent($$result2, "Content", Content, {})} </div> <div class="prose-a:no-underline"> ${post.data.tags.map((tag) => renderTemplate`<span class="mb-2 mr-2 inline-block rounded-full bg-neutral-200 px-3 py-1 text-sm hover:bg-neutral-500 dark:bg-neutral-600"> <a${addAttribute(`/tags/${tag}/1/`, "href")}>${tag}</a> </span>`)} </div> <div class="flex justify-between"> <small>Publish on ${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate })}，Update on ${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "date": (/* @__PURE__ */ new Date()).toISOString() })}</small> </div> </article> <div class="mt-4"> ${renderComponent($$result2, "RelatedPostsCard", $$RelatedPostsCard, { "currentCategory": post.data.category[0], "currentSlug": post.slug })} </div> </main> ` })}`;
}, "/Users/erinkirsten/Desktop/asb-website/src/pages/posts/[...slug].astro", void 0);

const $$file = "/Users/erinkirsten/Desktop/asb-website/src/pages/posts/[...slug].astro";
const $$url = "/posts/[...slug]/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
