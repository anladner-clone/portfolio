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
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_KKf2e7jkxljN9iv8lgXD6KAIn-xBksC6Xw6wVbqFbcVj5ofwsP1ljONLzYbfUOzIrcT6RPy4oYmu2Gnb6S-39WoMz9PaCeYnOOTbxi7CTGGDsf9FaQI9yoMtzfNtN0IrtlmM2QNrGY8p8-7iU2cdybwgkPui-xwf-C0H1BNcrht0WMhY8xkp6ZY8FFP_3wgQprwXLECMGlYFBdc6x2XxvwaYxPcpJLLHRG7eMrcXc8pISy_y6nrhDm4BekxprfG6bb1OvP6b2Z4",
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
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDsGiHsant14g0EVuIp508Isqgf60WDKvf7tvsEryaQ8_cG1mhh0zHA11d2xHWH3FAe66uGVLsbWujmAieCHLjPlaX29I8IUJ6FH6Af5Pu1sILC0qyEuNVUJxwJIbVXyrG5TBlKxK4fmEZ1HXSFOZcnpfVeKtHUsr6BuQBc6Q0wpuaS-H3Xh_SJfzm8sZR8v2hiJykX2xGD3OV9JGZK0pfNLGyiBtzb0aGm6jZHZ9DQ-clffZcuA2ili2Mnd52r-wcfd7qZbTqwas",
        tech: ["Astro", "Tailwind"],
        repo: "",
        demo: "",
        featured: true,
        year: 2026
    },
    {
        slug: "wonder-web",
        title: "WonderLabs Web",
        shortDescription: "Sitio web para agencia de desarrollo web.",
        description: "Desarrollé una web moderna para una agencia de desarrollo web utilizando Astro y Tailwind.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_KKf2e7jkxljN9iv8lgXD6KAIn-xBksC6Xw6wVbqFbcVj5ofwsP1ljONLzYbfUOzIrcT6RPy4oYmu2Gnb6S-39WoMz9PaCeYnOOTbxi7CTGGDsf9FaQI9yoMtzfNtN0IrtlmM2QNrGY8p8-7iU2cdybwgkPui-xwf-C0H1BNcrht0WMhY8xkp6ZY8FFP_3wgQprwXLECMGlYFBdc6x2XxvwaYxPcpJLLHRG7eMrcXc8pISy_y6nrhDm4BekxprfG6bb1OvP6b2Z4",
        tech: ["Astro", "Tailwind"],
        repo: "",
        demo: "",
        featured: true,
        year: 2025
    }
];
