import {
  algorithms,
  devnotes,
  oscs,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Freelancer",
    company_name: "Self Employed",
    date: "Jan 2015 - Jan 2016",
    details: [
      "Provided web and mobile development services to various clients as an <span style='color: white;'>independent contractor.</span>",
      "<span style='color: white;'>Managed</span> full project lifecycle from initial consultation to deployment and maintenance.",
      "Collaborated with remote teams and stakeholders to ensure timely delivery and <span style='color: white;'>client satisfaction.</span>"
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Voyagesbooth (Product-Based)",
    date: "Jan 2016 - Feb 2021",
    details: [
      "Developed and optimized core features for the company’s flagship product, improving <span style='color: white;'>performance</span> and user experience.",
      "Worked closely with <span style='color: white;'>cross-functional</span> teams to design and implement scalable systems and APIs.",
      "Integrated <span style='color: white;'>third-party services</span> and payment gateways, ensuring robust security and minimal downtime."
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Service-Based Company",
    date: "Feb 2021 - Present",
    details: [
      "Architected and implemented <span style='color: white;'>end-to-end solutions</span> for a variety of clients across different industries.",
      "Maintained <span style='color: white;'>high-quality code</span> standards and best practices to deliver scalable and maintainable software.",
      "Mentored junior developers, conducted code reviews, and led sprint planning meetings to ensure <span style='color: white;'>timely deliverables.</span>"
    ],
  },
];


const portfolio = [
  {
    name: "Goodmeetings",
    description:
      "an AI-powered platform for enhanced meeting performance.",
    image: oscs,
  },
  {
    name: "HDFC Life Insurance app",
    description:
      "The HDFC Life Insurance App allows you to browse through various online life insurance plans, study their benefits, and track policy issuance and payment renewal",
    image: devnotes,
  },
  // {
  //   name: "Visually Understanding Algorithms",
  //   description:
  //     "A showcase of animated algorithms coded using TypeScript, with the video garnering over 400,000 views.",
  //   image: algorithms,
  // },
];

export { experiences, portfolio };

