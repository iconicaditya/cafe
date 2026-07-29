// ─── Static cafe data ────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: "Home",      href: "#home" },
  { label: "Menu",      href: "#menu" },
  { label: "About",     href: "#about" },
  { label: "Gallery",   href: "#gallery" },
  { label: "Locations", href: "#locations" },
  { label: "Blog",      href: "#blog" },
  { label: "Contact",   href: "#contact" },
];

export const FEATURED_COFFEES = [
  {
    id: 1,
    name: "Signature Velvet Latte",
    description:
      "Our house-crafted espresso blend meets silky steamed milk and a whisper of vanilla — the drink that started it all.",
    price: "NPR 550",
    tag: "House Favourite",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Single-Origin Espresso",
    description:
      "Pulled from Ethiopian Yirgacheffe beans roasted in small batches. Bold, bright, and beautifully complex.",
    price: "NPR 380",
    tag: "Origin Reserve",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Honey Oat Flat White",
    description:
      "Creamy oat milk, raw wildflower honey, and a double ristretto shot. Rich, sweet, and utterly smooth.",
    price: "NPR 620",
    tag: "Seasonal Pick",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
  },
];

export const SIGNATURE_DRINKS = [
  {
    id: 1,
    category: "Espresso",
    name: "Classic Americano",
    description: "Two shots of rich espresso diluted with hot water for a clean, bold cup.",
    price: "NPR 350",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    category: "Latte",
    name: "Caramel Macchiato",
    description: "Vanilla-infused milk, espresso, and a drizzle of artisan caramel.",
    price: "NPR 520",
    image: "https://images.unsplash.com/photo-1485808191679-5f86510bd9d4?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    category: "Cold Brew",
    name: "Nitro Cold Brew",
    description: "24-hour steeped cold brew infused with nitrogen for a creamy, velvety texture.",
    price: "NPR 650",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    category: "Specialty",
    name: "Rose Cardamom Latte",
    description: "Delicate rose water, warming cardamom, and our house espresso blend.",
    price: "NPR 580",
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    category: "Espresso",
    name: "Doppio Ristretto",
    description: "A concentrated double shot of espresso that captures the full complexity of the bean.",
    price: "NPR 420",
    image: "https://images.unsplash.com/photo-1574914629385-46448b0aeec9?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    category: "Cold Brew",
    name: "Iced Vanilla Brew",
    description: "Slow-brewed coffee over ice with house-made vanilla syrup and cream.",
    price: "NPR 580",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80",
  },
];

export const DRINK_CATEGORIES = ["All", "Espresso", "Latte", "Cold Brew", "Specialty"];

export const STORY_TIMELINE = [
  {
    year: "2014",
    title: "A Single Cup",
    text: "Velvet Brew was born in a 200 sq ft kiosk with one espresso machine and a dream: to serve coffee that moved people.",
  },
  {
    year: "2017",
    title: "The First Roastery",
    text: "We opened our own micro-roastery, giving us complete control over the bean-to-cup journey.",
  },
  {
    year: "2020",
    title: "Five Locations",
    text: "Despite the world pausing, we expanded thoughtfully — each location designed as a sanctuary of calm.",
  },
  {
    year: "2024",
    title: "A Community",
    text: "Today, Velvet Brew is more than a cafe. It's a gathering place for ideas, connections, and moments that matter.",
  },
];

export const WHY_US = [
  {
    icon: "Coffee",
    title: "Single-Origin Beans",
    description: "Every bean is sourced directly from farms we visit personally, ensuring ethical trade and exceptional flavour.",
  },
  {
    icon: "Award",
    title: "Premium Ingredients",
    description: "From locally milled flour to imported European chocolate — we never compromise on quality.",
  },
  {
    icon: "Users",
    title: "Expert Baristas",
    description: "Our baristas are certified by the Specialty Coffee Association and trained under world-class mentors.",
  },
  {
    icon: "Zap",
    title: "Swift Service",
    description: "We believe your time is precious. Most orders are ready in under 4 minutes without rushing the craft.",
  },
  {
    icon: "Heart",
    title: "Welcoming Atmosphere",
    description: "Every detail — from the lighting to the playlists — is curated to make you feel at home.",
  },
  {
    icon: "Leaf",
    title: "Sustainably Sourced",
    description: "We offset our carbon footprint, compost our grounds, and partner with regenerative farms.",
  },
];

export const BEST_SELLERS = [
  {
    id: 1,
    name: "Velvet Espresso",
    category: "Espresso",
    price: "NPR 380",
    rating: 4.9,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1574914629385-46448b0aeec9?auto=format&fit=crop&w=600&q=80",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Almond Croissant",
    category: "Pastry",
    price: "NPR 450",
    rating: 4.8,
    reviews: 204,
    image: "https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&w=600&q=80",
    badge: "Fan Favourite",
  },
  {
    id: 3,
    name: "Avocado Toast",
    category: "Food",
    price: "NPR 890",
    rating: 4.7,
    reviews: 178,
    image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c820?auto=format&fit=crop&w=600&q=80",
    badge: "Top Rated",
  },
  {
    id: 4,
    name: "Chai Spice Latte",
    category: "Latte",
    price: "NPR 480",
    rating: 4.8,
    reviews: 267,
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=600&q=80",
    badge: "New",
  },
];

export const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    alt: "Cozy cafe interior with warm lighting",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    alt: "Latte art close-up",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80",
    alt: "Premium coffee beans",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
    alt: "Modern minimalist cafe setting",
    span: "col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=800&q=80",
    alt: "Skilled barista at work",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&w=800&q=80",
    alt: "Freshly baked pastries",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    alt: "Espresso extraction",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80",
    alt: "Morning coffee ritual",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1485808191679-5f86510bd9d4?auto=format&fit=crop&w=800&q=80",
    alt: "Coffee and notebook lifestyle",
    span: "",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Interior Designer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "Velvet Brew has completely ruined all other coffee for me. The espresso is unlike anything I've had in the city — complex, smooth, and absolutely perfect. The space feels like a private sanctuary.",
  },
  {
    id: 2,
    name: "James Whitmore",
    role: "Architect",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "I've travelled to 40 countries and visited coffee shops in most of them. Velvet Brew rivals the very best. The Honey Oat Flat White is a masterpiece. I come here every morning without exception.",
  },
  {
    id: 3,
    name: "Sofia Andersen",
    role: "Author",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "The atmosphere is perfect for deep work. The staff remember your order, the music is never intrusive, and the light through the windows is simply beautiful. Three chapters written and counting.",
  },
  {
    id: 4,
    name: "Marcus Chen",
    role: "Photographer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "I shoot editorial coffee campaigns and Velvet Brew is always my go-to reference for visual quality. The latte art here is genuinely world-class. But more importantly — it tastes as good as it looks.",
  },
  {
    id: 5,
    name: "Elena Vasquez",
    role: "Journalist",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "A cafe that truly cares. From the sustainably sourced beans to the hand-thrown ceramic cups — every detail communicates love for the craft. I wrote my best article of the year from Table 4.",
  },
];

export const LOCATIONS = [
  {
    id: 1,
    name: "Velvet Brew — Thamel",
    address: "Heritage Court, Thamel Marg, Kathmandu",
    phone: "+977 1 4-VELVET",
    hours: "Mon–Fri 7:00 – 21:00 · Sat–Sun 8:00 – 22:00",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
    mapUrl: "https://maps.google.com",
  },
  {
    id: 2,
    name: "Velvet Brew — Lazimpat",
    address: "The Gallery Building, Lazimpat, Kathmandu",
    phone: "+977 1 4-VELVET",
    hours: "Mon–Fri 7:30 – 20:00 · Sat–Sun 8:30 – 21:00",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    mapUrl: "https://maps.google.com",
  },
  {
    id: 3,
    name: "Velvet Brew — Patan",
    address: "Durbar Square View, Patan, Lalitpur",
    phone: "+977 1 4-VELVET",
    hours: "Mon–Sun 8:00 – 20:00",
    image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=800&q=80",
    mapUrl: "https://maps.google.com",
  },
];

export const INSTAGRAM_POSTS = [
  { src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80", likes: "1.2k" },
  { src: "https://images.unsplash.com/photo-1574914629385-46448b0aeec9?auto=format&fit=crop&w=400&q=80", likes: "987" },
  { src: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=400&q=80", likes: "2.4k" },
  { src: "https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&w=400&q=80", likes: "756" },
  { src: "https://images.unsplash.com/photo-1485808191679-5f86510bd9d4?auto=format&fit=crop&w=400&q=80", likes: "1.8k" },
  { src: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=400&q=80", likes: "3.1k" },
];