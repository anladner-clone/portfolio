export interface Stack {
    frontend: string[];
    backend: string[];
    tools: string[];
}

export const stack: Stack = {
    frontend: [
        "Astro",
        "React",
        "JavaScript",
        "Tailwind CSS"
    ],
    backend: [
        "Python",
        "REST APIs"
    ],
    tools: [
        "Git",
        "GitHub",
        "Vercel",
        "Figma"
    ]
};
