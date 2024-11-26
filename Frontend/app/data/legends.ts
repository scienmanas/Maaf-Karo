import { StaticImageData } from "next/image";
import harry from "@/public/legends/harry.png";
import harkirat from "@/public/legends/harkirat.png";
import mannu from "@/public/legends/mannu.png";
import elon from "@/public/legends/elon.png";
import mark from "@/public/legends/mark.png";
import satya from "@/public/legends/satya.png";


interface Legend {
  name: string;
  image?: StaticImageData;
  about: string;
}

export const legends: Legend[] = [
  {
    name: "Apne Harry bhai",
    image: harry,
    about: "",
  },
  {
    name: "Harkirat Singh",
    image: harkirat,
    about: "",
  },
  {
    name: "Mannu Pajji",
    image: mannu,
    about: "",
  },
  {
    name: "Elon Musk",
    image: elon,
    about:
      "Elon Reeve Musk FRS is a business magnate and investor. He is the founder, CEO, and Chief Engineer at SpaceX; angel investor, CEO, and Product Architect of Tesla, Inc.; founder of The Boring Company; and co-founder of Neuralink and OpenAI.",
  },
  {
    name: "Mark Zuckerberg",
    image: mark,
    about:
      "Mark Elliot Zuckerberg is an American media magnate, internet entrepreneur, and philanthropist. He is known for co-founding Facebook, Inc. and serves as its chairman, chief executive officer, and controlling shareholder.",
  },
  {
    name: "Satya Nadella",
    image: satya,
    about:
      "Satya Narayana Nadella is an Indian-American business executive. He is the executive chairman of the board of directors of Microsoft Corporation, and the former president and chief executive officer of Microsoft's cloud and enterprise group.",
  },
//   {
//     name: "Tim Cook",
//     // image: "/images/tim-cook.png",
//     about:
//       "Timothy Donald Cook is an American business executive. He is the CEO of Apple Inc. and serves as a member of the company's board of directors.",
//   },
//   {
//     name: "Sundar Pichai",
//     // image: "/images/sundar-pichai.png",
//     about:
//       "Pichai Sundararajan, better known as Sundar Pichai, is an Indian-American business executive. He is the CEO of Alphabet Inc. and its subsidiary Google.",
//   },
//   {
//     name: "Jeff Bezos",
//     // image: "/images/jeff-bezos.png",
//     about:
//       "Jeffrey Preston Bezos is an American entrepreneur, media proprietor, and investor. He is the founder, executive chairman, and former president and CEO of Amazon.com, Inc.",
//   },
//   {
//     name: "Bill Gates",
//     // image: "/images/bill-gates.png",
//     about:
//       "William Henry Gates III is an American business magnate, software developer, and philanthropist. He is best known as the co-founder of Microsoft Corporation.",
//   },
];
