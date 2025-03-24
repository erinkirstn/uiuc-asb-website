import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_BhOmpjMx.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Picture } from './_astro_assets_goMRRygA.mjs';
import 'clsx';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';

const $$Astro$1 = createAstro("https://verse-astro.vercel.app");
const $$OptimizedPicture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$OptimizedPicture;
  const {
    src,
    alt,
    widths = [392, 700, 980, 1960],
    sizes = `(max-width: 360px) 392px, 
           (max-width: 720px) 700px, 
           (max-width: 1600px) 980px, 
           1960px`,
    formats = ["avif"],
    fallbackFormat = "avif",
    class: className = "mx-auto w-full max-w-full rounded-lg"
  } = Astro2.props;
  console.log(src);
  const image = (await import(src)).default;
  return renderTemplate`${renderComponent($$result, "Picture", $$Picture, { "src": image, "alt": "description", "widths": widths, "sizes": sizes, "formats": formats, "fallbackFormat": fallbackFormat, "class": className })}`;
}, "/Users/erinkirsten/Desktop/asb-website/src/components/OptimizedPicture.astro", void 0);

const $$Astro = createAstro("https://verse-astro.vercel.app");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  dayjs.extend(utc);
  const { date, format = "YYYY-MM-DD" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span>${dayjs(date).format(format)}</span>`;
}, "/Users/erinkirsten/Desktop/asb-website/src/components/FormattedDate.astro", void 0);

export { $$OptimizedPicture as $, $$FormattedDate as a };
