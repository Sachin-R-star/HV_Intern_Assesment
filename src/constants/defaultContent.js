export const DEFAULT_CONTENT = {
  hero: {
    kicker: "I'm",
    name: "Hogari Marai",
    title: "Fashion Model & Editorial Muse",
    location: "Paris • Milan • Tokyo • New York",
    stats: {
      count: "62K",
      label: "Followers",
      followBtnText: "Follow",
      messageBtnText: "Message",
      rating: "4.8",
      ratingCount: "250+ reviews"
    },
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85",
    fallbackImage: "/assets/figma_hero_model.png"
  },
  intro: {
    sectionTag: "OVERVIEW",
    title: "My Intro",
    headingAccent: "Elegance in Motion",
    description: "Welcome to my portfolio. With over 8 years gracing international runways, luxury fashion campaigns, and haute couture editorials across Paris, Milan, and Tokyo. Specializing in avant-garde visual storytelling, high-concept editorial lookbooks, and luxury brand ambassadorship.",
    aboutBtnText: "ABOUT ME",
    hireBtnText: "HIRE ME",
    mainImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=85",
    satellites: [
      {
        id: "sat-1",
        label: "Haute Couture",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
        position: "bottom-left"
      },
      {
        id: "sat-2",
        label: "Monochrome Editorial",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
        position: "bottom-right"
      },
      {
        id: "sat-3",
        label: "Runway 2024",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
        position: "top-right"
      }
    ]
  },
  // The highlighted card marked in the Figma specification
  quoteBox: {
    badge: "EDITORIAL STATEMENT",
    title: "Curated Aesthetics & Vision",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Fashion is not merely an aesthetic—it is the unspoken architecture of emotion, light, and timeless living art.",
    author: "Hogari Marai",
    authorTitle: "Featured in Vogue & Harper's Bazaar",
    highlightBadge: "4.8 ★ Global Editorial Rating"
  },
  gallery: {
    sectionTag: "PORTFOLIO",
    title: "My Gallery",
    subtitle: "Selected Haute Couture & Editorial Works",
    items: [
      {
        id: "gal-1",
        title: "Autumn Elegance",
        category: "Vogue Paris Editorial",
        year: "2024",
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=85"
      },
      {
        id: "gal-2",
        title: "Nocturne Studio",
        category: "Milano Fashion Week",
        year: "2024",
        image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=85"
      },
      {
        id: "gal-3",
        title: "Golden Hour Glow",
        category: "Tokyo Atelier Campaign",
        year: "2023",
        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=85"
      },
      {
        id: "gal-4",
        title: "Avant-Garde Silhouette",
        category: "Haute Couture Monograph",
        year: "2024",
        image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=800&q=85"
      }
    ]
  },
  contact: {
    sectionTag: "CONNECT",
    title: "Short Message",
    subtitle: "Available for worldwide fashion weeks, magazine editorials & brand partnerships.",
    email: "hogari@maraistudio.com",
    agentPhone: "+33 (0)1 42 68 55 90",
    agency: "Elite Paris / Storm Models London",
    socials: [
      { name: "Instagram", handle: "@hogarimarai", url: "https://instagram.com" },
      { name: "Pinterest", handle: "hogarimarai", url: "https://pinterest.com" },
      { name: "LinkedIn", handle: "in/hogarimarai", url: "https://linkedin.com" },
      { name: "Behance", handle: "hogarimarai", url: "https://behance.net" }
    ]
  }
};
