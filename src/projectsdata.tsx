export type ProjectCategory = "web" | "ai" | "games";
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
    id: "portfolio-v2",
    name: "portfolio v2",
    category: "web",
    progress: "finished",
    summary: "Current portfolio refresh inspired by cyber-retro layouts and bold card components.",
    details:
      "An evolving portfolio system with modular sections, category-based project browsing, and a visual direction inspired by cyber and pixel-era aesthetics.",
    accent: "from-pink-500 to-purple-600",
    coverImage: "/portfolio-v2/pv2.png",
    galleryImages: ["/portfolio-v2/pv2.png"],
  },
  {
    id: "portfolio-v1",
    name: "portfolio v1",
    category: "web",
    progress: "finished",
    favorite: true,
    summary: "Retro profile website with animated panels, custom scroll boxes, and playful micro interactions.",
    details:
      "This version focuses on expressive visual identity with retro UI framing, stylized typography, and responsive behavior while keeping the interface fast and easy to navigate.",
    accent: "from-fuchsia-500 to-violet-500",
    coverImage: "/portfolio/p1.png",
    galleryImages: ["/portfolio/p1.png", "/portfolio/p2.png", "/portfolio/p3.png", "/portfolio/p4.png", "/portfolio/p5.png"],
  },
  {
    id: "Revive2000",
    name: "Revive2000",
    category: "web",
    progress: "in-progress",
    summary: "Minimal writing space focused on dark mode readability and smooth page transitions.",
    details:
      "A text-first blogging concept where legibility and mood are central, combining clean layout structure with lightweight transitions and focused reading rhythm.",
    accent: "from-purple-500 to-indigo-500",
    coverImage: "/pfbg.png",
    galleryImages: ["/pfbg.png", "/sam.jpg", "/pfbg.png", "/sam.jpg", "/pfbg.png"],
  },
  {
    id: "Crimson Remorse",
    name: "Crimson Remorse",
    category: "games",
    progress: "in-progress",
    summary: "Top-down arcade game focused on quick runs, tactical movement, and replayability.",
    details:
      "Arcade project built around short sessions, route optimization, and risk-reward encounters with strong replay value and progression pacing.",
    accent: "from-purple-500 to-fuchsia-500",
    coverImage: "/crimsonremorse/coming.png",
    galleryImages: ["/crimsonremorse/menu.png", "/crimsonremorse/coming.png"],
  },
];
