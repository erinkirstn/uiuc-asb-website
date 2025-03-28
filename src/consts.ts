// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Base Page Metadata, src/layouts/BaseLayout.astro
export const BRAND_NAME = "UIUC ASB";
export const SITE_TITLE = "UIUC ASB";
export const SITE_DESCRIPTION = "An Astro Theme for Visual Storytelling";

// Tags Page Metadata, src/pages/tags/index.astro
export const Tags_TITLE = "UIUC ASB - All Tags";
export const Tags_DESCRIPTION =
  "UIUC ASB - All tags and the count of articles related to each tag";

// Tags Page Metadata, src/pages/tags/[tag]/[page].astro
export function getTagMetadata(tag: string) {
  return {
    title: `All articles on '${tag}' tag in AstroVerse`,
    description: `Explore articles about ${tag} for different perspectives and in-depth analysis.`,
  };
}

// Category Page Metadata, src/pages/category/[category]/[page].astro
export function getCategoryMetadata(category: string) {
  return {
    title: `All articles in '${category}' category in AstroVerse`,
    description: `Browse all articles under the ${category} category in AstroVerse`,
  };
}

// Header Links, src/components/Header.astro
export const HeaderLinks = [
  { href: "/category/One/1/", title: "About" },
  { href: "/category/Two/1/", title: "Past Trips" },
  { href: "/category/Three/1/", title: "Get Involved" },
];

// Footer Links, src/components/Footer.astro
export const FooterLinks = [
  { href: "/posts/about-asb/", title: "About" },
  // { href: "/posts/tailwind-typography/", title: "Tailwind" },
  // { href: "/tags/", title: "Tags" },
];

// Social Links, src/components/Footer.astro
export const SocialLinks = [
  {
    href: "https://instagram.com/uiucasb",
    icon: "tabler:brand-instagram",
    label: "Instagram",
  },
  {
    href: "https://groupme.com/join_group/102575310/I95oBRYy",
    icon: "groupme-logo",
    label: "Groupme",
  },
  {
    href: "mailto:asb@universityymca.org",
    icon: "tabler:mail",
    label: "Mail",
  },
  
];

// Search Page Metadata, src/pages/search.astro
export const SEARCH_PAGE_TITLE = `${SITE_TITLE} - Site Search`;
export const SEARCH_PAGE_DESCRIPTION = `Search all content on ${SITE_TITLE}`;
