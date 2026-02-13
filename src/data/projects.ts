export type Project = {
    slug: string;
    title: string;
    shortDescription: string;
    description: string;
    image: string;
    tech: string[];
    repo?: string;
    demo?: string;
    featured?: boolean;
    year: number;
};

export const projects: Project[] = [
    {
        slug: "wonder-web",
        title: "WonderLabs Web",
        shortDescription: "Sitio web para agencia de desarrollo web.",
        description: "Desarrollé una web moderna para una agencia de desarrollo web.",
        image: "images/wonder-labs.png",
        tech: ["Astro", "CSS", "GitHub", "Vercel", "Figma", "JavaScript"],
        repo: "",
        demo: "",
        featured: true,
        year: 2025
    },
    {
        slug: "linkhub-nicodev",
        title: "LinkHub - NicoDev",
        shortDescription: "Sitio web para un creador de contenido.",
        description: "Desarrollé una web para un creador de contenido.",
        image: "images/linkhub-nicodev.png",
        tech: ["Astro", "Tailwind", "Vercel", "GitHub", "TypeScript", "Figma"],
        repo: "",
        demo: "",
        featured: true,
        year: 2026
    }
];
