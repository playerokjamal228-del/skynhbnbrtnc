export interface EventFaq {
  question: string;
  answer: string;
}

export interface EventSection {
  title: string;
  copy: string[];
  bullets?: string[];
  note?: string;
}

export interface EventData {
  slug: string;
  category: "Pick Up" | "Events" | "Dining" | "Collaboration" | "Tickets";
  badge: "Pick Up" | "Limited" | "Seasonal" | "Ticket" | "Collaboration";
  sortDate: string;
  newsLabel: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  excerpt: string;
  dateLabel: string;
  location: string;
  image: string;
  heroImage: string;
  accent: string;
  originalUrl: string;
  originalStatusNote?: string;
  summary: string[];
  highlights: string[];
  details: Array<{ label: string; value: string }>;
  sections: EventSection[];
  faq: EventFaq[];
}

export const eventCategories = [
  "All",
  "Pick Up",
  "Events",
  "Dining",
  "Collaboration",
  "Tickets",
] as const;

export const eventData: EventData[] = [
  {
    slug: "blue-lock-episode-sky",
    category: "Collaboration",
    badge: "Collaboration",
    sortDate: "2026-04-09",
    newsLabel: "Apr 9, 2026",
    title: "BLUE LOCK EPISODE SKY in TOKYO SKYTREE",
    seoTitle: "BLUE LOCK EPISODE SKY Collaboration Event",
    seoDescription:
      "Explore the BLUE LOCK collaboration at Tokyo Skytree with themed sky-stage displays, character lighting, screening content, cafe specials, photo spots, and exclusive merchandise.",
    excerpt:
      "A large-scale anime collaboration that spreads across the observatories with themed displays, event menus, photo services, and exclusive goods.",
    dateLabel: "April 9 - July 6, 2026",
    location: "Tembo Deck, Tembo Galleria, SKYTREE CAFE and SKYTREE SHOP",
    image: "/images/events/bluelock-banner.jpg",
    heroImage: "/images/events/bluelock-banner.jpg",
    accent: "from-[#1f4cff] via-[#0b1738] to-[#080b16]",
    originalUrl: "https://en.tokyo-skytree.jp/en/event/special/bluelock/",
    summary: [
      "The official event centers on a full observatory takeover, turning the upper decks into a collaboration route filled with character visuals, themed zones, and skyline moments.",
      "The experience stretches across Floors 445 to 450 for the sky-stage, Floor 350 for screening content, Floor 340 for themed cafe items, and Floor 345 for original goods.",
    ],
    highlights: [
      "Special illustration print bundled with selected admission tickets",
      "Sky-stage walkthrough experience in the Tembo Galleria",
      "Panoramic theater screening on Floor 350",
      "Commemorative photography on Floor 445",
      "Character-inspired lighting sequences cycling roughly every five minutes",
      "Themed cafe items plus exclusive coasters and original goods",
    ],
    details: [
      { label: "Dates", value: "April 9 to July 6, 2026" },
      { label: "Main area", value: "Tembo Galleria Floors 445-450" },
      { label: "Photo service", value: "Floor 445, commemorative photo from about $11.33" },
      { label: "Cafe", value: "Floor 340 SKYTREE CAFE with event-only menu items" },
    ],
    sections: [
      {
        title: "Sky Stage Route",
        copy: [
          "The central attraction is a dedicated walkthrough route in the Tembo Galleria where visitors move through a collaboration environment designed to immerse them in the BLUE LOCK world above the city.",
          "This area is positioned as the emotional core of the event, using long views, dramatic scale, and themed presentation to make the observatory itself feel like part of the story.",
        ],
        bullets: [
          "Location: Tembo Galleria Floors 445-450",
          "Designed as a special collaboration viewing route",
          "Can experience waits during peak hours",
        ],
      },
      {
        title: "Special Programs Across the Tower",
        copy: [
          "The event branches into several experiences: a screening at Floor 350, commemorative photography on Floor 445, character lighting outside the tower, and themed menu items in the cafe.",
          "Together these make the collaboration feel distributed through the tower rather than confined to one exhibit room.",
        ],
        bullets: [
          "Panoramic theater screening on Floor 350",
          "Lighting motifs inspired by individual characters",
          "Cafe specials and random coaster distribution",
          "Exclusive merchandise at SKYTREE SHOP on Floor 345",
        ],
      },
      {
        title: "Planning Notes",
        copy: [
          "The official page emphasizes that some content, timings, and product availability may change depending on crowding and observatory operations.",
          "It also highlights purchase thresholds for shopper bag bonuses and notes that some time-based experiences publish separate operating-hour PDFs.",
        ],
        note:
          "This page summarizes the official program for easier planning. For detailed timings and bonus distribution rules, please refer to the official event page.",
      },
    ],
    faq: [
      {
        question: "Where does the BLUE LOCK collaboration happen inside the tower?",
        answer:
          "The core route is in the Tembo Galleria, while additional content appears on Floor 350 for screenings, Floor 340 for cafe items, and Floor 345 for merchandise.",
      },
      {
        question: "Is the event included with a standard ticket?",
        answer:
          "Access to the observatory areas still requires admission. Some special tickets include event bonuses such as an illustrated print.",
      },
      {
        question: "Are food and goods limited?",
        answer:
          "Yes. The official event notes that bonuses and some products may end once stock runs out, and purchase limits can change during the run.",
      },
    ],
  },
  {
    slug: "tokyo-matcha-time",
    category: "Dining",
    badge: "Seasonal",
    sortDate: "2026-04-01",
    newsLabel: "Spring 2026",
    title: "TOKYO Matcha Time at SKYTREE",
    seoTitle: "Tokyo Matcha Time at Skytree",
    seoDescription:
      "Discover the seasonal matcha event at Tokyo Skytree with Gion Tsujiri collaboration drinks and sweets, tea-ceremony programming, green-themed lighting, and special skyline photo spots.",
    excerpt:
      "A seasonal tea-and-matcha program that pairs collaboration sweets, observatory lighting, tea ceremony moments, and early-summer skyline styling.",
    dateLabel: "Spring to early summer 2026",
    location: "Tembo Deck Floor 350, Floor 340 and special observatory areas",
    image: "/images/events/matcha-time.jpg",
    heroImage: "/images/events/matcha-time.jpg",
    accent: "from-[#315941] via-[#183325] to-[#0c1711]",
    originalUrl: "https://en.tokyo-skytree.jp/event/matcha/",
    summary: [
      "The official event frames the tower as a place to experience new tea and matcha from the sky through drinks, sweets, interior decoration, private programs, and themed lighting.",
      "A major collaboration with Gion Tsujiri anchors the food offer, while a Tokyo Sky tea ceremony adds a more intimate, cultural layer to the observatory experience.",
    ],
    highlights: [
      "Gion Tsujiri collaboration drinks and sweets at SKYTREE CAFE",
      "Special-value set tickets combining admission with menu vouchers",
      "Tea ceremony programming in a private observation-deck setting",
      "Special green-and-matcha interior decorations",
      "Event-exclusive tower lighting inspired by matcha preparation",
      "Sorakara-chan greeting in a seasonal costume",
    ],
    details: [
      { label: "Cafe location", value: "Tembo Deck Floor 350 SKYTREE CAFE" },
      { label: "Featured partner", value: "Gion Tsujiri" },
      { label: "Private program", value: "Morning tea ceremony workshop on selected dates" },
      { label: "Ticket angle", value: "Admission plus drink or sweets voucher bundles" },
    ],
    sections: [
      {
        title: "Matcha Collaboration Menu",
        copy: [
          "The official page features a focused menu of premium matcha drinks and sweets created with Gion Tsujiri, positioned as a seasonal observatory cafe experience rather than a generic promotion.",
          "The menu leans into refined Japanese flavors, with drinks, affogato-style desserts, and a presentation built around early-summer freshness and panoramic views.",
        ],
        bullets: [
          "Wasanbon matcha latte and yuzu matcha cocktail-style drink",
          "Matcha sundae and matcha affogato-style sweets",
          "Set-ticket offers that bundle admission with one menu redemption",
        ],
      },
      {
        title: "Tea Ceremony in the Sky",
        copy: [
          "One of the strongest parts of the official program is a quieter private observatory workshop where guests learn basic tea ceremony etiquette and prepare matcha in a calm, early-morning setting.",
          "That combination of ritual, skyline, and limited attendance gives the event a deeper cultural tone than a typical food collaboration.",
        ],
        bullets: [
          "Held on selected morning dates",
          "Small-group workshop format",
          "Includes observatory access and Japanese sweets",
        ],
      },
      {
        title: "Atmosphere and Seasonal Styling",
        copy: [
          "The event extends beyond food with themed decoration points, special lighting inspired by the movement of matcha powder and whisking, and a seasonal Sorakara-chan appearance.",
          "That broader staging makes the event feel more immersive than a simple seasonal menu promotion.",
        ],
      },
    ],
    faq: [
      {
        question: "Is Tokyo Matcha Time mainly a cafe event?",
        answer:
          "No. The cafe collaboration is the most visible part, but the official program also includes decorations, a private tea-ceremony event, tower lighting, and character greetings.",
      },
      {
        question: "Can I buy a ticket that includes the menu items?",
        answer:
          "Yes. The official page promotes special-value set tickets that combine Tembo Deck admission with either a featured drink or a featured sweets item.",
      },
      {
        question: "Where does the tea ceremony experience take place?",
        answer:
          "The workshop is positioned as a private observation-deck experience around the Tembo Deck area, with gathering guidance published on the official page.",
      },
    ],
  },
  {
    slug: "skytree-yoga",
    category: "Events",
    badge: "Pick Up",
    sortDate: "2026-06-21",
    newsLabel: "Selected mornings",
    title: "SKYTREE YOGA: Sacred Morning Practice Above Tokyo",
    seoTitle: "Skytree Yoga Experience",
    seoDescription:
      "Join SKYTREE YOGA, a morning observatory lesson inspired by Tokyo Skytree's recognition as a yoga sacred site, with panoramic views, guided practice, and wellness storytelling.",
    excerpt:
      "A sunrise-style yoga program in the observatory that leans into wellbeing, ritual, and the tower's recognition as a sacred site for yoga.",
    dateLabel: "Selected mornings in 2026",
    location: "Tembo Galleria Floor 450 and gathering area at TOKYO SKYTREE TOWN",
    image: "/images/events/skytree-yoga.jpg",
    heroImage: "/images/events/skytree-yoga.jpg",
    accent: "from-[#756a4d] via-[#30261f] to-[#111111]",
    originalUrl: "https://en.tokyo-skytree.jp/event/yoga2021/",
    summary: [
      "The official page ties the program to Tokyo Skytree being recognized as a sacred place for yoga, giving the event a stronger wellness and cultural story than a one-off lesson.",
      "The experience is marketed as a calm morning practice in the Tembo Galleria, followed by observatory time once the guided session ends.",
    ],
    highlights: [
      "Morning yoga lesson in the Tembo Galleria",
      "Beginner-friendly practice with panoramic views",
      "Original SKYTREE Pose storytelling",
      "Program context around International Yoga Day and sacred-site recognition",
      "Schedule guidance from registration to dismissal",
    ],
    details: [
      { label: "Venue", value: "Tembo Galleria Floor 450" },
      { label: "Format", value: "Morning lesson with post-session observatory time" },
      { label: "Typical session", value: "Around 8:00 to 8:50 AM on featured dates" },
      { label: "Audience", value: "Adults seeking a calm observatory wellness experience" },
    ],
    sections: [
      {
        title: "Why This Program Matters",
        copy: [
          "The official page puts real emphasis on the tower's identity as a yoga destination, linking the lesson to broader ideas of mindfulness, calm, and a healthier lifestyle.",
          "That makes the event feel less like a generic rooftop class and more like a signature observatory ritual.",
        ],
      },
      {
        title: "Lesson Structure",
        copy: [
          "The SKYTREE YOGA lesson is presented as a beginner-friendly but memorable morning sequence: arrival, guided entry, class preparation, the lesson itself, and free time afterward to enjoy the observatory.",
          "The official page also notes practical details such as bringing your own mat and dressing in comfortable clothing because there are no changing rooms.",
        ],
        bullets: [
          "Morning check-in and guided entry",
          "Yoga session at Floor 450",
          "Observation time after the class ends",
        ],
      },
      {
        title: "Wellbeing Story and SDGs Context",
        copy: [
          "The original page extends beyond class logistics into wellness positioning, explaining the sacred-site certification, International Yoga Day, and how the program connects to Skytree's broader SDG communication around health and wellbeing.",
        ],
      },
    ],
    faq: [
      {
        question: "Do I need to be experienced in yoga?",
        answer:
          "No. The official page describes the lesson as focused on approachable, foundational poses that beginners can follow while still being enjoyable for experienced participants.",
      },
      {
        question: "What do participants need to bring?",
        answer:
          "Participants are asked to bring their own yoga mat or a similar substitute and to arrive already dressed in comfortable practice clothing.",
      },
      {
        question: "Can visitors stay after the session?",
        answer:
          "Yes. The official schedule notes that participants can enjoy the observatory after the lesson and leave when ready.",
      },
    ],
  },
  {
    slug: "morning-view-ticket",
    category: "Tickets",
    badge: "Ticket",
    sortDate: "2026-01-05",
    newsLabel: "Morning program",
    title: "TOKYO SKYTREE Morning View Ticket",
    seoTitle: "Morning View Ticket at Tokyo Skytree",
    seoDescription:
      "Discover the Morning View Ticket at Tokyo Skytree, a breakfast-oriented observatory plan that pairs early access with a soft drink, food voucher, and a calmer skyline experience.",
    excerpt:
      "An early-day ticket concept built around lighter crowds, breakfast-style cafe exchange, and a calm start above the city.",
    dateLabel: "Morning entry program",
    location: "Tembo Deck Floor 350 and SKYTREE CAFE350",
    image: "/images/events/morning-view-ticket.png",
    heroImage: "/images/events/morning-view-ticket.png",
    accent: "from-[#8dc8e8] via-[#3f6c8d] to-[#112333]",
    originalUrl: "https://en.tokyo-skytree.jp/event/2/",
    summary: [
      "The Morning View Ticket is positioned as a softer, calmer way to experience the observatory before the busier afternoon flow.",
      "Its core promise is simple: early skyline views plus a voucher for a drink or food item at SKYTREE CAFE350, turning the observatory into a more complete morning routine.",
    ],
    highlights: [
      "Calmer morning visit timing",
      "Voucher-based cafe component at SKYTREE CAFE350",
      "Mt. Fuji and clearer horizon positioning on good-weather mornings",
      "360-degree walking route across the Tembo Deck",
      "Breakfast-style observatory mood rather than rush-hour sightseeing",
    ],
    details: [
      { label: "Best for", value: "Early risers and calmer view seekers" },
      { label: "Included angle", value: "Tembo Deck entry plus one cafe redemption" },
      { label: "Primary cafe", value: "SKYTREE CAFE350" },
      { label: "Selling tone", value: "Start your day under the Tokyo sky" },
    ],
    sections: [
      {
        title: "A Different Time of Day",
        copy: [
          "The official page sells the morning visit as a different emotional product rather than just a different ticket slot: clearer air, slower tempo, and a skyline that feels more spacious and restorative.",
          "That contrast between morning calm and regular peak-time sightseeing is the heart of the offer.",
        ],
      },
      {
        title: "Food and Drink Pairing",
        copy: [
          "A key part of the official story is choosing a soft drink and food item after taking in the view, then enjoying it with the city spread out below.",
          "This moves the ticket beyond pure admission and turns it into a lifestyle-oriented observatory experience.",
        ],
      },
      {
        title: "Why It Works as Content",
        copy: [
          "Rather than presenting only ticket details, the official program highlights the sequence of the visit itself: the first morning view, the cafe exchange, the slower sky walk, and the changing tones of early daylight.",
        ],
      },
    ],
    faq: [
      {
        question: "What makes the Morning View Ticket different from standard admission?",
        answer:
          "It is designed around early-day observatory access and includes a cafe redemption element, with messaging focused on calmer views and a more leisurely pace.",
      },
      {
        question: "Where is the food and drink part redeemed?",
        answer:
          "The official page points guests to SKYTREE CAFE350, the high-altitude cafe on the Tembo Deck.",
      },
      {
        question: "Who is this best suited for?",
        answer:
          "Visitors who want a quieter observatory mood, morning light, and a calmer breakfast-style visit experience.",
      },
    ],
  },
  {
    slug: "full-moon-secret-bar",
    category: "Events",
    badge: "Limited",
    sortDate: "2026-04-13",
    newsLabel: "Full moon nights",
    title: "A Secret Bar Open Only on Full Moon Nights",
    seoTitle: "Full Moon Secret Bar at Tokyo Skytree",
    seoDescription:
      "Step into a moonlit, after-dark observatory concept inspired by Tokyo Skytree's full-moon bar event, designed around skyline cocktails, soft lighting, and a more intimate evening mood.",
    excerpt:
      "A moonlit after-hours concept built around a quieter, more atmospheric side of the observatory and a bar-like full-moon mood.",
    dateLabel: "Full moon evenings",
    location: "Evening observatory setting at Tokyo Skytree",
    image: "/images/events/full-moon-bar.jpg",
    heroImage: "/images/events/full-moon-bar.jpg",
    accent: "from-[#1a1b31] via-[#12131f] to-[#06070b]",
    originalUrl: "https://en.tokyo-skytree.jp/event/7/",
    originalStatusNote:
      "The current official page exposes very little crawlable text beyond the title, so this adaptation is intentionally interpretive while staying true to the event concept.",
    summary: [
      "The official page currently surfaces the concept most clearly through its title and visual treatment: a secret bar that appears only on full moon nights.",
      "We are therefore treating this as an atmospheric nighttime program centered on mood, moonlight, skyline views, and a more intimate observatory character.",
    ],
    highlights: [
      "Full-moon-only concept framing",
      "Quiet bar-like evening atmosphere",
      "Night skyline as the main scenic element",
      "Designed as an adults-oriented mood experience",
    ],
    details: [
      { label: "Concept", value: "Limited nighttime observatory bar mood" },
      { label: "Best moment", value: "Clear evenings with a visible moonrise or moonlit skyline" },
      { label: "Tone", value: "Intimate, cinematic, and slower-paced" },
      { label: "Format", value: "Interpretive adaptation based on official concept page" },
    ],
    sections: [
      {
        title: "Moonlit Observatory Mood",
        copy: [
          "Rather than treating this as a loud nightlife event, we interpret the concept as a carefully lit, quietly social full-moon observatory experience where the skyline, glass, and night atmosphere do most of the storytelling.",
        ],
      },
      {
        title: "What the Experience Suggests",
        copy: [
          "In practical terms, this kind of event works best when framed around a restrained beverage program, small-group gathering, low lighting, and a stronger sense of occasion than a standard night ticket.",
          "That keeps it close to the spirit of the official title while still feeling credible and premium.",
        ],
      },
      {
        title: "Adaptation Note",
        copy: [
          "Because the official page provides only limited crawlable copy, this page is written as a design-forward interpretation of the event rather than a field-by-field reconstruction.",
        ],
      },
    ],
    faq: [
      {
        question: "Is this page a literal reconstruction of the official event details?",
        answer:
          "No. The official page currently exposes very little machine-readable copy, so this version focuses on the event's concept and likely guest experience.",
      },
      {
        question: "What kind of visitor would enjoy this most?",
        answer:
          "Couples, small groups, and evening visitors looking for a quieter, more cinematic observatory atmosphere rather than a standard daytime visit.",
      },
      {
        question: "How should this be positioned on the site?",
        answer:
          "As a premium, limited-night experience that complements the broader Night View Ticket idea without replacing it.",
      },
    ],
  },
  {
    slug: "night-view-ticket",
    category: "Tickets",
    badge: "Ticket",
    sortDate: "2026-01-06",
    newsLabel: "After 6 PM",
    title: "TOKYO SKYTREE Night View Ticket",
    seoTitle: "Night View Ticket at Tokyo Skytree",
    seoDescription:
      "Explore the Tokyo Skytree Night View Ticket, an after-6PM observatory experience that pairs admission with an alcoholic drink for a relaxed toast above Tokyo.",
    excerpt:
      "An evening admission plan built around skyline drinks, cafe redemption, and a more social night-view rhythm after 6 PM.",
    dateLabel: "After 6 PM entry program",
    location: "Tembo Deck Floor 350 and SKYTREE CAFE350",
    image: "/images/events/night-view-ticket.jpg",
    heroImage: "/images/events/night-view-ticket.jpg",
    accent: "from-[#241741] via-[#11111e] to-[#05070d]",
    originalUrl: "https://en.tokyo-skytree.jp/event/8/",
    summary: [
      "The Night View Ticket is the evening counterpart to the calmer morning plan: admission after 6 PM bundled with an alcoholic drink and explicitly sold as a toast-above-the-city experience.",
      "The official page leans into mood, social atmosphere, and the pleasure of moving around the deck with a drink while looking over Tokyo's lights.",
    ],
    highlights: [
      "After-6 PM observatory access",
      "One alcoholic beverage included through the cafe program",
      "Social, panoramic evening format",
      "Suggested route from Floor 350 to the glass floor at 340",
      "Adults-only purchase condition due to alcohol inclusion",
    ],
    details: [
      { label: "Timing", value: "Entry after 6 PM" },
      { label: "Ticket angle", value: "Tembo Deck admission plus one alcoholic drink" },
      { label: "Typical price", value: "From about $16.00 for adults on the official page" },
      { label: "Restriction", value: "Under-20 purchase not allowed for this ticket type" },
    ],
    sections: [
      {
        title: "A Toast Above Tokyo",
        copy: [
          "The official page sells this ticket as a complete scene: skyline, drink in hand, and a slower walk across the deck rather than a purely functional admission product.",
          "That framing matters because it makes the page feel lifestyle-led and shareable, not transactional.",
        ],
      },
      {
        title: "Cafe Exchange and Route",
        copy: [
          "Guests are guided toward SKYTREE CAFE350 to exchange a drink, then encouraged to keep moving through the observatory, pause by the windows, and even continue toward the glass floor on Floor 340.",
          "The route is simple but very effective as content because it turns the ticket into an evening sequence.",
        ],
      },
      {
        title: "Responsible Evening Positioning",
        copy: [
          "The official page clearly states that this ticket includes alcohol, positions it as a 20+ product, and reinforces moderation and responsible behavior. Keeping that tone is important for credibility and SEO trust.",
        ],
      },
    ],
    faq: [
      {
        question: "What is included in the Night View Ticket?",
        answer:
          "The official version combines evening Tembo Deck admission with one alcoholic beverage redemption through SKYTREE CAFE350.",
      },
      {
        question: "Can anyone purchase this ticket?",
        answer:
          "No. Because it includes alcohol, the official page notes that people under 20 years old cannot purchase it.",
      },
      {
        question: "Is it only for sitting in the cafe?",
        answer:
          "No. The experience is presented as a roaming observatory evening, with the drink simply acting as the anchor for the wider night-view visit.",
      },
    ],
  },
];

export function getEventBySlug(slug: string) {
  return eventData.find((event) => event.slug === slug);
}

export const sortedEventData = [...eventData].sort(
  (left, right) => new Date(right.sortDate).getTime() - new Date(left.sortDate).getTime()
);

export const homeEventHighlights = sortedEventData.slice(0, 6).map((event, index) => ({
  id: `${index + 1}-${event.slug}`,
  category: event.category,
  badge: event.badge,
  title: event.title,
  date: event.dateLabel,
  image: event.image,
  excerpt: event.excerpt,
  href: `/events/${event.slug}`,
}));

export const eventNewsItems = sortedEventData.map((event) => ({
  label: event.newsLabel,
  title: event.title,
  href: `/events/${event.slug}`,
}));
