export const officialSiteUrl = "https://www.tokyo-skytree.jp/";

export const floors = [
  {
    id: "450",
    category: "Sightseeing & Experience",
    label: "Floor 450 & 445",
    name: "Tembo Galleria",
    description:
      "A spiraling glass corridor at 450 meters offering a 360-degree panorama of Tokyo. The highest observation point accessible to visitors, where the city unfolds beneath your feet through floor-to-ceiling windows.",
    image: "/images/floors/img_floor450_01.webp",
    imageAlt: "Tembo Galleria spiral corridor with city views",
    floorGuideLink: "/floors#450",
    officialLink: officialSiteUrl,
    towerLabel: ["Floor 450", "445m"],
  },
  {
    id: "350",
    category: "Sightseeing & Experience",
    label: "Floor 350",
    name: "Tembo Deck",
    description:
      "The main observation deck at 350 meters featuring a glass floor section, theater, and panoramic windows. Take in Tokyo's breathtaking views from the main observation area.",
    image: "/images/floors/img_floor350_01.webp",
    imageAlt: "Tembo Deck panoramic view of Tokyo",
    floorGuideLink: "/floors#350",
    officialLink: officialSiteUrl,
    towerLabel: ["Floor 350"],
  },
  {
    id: "345",
    category: "Dining & Shopping",
    label: "Floor 345",
    name: "Sky Restaurant 634 & SKYTREE SHOP",
    description:
      "Fine dining at 345 meters with Sky Restaurant 634 offering Japanese cuisine with panoramic views. SKYTREE SHOP provides exclusive merchandise and souvenirs.",
    image: "/images/floors/img_floor345_01.webp",
    imageAlt: "Sky Restaurant 634 interior with city views",
    floorGuideLink: "/floors#345",
    officialLink: officialSiteUrl,
    towerLabel: ["345m"],
  },
  {
    id: "340",
    category: "Sightseeing & Experience",
    label: "Floor 340",
    name: "Tembo Deck",
    description:
      "A spacious observation area where you can become one with the sky. Enjoy unobstructed views through large windows and capture memorable photos.",
    image: "/images/floors/img_floor340_01.webp",
    imageAlt: "Tembo Deck observation area at Floor 340",
    floorGuideLink: "/floors#340",
    officialLink: officialSiteUrl,
    towerLabel: ["340m"],
  },
] as const;

export const ticketTypes = [
  {
    id: "tembo-deck",
    name: "Tembo Deck (350m)",
    price: 2200,
    childPrice: 1100,
    description: "Access to the main observation deck at 350 meters with panoramic city views.",
  },
  {
    id: "tembo-deck-galleria",
    name: "Tembo Deck + Galleria (350m + 450m)",
    price: 3400,
    childPrice: 1700,
    description: "Full access to both the Tembo Deck and the spiraling Tembo Galleria at 450 meters.",
  },
  {
    id: "fast-skytree",
    name: "Fast SKYTREE Ticket",
    price: 4000,
    childPrice: 2500,
    description: "Priority boarding with no waiting at the elevator. Includes Tembo Deck access.",
  },
];

export const navLinks = [
  { label: "Tickets", href: "/ticket" },
  { label: "Opening Hours", href: "/open-hours" },
  { label: "Floor Guide", href: "/floors" },
  { label: "Events", href: "/events" },
  { label: "How to Enjoy", href: "/enjoy" },
  { label: "Getting Here", href: "/access" },
  { label: "FAQ", href: "/faq" },
];

export const quickAccessItems = [
  { label: "Tickets", icon: "ticket", href: "/ticket" },
  { label: "Opening Hours", icon: "clock", href: "/open-hours" },
  { label: "Floor Guide", icon: "layers", href: "/floors" },
  { label: "Events", icon: "calendar", href: "/events" },
  { label: "How to Enjoy", icon: "sparkles", href: "/enjoy" },
  { label: "Getting Here", icon: "map-pin", href: "/access" },
  { label: "Contact/FAQ", icon: "message-circle", href: "/faq" },
  { label: "Corporate", icon: "building", href: "/corporate" },
];

export const experienceCards = [
  {
    id: "local-exploration",
    title: "Local Exploration",
    subtitle: "Discover the town around Skytree",
    image: "/images/hero/img_kv02.webp",
    description: "Explore the vibrant Solamachi shopping complex and surrounding Sumida district.",
    href: "/enjoy#local-exploration",
  },
  {
    id: "exclusive-experiences",
    title: "Exclusive Experiences",
    subtitle: "Premium Skytree moments",
    image: "/images/floors/img_floor450_02.webp",
    description: "Special workshops, private tours, and unique dining experiences above the clouds.",
    href: "/enjoy#exclusive-experiences",
  },
  {
    id: "night-views",
    title: "Night Views",
    subtitle: "Tokyo after dark",
    image: "/images/hero/img_kv04.webp",
    description: "Witness Tokyo's dazzling nightscape from 350 meters above the city.",
    href: "/enjoy#night-views",
  },
  {
    id: "history-culture",
    title: "History & Culture",
    subtitle: "Standing through time",
    image: "/images/floors/img_floor340_02.webp",
    description: "Learn about the engineering marvel and cultural significance of Tokyo Skytree.",
    href: "/enjoy#history-culture",
  },
] as const;

export const socialLinks = [
  { name: "X", href: "https://twitter.com/skytreeofficial", icon: "twitter" },
  { name: "Instagram", href: "https://instagram.com/tokyoskytree_global", icon: "instagram" },
  { name: "Facebook", href: "https://facebook.com/tokyo.skytree", icon: "facebook" },
  { name: "YouTube", href: "https://youtube.com/@tokyoskytree", icon: "youtube" },
  { name: "TikTok", href: "https://tiktok.com/@tokyoskytree_official", icon: "tiktok" },
];

export const partners = [
  "Tokyo Skytree",
  "Tembo Deck",
  "Tembo Galleria",
  "Tokyo Solamachi",
  "Sumida City",
  "Tobu Skytree Line",
  "Access Guide",
  "Ticket Planning",
  "Seasonal Events",
  "Visitor FAQ",
  "Floor Guide",
  "Official Venue Reference",
];
