export const content = {
  profile: {
    name: "Erik Huckle",
    tagline: "Writer, creator, and digital explorer. Building at the intersection of technology and creativity."
  },
  links: {
    medium: "https://erik-huckle.medium.com/",
    linkedin: "https://www.linkedin.com/in/erik-huckle",
    twitter: "https://x.com/Beyourhuckberry",
    oncyber: "https://oncyber.io/@ctspacepod",
    seize: "https://6529.io/CryptoTron72",
    youtube: "https://www.youtube.com/@ErikBuildswithAI"
  },
  writing: {
    rss: "https://medium.com/feed/@erik-huckle",
    curated: [
      {
        title: "B2B AI Security Agents — Request for Startup",
        url: "https://erik-huckle.medium.com/b2b-ai-security-agents-request-for-startup-02fa255e2968",
        date: "2024-12-29",
        excerpt: "Startup I think should exist in the world."
      },
      {
        title: "The Action Oriented Citizen: Civic Participation",
        url: "https://erik-huckle.medium.com/the-action-oriented-citizen-civic-participation-3a13f3ec0ffe",
        date: "2022-06-07",
        excerpt: "Exploring local civic involvement."
      },
      {
        title: "Is It Worth Spending Money to Explore Space?",
        url: "https://erik-huckle.medium.com/is-it-worth-spending-money-to-explore-space-c67cfd0556ae",
        date: "2018-11-27",
        excerpt: "The cost of Innovation and doing big things."
      },
      {
        title: "It’s Time to Change How We Think About Collaboration",
        url: "https://erik-huckle.medium.com/its-time-to-change-how-we-think-about-collaboration-eaa1f94285e6",
        date: "2020-03-12",
        excerpt: "Collaborating across a distributed ledger (little before its time :) )."
      },
      {
        title: "Can Bitcoin Be Broken With Quantum Computing?",
        url: "https://erik-huckle.medium.com/can-bitcoin-be-broken-with-quantum-computing-e54d394bea12",
        date: "2018-04-10",
        excerpt: "Brief deep dive into Quantum Computing."
      }
    ]
  },
  linkedinPosts: [
    {
      title: "How SailPoint Built an AI-Ready Data Platform to Transform Identity Governance",
      url: "https://www.linkedin.com/pulse/how-sailpoint-built-ai-ready-data-platform-transform-identity-huckle-qkarc/?trackingId=pzxptUT3TtCrgGnPI4hB7A%3D%3D",
      date: "2025-10-09",
      summary: "Reflections on my time at SailPoint and what made our team successful",
      thumbnail: "/media/linkedin/post1.svg"
    },
    {
      title: "An Ode to Good Vibes - Coding in 2025",
      url: "https://www.linkedin.com/pulse/ode-good-vibes-coding-2025-erik-huckle-fzvxc/?trackingId=1aPbxhZKTjWKJuVfk5DGVg%3D%3D",
      date: "2025-07-12",
      summary: "My thoughts on the evolving landscape of vibe coding.",
      thumbnail: "/media/linkedin/post2.svg"
    },
  ],
  tweets: [
    {
      text: "Launching my Youtube channel.",
      url: "https://x.com/Beyourhuckberry/status/1933172391951352066?s=20",
      date: "2025-06-12"
    },
    {
      text: "First AI Agent Attempt for Coinbase Hackathon.",
      url: "https://x.com/Beyourhuckberry/status/1937930630920343806?s=20",
      date: "2025-06-25"
    }
  ],
  oncyber: {
    title: "Erik Huckle's Digital Museum",
    url: "https://oncyber.io/@ctspacepod",
    thumbnail: "/media/oncyber/cover.svg",
    summary: "An immersive 3D space showcasing digital art, creative experiments, and interactive experiences."
  }
} as const;

export type Content = typeof content;
