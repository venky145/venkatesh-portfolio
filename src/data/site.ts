export const site = {
  name: "Venkatesh Mandapati",
  role: "Mobile Engineer — iOS & React Native",
  location: "United Kingdom",
  years: "12+ years shipping mobile at scale",
  statement:
    "OTT streaming for millions of viewers, regulated banking, crypto wallets, AI health and IoT, across native iOS, tvOS, and React Native.",
  focus: ["Swift", "SwiftUI", "React Native", "iOS", "tvOS", "OTT / Video"],
  description:
    "12+ years shipping mobile at scale: OTT streaming, regulated banking, crypto wallets, AI health, and IoT, across native iOS, tvOS, and React Native.",
  email: "venkatesh.mandapati@gmail.com",
  phone: "+44 7879 932266",
  linkedin: "https://www.linkedin.com/in/venkatesh-mandapati-41b10038",
  github: "https://github.com/venky145",
  medium: "https://medium.com/@venkateshmandapati",
};

export type ContactLink = {
  label: string;
  href: string;
};

export function contactLinks(): ContactLink[] {
  const links: ContactLink[] = [];

  if (site.email) {
    links.push({ label: site.email, href: `mailto:${site.email}` });
  }

  if (site.phone) {
    links.push({ label: site.phone, href: "tel:+44787932266" });
  }

  if (site.linkedin) {
    links.push({ label: "LinkedIn", href: site.linkedin });
  }

  if (site.github) {
    links.push({ label: "GitHub", href: site.github });
  }

  if (site.medium) {
    links.push({ label: "Medium", href: site.medium });
  }

  return links;
}
