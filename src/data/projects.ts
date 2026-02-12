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
        description: "Desarrollé una web moderna para una agencia de desarrollo web utilizando Astro y Tailwind.",
        image: "/images/projects/wonder.png",
        tech: ["Astro", "Tailwind"],
        repo: "",
        demo: "",
        featured: true,
        year: 2025
    },
    {
        slug: "linkhub-nicodev",
        title: "LinkHub - NicoDev",
        shortDescription: "Sitio web para un creador de contenido.",
        description: "Desarrollé una web moderna para un creador de contenido utilizando Astro y Tailwind.",
        image: "/images/projects/linkhub.png",
        tech: ["Astro", "Tailwind"],
        repo: "",
        demo: "",
        featured: true,
        year: 2026
    }
];
