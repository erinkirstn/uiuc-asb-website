import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_BhOmpjMx.mjs';
import 'kleur/colors';
import { $ as $$OptimizedPicture, a as $$FormattedDate } from './FormattedDate_BZgUvJJR.mjs';
import { a as $$Icon } from './BaseLayout_BClVjHar.mjs';

const $$Astro$1 = createAstro("https://verse-astro.vercel.app");
const $$CommonCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CommonCard;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative overflow-hidden rounded-xl bg-white transition-transform duration-500 hover:-translate-y-1 hover:scale-105 dark:bg-neutral-900"> <a${addAttribute(`/posts/${post.slug}/`, "href")} class="block"> ${renderComponent($$result, "OptimizedCover", $$OptimizedPicture, { "src": post.data.cover, "alt": post.data.coverAlt })} <div class="absolute bottom-0 end-0 start-0 bg-gradient-to-t p-5 md:p-6"> <div class="mt-16 flex items-center gap-4 text-xs text-white"> <span>${post.data.tags.join(" ")}</span> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate })} </div> <h3 class="mt-2 text-lg font-bold text-white">${post.data.title}</h3> </div> </a> </div>`;
}, "/Users/erinkirsten/Desktop/asb-website/src/components/CommonCard.astro", void 0);

const $$Astro = createAstro("https://verse-astro.vercel.app");
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pagination;
  const {
    currentPage,
    lastPage,
    urlPrev,
    urlNext,
    basePath,
    maxDisplayedPages = 5
  } = Astro2.props;
  const startPage = Math.max(
    1,
    Math.min(
      currentPage - Math.floor(maxDisplayedPages / 2),
      lastPage - maxDisplayedPages + 1
    )
  );
  const endPage = Math.min(lastPage, startPage + maxDisplayedPages - 1);
  function ensureTrailingSlash(path) {
    return path.endsWith("/") ? path : `${path}/`;
  }
  const computedBasePath = basePath ? ensureTrailingSlash(basePath) : "/page/";
  return renderTemplate`${maybeRenderHead()}<nav class="mt-8 flex items-center justify-center gap-x-1" aria-label="Pagination"> ${urlPrev ? renderTemplate`<a${addAttribute(ensureTrailingSlash(urlPrev), "href")} aria-label="Previous page" class="inline-flex min-h-[38px] min-w-[38px] items-center justify-center gap-x-1.5 rounded-lg px-2.5 py-2 text-sm text-neutral-800 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:chevron-left", "class": "icon-base" })} </a>` : ""} <ul class="flex items-center gap-x-1"> ${Array.from({ length: endPage - startPage + 1 }, (_, i) => {
    const pageNumber = startPage + i;
    const isActive = currentPage === pageNumber;
    const pageClass = `min-h-[38px] min-w-[38px] flex justify-center items-center py-2 px-3 text-sm rounded-lg ${isActive ? "bg-neutral-200 focus:bg-neutral-300 dark:bg-neutral-600 dark:focus:bg-neutral-500 dark:text-white" : "text-neutral-800 hover:bg-neutral-100 focus:outline-none focus:bg-neutral-100 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"}`;
    return renderTemplate`<li> <a${addAttribute(`${computedBasePath}${pageNumber}/`, "href")}${addAttribute(pageClass, "class")}${addAttribute(isActive ? "page" : void 0, "aria-current")}> ${pageNumber} </a> </li>`;
  })} </ul> ${urlNext ? renderTemplate`<a${addAttribute(ensureTrailingSlash(urlNext), "href")} aria-label="Next page" class="inline-flex min-h-[38px] min-w-[38px] items-center justify-center gap-x-1.5 rounded-lg px-2.5 py-2 text-sm text-neutral-800 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:chevron-right", "class": "icon-base" })} </a>` : ""} </nav>`;
}, "/Users/erinkirsten/Desktop/asb-website/src/components/Pagination.astro", void 0);

export { $$CommonCard as $, $$Pagination as a };
