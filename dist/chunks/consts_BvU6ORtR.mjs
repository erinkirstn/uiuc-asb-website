const BRAND_NAME = "UIUC ASB";
const SITE_TITLE = "UIUC ASB";
const SITE_DESCRIPTION = "An Astro Theme for Visual Storytelling";
const Tags_TITLE = "UIUC ASB - All Tags";
const Tags_DESCRIPTION = "UIUC ASB - All tags and the count of articles related to each tag";
function getTagMetadata(tag) {
  return {
    title: `All articles on '${tag}' tag in AstroVerse`,
    description: `Explore articles about ${tag} for different perspectives and in-depth analysis.`
  };
}
function getCategoryMetadata(category) {
  return {
    title: `All articles in '${category}' category in AstroVerse`,
    description: `Browse all articles under the ${category} category in AstroVerse`
  };
}
const HeaderLinks = [
  { href: "/category/One/1/", title: "About" },
  { href: "/category/Two/1/", title: "Past Trips" },
  { href: "/category/Three/1/", title: "Get Involved" }
];
const FooterLinks = [
  { href: "/posts/about-asb/", title: "About" }
  // { href: "/posts/tailwind-typography/", title: "Tailwind" },
  // { href: "/tags/", title: "Tags" },
];
const SocialLinks = [
  {
    href: "https://instagram.com/uiucasb",
    icon: "tabler:brand-instagram",
    label: "Instagram"
  },
  {
    href: "mailto:asb@universityymca.org",
    icon: "tabler:mail",
    label: "Mail"
  }
];
const SEARCH_PAGE_TITLE = `${SITE_TITLE} - Site Search`;
const SEARCH_PAGE_DESCRIPTION = `Search all content on ${SITE_TITLE}`;

export { BRAND_NAME as B, FooterLinks as F, HeaderLinks as H, SITE_DESCRIPTION as S, Tags_DESCRIPTION as T, SITE_TITLE as a, SEARCH_PAGE_DESCRIPTION as b, SEARCH_PAGE_TITLE as c, getTagMetadata as d, Tags_TITLE as e, SocialLinks as f, getCategoryMetadata as g };
