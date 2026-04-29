export type ProjectCategory = "ai" | "web" | "games";
export type ProjectProgress = "finished" | "in-progress";

export type ProjectItem = {
  id: string;
  name: string;
  category: ProjectCategory;
  progress: ProjectProgress;
  favorite?: boolean;
  summary: string;
  details: string;
  accent: string;
  coverImage: string;
  galleryImages: string[];
};

export const categoryOrder: { key: ProjectCategory; label: string }[] = [
  { key: "web", label: "web projects" },
  { key: "ai", label: "ai projects" },
  { key: "games", label: "games" },
];

export const projectsData: ProjectItem[] = [
  {
    id: "Lyxia Engine",
    name: "Lyxia Engine",
    category: "ai",
    progress: "in-progress",
    summary: "???",
    details:
      "",
    accent: "from-pink-500 to-purple-600",
    coverImage: "/w.png",
    galleryImages: [ "/w.png","/soon.png"],
  },
  {
    id: "Pixlated",
    name: "Pixlated",
    category: "ai",
    progress: "in-progress",
    summary: "???",
    details:
      "",
    accent: "from-pink-500 to-purple-600",
    coverImage: "/w.png",
    galleryImages: [ "/w.png","/soon.png"],
  },
  {
    id: "Connect Four",
    name: "Connect Four",
    category: "ai",
    progress: "finished",
    summary: "Connect Four: Cyberpunk Edition is a modern reimagining of the classic board game.",
    details:
      "A full-stack, cyberpunk-themed Connect Four game featuring a sleek React UI and a relentless Python AI engine powered by the Minimax algorithm and Alpha-Beta pruning.\nWebsite: connectfour-ai.vercel.app\ngithub: github.com/sxmimhd/connect4Ai",
    accent: "from-pink-500 to-purple-600",
    coverImage: "/connect4/connect1.png",
    galleryImages: ["/connect4/connect1.png","/connect4/connect2.png","/connect4/connect3.png","/connect4/connect4.png","/connect4/connect5.png", ],
  },
  {
    id: "Arcade2000",
    name: "Arcade2000",
    category: "web",
    progress: "in-progress",
    summary: "Neon Arcade website. Chase high scores in the digital abyss.",
    details:
      "Games created with Phaser JS. \nArcade2000 is a cyberpunk-inspired gaming hub where players compete for high scores, earn tokens, and climb leaderboards across a growing collection of arcade-style games. Create your profile, challenge others, and dominate the neon-lit arena.",
    accent: "from-purple-500 to-indigo-500",
    coverImage: "/arcade2000/arcade6.png",
    galleryImages: [ "/arcade2000/arcade1.png", "/arcade2000/arcade2.png","/arcade2000/arcade3.png", "/arcade2000/arcade4.png","/arcade2000/arcade5.png", "/arcade2000/game.png","/soon.png",],
  },
  {
    id: "Revive2000",
    name: "Revive2000",
    category: "web",
    progress: "in-progress",
    summary: "A platform to trade, collect and showcase digital products of the 2000s",
    details:
      "",
    accent: "from-purple-500 to-indigo-500",
    coverImage: "/revive2000/revive1.jpg",
    galleryImages: ["/soon.png","/revive2000/revive2.png","/revive2000/revive3.png","/revive2000/revive4.png","/revive2000/revive5.png",],
  },
  {
    id: "Velvet Nocturnal",
    name: "Velvet Nocturnal",
    category: "games",
    progress: "in-progress",
    summary: "2D made with Phaser, a game designed for Arcade2000 project, psychological horror score game.",
    details:
      "coming soon",
    accent: "from-purple-500 to-fuchsia-500",
    coverImage: "/soon.png",
    galleryImages: ["/velvetnoc/velv1.png", "/velvetnoc/velv2.png","/velvetnoc/velv3.png"],
  },
  {
    id: "portfolio-v2",
    name: "portfolio v2",
    category: "web",
    progress: "finished",
    summary: "Current portfolio refresh inspired by cyber-retro layouts and bold card components.",
    details:
      "An evolving portfolio system with modular sections, category-based project browsing, and a visual direction inspired by cyber and pixel-era aesthetics.\nWebsite: sxmimhd.vercel.app\ngithub: github.com/sxmimhd/portfolio-v2",
    accent: "from-pink-500 to-purple-600",
    coverImage: "/portfolio-v2/portfolio.png",
    galleryImages: [ "/portfolio-v2/portfolio.png","/portfolio-v2/pv2.png"],
  },
  {
    id: "portfolio-v1",
    name: "portfolio v1",
    category: "web",
    progress: "finished",
    favorite: true,
    summary: "Souls game style portfolio",
    details:
      "\n Website: samimahdadi.netlify.app\ngithub: github.com/sxmimhd/portfolio-v1",
    accent: "from-fuchsia-500 to-violet-500",
    coverImage: "/portfolio/p1.png",
    galleryImages: ["/portfolio/p1.png", "/portfolio/p2.png", "/portfolio/p3.png", "/portfolio/p4.png", "/portfolio/p5.png"],
  },
  
  {
    id: "Crimson Remorse",
    name: "Crimson Remorse",
    category: "games",
    progress: "in-progress",
    summary: "3D made with Unity, psychological horror game.",
    details:
      "coming soon",
    accent: "from-purple-500 to-fuchsia-500",
    coverImage: "/crimsonremorse/crimson6.png",
    galleryImages: ["/soon.png","/crimsonremorse/crimson1.png", "/crimsonremorse/crimson2.png", "/crimsonremorse/crimson3.png", "/crimsonremorse/crimson4.png", "/crimsonremorse/crimson5.png"," /crimsonremorse/menu.png","/crimsonremorse/coming.png"],
  },
];
