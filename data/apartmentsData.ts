type ApartmentType = "small" | "medium" | "large" | "office";
type FloorLevel = "ground" | "1" | "2" | "3";

interface Apartment {
  id: number;
  titleKey: string;
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
    titleKey: "office",
    floor: "ground",
    area: 143.61,
    type: "office",
    image: officeImage,
  },
  {
    id: 2,
    titleKey: "apartment1",
    floor: "ground",
    area: 29.08,
    type: "small",
    image: smallImage,
  },
  {
    id: 3,
    titleKey: "apartment2",
    floor: "ground",
    area: 64.90,
    type: "medium",
    image: mediumImage,
  },
  {
    id: 4,
    titleKey: "apartment3",
    floor: "ground",
    area: 61.77,
    type: "medium",
    image: mediumImage,
  },
  {
    id: 5,
    titleKey: "apartment4",
    floor: "1",
    area: 38.64,
    type: "small",
    image: smallImage,
  },
  {
    id: 6,
    titleKey: "apartment5",
    floor: "1",
    area: 47.78,
    type: "small",
    image: smallImage,
  },
  {
    id: 7,
    titleKey: "apartment6",
    floor: "1",
    area: 59.88,
    type: "medium",
    image: mediumImage,
  },
  {
    id: 8,
    titleKey: "apartment7",
    floor: "1",
    area: 58.43,
    type: "medium",
    image: mediumImage,
  },
  {
    id: 9,
    titleKey: "apartment8",
    floor: "1",
    area: 59.02,
    type: "medium",
    image: mediumImage,
  },
  {
    id: 10,
    titleKey: "apartment9",
    floor: "1",
    area: 51.52,
    type: "medium",
    image: mediumImage,
  },
  {
    id: 11,
    titleKey: "apartment10",
    floor: "1",
    area: 49.56,
    type: "small",
    image: smallImage,
  },
  {
    id: 12,
    titleKey: "apartment11",
    floor: "1",
    area: 39.99,
    type: "small",
    image: smallImage,
  },
  {
    id: 13,
    titleKey: "apartment12",
    floor: "2",
    area: 38.64,
    type: "small",
    image: smallImage,
  },
  {
    id: 14,
    titleKey: "apartment13",
    floor: "2",
    area: 47.57,
    type: "small",
    image: smallImage,
  },
  {
    id: 15,
    titleKey: "apartment14",
    floor: "2",
    area: 59.88,
    type: "medium",
    image: mediumImage,
  },
  {
    id: 16,
    titleKey: "apartment15",
    floor: "2",
    area: 58.43,
    type: "medium",
    image: mediumImage,
  },
  {
    id: 17,
    titleKey: "apartment16",
    floor: "2",
    area: 59.02,
    type: "medium",
    image: mediumImage,
  },
  {
    id: 18,
    titleKey: "apartment17",
    floor: "2",
    area: 51.52,
    type: "medium",
    image: mediumImage,
  },
  {
    id: 19,
    titleKey: "apartment18",
    floor: "2",
    area: 49.56,
    type: "small",
    image: smallImage,
  },
  {
    id: 20,
    titleKey: "apartment19",
    floor: "2",
    area: 39.99,
    type: "small",
    image: smallImage,
  },
  {
    id: 21,
    titleKey: "apartment20",
    floor: "3",
    area: 38.64,
    type: "small",
    image: smallImage,
  },
  {
    id: 22,
    titleKey: "apartment21",
    floor: "3",
    area: 47.72,
    type: "small",
    image: smallImage,
  },
  {
    id: 23,
    titleKey: "apartment22",
    floor: "3",
    area: 59.88,
    type: "medium",
    image: mediumImage,
  },
  {
    id: 24,
    titleKey: "apartment23",
    floor: "3",
    area: 58.43,
    type: "medium",
    image: mediumImage,
  },
  {
    id: 25,
    titleKey: "apartment24",
    floor: "3",
    area: 59.03,
    type: "medium",
    image: mediumImage,
  },
  {
    id: 26,
    titleKey: "apartment25",
    floor: "3",
    area: 104.85,
    type: "large",
    image: largeImage,
  },
  {
    id: 27,
    titleKey: "apartment26",
    floor: "3",
    area: 39.99,
    type: "small",
    image: smallImage,
  },
];
