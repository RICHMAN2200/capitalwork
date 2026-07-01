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
    description: "Technical SEO, on-page optimization, and Generative Engine Optimization (GEO) that earn rankings on Google and citations inside ChatGPT, Perplexity, and Google AI Overviews.",
    intro: "We engineer organic visibility across both classic search and AI answer engines — pulling qualified buyers from Kitengela, Nairobi, and across Kenya into your funnel every day.",
    benefits: [
      "Rank on page one for high-intent local searches",
      "Get cited by ChatGPT, Perplexity & Google AI Overviews",
      "Compound organic traffic month over month",
      "Cut customer acquisition cost permanently",
    ],
    keywords: ["SEO Kitengela", "SEO Nairobi", "GEO optimization Kenya", "generative engine optimization Kenya", "AI SEO Nairobi"],
    icon: Search,
  },

  {
    slug: "google-ads",
    title: "Google Ads Management",
    short: "High-intent traffic that converts now.",
    description: "Performance-grade Google Ads campaigns engineered for ROAS.",
    intro: "Capture buyers the moment they search. Our Google Ads campaigns deliver immediate, qualified leads to Kenyan businesses ready to scale.",
    benefits: [
      "Leads in the first 7 days of launch",
      "Lower cost per lead than industry average",
      "Full conversion tracking & reporting",
      "Continuous bid & creative optimization",
    ],
    keywords: ["Google Ads Kenya", "PPC Nairobi", "Google Ads Kitengela", "lead generation Kenya"],
    icon: MousePointerClick,
  },
  {
    slug: "social-ads",
    title: "Social Media Ads",
    short: "Targeted growth on Meta & TikTok.",
    description: "Creative-led paid social with measurable funnels.",
    intro: "We turn Instagram, Facebook, and TikTok feeds into your most reliable sales channels with creative that converts in Kenya's market.",
    benefits: [
      "Scroll-stopping creative built in-house",
      "Pixel-tracked conversion funnels",
      "Audience research tuned to Kenya",
      "Weekly reporting on every shilling spent",
    ],
    keywords: ["Facebook ads Kenya", "Instagram ads Nairobi", "TikTok ads Kenya", "social media advertising Kitengela"],
    icon: Megaphone,
  },
  {
    slug: "gbp",
    title: "Google Business Profile",
    short: "Own the local map pack.",
    description: "Google Business Profile setup, optimization, and management.",
    intro: "Most local buyers in Kitengela and Nairobi pick a business from the Google Map results. We make sure that business is yours.",
    benefits: [
      "Rank in the local 3-pack",
      "Drive calls and direction requests directly",
      "Manage reviews and reputation",
      "Weekly posts that signal trust to Google",
    ],
    keywords: ["Google Business Profile Kenya", "GBP optimization Nairobi", "local SEO Kitengela", "Google Maps marketing Kenya"],
    icon: MapPin,
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    short: "Visual identity that earns trust.",
    description: "Brand identity systems, marketing collateral, and ad creative.",
    intro: "Premium visual systems that make a Kenyan brand look — and sell — like a category leader from day one.",
    benefits: [
      "Brand identities built to scale",
      "Conversion-tested ad creative",
      "Print & digital collateral",
      "Pitch decks that close deals",
    ],
    keywords: ["graphic design Kenya", "branding Kitengela", "logo design Nairobi", "ad creative Kenya"],
    icon: PenTool,
  },
  {
    slug: "website-design",
    title: "Website Design",
    short: "Fast, responsive, conversion-built.",
    description: "Conversion-first websites engineered to perform.",
    intro: "We design and build websites in Kenya that load fast, rank in Google, and convert visitors into paying clients — not just digital brochures.",
    benefits: [
      "Mobile-first responsive design",
      "SEO-optimized from launch",
      "Lightning-fast load speeds",
      "Built-in lead capture & analytics",
    ],
    keywords: ["website design Kenya", "web design Nairobi", "website developer Kitengela", "ecommerce website Kenya"],
    icon: Monitor,
  },
  {
    slug: "geo-marketing",
    title: "GEO-Marketing",
    short: "Own your local territory.",
    description: "Hyperlocal positioning, geo-targeted media, and citations.",
    intro: "Geographically targeted campaigns that make your business the obvious choice in your specific neighborhood, town, or region in Kenya.",
    benefits: [
      "Hyperlocal ad targeting by area",
      "Local citation building",
      "Neighborhood-specific landing pages",
      "Multi-location strategy",
    ],
    keywords: ["geo marketing Kenya", "local marketing Kitengela", "hyperlocal advertising Nairobi", "location-based marketing Kenya"],
    icon: Compass,
  },
  {
    slug: "consultation",
    title: "Marketing Consultation",
    short: "Strategy that unlocks growth.",
    description: "Executive-level advisory for owners ready to scale.",
    intro: "Sit down with a strategist who has built marketing engines across Kenya. We diagnose what's stuck and build the roadmap to fix it.",
    benefits: [
      "Full marketing diagnostic",
      "90-day growth roadmap",
      "Funnel & offer optimization",
      "Channel mix recommendations",
    ],
    keywords: ["marketing consultant Kenya", "marketing strategy Nairobi", "growth consultant Kitengela", "business consultant Kenya"],
    icon: Lightbulb,
  },
  {
    slug: "social-media",
    title: "Social Media Management",
    short: "Always-on presence that builds trust.",
    description: "Editorial calendars, community management, and content engines.",
    intro: "Daily content, real engagement, and a feed that signals authority — for Kenyan brands that want to stay top of mind.",
    benefits: [
      "Monthly content calendars",
      "Daily community management",
      "Branded reels & video",
      "Growth & engagement reporting",
    ],
    keywords: ["social media management Kenya", "social media manager Nairobi", "content creation Kitengela", "Instagram management Kenya"],
    icon: Share2,
  },
  {
    slug: "authority",
    title: "Authority Infrastructure",
    short: "The full digital foundation.",
    description: "Full-stack digital infrastructure for category leaders.",
    intro: "The complete digital growth stack — site, SEO, ads, social, automation — built and run as one system for Kenyan businesses ready to dominate.",
    benefits: [
      "End-to-end digital presence",
      "Marketing automation & CRM",
      "Digital PR & citations",
      "Dedicated growth team",
    ],
    keywords: ["digital marketing agency Kenya", "marketing agency Nairobi", "marketing agency Kitengela", "full service marketing Kenya"],
    icon: Layers,
  },
  {
    slug: "brand-design-optimization",
    title: "Brand Design & Optimization",
    short: "Sharpen the brand. Lift conversion.",
    description: "Brand identity refinement, design system audits, and conversion-rate optimization (CRO) that turn a tired brand into a high-performing growth asset.",
    intro: "We refine your brand's visual language and optimize every touchpoint — logo, site, ads, decks — so each impression in Kitengela, Nairobi, and Kenya earns more attention, trust, and revenue.",
    benefits: [
      "Cohesive brand system across every channel",
      "Higher conversion rates on key landing pages",
      "Premium positioning that justifies premium pricing",
      "Conversion-tested creative for ads and sales pages",
    ],
    keywords: ["brand design Kenya", "brand optimization Nairobi", "CRO Kitengela", "conversion rate optimization Kenya", "brand refresh Nairobi"],
    icon: Sparkles,
  },
];


export const SUB_SERVICES: SubService[] = [
  // SEO
  { slug: "seo-for-coaches", title: "SEO for Coaches", pillar: "seo",
    tagline: "Rank for the questions your future clients are Googling right now.",
    description: "Specialized SEO for coaches, consultants, and personal brands in Kenya. We build content that ranks for transformation-led searches and converts readers into discovery calls.",
    outcomes: ["Rank for 'coach in Nairobi/Kitengela' searches", "Booked discovery calls from organic traffic", "Authority content that compounds"],
    keywords: ["SEO for coaches Kenya", "life coach SEO Nairobi", "business coach marketing Kitengela"] },
  { slug: "seo-for-real-estate", title: "SEO for Real Estate", pillar: "seo",
    tagline: "Be the first listing buyers in Kitengela & Nairobi see.",
    description: "Real estate SEO built for Kenyan agents and developers. Rank for property, plot, and apartment searches in your target neighborhoods.",
    outcomes: ["Rank for 'plots for sale Kitengela'", "Capture buyer searches by area", "Long-term organic lead pipeline"],
    keywords: ["real estate SEO Kenya", "property SEO Nairobi", "plots for sale Kitengela SEO"] },
  { slug: "seo-for-ecommerce", title: "SEO for E-commerce", pillar: "seo",
    tagline: "Product pages that print sales while you sleep.",
    description: "Technical and on-page SEO for Kenyan online stores — from category architecture to schema markup that drives click-through.",
    outcomes: ["Higher organic product traffic", "Improved conversion rate", "Reduced ad dependency"],
    keywords: ["ecommerce SEO Kenya", "Shopify SEO Nairobi", "online store SEO Kitengela"] },

  // Google Ads
  { slug: "google-ads-leadgen", title: "Google Ads for Lead Generation", pillar: "google-ads",
    tagline: "Qualified leads in your inbox within 7 days.",
    description: "High-intent Google Ads campaigns built for service businesses in Kenya — calls, form fills, and WhatsApp leads that close.",
    outcomes: ["Leads from day 7", "Lower cost per acquisition", "Full call & form tracking"],
    keywords: ["Google Ads lead generation Kenya", "lead gen Nairobi", "PPC leads Kitengela"] },
  { slug: "google-ads-ecommerce", title: "Google Ads for E-commerce", pillar: "google-ads",
    tagline: "Profitable ROAS on Shopping & Search.",
    description: "Performance Max, Shopping, and Search campaigns engineered for Kenyan online retailers — built around margin, not vanity clicks.",
    outcomes: ["3x+ return on ad spend", "Scaled product visibility", "Smarter remarketing"],
    keywords: ["Google Shopping ads Kenya", "ecommerce PPC Nairobi", "online store ads Kitengela"] },
  { slug: "google-ads-local", title: "Local Service Ads", pillar: "google-ads",
    tagline: "Top of Google with the green 'Google Guaranteed' badge.",
    description: "Local Service Ads setup and management for Kenyan service businesses — the highest-trust placement on Google.",
    outcomes: ["Phone calls directly from Google", "Pay only for qualified leads", "Trust badge boost"],
    keywords: ["Local Service Ads Kenya", "Google Guaranteed Nairobi", "local ads Kitengela"] },

  // Social Ads
  { slug: "instagram-ads", title: "Instagram Ads", pillar: "social-ads",
    tagline: "Visual ads that stop the scroll and start the sale.",
    description: "Instagram-native creative and targeting built for Kenya's most active social audience.",
    outcomes: ["Lower cost per lead", "Branded creative that performs", "Pixel-perfect retargeting"],
    keywords: ["Instagram ads Kenya", "IG advertising Nairobi", "Instagram marketing Kitengela"] },
  { slug: "facebook-ads", title: "Facebook Ads", pillar: "social-ads",
    tagline: "Reach the right Kenyan audience for less.",
    description: "Facebook Ads strategy, creative, and management — full-funnel campaigns from awareness to purchase.",
    outcomes: ["Targeted audience reach", "Conversion-focused creative", "Detailed performance reporting"],
    keywords: ["Facebook ads Kenya", "Meta ads Nairobi", "FB advertising Kitengela"] },
  { slug: "tiktok-ads", title: "TikTok Ads", pillar: "social-ads",
    tagline: "Tap into Kenya's fastest-growing platform.",
    description: "TikTok Spark Ads and in-feed campaigns with native creative built for Kenyan audiences.",
    outcomes: ["Massive reach for low spend", "Trend-led creative", "Younger audience capture"],
    keywords: ["TikTok ads Kenya", "TikTok marketing Nairobi", "TikTok advertising Kitengela"] },

  // GBP
  { slug: "gbp-real-estate", title: "Real Estate GBP Optimization", pillar: "gbp",
    tagline: "Show up first when buyers search for property near them.",
    description: "Google Business Profile optimization for Kenyan real estate agencies and developers.",
    outcomes: ["Top of local map results", "Direct buyer calls", "Review-driven trust"],
    keywords: ["real estate GBP Kenya", "property listing Google Nairobi", "real estate Maps Kitengela"] },
  { slug: "gbp-restaurants", title: "Restaurant GBP Setup", pillar: "gbp",
    tagline: "Fill tables from Google Maps — every night.",
    description: "Restaurant-specific Google Business Profile management with menu, photos, posts, and review strategy.",
    outcomes: ["More direction requests", "Higher review ratings", "Booking-ready listing"],
    keywords: ["restaurant GBP Kenya", "restaurant marketing Nairobi", "food business Google Kitengela"] },
  { slug: "gbp-clinics", title: "Clinics & Health GBP", pillar: "gbp",
    tagline: "Be the first clinic patients in your area find.",
    description: "Healthcare-compliant GBP optimization for Kenyan clinics, dentists, and wellness providers.",
    outcomes: ["More appointment requests", "Trust-building reviews", "Local visibility growth"],
    keywords: ["clinic GBP Kenya", "healthcare marketing Nairobi", "dentist Google Kitengela"] },

  // Graphic Design
  { slug: "brand-identity", title: "Brand Identity Systems", pillar: "graphic-design",
    tagline: "A complete visual language, not just a logo.",
    description: "Logos, color systems, typography, and brand guidelines built for Kenyan brands that want to look world-class.",
    outcomes: ["Cohesive brand presence", "Premium positioning", "Consistent visual systems"],
    keywords: ["brand identity Kenya", "logo design Nairobi", "branding agency Kitengela"] },
  { slug: "ad-creative", title: "Performance Ad Creative", pillar: "graphic-design",
    tagline: "Creative built to hit ROAS, not awards.",
    description: "Static and motion ad creative tested against Kenyan audiences — built to convert, iteratively improved.",
    outcomes: ["Higher click-through rates", "Lower CPM creative", "Always-fresh ad library"],
    keywords: ["ad creative Kenya", "performance creative Nairobi", "ad design Kitengela"] },
  { slug: "pitch-decks", title: "Pitch & Sales Decks", pillar: "graphic-design",
    tagline: "Decks that close investors and clients.",
    description: "Investor-grade pitch and sales decks designed and copywritten for Kenyan founders.",
    outcomes: ["Funding-ready presentations", "Higher proposal close rate", "Premium deck design"],
    keywords: ["pitch deck design Kenya", "investor deck Nairobi", "sales deck Kitengela"] },

  // Website Design
  { slug: "ecommerce-web", title: "E-commerce Web Design", pillar: "website-design",
    tagline: "Online stores that sell from day one.",
    description: "Shopify and WooCommerce stores designed for Kenyan retailers — fast, SEO-ready, conversion-built.",
    outcomes: ["Higher conversion rate", "Mobile-perfect shopping", "Integrated payments (M-Pesa)"],
    keywords: ["ecommerce website Kenya", "online store design Nairobi", "Shopify developer Kitengela"] },
  { slug: "saas-web", title: "SaaS & Product Websites", pillar: "website-design",
    tagline: "Product sites that turn visitors into trials.",
    description: "Conversion-engineered marketing sites for Kenyan SaaS and tech startups.",
    outcomes: ["Higher signup conversion", "Clear product positioning", "Scalable component system"],
    keywords: ["SaaS website Kenya", "startup web design Nairobi", "product website Kitengela"] },
  { slug: "service-web", title: "Service Business Websites", pillar: "website-design",
    tagline: "Websites built to book, call, and quote.",
    description: "Service business websites for Kenyan agencies, contractors, clinics, and consultants — designed around the lead.",
    outcomes: ["More qualified inquiries", "Clear service positioning", "WhatsApp & call integration"],
    keywords: ["service business website Kenya", "small business web design Nairobi", "service site Kitengela"] },

  // GEO
  { slug: "geo-nairobi", title: "Nairobi GEO Targeting", pillar: "geo-marketing",
    tagline: "Own every Nairobi neighborhood that matters.",
    description: "Hyperlocal campaigns mapped to Westlands, Karen, Kilimani, CBD, and beyond.",
    outcomes: ["Neighborhood-level visibility", "Targeted local creative", "Geo-specific landing pages"],
    keywords: ["Nairobi marketing", "Westlands marketing", "Karen advertising", "Kilimani marketing"] },
  { slug: "geo-kitengela", title: "Kitengela GEO Targeting", pillar: "geo-marketing",
    tagline: "Be the obvious choice in Kitengela.",
    description: "Hyperlocal marketing built specifically for Kitengela businesses — from EPZ to Acacia.",
    outcomes: ["Top-of-mind in Kitengela", "Local foot traffic growth", "Community-built brand"],
    keywords: ["Kitengela marketing", "Kitengela advertising", "Kitengela business growth"] },
  { slug: "geo-multi-location", title: "Multi-Location GEO", pillar: "geo-marketing",
    tagline: "Scale across cities without losing the local feel.",
    description: "Multi-location strategy for Kenyan brands operating in Nairobi, Mombasa, Kisumu, and beyond.",
    outcomes: ["Consistent multi-city growth", "Per-location reporting", "Centralized brand control"],
    keywords: ["multi-location marketing Kenya", "branch marketing Nairobi", "national marketing Kenya"] },

  // Consultation
  { slug: "growth-audit", title: "Growth Strategy Audit", pillar: "consultation",
    tagline: "Find the leaks. Plug the leaks. Scale.",
    description: "A deep diagnostic of your marketing stack with a 90-day action plan tailored to your Kenyan market.",
    outcomes: ["Full marketing audit", "Prioritized action list", "Channel mix strategy"],
    keywords: ["marketing audit Kenya", "growth audit Nairobi", "business audit Kitengela"] },
  { slug: "funnel-consult", title: "Funnel & Offer Consulting", pillar: "consultation",
    tagline: "Fix the offer. Multiply the revenue.",
    description: "Offer architecture, pricing, and funnel consulting for Kenyan founders ready to scale.",
    outcomes: ["Higher conversion offers", "Improved AOV", "Scalable funnel design"],
    keywords: ["funnel consultant Kenya", "offer strategy Nairobi", "sales funnel Kitengela"] },
  { slug: "go-to-market", title: "Go-to-Market Strategy", pillar: "consultation",
    tagline: "Launch with traction, not crickets.",
    description: "End-to-end go-to-market strategy for new products and services in Kenya.",
    outcomes: ["Clear launch playbook", "Channel-by-channel plan", "Measurable launch KPIs"],
    keywords: ["go to market Kenya", "product launch Nairobi", "GTM strategy Kitengela"] },

  // Social Media Mgmt
  { slug: "smm-coaches", title: "Social Management for Coaches", pillar: "social-media",
    tagline: "Show up daily. Build authority. Book clients.",
    description: "Done-for-you social media management for Kenyan coaches and consultants.",
    outcomes: ["Daily branded content", "Engaged community", "Inbound discovery calls"],
    keywords: ["social media for coaches Kenya", "coach Instagram Nairobi", "personal brand Kitengela"] },
  { slug: "smm-real-estate", title: "Social Management for Real Estate", pillar: "social-media",
    tagline: "Listings, reels, and tours that move properties.",
    description: "Social media for Kenyan real estate brands — content that builds buyer trust and moves inventory.",
    outcomes: ["Branded property reels", "Buyer engagement", "Listing visibility"],
    keywords: ["real estate social media Kenya", "property Instagram Nairobi", "real estate content Kitengela"] },
  { slug: "smm-restaurants", title: "Social Management for Restaurants", pillar: "social-media",
    tagline: "Mouth-watering content that fills tables.",
    description: "Restaurant social media management — food photography, reels, and posting strategy.",
    outcomes: ["Higher engagement", "More bookings", "Local food brand growth"],
    keywords: ["restaurant social media Kenya", "food marketing Nairobi", "restaurant Instagram Kitengela"] },

  // Authority
  { slug: "authority-foundation", title: "Authority Foundation Build", pillar: "authority",
    tagline: "The full digital launchpad in 60 days.",
    description: "Site, SEO, GBP, social, and ads — built and launched together as one growth system for Kenyan brands.",
    outcomes: ["End-to-end digital presence", "Faster time to traction", "Unified brand system"],
    keywords: ["digital agency Kenya", "marketing setup Nairobi", "brand launch Kitengela"] },
  { slug: "authority-pr", title: "Digital PR & Citations", pillar: "authority",
    tagline: "Press, podcasts, and citations that build trust.",
    description: "Digital PR and citation building for Kenyan brands ready to be seen as the category leader.",
    outcomes: ["Earned media features", "High-authority backlinks", "Improved brand search"],
    keywords: ["digital PR Kenya", "PR agency Nairobi", "citations Kitengela"] },
  { slug: "authority-systems", title: "Marketing Systems & CRM", pillar: "authority",
    tagline: "Automate the follow-up. Never lose a lead.",
    description: "CRM, marketing automation, and lead-handling systems built for Kenyan service businesses.",
    outcomes: ["Faster lead response", "Automated nurture sequences", "Pipeline visibility"],
    keywords: ["CRM setup Kenya", "marketing automation Nairobi", "lead management Kitengela"] },
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
