import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_BhOmpjMx.mjs';
import 'kleur/colors';
import { $ as $$OptimizedPicture, a as $$FormattedDate } from './FormattedDate_B9xjBXVO.mjs';

const $$Astro = createAstro("https://verse-astro.vercel.app");
const $$CommonCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CommonCard;
  const { post } = Astro2.props;
  const image = (await import(post.data.cover)).default;
  return renderTemplate`${maybeRenderHead()}<div class="relative overflow-hidden rounded-xl bg-white transition-transform duration-500 hover:-translate-y-1 hover:scale-105 dark:bg-neutral-900"> <a${addAttribute(`/posts/${post.slug}/`, "href")} class="block"> ${renderComponent($$result, "OptimizedCover", $$OptimizedPicture, { "src": image, "alt": post.data.coverAlt })} <div class="absolute bottom-0 end-0 start-0 bg-gradient-to-t p-5 md:p-6"> <div class="mt-16 flex items-center gap-4 text-xs text-white"> <span>${post.data.tags.join(" ")}</span> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate })} </div> <h3 class="mt-2 text-lg font-bold text-white">${post.data.title}</h3> </div> </a> </div>`;
}, "/Users/erinkirsten/Desktop/asb-website/src/components/CommonCard.astro", void 0);

export { $$CommonCard as $ };
