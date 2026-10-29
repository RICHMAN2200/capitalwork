import {
  Search, MousePointerClick, Megaphone, MapPin, PenTool, Monitor,
  Compass, Lightbulb, Share2, Layers, Sparkles, type LucideIcon,
} from "lucide-react";


export type SubService = {
  slug: string;
  title: string;
  pillar: string;
  tagline: string;
  description: string;
  outcomes: string[];
  keywords: string[];
};

export type Pillar = {
  slug: string;
  title: string;
  short: string;
  description: string;
  intro: string;
  benefits: string[];
  keywords: string[];
  icon: LucideIcon;
};

export const PILLARS: Pillar[] = [
  {
    slug: "seo",
    title: "SEO & GEO Optimization",
    short: "Win Google + AI search citations.",
    description: "Technical SEO, clearer website content and Generative Engine Optimization (GEO) to improve how customers and AI search tools find and understand your business.",
    intro: "Help customers find your business through Google and AI search, with useful content and a clear path to contact you.",
    benefits: [
      "Improve visibility for relevant local searches",
      "Make business information clearer for AI search tools",
      "Build useful content that supports organic discovery",
      "Understand and improve the cost of attracting customers",
    ],
    keywords: ["SEO Nairobi", "SEO Nairobi", "GEO optimization Kenya", "generative engine optimization Kenya", "AI SEO Nairobi"],
    icon: Search,
  },

  {
    slug: "google-ads",
    title: "Google Ads Management",
    short: "High intent traffic that converts now.",
    description: "Google Ads campaigns managed around your sales goals and return on advertising spend.",
    intro: "Capture buyers the moment they search. Our Google Ads campaigns deliver immediate, qualified leads to Kenyan businesses ready to scale.",
    benefits: [
      "Campaigns focused on relevant enquiries from launch",
      "Campaign improvements guided by your cost per enquiry",
      "Tracking and reporting for calls, enquiries and sales",
      "Continuous bid & creative optimization",
    ],
    keywords: ["Google Ads Kenya", "PPC Nairobi", "Google Ads Nairobi", "lead generation Kenya"],
    icon: MousePointerClick,
  },
  {
    slug: "social-ads",
    title: "Social Media Ads",
    short: "Targeted growth on Meta & TikTok.",
    description: "Paid social campaigns with relevant creative and a clear path from interest to enquiry or purchase.",
    intro: "We turn Instagram, Facebook, and TikTok feeds into your most reliable sales channels with creative that converts in Kenya's market.",
    benefits: [
      "Scroll stopping creative built in house",
      "Tracking the journey from ad to enquiry or purchase",
      "Audience research tuned to Kenya",
      "Weekly reporting on every shilling spent",
    ],
    keywords: ["Facebook ads Kenya", "Instagram ads Nairobi", "TikTok ads Kenya", "social media advertising Nairobi"],
    icon: Megaphone,
  },
  {
    slug: "gbp",
    title: "Google Business Profile",
    short: "Own the local map pack.",
    description: "Google Business Profile setup, optimization, and management.",
    intro: "Your Google Business Profile helps local customers understand your business, see reviews and find a direct way to call or visit.",
    benefits: [
      "Rank in the local 3 pack",
      "Drive calls and direction requests directly",
      "Manage reviews and reputation",
      "Weekly posts that signal trust to Google",
    ],
    keywords: ["Google Business Profile Kenya", "GBP optimization Nairobi", "local SEO Nairobi", "Google Maps marketing Kenya"],
    icon: MapPin,
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    short: "Visual identity that earns trust.",
    description: "Brand identity systems, marketing collateral, and ad creative.",
    intro: "A consistent visual identity helps customers recognise your business and understand the quality of your offer.",
    benefits: [
      "Brand identities built to scale",
      "Conversion tested ad creative",
      "Print & digital collateral",
      "Pitch decks that close deals",
    ],
    keywords: ["graphic design Kenya", "branding Nairobi", "logo design Nairobi", "ad creative Kenya"],
    icon: PenTool,
  },
  {
    slug: "website-design",
    title: "Website Design",
    short: "Fast, responsive, conversion built.",
    description: "Websites designed around useful information, fast loading and clear customer actions.",
    intro: "We design and build websites in Kenya that load fast, rank in Google, and convert visitors into paying clients, not just digital brochures.",
    benefits: [
      "Mobile first responsive design",
      "SEO optimized from launch",
      "Lightning fast load speeds",
      "Built in lead capture & analytics",
    ],
    keywords: ["website design Kenya", "web design Nairobi", "website developer Nairobi", "ecommerce website Kenya"],
    icon: Monitor,
  },
  {
    slug: "geo-marketing",
    title: "GEO Marketing",
    short: "Own your local territory.",
    description: "Locally focused positioning, geo targeted media, and citations.",
    intro: "Geographically targeted campaigns that make your business the obvious choice in your specific neighborhood, town, or region in Kenya.",
    benefits: [
      "Locally focused ad targeting by area",
      "Local citation building",
      "Neighborhood specific landing pages",
      "Multi location strategy",
    ],
    keywords: ["geo marketing Kenya", "local marketing Nairobi", "locally focused advertising Nairobi", "location based marketing Kenya"],
    icon: Compass,
  },
  {
    slug: "consultation",
    title: "Marketing Consultation",
    short: "Strategy that unlocks growth.",
    description: "Practical marketing advice for business owners ready to grow.",
    intro: "Review your current marketing with a strategist, identify what is holding growth back and agree the priorities that need attention.",
    benefits: [
      "A review of your current marketing",
      "A prioritised growth plan for the next 90 days",
      "Improving your offer and the path customers take to contact you",
      "Channel mix recommendations",
    ],
    keywords: ["marketing consultant Kenya", "marketing strategy Nairobi", "growth consultant Nairobi", "business consultant Kenya"],
    icon: Lightbulb,
  },
  {
    slug: "social-media",
    title: "Social Media Management",
    short: "Always on presence that builds trust.",
    description: "Content planning, publishing and conversations with your social media audience.",
    intro: "Daily content, real engagement, and a feed that signals authority, for Kenyan brands that want to stay top of mind.",
    benefits: [
      "Monthly content calendars",
      "Daily community management",
      "Branded reels & video",
      "Growth & engagement reporting",
    ],
    keywords: ["social media management Kenya", "social media manager Nairobi", "content creation Nairobi", "Instagram management Kenya"],
    icon: Share2,
  },
  {
    slug: "authority",
    title: "Digital Authority Systems",
    short: "The full digital foundation.",
    description: "A connected website, search presence, advertising and follow up system for growing businesses.",
    intro: "The complete digital growth stack, site, SEO, ads, social, automation, built and run as one system for Kenyan businesses ready to dominate.",
    benefits: [
      "End to end digital presence",
      "Marketing automation & CRM",
      "Digital PR & citations",
      "Dedicated growth team",
    ],
    keywords: ["digital marketing agency Kenya", "marketing agency Nairobi", "marketing agency Nairobi", "full service marketing Kenya"],
    icon: Layers,
  },
  {
    slug: "brand-design-optimization",
    title: "Brand Design & Optimization",
    short: "Sharpen the brand. Lift conversion.",
    description: "Refine your brand identity, review visual consistency and improve the pages where customers decide whether to enquire or buy.",
    intro: "We refine your brand's visual language and optimize every touchpoint, logo, site, ads, decks, so each impression in Nairobi and Kenya earns more attention, trust, and revenue.",
    benefits: [
      "Cohesive brand system across every channel",
      "Higher conversion rates on key landing pages",
      "Premium positioning that justifies premium pricing",
      "Conversion tested creative for ads and sales pages",
    ],
    keywords: ["brand design Kenya", "brand optimization Nairobi", "CRO Nairobi", "conversion rate optimization Kenya", "brand refresh Nairobi"],
    icon: Sparkles,
  },
];


export const SUB_SERVICES: SubService[] = [
  // SEO
  { slug: "seo-for-coaches", title: "SEO for Coaches", pillar: "seo",
    tagline: "Rank for the questions your future clients are Googling right now.",
    description: "Specialized SEO for coaches, consultants, and personal brands in Kenya. We build content that ranks for transformation led searches and converts readers into discovery calls.",
    outcomes: ["Rank for 'coach in Nairobi' searches", "Booked discovery calls from organic traffic", "Authority content that compounds"],
    keywords: ["SEO for coaches Kenya", "life coach SEO Nairobi", "business coach marketing Nairobi"] },
  { slug: "seo-for-real-estate", title: "SEO for Real Estate", pillar: "seo",
    tagline: "Be the first listing buyers across Nairobi see.",
    description: "Real estate SEO built for Kenyan agents and developers. Rank for property, plot, and apartment searches in your target neighborhoods.",
    outcomes: ["Rank for 'plots for sale Nairobi'", "Capture buyer searches by area", "Long term organic lead pipeline"],
    keywords: ["real estate SEO Kenya", "property SEO Nairobi", "plots for sale Nairobi SEO"] },
  { slug: "seo-for-ecommerce", title: "SEO for E commerce", pillar: "seo",
    tagline: "Product pages that print sales while you sleep.",
    description: "Technical and on page SEO for Kenyan online stores, from product and category organisation to structured product information that helps search engines understand your pages.",
    outcomes: ["Higher organic product traffic", "Improved conversion rate", "Reduced ad dependency"],
    keywords: ["ecommerce SEO Kenya", "Shopify SEO Nairobi", "online store SEO Nairobi"] },

  // Google Ads
  { slug: "google-ads-leadgen", title: "Google Ads for Lead Generation", pillar: "google-ads",
    tagline: "Reach people searching for the service you offer.",
    description: "High intent Google Ads campaigns built for service businesses in Kenya, calls, form fills, and WhatsApp leads that close.",
    outcomes: ["Campaigns focused on qualified enquiries", "Understand and improve your cost per customer", "Full call & form tracking"],
    keywords: ["Google Ads lead generation Kenya", "lead gen Nairobi", "PPC leads Nairobi"] },
  { slug: "google-ads-ecommerce", title: "Google Ads for E commerce", pillar: "google-ads",
    tagline: "Profitable return on advertising spend on Shopping & Search.",
    description: "Performance Max, Shopping, and Search campaigns engineered for Kenyan online retailers, built around margin, not vanity clicks.",
    outcomes: ["Performance reporting against your return on advertising spend", "Scaled product visibility", "Smarter remarketing"],
    keywords: ["Google Shopping ads Kenya", "ecommerce PPC Nairobi", "online store ads Nairobi"] },
  { slug: "google-ads-local", title: "Local Service Ads", pillar: "google-ads",
    tagline: "Explore local lead advertising where your business is eligible.",
    description: "Local Service Ads setup and management for eligible service businesses. Availability depends on your country, business category and Google requirements, and is checked before planning this work.",
    outcomes: ["Phone calls directly from Google", "Review lead based pricing where available", "Eligibility and verification review"],
    keywords: ["Local Service Ads Kenya", "Google Guaranteed Nairobi", "local ads Nairobi"] },

  // Social Ads
  { slug: "instagram-ads", title: "Instagram Ads", pillar: "social-ads",
    tagline: "Visual ads that stop the scroll and start the sale.",
    description: "Instagram native creative and targeting built for Kenya's most active social audience.",
    outcomes: ["Lower cost per lead", "Branded creative that performs", "Follow up advertising for people who have already shown interest"],
    keywords: ["Instagram ads Kenya", "IG advertising Nairobi", "Instagram marketing Nairobi"] },
  { slug: "facebook-ads", title: "Facebook Ads", pillar: "social-ads",
    tagline: "Reach the right Kenyan audience for less.",
    description: "Facebook Ads strategy, creative, and management, full funnel campaigns from awareness to purchase.",
    outcomes: ["Targeted audience reach", "Conversion focused creative", "Detailed performance reporting"],
    keywords: ["Facebook ads Kenya", "Meta ads Nairobi", "FB advertising Nairobi"] },
  { slug: "tiktok-ads", title: "TikTok Ads", pillar: "social-ads",
    tagline: "Tap into Kenya's fastest growing platform.",
    description: "TikTok Spark Ads and in feed campaigns with native creative built for Kenyan audiences.",
    outcomes: ["Massive reach for low spend", "Trend led creative", "Younger audience capture"],
    keywords: ["TikTok ads Kenya", "TikTok marketing Nairobi", "TikTok advertising Nairobi"] },

  // GBP
  { slug: "gbp-real-estate", title: "Real Estate GBP Optimization", pillar: "gbp",
    tagline: "Show up first when buyers search for property near them.",
    description: "Google Business Profile optimization for Kenyan real estate agencies and developers.",
    outcomes: ["Top of local map results", "Direct buyer calls", "Review driven trust"],
    keywords: ["real estate GBP Kenya", "property listing Google Nairobi", "real estate Maps Nairobi"] },
  { slug: "gbp-restaurants", title: "Restaurant GBP Setup", pillar: "gbp",
    tagline: "Fill tables from Google Maps, every night.",
    description: "Restaurant specific Google Business Profile management with menu, photos, posts, and review strategy.",
    outcomes: ["More direction requests", "Higher review ratings", "Booking ready listing"],
    keywords: ["restaurant GBP Kenya", "restaurant marketing Nairobi", "food business Google Nairobi"] },
  { slug: "gbp-clinics", title: "Clinics & Health GBP", pillar: "gbp",
    tagline: "Be the first clinic patients in your area find.",
    description: "Healthcare compliant GBP optimization for Kenyan clinics, dentists, and wellness providers.",
    outcomes: ["More appointment requests", "Trust building reviews", "Local visibility growth"],
    keywords: ["clinic GBP Kenya", "healthcare marketing Nairobi", "dentist Google Nairobi"] },

  // Graphic Design
  { slug: "brand-identity", title: "Brand Identity Systems", pillar: "graphic-design",
    tagline: "A complete visual language, not just a logo.",
    description: "Logos, color systems, typography, and brand guidelines built for Kenyan brands that want to look world class.",
    outcomes: ["Cohesive brand presence", "Premium positioning", "Consistent visual systems"],
    keywords: ["brand identity Kenya", "logo design Nairobi", "branding agency Nairobi"] },
  { slug: "ad-creative", title: "Performance Ad Creative", pillar: "graphic-design",
    tagline: "Ad creative built to turn attention into enquiries and sales.",
    description: "Static and motion ad creative tested against Kenyan audiences, built to convert, iteratively improved.",
    outcomes: ["More people clicking through to your offer", "Creative reviewed against the cost of reaching your audience", "Always fresh ad library"],
    keywords: ["ad creative Kenya", "performance creative Nairobi", "ad design Nairobi"] },
  { slug: "pitch-decks", title: "Pitch & Sales Decks", pillar: "graphic-design",
    tagline: "Decks that close investors and clients.",
    description: "Investor grade pitch and sales decks designed and copywritten for Kenyan founders.",
    outcomes: ["Funding ready presentations", "Higher proposal close rate", "Premium deck design"],
    keywords: ["pitch deck design Kenya", "investor deck Nairobi", "sales deck Nairobi"] },

  // Website Design
  { slug: "ecommerce-web", title: "E commerce Web Design", pillar: "website-design",
    tagline: "Online stores that sell from day one.",
    description: "Shopify and WooCommerce stores designed for Kenyan retailers, fast, SEO ready, conversion built.",
    outcomes: ["Higher conversion rate", "Mobile perfect shopping", "Integrated mobile payments"],
    keywords: ["ecommerce website Kenya", "online store design Nairobi", "Shopify developer Nairobi"] },
  { slug: "saas-web", title: "SaaS & Product Websites", pillar: "website-design",
    tagline: "Product sites that turn visitors into trials.",
    description: "Conversion engineered marketing sites for Kenyan SaaS and tech startups.",
    outcomes: ["Higher signup conversion", "Clear product positioning", "A website design that can grow with your product"],
    keywords: ["SaaS website Kenya", "startup web design Nairobi", "product website Nairobi"] },
  { slug: "service-web", title: "Service Business Websites", pillar: "website-design",
    tagline: "Websites built to book, call, and quote.",
    description: "Service business websites for Kenyan agencies, contractors, clinics, and consultants, designed around the lead.",
    outcomes: ["More qualified inquiries", "Clear service positioning", "WhatsApp & call integration"],
    keywords: ["service business website Kenya", "small business web design Nairobi", "service site Nairobi"] },

  // GEO
  { slug: "geo-nairobi", title: "Nairobi GEO Targeting", pillar: "geo-marketing",
    tagline: "Own every Nairobi neighborhood that matters.",
    description: "Locally focused campaigns mapped to Westlands, Karen, Kilimani, CBD, and beyond.",
    outcomes: ["Neighborhood level visibility", "Targeted local creative", "Geo specific landing pages"],
    keywords: ["Nairobi marketing", "Westlands marketing", "Karen advertising", "Kilimani marketing"] },
  { slug: "geo-kitengela", title: "Nairobi Local Business Targeting", pillar: "geo-marketing",
    tagline: "Be the obvious choice in Nairobi.",
    description: "Locally focused marketing built specifically for Nairobi businesses, for the areas and audiences you want to reach.",
    outcomes: ["Top of mind in Nairobi", "Local foot traffic growth", "Community built brand"],
    keywords: ["Nairobi marketing", "Nairobi advertising", "Nairobi business growth"] },
  { slug: "geo-multi-location", title: "Multi Location GEO", pillar: "geo-marketing",
    tagline: "Scale across cities without losing the local feel.",
    description: "Multi location strategy for Kenyan brands operating in Nairobi, Mombasa, Kisumu, and beyond.",
    outcomes: ["Consistent multi city growth", "Per location reporting", "Centralized brand control"],
    keywords: ["multi location marketing Kenya", "branch marketing Nairobi", "national marketing Kenya"] },

  // Consultation
  { slug: "growth-audit", title: "Growth Strategy Audit", pillar: "consultation",
    tagline: "Find the leaks. Plug the leaks. Scale.",
    description: "A detailed review of your current marketing with a 90 day action plan tailored to your Kenyan market.",
    outcomes: ["Full marketing audit", "Prioritized action list", "Channel mix strategy"],
    keywords: ["marketing audit Kenya", "growth audit Nairobi", "business audit Nairobi"] },
  { slug: "funnel-consult", title: "Funnel & Offer Consulting", pillar: "consultation",
    tagline: "Fix the offer. Multiply the revenue.",
    description: "Offer presentation, pricing, and customer journey consulting for Kenyan founders ready to scale.",
    outcomes: ["Higher conversion offers", "Help customers understand the value of larger purchases", "A customer journey that can grow with your business"],
    keywords: ["funnel consultant Kenya", "offer strategy Nairobi", "sales funnel Nairobi"] },
  { slug: "go-to-market", title: "Go to Market Strategy", pillar: "consultation",
    tagline: "Launch with traction, not crickets.",
    description: "End to end go to market strategy for new products and services in Kenya.",
    outcomes: ["Clear launch playbook", "Channel by channel plan", "Clear measurements for your launch"],
    keywords: ["go to market Kenya", "product launch Nairobi", "GTM strategy Nairobi"] },

  // Social Media Mgmt
  { slug: "smm-coaches", title: "Social Management for Coaches", pillar: "social-media",
    tagline: "Show up daily. Build authority. Book clients.",
    description: "Done for you social media management for Kenyan coaches and consultants.",
    outcomes: ["Daily branded content", "Engaged community", "Inbound discovery calls"],
    keywords: ["social media for coaches Kenya", "coach Instagram Nairobi", "personal brand Nairobi"] },
  { slug: "smm-real-estate", title: "Social Management for Real Estate", pillar: "social-media",
    tagline: "Listings, reels, and tours that move properties.",
    description: "Social media for Kenyan real estate brands, content that builds buyer trust and moves inventory.",
    outcomes: ["Branded property reels", "Buyer engagement", "Listing visibility"],
    keywords: ["real estate social media Kenya", "property Instagram Nairobi", "real estate content Nairobi"] },
  { slug: "smm-restaurants", title: "Social Management for Restaurants", pillar: "social-media",
    tagline: "Mouth watering content that fills tables.",
    description: "Restaurant social media management, food photography, reels, and posting strategy.",
    outcomes: ["Higher engagement", "More bookings", "Local food brand growth"],
    keywords: ["restaurant social media Kenya", "food marketing Nairobi", "restaurant Instagram Nairobi"] },

  // Authority
  { slug: "authority-foundation", title: "Authority Foundation Build", pillar: "authority",
    tagline: "A connected foundation for your digital launch.",
    description: "Site, SEO, GBP, social, and ads, built and launched together as one growth system for Kenyan brands.",
    outcomes: ["End to end digital presence", "Faster time to traction", "Unified brand system"],
    keywords: ["digital agency Kenya", "marketing setup Nairobi", "brand launch Nairobi"] },
  { slug: "authority-pr", title: "Digital PR & Citations", pillar: "authority",
    tagline: "Press, podcasts, and citations that build trust.",
    description: "Digital PR and citation building for Kenyan brands ready to be seen as the category leader.",
    outcomes: ["Earned media features", "Links from relevant, trusted websites", "Improved brand search"],
    keywords: ["digital PR Kenya", "PR agency Nairobi", "citations Nairobi"] },
  { slug: "authority-systems", title: "Marketing Systems & CRM", pillar: "authority",
    tagline: "Automate the follow up. Never lose a lead.",
    description: "CRM, marketing automation, and lead handling systems built for Kenyan service businesses.",
    outcomes: ["Faster lead response", "Follow up messages for interested customers", "A clear view of enquiries and sales progress"],
    keywords: ["CRM setup Kenya", "marketing automation Nairobi", "lead management Nairobi"] },
];

// Contact constants
export const CONTACT = {
  company: "CapitalworkCreations",
  email: "capitalwork96@gmail.com",
  phone: "+254117222345",
  phoneDigits: "254117222345",
  location: "Kitengela, Kajiado County",
  serviceArea: "Nairobi & all of Kenya",
  whatsappMessage: "Hi CapitalworkCreations, I'd like to discuss growth for my business.",
  calendly: "https://calendly.com/capitalwork96/30min",
};
