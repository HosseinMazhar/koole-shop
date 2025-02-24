type FeedbackT = {
  userName: string;
  text: string;
  score: number;
};

type VariantT = {
  color: string;
  size: string;
  price: number;
};

export type ProductT = {
  id: number;
  title: string;
  description: string;
  images: string[];
  comments: FeedbackT[];
  isNew: boolean;
  variants: VariantT[];
  type: "schoolBag" | "pencilCase";
  score: number;
  votes: number;
  basePrice: number;
};

const products: ProductT[] = [
  {
    id: 1,
    title: "School backpack Core",
    description:
      "Ergonomic school backpack with three separate zippered compartments, internal organiser, and pocket for up-to 15-inch laptop or tablet.",
    images: [
      "/bags/schoolBags/1-1.webp",
      "/bags/schoolBags/1-2.webp",
      "/bags/schoolBags/1-3.webp",
    ],
    score: 4,
    votes: 50,
    comments: [
      { userName: "ali", text: "Great quality!", score: 4 },
      { userName: "reza", text: "not enough!", score: 2 },
      { userName: "hamid", text: "Bad!", score: 2 },
      { userName: "sara", text: "", score: 2 },
    ],
    isNew: true,
    type: "schoolBag",
    variants: [
      { color: "#897822", size: "M", price: 110 },
      { color: "#897822", size: "L", price: 110 },
      { color: "#856547", size: "L", price: 120 },
      { color: "#856547", size: "M", price: 120 },
    ],
    basePrice: 110,
  },
  {
    id: 2,
    title: "School backpack Core 2",
    description:
      "Ergonomic school backpack with three separate zippered compartments, internal organiser, and pocket for up-to 15-inch laptop or tablet.",
    images: [
      "/bags/schoolBags/2-1.webp",
      "/bags/schoolBags/2-2.webp",
      "/bags/schoolBags/2-3.webp",
      "/bags/schoolBags/2-4.webp",
    ],
    score: 3,
    votes: 1000,
    comments: [
      { userName: "ali", text: "Great quality!", score: 4 },
      { userName: "reza", text: "not enough!", score: 2 },
      { userName: "hamid", text: "Bad!", score: 2 },
      { userName: "sara", text: "", score: 2 },
    ],
    isNew: true,
    type: "schoolBag",
    variants: [
      { color: "#897822", size: "M", price: 310 },
      { color: "#856547", size: "L", price: 320 },
      { color: "#897822", size: "L", price: 320 },
      { color: "#856547", size: "M", price: 310 },
    ],
    basePrice: 310,
  },
  {
    id: 3,
    title: "School Pencil case 1",
    description:
      "Ergonomic school backpack with three separate zippered compartments, internal organiser, and pocket for up-to 15-inch laptop or tablet.",
    images: ["/bags/pencilCases/3-1.webp", "/bags/pencilCases/3-2.webp"],
    score: 4,
    votes: 354,
    comments: [
      { userName: "ali", text: "Great quality!", score: 4 },
      { userName: "reza", text: "not enough!", score: 2 },
      { userName: "hamid", text: "Bad!", score: 2 },
      { userName: "sara", text: "", score: 2 },
    ],
    isNew: true,
    type: "pencilCase",
    variants: [
      { color: "#897822", size: "M", price: 156 },
      { color: "#856547", size: "L", price: 176 },
      { color: "#897822", size: "L", price: 176 },
      { color: "#856547", size: "M", price: 156 },
    ],
    basePrice: 156,
  },
  {
    id: 4,
    title: "School Pencil Case 2",
    description:
      "Ergonomic school backpack with three separate zippered compartments, internal organiser, and pocket for up-to 15-inch laptop or tablet.",
    images: ["/bags/pencilCases/4-1.webp", "/bags/pencilCases/4-2.webp"],
    score: 1.8,
    votes: 420,
    comments: [
      { userName: "ali", text: "Great quality!", score: 4 },
      { userName: "reza", text: "not enough!", score: 2 },
      { userName: "hamid", text: "Bad!", score: 2 },
      { userName: "sara", text: "", score: 2 },
    ],
    isNew: true,
    type: "pencilCase",
    variants: [
      { color: "#897822", size: "M", price: 130 },
      { color: "#856547", size: "L", price: 150 },
      { color: "#897822", size: "L", price: 150 },
      { color: "#856547", size: "M", price: 130 },
    ],
    basePrice: 130,
  },
  {
    id: 5,
    title: "School Pencil Case 3",
    description:
      "Ergonomic school backpack with three separate zippered compartments, internal organiser, and pocket for up-to 15-inch laptop or tablet.",
    images: ["/bags/pencilCases/5-1.webp", "/bags/pencilCases/5-2.webp"],
    score: 1.8,
    votes: 420,
    comments: [
      { userName: "ali", text: "Great quality!", score: 4 },
      { userName: "reza", text: "not enough!", score: 2 },
      { userName: "hamid", text: "Bad!", score: 2 },
      { userName: "sara", text: "", score: 2 },
    ],
    isNew: true,
    type: "pencilCase",
    variants: [
      { color: "#897822", size: "M", price: 810 },
      { color: "#856547", size: "L", price: 820 },
      { color: "#897822", size: "L", price: 820 },
      { color: "#856547", size: "M", price: 810 },
    ],
    basePrice: 810,
  },
  {
    id: 6,
    title: "School Pencil Case 4",
    description:
      "Ergonomic school backpack with three separate zippered compartments, internal organiser, and pocket for up-to 15-inch laptop or tablet.",
    images: ["/bags/pencilCases/6-1.webp", "/bags/pencilCases/6-2.webp"],
    score: 4.3,
    votes: 256,
    comments: [
      { userName: "ali", text: "Great quality!", score: 4 },
      { userName: "reza", text: "not enough!", score: 2 },
      { userName: "hamid", text: "Bad!", score: 2 },
      { userName: "sara", text: "", score: 2 },
    ],
    isNew: true,
    type: "pencilCase",
    variants: [
      { color: "#897822", size: "M", price: 10 },
      { color: "#856547", size: "L", price: 20 },
      { color: "#897822", size: "L", price: 20 },
      { color: "#856547", size: "M", price: 10 },
    ],
    basePrice: 10,
  },
];

export default products;
