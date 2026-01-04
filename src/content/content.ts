export const content = {
  profile: {
    name: "Erik Huckle",
    tagline: "Writer, creator, and digital explorer. Building at the intersection of technology and creativity."
  },
  links: {
    medium: "https://erik-huckle.medium.com/",
    linkedin: "https://www.linkedin.com/in/erik-huckle",
    twitter: "https://x.com/Beyourhuckberry",
    oncyber: "https://oncyber.io/erikhuckle",
    seize: "https://6529.io/CryptoTron72"
  },
  writing: {
    rss: "https://medium.com/feed/@erik-huckle",
    curated: [
      {
        title: "The Future of Digital Creativity",
        url: "https://erik-huckle.medium.com/the-future-of-digital-creativity",
        date: "2024-12-15",
        excerpt: "Exploring how emerging technologies are reshaping the creative landscape."
      },
      {
        title: "Building in Public: Lessons Learned",
        url: "https://erik-huckle.medium.com/building-in-public",
        date: "2024-11-20",
        excerpt: "What I've learned from sharing my creative process openly."
      },
      {
        title: "The Art of Digital Presence",
        url: "https://erik-huckle.medium.com/digital-presence",
        date: "2024-10-05",
        excerpt: "Crafting an authentic identity in the digital age."
      },
      {
        title: "Technology as a Creative Medium",
        url: "https://erik-huckle.medium.com/technology-creative-medium",
        date: "2024-09-12",
        excerpt: "Why I see code and creativity as two sides of the same coin."
      },
      {
        title: "Navigating the Creator Economy",
        url: "https://erik-huckle.medium.com/creator-economy",
        date: "2024-08-28",
        excerpt: "Thoughts on sustainable creativity in a rapidly changing landscape."
      }
    ]
  },
  linkedinPosts: [
    {
      title: "The Power of Building Communities",
      url: "https://www.linkedin.com/in/erik-huckle",
      date: "2024-12-01",
      summary: "Reflections on what makes online communities thrive and how we can foster meaningful connections.",
      thumbnail: "/media/linkedin/post1.svg"
    },
    {
      title: "Why I'm Betting on the Metaverse",
      url: "https://www.linkedin.com/in/erik-huckle",
      date: "2024-11-15",
      summary: "My thoughts on the evolving landscape of virtual spaces and digital experiences.",
      thumbnail: "/media/linkedin/post2.svg"
    },
    {
      title: "Lessons from a Year of Creating",
      url: "https://www.linkedin.com/in/erik-huckle",
      date: "2024-10-20",
      summary: "A candid look back at what worked, what didn't, and what I'm carrying forward.",
      thumbnail: "/media/linkedin/post3.svg"
    }
  ],
  tweets: [
    {
      text: "The best projects start with curiosity, not certainty.",
      url: "https://x.com/Beyourhuckberry",
      date: "2024-12-10"
    },
    {
      text: "Building things is how I learn. Shipping them is how I grow.",
      url: "https://x.com/Beyourhuckberry",
      date: "2024-11-25"
    },
    {
      text: "The future isn't about choosing between digital and physical. It's about both.",
      url: "https://x.com/Beyourhuckberry",
      date: "2024-11-10"
    },
    {
      text: "Every creative tool is just a mirror. What you make reflects who you are.",
      url: "https://x.com/Beyourhuckberry",
      date: "2024-10-28"
    }
  ],
  oncyber: {
    title: "Erik Huckle's Digital Museum",
    url: "https://oncyber.io/erikhuckle",
    thumbnail: "/media/oncyber/cover.svg",
    summary: "An immersive 3D space showcasing digital art, creative experiments, and interactive experiences."
  }
} as const;

export type Content = typeof content;
