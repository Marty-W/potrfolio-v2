export const jobs = [
  {
    name: "Emplify (ex. Socialbakers)",
    id: "jobs_1",
    tech: ["React", "Next", "Styled Components"],
  },
  {
    name: "01People",
    id: "jobs_2",
    tech: ["React", "Next", "Styled Components"],
  },
];

export const projects = [
  {
    name: "Swiss Knife: React app",
    id: "projects_1",
    tech: ["React", "Next", "Styled Components"],
  },
  {
    name: "Swiss Knife: React Native app",
    id: "projects_2",
    tech: ["React", "Next", "Styled Components"],
  },
  {
    name: "Swiss Knife: GraphQL Backend",
    id: "projects_3",
    tech: ["React", "Next", "Styled Components"],
  },
  {
    name: "Portfolio: Astro JS app with Svelte components",
    id: "projects_4",
    tech: ["React", "Next", "Styled Components"],
  },
].map((p) => {
  const desc =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus officia nemo, non consectetur mollitia quasi amet adipisci suscipit consequatur aperiam veniam dignissimos velit ipsam. Error officiis delectus obcaecati. Nihil, eaque.";

  return {
    ...p,
    desc,
  };
});

export const status = "active";
