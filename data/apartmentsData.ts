type ApartmentType = "small" | "medium" | "large" | "office";
type FloorLevel = "Ground Floor" | "1. Floor" | "2. Floor" | "3. Floor";

interface Apartment {
  id: number;
  title: string;
  floor: FloorLevel;
  area: number;
  type: ApartmentType;
  image: string;
}

// Declare image variables
const officeImage = "/apartments/3.png";
const smallImage = "/apartments/1.png";
const mediumImage = "/apartments/2.png";
const largeImage = "/apartments/4.png";

// Apartments array
export const apartmentsData: Apartment[] = [
  {
    id: 1,
    title: "Office space",
    floor: "Ground Floor",
    area: 143.61,
    type: "office",
    image: officeImage,
  },
  {
    id: 2,
    title: "Apartment 1",
    floor: "Ground Floor",
    area: 29.08,
    type: "small",
    image: smallImage,
  },
  {
    id: 3,
    title: "Apartment 2",
    floor: "Ground Floor",
    area: 64.90,
    type: "medium",
    image: mediumImage,
  },
  {
    id: 4,
    title: "Apartment 3",
    floor: "Ground Floor",
    area: 61.77,
    type: "medium",
    image: mediumImage,
  },
  {
    id: 5,
    title: "Apartment 4",
    floor: "1. Floor",
    area: 38.64,
    type: "small",
    image: smallImage,
  },
  {
    id: 6,
    title: "Apartment 5",
    floor: "1. Floor",
    area: 47.78,
    type: "small",
    image: smallImage,
  },
  {
    id: 7,
    title: "Apartment 6",
    floor: "1. Floor",
    area: 59.88,
    type: "medium",
    image: mediumImage,
  },
  {
    id: 8,
    title: "Apartment 7",
    floor: "1. Floor",
    area: 58.43,
    type: "medium",
    image: mediumImage,
  },
  {
    id: 9,
    title: "Apartment 8",
    floor: "1. Floor",
    area: 59.02,
    type: "medium",
    image: mediumImage,
  },
  {
    id: 10,
    title: "Apartment 9",
    floor: "1. Floor",
    area: 51.52,
    type: "medium",
    image: mediumImage,
  },
  {
    id: 11,
    title: "Apartment 10",
    floor: "1. Floor",
    area: 49.56,
    type: "small",
    image: smallImage,
  },
  {
    id: 12,
    title: "Apartment 11",
    floor: "1. Floor",
    area: 39.99,
    type: "small",
    image: smallImage,
  },
  {
    id: 13,
    title: "Apartment 12",
    floor: "2. Floor",
    area: 38.64,
    type: "small",
    image: smallImage,
  },
  {
    id: 14,
    title: "Apartment 13",
    floor: "2. Floor",
    area: 47.57,
    type: "small",
    image: smallImage,
  },
  {
    id: 15,
    title: "Apartment 14",
    floor: "2. Floor",
    area: 59.88,
    type: "medium",
    image: mediumImage,
  },
  {
    id: 16,
    title: "Apartment 15",
    floor: "2. Floor",
    area: 58.43,
    type: "medium",
    image: mediumImage,
  },
  {
    id: 17,
    title: "Apartment 16",
    floor: "2. Floor",
    area: 59.02,
    type: "medium",
    image: mediumImage,
  },
  {
    id: 18,
    title: "Apartment 17",
    floor: "2. Floor",
    area: 51.52,
    type: "medium",
    image: mediumImage,
  },
  {
    id: 19,
    title: "Apartment 18",
    floor: "2. Floor",
    area: 49.56,
    type: "small",
    image: smallImage,
  },
  {
    id: 20,
    title: "Apartment 19",
    floor: "2. Floor",
    area: 39.99,
    type: "small",
    image: smallImage,
  },
  {
    id: 21,
    title: "Apartment 20",
    floor: "3. Floor",
    area: 38.64,
    type: "small",
    image: smallImage,
  },
  {
    id: 22,
    title: "Apartment 21",
    floor: "3. Floor",
    area: 47.72,
    type: "small",
    image: smallImage,
  },
  {
    id: 23,
    title: "Apartment 22",
    floor: "3. Floor",
    area: 59.88,
    type: "medium",
    image: mediumImage,
  },
  {
    id: 24,
    title: "Apartment 23",
    floor: "3. Floor",
    area: 58.43,
    type: "medium",
    image: mediumImage,
  },
  {
    id: 25,
    title: "Apartment 24",
    floor: "3. Floor",
    area: 59.03,
    type: "medium",
    image: mediumImage,
  },
  {
    id: 26,
    title: "Apartment 25",
    floor: "3. Floor",
    area: 104.85,
    type: "large",
    image: largeImage,
  },
  {
    id: 27,
    title: "Apartment 26",
    floor: "3. Floor",
    area: 39.99,
    type: "small",
    image: smallImage,
  },
];
