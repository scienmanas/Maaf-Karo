import { StaticImageData } from "next/image";
import harry from "@/public/legends/harry.png";
import harkirat from "@/public/legends/harkirat.png";
import mannu from "@/public/legends/mannu.png";
import elon from "@/public/legends/elon.png";
import mark from "@/public/legends/mark.png";
import satya from "@/public/legends/satya.png";

interface Legend {
  id: number;
  data: {
    name: string;
    image?: StaticImageData;
    about: string;
    github?: string;
  };
}

export const legends: Legend[] = [
  {
    id: 1,
    data: {
      name: "Apne Harry bhai",
      image: harry,
      about:
        "Harish Khan popularly known as Code with Harry is an absolute legend, he has a youtube channel 6.86M subscribers. He is a full time remote software engineer and a great teacher. He is one who taught many students to code without unessary video ads/intro outro stuff. He is a great teacher and a great human being.",
      github: "codewithharry",
    },
  },
  {
    id: 2,
    data: {
      name: "Harkirat Singh",
      image: harkirat,
      about:
        "Harkirat is a remote software engineer. What he doesn't know, be it DevOps, Cloud, Development, building a whole company, he is a true legend. He is a gigachad",
      github: "hkirat",
    },
  },
  {
    id: 3,
    data: {
      name: "Mannu Paji",
      image: mannu,
      about:
        "Mannu Arora is the creator of Aceternity UI, a toolset designed for developers to enhance website design with pre-made, trendy components using frameworks like Next.js, React, TailwindCSS, and Framer Motion. Aceternity UI simplifies website development by offering easy-to-implement components that require minimal effort for styling and animations. Mannu is a seasoned software engineer with over seven years of experience in product development. His journey with Aceternity UI started by addressing the needs of early and small-scale businesses, later expanding to YC-backed companies and various founders.",
      github: "manuarora700",
    },
  },
  {
    id: 4,
    data: {
      name: "Elon Musk",
      image: elon,
      about:
        "Elon Reeve Musk FRS is a business magnate and investor. He is the founder, CEO, and Chief Engineer at SpaceX; angel investor, CEO, and Product Architect of Tesla, Inc.; founder of The Boring Company; and co-founder of Neuralink and OpenAI.",
    },
  },
  {
    id: 5,
    data: {
      name: "Mark Zuckerberg",
      image: mark,
      about:
        "Mark Elliot Zuckerberg is an American media magnate, internet entrepreneur, and philanthropist. He is known for co-founding Facebook, Inc. and serves as its chairman, chief executive officer, and controlling shareholder.",
    },
  },
  {
    id: 6,
    data: {
      name: "Satya Nadella",
      image: satya,
      about:
        "Satya Narayana Nadella is an Indian-American business executive. He is the executive chairman of the board of directors of Microsoft Corporation, and the former president and chief executive officer of Microsoft's cloud and enterprise group.",
    },
  },
];
