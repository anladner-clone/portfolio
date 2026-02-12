export interface Stack {
    frontend: string[];
    backend: string[];
    tools: string[];
}

export const stack: Stack = {
    frontend: ["HTML", "CSS", "JavaScript", "AstroJS", "ReactJS", "TailwindCSS"],
    backend: ["Python", "API REST"],
    tools: ["Git", "GitHub", "Figma", "VS Code", "Canva"]
}