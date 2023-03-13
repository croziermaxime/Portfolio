import {
    mobile,
    backend,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Mobile Developer",
        icon: mobile,
    },
    {
        title: "Volleyball Player",
        icon: backend,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
];

const experiences = [
    {
        title: "Frontend Developer",
        company_name: "A+ Garanties",
        icon: starbucks,
        iconBg: "#383E56",
        date: "Sep 2020 - Dec 2021",
        points: [
            "Developing a website using HTML/CSS & JS and other related technologies.",
            "Collaborating with cross-functional teams including product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Digital Tech",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Oct 2022 - Mar 2023",
        points: [
            "Maintaining web applications using Node.js, HTML/CSS and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Creating an interface that regroups all the customers folders.",
        ],
    },
    {
        title: "Student",
        company_name: "Epitech Technology",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Sep 2020 - July 2023",
        points: [
            "First 3 years of studying in PGE program 2020-2023.",
            "Learning the bases of coding by learning C/C++ and python.",
            "Bachelor obtained in 2023.",
            "Switching to MSC Pro program to specialize myself into one Domain 2023-2025.",
        ],
    },
    {
        title: "Waiter",
        company_name: "Monte-Carlo Beach - Grand Hotel Cannes",
        icon: shopify,
        iconBg: "#383E56",
        date: "Summer 2020 - Summer 2021 - Summer 2022",
        points: [
            "During the summers i also worked as a waiter in two Well know hotels in the Côte d'Azur.",
            "Learning how to work with big teams and what hard-working was.",
            "Immersion in the luxury domain since all the customers were wealthy.",
        ],
    },
];

const projects = [
    {
        name: "Incoming...",
        description:
            "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: git,
        source_code_link: "https://github.com/",
    },
    {
        name: "Incoming...",
        description:
            "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: git,
        source_code_link: "https://github.com/",
    },
    {
        name: "Incoming...",
        description:
            "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: git,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, projects };
