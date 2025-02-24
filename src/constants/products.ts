type FeedbackT = {
  id: number;
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
      { id: 1, text: "Great quality!", score: 4 },
      { id: 2, text: "not enough!", score: 2 },
      { id: 3, text: "Bad!", score: 2 },
      { id: 4, text: "", score: 2 },
    ],
    isNew: true,
    type: "schoolBag",
    variants: [
      { color: "red", size: "M", price: 110 },
      { color: "red", size: "L", price: 110 },
      { color: "blue", size: "L", price: 120 },
      { color: "blue", size: "M", price: 120 },
    ],
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
      { id: 1, text: "Great quality!", score: 4 },
      { id: 2, text: "not enough!", score: 2 },
      { id: 3, text: "Bad!", score: 2 },
      { id: 4, text: "", score: 2 },
    ],
    isNew: true,
    type: "schoolBag",
    variants: [
      { color: "red", size: "M", price: 110 },
      { color: "blue", size: "L", price: 120 },
      { color: "red", size: "L", price: 120 },
      { color: "blue", size: "L", price: 110 },
    ],
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
      { id: 1, text: "Great quality!", score: 4 },
      { id: 2, text: "not enough!", score: 2 },
      { id: 3, text: "Bad!", score: 2 },
      { id: 4, text: "", score: 2 },
    ],
    isNew: true,
    type: "pencilCase",
    variants: [
      { color: "red", size: "M", price: 110 },
      { color: "blue", size: "L", price: 120 },
      { color: "red", size: "L", price: 120 },
      { color: "blue", size: "L", price: 110 },
    ],
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
      { id: 1, text: "Great quality!", score: 4 },
      { id: 2, text: "not enough!", score: 2 },
      { id: 3, text: "Bad!", score: 2 },
      { id: 4, text: "", score: 2 },
    ],
    isNew: true,
    type: "pencilCase",
    variants: [
      { color: "red", size: "M", price: 110 },
      { color: "blue", size: "L", price: 120 },
      { color: "red", size: "L", price: 120 },
      { color: "blue", size: "L", price: 110 },
    ],
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
      { id: 1, text: "Great quality!", score: 4 },
      { id: 2, text: "not enough!", score: 2 },
      { id: 3, text: "Bad!", score: 2 },
      { id: 4, text: "", score: 2 },
    ],
    isNew: true,
    type: "pencilCase",
    variants: [
      { color: "red", size: "M", price: 110 },
      { color: "blue", size: "L", price: 120 },
      { color: "red", size: "L", price: 120 },
      { color: "blue", size: "L", price: 110 },
    ],
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
      { id: 1, text: "Great quality!", score: 4 },
      { id: 2, text: "not enough!", score: 2 },
      { id: 3, text: "Bad!", score: 2 },
      { id: 4, text: "", score: 2 },
    ],
    isNew: true,
    type: "pencilCase",
    variants: [
      { color: "red", size: "M", price: 110 },
      { color: "blue", size: "L", price: 120 },
      { color: "red", size: "L", price: 120 },
      { color: "blue", size: "L", price: 110 },
    ],
  },
];

export default products;
