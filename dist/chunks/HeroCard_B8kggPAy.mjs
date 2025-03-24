import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, u as unescapeHTML, a as renderTemplate } from './astro/server_BhOmpjMx.mjs';
import 'kleur/colors';
import { $ as $$OptimizedPicture, a as $$FormattedDate } from './FormattedDate_B9xjBXVO.mjs';

const $$Astro = createAstro("https://verse-astro.vercel.app");
const $$HeroCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeroCard;
  const { post } = Astro2.props;
  function truncateUTF8String(str, maxBytes) {
    let byteCount = 0;
    let index = 0;
    while (index < str.length && byteCount < maxBytes) {
      const char = str.charCodeAt(index);
      if (char > 2047) {
        byteCount += 3;
      } else if (char > 127) {
        byteCount += 2;
      } else {
        byteCount += 1;
      }
      if (byteCount <= maxBytes) index++;
      else break;
    }
    return str.slice(0, index) + (index < str.length ? "..." : "");
  }
  truncateUTF8String(post.data.description, 150);
  const image = (await import(post.data.cover)).default;
  return renderTemplate`${maybeRenderHead()}<div class="relative overflow-hidden rounded-xl border bg-white transition-transform duration-500 hover:-translate-y-1 hover:scale-105 md:flex md:flex-row dark:border-neutral-600 dark:bg-neutral-900"> <a${addAttribute(`/posts/${post.slug}/`, "href")} class="block md:flex md:flex-1"> <div class="md:w-1/2"> ${renderComponent($$result, "OptimizedCover", $$OptimizedPicture, { "src": image, "alt": post.data.coverAlt })} </div> <div class="absolute bottom-0 end-0 start-0 bg-gradient-to-t from-black p-4 md:relative md:flex md:w-1/2 md:flex-col md:justify-start md:bg-transparent md:p-5"> <div class="mt-8 flex items-center gap-4 text-xs text-white md:text-neutral-900 dark:text-white"> <span>${post.data.tags.join(" ")}</span> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate })} </div> <h3 class="mt-3 text-2xl font-bold text-white md:text-neutral-900 dark:text-white"> ${post.data.title} </h3> <p> <!-- {post.data.description} --> </p><div class="mt-3 text-lg text-white md:text-neutral-900 dark:text-white">${unescapeHTML(post.data.description)}</div>  </div> </a> </div>`;
}, "/Users/erinkirsten/Desktop/asb-website/src/components/HeroCard.astro", void 0);

export { $$HeroCard as $ };
