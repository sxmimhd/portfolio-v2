import React from "react";
import { categoryOrder, projectsData, type ProjectProgress } from "./projectsdata";

export default function Portfolio() {
  const [bgRatio, setBgRatio] = React.useState(1.2);
  const [isMobile, setIsMobile] = React.useState(false);
  const [categoryIndex, setCategoryIndex] = React.useState(1);
  const [progressFilter, setProgressFilter] = React.useState<ProjectProgress>("finished");
  const [activeProjectIndex, setActiveProjectIndex] = React.useState(0);
  const [isProjectModalOpen, setIsProjectModalOpen] = React.useState(false);
  const [selectedGalleryImage, setSelectedGalleryImage] = React.useState<string | null>(null);
  const renderDetails = (text: string) => {
    return text.split("\n").map((line, lineIndex) => (
      <span key={lineIndex}>
        {line.split(" ").map((word, i) => {
          const isLink =
            word.startsWith("http") ||
            word.startsWith("www.") ||
            /\.(com|app|dev|io|net|org)/.test(word);
  
          if (isLink) {
            const url = word.startsWith("http")
              ? word
              : `https://${word}`;
  
            return (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 underline hover:text-pink-300 cursor-pointer"
              >
                {word}{" "}
              </a>
            );
          }
  
          return word + " ";
        })}
        <br />
      </span>
    ));
  };
  React.useEffect(() => {
    const bg = new Image();
    bg.src = "/pfbg.png";
    bg.onload = () => {
      if (bg.naturalWidth > 0) {
        setBgRatio(bg.naturalHeight / bg.naturalWidth);
      }
    };
  }, []);

  React.useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const category = categoryOrder[categoryIndex];

  const filteredProjects = React.useMemo(
    () => projectsData.filter((project) => project.category === category.key && project.progress === progressFilter),
    [category.key, progressFilter]
  );

  const activeProject = filteredProjects[activeProjectIndex] ?? null;

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (selectedGalleryImage) {
          setSelectedGalleryImage(null);
        } else {
          setIsProjectModalOpen(false);
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedGalleryImage]);

  React.useEffect(() => {
    setActiveProjectIndex(0);
  }, [categoryIndex, progressFilter]);

  const rotateCategory = (direction: "left" | "right") => {
    const jump = direction === "left" ? -1 : 1;
    const next = (categoryIndex + jump + categoryOrder.length) % categoryOrder.length;
    setCategoryIndex(next);
  };

  const rotateProject = (direction: "left" | "right") => {
    if (!filteredProjects.length) return;
    const jump = direction === "left" ? -1 : 1;
    const next = (activeProjectIndex + jump + filteredProjects.length) % filteredProjects.length;
    setActiveProjectIndex(next);
  };

  return (
    <div
      className="w-full text-white font-mono bg-[#06020c]"
      style={{
        backgroundImage: "url('/pfbg.png')",
        backgroundSize: isMobile ? "auto 100%" : "100% auto",
        backgroundPosition: isMobile ? "left top" : "top center",
        backgroundRepeat: "no-repeat",
        minHeight: isMobile ? "100vh" : `max(100vh, calc(100vw * ${bgRatio}))`,
      }}
    >
      {/* HERO SECTION */}
      <section className="flex items-start justify-center px-4 pt-12 pb-10">
        <div className="relative w-[900px] max-w-full bg-black/60 border border-purple-500/40 
                        shadow-[0_0_40px_rgba(168,85,247,0.3)] backdrop-blur-sm p-6 md:-translate-x-6">

          {/* GRID OVERLAY */}
          <div className="absolute inset-0 pointer-events-none opacity-20 
            bg-[linear-gradient(to_right,#7a3cff22_1px,transparent_1px),
                 linear-gradient(to_bottom,#7a3cff22_1px,transparent_1px)]
            bg-[size:40px_40px]" />

          <div className="relative flex flex-col md:flex-row gap-5 md:gap-6 items-start">

            {/* LEFT SIDE */}
            <div className="flex flex-col items-center md:items-start gap-4">
              
              {/* IMAGE */}
              <div className="relative">
                <img
                  src="/sam.jpg"
                  alt="sam"
                  className="w-44 h-44 object-cover border border-pink-500/40 
                             shadow-[0_0_20px_rgba(236,72,153,0.4)] 
                             rotate-[-2deg] md:translate-y-1"
                />

                {/* glow frame */}
                <div className="absolute inset-0 border border-purple-500/30 
                                translate-x-1 translate-y-1 -z-10" />
              </div>

            </div>

            {/* RIGHT SIDE - BIO */}
            <div className="flex-1 min-h-[220px] border border-purple-500/40 bg-black/75 p-4 md:p-5">
              <h1
                className="text-[44px] leading-[0.9] md:text-[64px] uppercase tracking-wide text-violet-300 drop-shadow-[0_0_16px_rgba(168,85,247,0.55)]"
                style={{ fontFamily: "'Rubik Glitch', 'Share Tech Mono', monospace" }}
              >
                sxmimhd
              </h1>

              <div className="pixel-scroll mt-3 max-h-[220px] overflow-y-auto border border-purple-500/35 bg-black/55 px-3 py-3 pr-2">
                <div className="border-b border-purple-500/30 pb-3 text-[16px] leading-tight md:text-[25px] text-white">
                  <p>hello!! i&apos;m Sam</p>
                  <p>21 Y.O</p>
                  <p>i go by sxmimhd, full name is Sami Mahdadi</p>
                  <p>i create games of all kinds and genres</p>
                  <p>also i build web + ai stuff :3</p>
                </div>

                <div className="mt-3 text-pink-300 text-lg md:text-1xl">
                  (this is scrollable)
                </div>

                <p className="mt-3 text-sm leading-relaxed text-purple-100/90 md:text-base">
                  i like building personal projects with a lot of personality, weird little interactions, and playful
                  visuals. one day i&apos;m polishing a clean ui, the next day i&apos;m making something chaotic just
                  to see what happens. i care about performance, details, and vibes.
                </p>
              </div>
            </div>
          </div>

          {/* STATUS BOX */}
          <div className="absolute -bottom-6 right-4 bg-black/80 border border-pink-500/40 
                          px-3 py-1 text-xs text-pink-300 shadow-lg">
            <p>status: online</p>
            <p>mood: ???</p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-6">
        <div
          className="mx-auto w-[900px] max-w-full border border-purple-500/45 bg-black/70 p-4 shadow-[0_0_32px_rgba(168,85,247,0.28)] backdrop-blur-sm md:translate-x-6 md:p-5"
        >
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-purple-500/35 pb-3">
            <h2 className="text-lg uppercase tracking-widest text-fuchsia-300 md:text-xl">
              {">> featured projects !!"}
            </h2>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => rotateCategory("left")}
                className="border border-purple-400/60 bg-purple-900/40 px-2 text-purple-200 transition hover:bg-purple-700/40"
              >
                {"<"}
              </button>
              <span className="min-w-[130px] text-center text-sm uppercase text-purple-200 md:min-w-[150px]">
                {category.label}
              </span>
              <button
                type="button"
                onClick={() => rotateCategory("right")}
                className="border border-purple-400/60 bg-purple-900/40 px-2 text-purple-200 transition hover:bg-purple-700/40"
              >
                {">"}
              </button>
            </div>
          </div>

          <div className="mb-4 flex items-center gap-2">
            {(["finished", "in-progress"] as const).map((status) => {
              const active = progressFilter === status;
              return (
                <button
                  key={status}
                  type="button"
                  onClick={() => setProgressFilter(status)}
                  className={`border px-3 py-1 text-xs uppercase tracking-wide transition md:text-sm ${
                    active
                      ? "border-pink-300 bg-pink-500/20 text-pink-200 shadow-[0_0_14px_rgba(244,114,182,0.45)]"
                      : "border-purple-500/50 bg-black/50 text-purple-300 hover:border-pink-400/70"
                  }`}
                >
                  {status}
                </button>
              );
            })}
          </div>

          {filteredProjects.length === 0 ? (
            <div className="border border-purple-500/35 bg-black/50 px-4 py-8 text-center text-purple-200">
              no projects in this category yet.
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-[1fr_220px]">
              <div className="border border-purple-500/35 bg-black/45 p-3">
                <div className="mb-3 flex justify-between">
                  <button
                    type="button"
                    onClick={() => rotateProject("left")}
                    className="border border-purple-400/60 bg-purple-900/40 px-2 text-purple-200 transition hover:bg-purple-700/40"
                  >
                    {"<"}
                  </button>
                  <button
                    type="button"
                    onClick={() => rotateProject("right")}
                    className="border border-purple-400/60 bg-purple-900/40 px-2 text-purple-200 transition hover:bg-purple-700/40"
                  >
                    {">"}
                  </button>
                </div>

                <div className="projects-scroll max-h-[260px] overflow-y-auto pr-1">
                  <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                    {filteredProjects.map((project, index) => {
                      const isActive = project.id === activeProject?.id;
                      return (
                        <button
                          key={project.id}
                          type="button"
                          onClick={() => {
                            setActiveProjectIndex(index);
                            setIsProjectModalOpen(true);
                            setSelectedGalleryImage(null);
                          }}
                          className={`group border p-1.5 text-left transition-all duration-300 ${
                            isActive
                              ? "translate-y-[-2px] border-pink-300 bg-pink-400/10 shadow-[0_0_14px_rgba(244,114,182,0.45)]"
                              : "border-purple-500/40 bg-black/65 hover:border-fuchsia-400/70 hover:bg-purple-700/10"
                          }`}
                        >
                          <img
                            src={project.coverImage}
                            alt={project.name}
                            className="h-14 w-full border border-purple-500/40 object-cover opacity-90 transition group-hover:opacity-100"
                          />
                          <p className="mt-1 text-[10px] uppercase tracking-wide text-purple-100 md:text-[11px]">
                            {project.name}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  if (!activeProject) return;
                  setIsProjectModalOpen(true);
                  setSelectedGalleryImage(null);
                }}
                className="border border-fuchsia-400/60 bg-black/70 p-2 text-left shadow-[0_0_18px_rgba(217,70,239,0.35)] transition hover:border-pink-300 hover:shadow-[0_0_24px_rgba(236,72,153,0.4)]"
              >
                <img
                  src={activeProject?.coverImage ?? "/sam.jpg"}
                  alt={activeProject?.name ?? "selected project"}
                  className="h-36 w-full border border-purple-400/50 object-cover"
                />
                <p className="mt-2 text-xs uppercase text-fuchsia-200">selected project</p>
                <h3 className="text-sm uppercase text-white md:text-base">{activeProject?.name}</h3>
                <p className="mt-1 text-xs leading-snug text-purple-200">{activeProject?.summary}</p>
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="px-4 pb-6">
        <div className="mx-auto w-[900px] max-w-full border border-purple-500/45 bg-black/70 p-4 shadow-[0_0_26px_rgba(168,85,247,0.24)] backdrop-blur-sm md:p-5">
          <h2 className="mb-3 border-b border-purple-500/35 pb-2 text-lg uppercase tracking-widest text-fuchsia-300 md:text-xl">
            {">> about me"}
          </h2>

          <div className="grid gap-3 md:grid-cols-2">
            <div className="border border-purple-500/35 bg-black/55 p-3">
              <h3 className="text-xs uppercase text-pink-300 md:text-sm">studies + degrees</h3>
              <p className="mt-2 text-sm leading-relaxed text-purple-100/90">
                i study software engineering with a focus on interactive media and game systems. i also completed
                practical certifications in frontend development, ui/ux workflows, and ai and python courses.
              </p>
            </div>

            <div className="border border-purple-500/35 bg-black/55 p-3">
              <h3 className="text-xs uppercase text-pink-300 md:text-sm">experience</h3>
              <p className="mt-2 text-sm leading-relaxed text-purple-100/90">
                i build projects end-to-end: concept, visuals, coding, and polish. my experience includes shipping web
                portfolio builds, ai experiments, and gameplay prototypes with stylized identity.
              </p>
            </div>
          </div>

          <div className="mt-3 border border-purple-500/35 bg-black/55 p-3">
            <h3 className="text-xs uppercase text-pink-300 md:text-sm">stack tech</h3>
            <p className="mt-2 text-sm leading-relaxed text-purple-100/90">
            Unity, Blender, Phaser.js, TypeScript, Tailwind CSS, Vite, Node.js, Express.js, Python, Tenserflow, Pytorch, PostgreSQL, Git, Docker, 
               Figma, Adobe Photoshop, After Effects.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-8">
        <div className="mx-auto grid w-[900px] max-w-full gap-3 md:grid-cols-2">
          <div className="border border-purple-500/45 bg-black/70 p-4 shadow-[0_0_24px_rgba(168,85,247,0.24)] backdrop-blur-sm md:p-5">
            <h2 className="mb-3 border-b border-purple-500/35 pb-2 text-lg uppercase tracking-widest text-fuchsia-300 md:text-xl">
              {">> contact links"}
            </h2>
            <div className="flex flex-col gap-2">
              {[
                { label: "github", value: "github.com/sxmimhd", link: "https://github.com/sxmimhd" },
                { label: "linkedin", value: "linkedin.com/in/samimahdadi", link: "https://linkedin.com/in/samimahdadi" },
                { label: "email", value: "lyxiastudio@gmail.com", link: null },
                { label: "discord", value: "sxmimhd", link: null },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.link || "#"}
                  target={item.link ? "_blank" : undefined}
                  rel={item.link ? "noopener noreferrer" : undefined}
                  className="border border-purple-500/40 bg-black/55 p-2 transition 
                            hover:border-pink-400/80 hover:bg-purple-700/15"
                  onClick={(e) => {
                    if (!item.link) {
                      e.preventDefault();
                      navigator.clipboard.writeText(item.value);
                    }
                  }}
                >
                  <p className="text-[10px] uppercase tracking-wide text-pink-300">
                    {item.label}
                  </p>
                  <p className="mt-1 text-xs text-purple-100/95 md:text-sm">
                    {item.value}
                  </p>
                </a>
              ))}
            </div>
          </div>

          <div className="border border-pink-500/50 bg-black/75 p-4 shadow-[0_0_26px_rgba(236,72,153,0.25)] backdrop-blur-sm md:p-5">
            <h2 className="mb-3 border-b border-pink-500/40 pb-2 text-lg uppercase tracking-widest text-pink-200 md:text-xl">
              {">> important notice"}
            </h2>
            <div className="flex flex-col gap-3 md:flex-row md:items-start">
              <img
                src="/lyxia.png"
                alt="notice placeholder"
                className="h-24 w-24 border border-pink-400/50 object-cover shadow-[0_0_14px_rgba(236,72,153,0.3)] md:h-28 md:w-28"
              />
              <p className="text-sm leading-relaxed text-purple-100/90 md:text-base">
                lyxia studio is my creative studio and i am the owner. i design and publish my works under the lyxia
                studio name, including games, web experiences, and experimental ai projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {isProjectModalOpen && activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-sm"
          onClick={() => {
            setSelectedGalleryImage(null);
            setIsProjectModalOpen(false);
          }}
        >
          <div
            className="w-[960px] max-h-[90vh] max-w-full overflow-y-auto border border-fuchsia-400/60 bg-[#090510] p-4 shadow-[0_0_34px_rgba(217,70,239,0.35)] md:p-5"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between border-b border-purple-500/40 pb-2">
              <h3 className="text-base uppercase tracking-widest text-fuchsia-200 md:text-lg">
                {`>> ${activeProject.name}`}
              </h3>
              <button
                type="button"
                onClick={() => {
                  setSelectedGalleryImage(null);
                  setIsProjectModalOpen(false);
                }}
                className="border border-pink-400/70 bg-pink-500/20 px-2 py-0.5 text-xs uppercase text-pink-100 transition hover:bg-pink-500/35"
              >
                close
              </button>
            </div>

            <div className="grid gap-3 md:grid-cols-[240px_1fr]">
              <img
                src={activeProject.coverImage}
                alt={`${activeProject.name} cover`}
                className="h-44 w-full border border-purple-400/40 object-cover md:h-full"
              />
              <div className="border border-purple-500/35 bg-black/50 p-3">
                <p className="text-xs uppercase text-pink-300">bio</p>
                <p className="mt-1 text-sm text-purple-100">{activeProject.summary}</p>
                <p className="mt-3 text-xs uppercase text-pink-300">description</p>
                <p className="mt-1 text-sm leading-relaxed text-purple-100/90">{renderDetails(activeProject.details)}</p>
              </div>
            </div>

            <div className="mt-3 border border-purple-500/35 bg-black/45 p-3">
              <p className="mb-2 text-xs uppercase tracking-widest text-fuchsia-300">gallery</p>
              <div className="grid grid-cols-2 gap-2 md:grid-cols-5">
                {activeProject.galleryImages.slice(0, 10).map((image, index) => (
                  <button
                    key={`${activeProject.id}-gallery-${index}`}
                    type="button"
                    onClick={() => setSelectedGalleryImage(image)}
                    className="transition hover:opacity-90"
                  >
                    <img
                      src={image}
                      alt={`${activeProject.name} gallery ${index + 1}`}
                      className="h-24 w-full border border-purple-500/40 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedGalleryImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 px-4 py-6"
          onClick={() => setSelectedGalleryImage(null)}
        >
          <img
            src={selectedGalleryImage}
            alt="project preview"
            className="max-h-[92vh] max-w-full border border-fuchsia-400/60 object-contain shadow-[0_0_26px_rgba(217,70,239,0.4)]"
          />
        </div>
      )}

      <style>{`
        .pixel-scroll {
          scrollbar-width: thin;
          scrollbar-color: #b86dff #12071f;
        }

        .pixel-scroll::-webkit-scrollbar {
          width: 14px;
        }

        .pixel-scroll::-webkit-scrollbar-track {
          background: #12071f;
          border: 1px solid #6d28d9;
        }

        .pixel-scroll::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #f472b6 0%, #a855f7 100%);
          border: 1px solid #e879f9;
          box-shadow: 0 0 8px rgba(216, 180, 254, 0.45);
        }

        .pixel-scroll::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #f9a8d4 0%, #c084fc 100%);
        }

        .projects-scroll {
          scrollbar-width: thin;
          scrollbar-color: #a855f7 #12071f;
        }

        .projects-scroll::-webkit-scrollbar {
          width: 10px;
        }

        .projects-scroll::-webkit-scrollbar-track {
          background: #12071f;
          border: 1px solid #6d28d9;
        }

        .projects-scroll::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #a855f7 0%, #ec4899 100%);
          border: 1px solid #e879f9;
        }
      `}</style>
    </div>
  );
}