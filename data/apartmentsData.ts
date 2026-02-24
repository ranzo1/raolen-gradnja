// Apartment types
type ApartmentType = "small" | "medium" | "large" | "office";
export type RoomCount =
  | "studio"
  | "twoRooms"
  | "threeRooms"
  | "fourRooms"
  | null;
type FloorLevel = "ground" | "1" | "2" | "3";

export interface FloorPremise {
  key: string; // koristi se za prevod
  name: string; // engleski naziv, fallback
  icon: string;
  area?: number | null;
}

export const floorPremises: Record<FloorLevel, FloorPremise[]> = {
  ground: [
    {
      key: "lobby",
      name: "Lobby",
      icon: "/apartment/icons/hallway.svg",
      area: 3.41,
    },
    {
      key: "boilerRoom",
      name: "Boiler room",
      icon: "/apartment/icons/boiler-room.svg",
      area: 4.69,
    },
    {
      key: "vestibule",
      name: "Vestibule",
      icon: "/apartment/icons/hallway.svg",
      area: 11.24,
    },
    {
      key: "hallway",
      name: "Hallway",
      icon: "/apartment/icons/hallway.svg",
      area: 24.34,
    },
    {
      key: "staircaseHall",
      name: "Staircase hall",
      icon: "/apartment/icons/stairhall.svg",
      area: 7.81,
    },
    {
      key: "staircase",
      name: "Staircase",
      icon: "/apartment/icons/stairs.svg",
      area: 11.13,
    },
    {
      key: "elevator",
      name: "Elevator",
      icon: "/apartment/icons/elevator.svg",
    },
  ],
  "1": [
    {
      key: "hallway",
      name: "Hallway",
      icon: "/apartment/icons/hallway.svg",
      area: 57.17,
    },
    {
      key: "staircaseHall",
      name: "Staircase hall",
      icon: "/apartment/icons/stairhall.svg",
      area: 8.23,
    },
    {
      key: "staircase",
      name: "Staircase",
      icon: "/apartment/icons/stairs.svg",
      area: 11.13,
    },
    {
      key: "elevator",
      name: "Elevator",
      icon: "/apartment/icons/elevator.svg",
    },
  ],
  "2": [
    {
      key: "hallway",
      name: "Hallway",
      icon: "/apartment/icons/hallway.svg",
      area: 57.17,
    },
    {
      key: "staircaseHall",
      name: "Staircase hall",
      icon: "/apartment/icons/stairhall.svg",
      area: 8.23,
    },
    {
      key: "staircase",
      name: "Staircase",
      icon: "/apartment/icons/stairs.svg",
      area: 11.13,
    },
    {
      key: "elevator",
      name: "Elevator",
      icon: "/apartment/icons/elevator.svg",
    },
  ],
  "3": [
    {
      key: "hallway",
      name: "Hallway",
      icon: "/apartment/icons/hallway.svg",
      area: 54.69,
    },
    {
      key: "staircaseHall",
      name: "Staircase hall",
      icon: "/apartment/icons/stairhall.svg",
      area: 8.23,
    },
    {
      key: "staircase",
      name: "Staircase",
      icon: "/apartment/icons/stairs.svg",
      area: 11.13,
    },
    {
      key: "elevator",
      name: "Elevator",
      icon: "/apartment/icons/elevator.svg",
    },
  ],
};

export const finishes = [
  {
    key: "underfloorHeating",
    name: "Underfloor heating",
    icon: "/apartment/icons/underfloor-heating.svg",
  },
  {
    key: "ceramicFlooring",
    name: "Ceramic flooring",
    icon: "/apartment/icons/ceramic-flooring.svg",
  },
  {
    key: "acrylicWallPaint",
    name: "Acrylic wall paint",
    icon: "/apartment/icons/wall-paint.svg",
  },
  {
    key: "ceilingEmulsion",
    name: "Ceiling finish: Emulsion",
    icon: "/apartment/icons/ceiling-emulsion.svg",
  },
];

// Define premise types directly with `as const`
export const premiseTypes = {
  hallway: { name: "Hallway", icon: "/apartment/icons/hallway.svg" },
  hallwayWardrobe: {
    name: "Hallway with wardrobe",
    icon: "/apartment/icons/hallway-wardrobe.svg",
  },
  bedroom: { name: "Bedroom", icon: "/apartment/icons/bedroom.svg" },
  bathroom: { name: "Bathroom", icon: "/apartment/icons/bathroom.svg" },
  mensToilet: { name: "Mens toilet", icon: "/apartment/icons/mens-toilet.svg" },
  womensToilet: {
    name: "Womens toilet",
    icon: "/apartment/icons/womens-toilet.svg",
  },
  businessPremises: {
    name: "Business premises",
    icon: "/apartment/icons/business-premises.svg",
  },
  kidsRoom: { name: "Kids room", icon: "/apartment/icons/kids-room.svg" },
  kitchen: { name: "Kitchen", icon: "/apartment/icons/kitchen.svg" },
  livingRoom: { name: "Living room", icon: "/apartment/icons/living-room.svg" },
  livingRoomDiningArea: {
    name: "Living room with dining area",
    icon: "/apartment/icons/living-room.svg",
  },
  balcony: { name: "Balcony", icon: "/apartment/icons/balcony.svg" },
  loggia: { name: "Loggia", icon: "/apartment/icons/balcony.svg" },
  entranceHall: {
    name: "Entrance hall",
    icon: "/apartment/icons/entranceHall.svg",
  },
  laundryRoom: { name: "Laundry room", icon: "/apartment/icons/laundry.svg" },
  diningRoom: { name: "Dining room", icon: "/apartment/icons/dining-room.svg" },
} as const;

// Premise type is inferred from the keys above
export type PremiseKey = keyof typeof premiseTypes;

export interface Premise {
  type: PremiseKey;
  area: number;
}

// Apartment interface
interface Apartment {
  id: number;
  titleKey: string;
  floor: FloorLevel;
  area: number;
  type: ApartmentType;
  rooms: RoomCount;
  coverImage: string;
  image: Array<string>; // --- IGNORE ---
  premises: Premise[];
  soldOut: boolean;
}

// Declare image variables
/*const officeImage = "/apartments/3.webp";
const smallImage = "/apartments/1.webp";
const mediumImage = "/apartments/2.webp";
const largeImage = "/apartments/4.webp";*/

const office_cover = "/3DRenders/cover/Office.webp";
const C1_cover = "/3DRenders/cover/C1.webp";
const C2_cover = "/3DRenders/cover/C2.webp";
const C3_cover = "/3DRenders/cover/C3.webp";
const C4_C12_C20_cover = "/3DRenders/cover/C4-C12-C20.webp";
const C5_C13_C21_cover = "/3DRenders/cover/C5-C13-C21.webp";
const C6_C14_C22_cover = "/3DRenders/cover/C6-C14-C22.webp";
const C7_C15_C23_cover = "/3DRenders/cover/C7-C15-C23.webp";
const C8_C16_C24_cover = "/3DRenders/cover/C8-C16-C24.webp";
const C9_C17_cover = "/3DRenders/cover/C9-C17.webp";
const C10_C18_cover = "/3DRenders/cover/C10-C18.webp";
const C11_C19_C26_cover = "/3DRenders/cover/C11-C19-C26.webp";
const C25_cover = "/3DRenders/cover/C25.webp";

const office = "/3DRenders/Office.webp";
const C1 = "/3DRenders/C1.webp";
const C2 = "/3DRenders/C2.webp";
const C3 = "/3DRenders/C3.webp";
const C4_C12_C20 = "/3DRenders/C4-C12-C20.webp";
const C5_C13_C21 = "/3DRenders/C5-C13-C21.webp";
const C6_C14_C22 = "/3DRenders/C6-C14-C22.webp";
const C7_C15_C23 = "/3DRenders/C7-C15-C23.webp";
const C8_C16_C24 = "/3DRenders/C8-C16-C24.webp";
const C9_C17 = "/3DRenders/C9-C17.webp";
const C10_C18 = "/3DRenders/C10-C18.webp";
const C11_C19_C26 = "/3DRenders/C11-C19-C26.webp";
const C25 = "/3DRenders/C25.webp";

const office_floorplan = "/floorplans/office.webp";
const C1_floorplan = "/floorplans/c1.webp";
const C2_floorplan = "/floorplans/c2.webp";
const C3_floorplan = "/floorplans/c3.webp";
const C4_floorplan = "/floorplans/c4.webp";
const C5_floorplan = "/floorplans/c5.webp";
const C6_floorplan = "/floorplans/c6.webp";
const C7_floorplan = "/floorplans/c7.webp";
const C8_floorplan = "/floorplans/c8.webp";
const C9_floorplan = "/floorplans/c9.webp";
const C10_floorplan = "/floorplans/c10.webp";
const C11_floorplan = "/floorplans/c11.webp";
const C12_floorplan = "/floorplans/c12.webp";
const C13_floorplan = "/floorplans/c13.webp";
const C14_floorplan = "/floorplans/c14.webp";
const C15_floorplan = "/floorplans/c15.webp";
const C16_floorplan = "/floorplans/c16.webp";
const C17_floorplan = "/floorplans/c17.webp";
const C18_floorplan = "/floorplans/c18.webp";
const C19_floorplan = "/floorplans/c19.webp";
const C20_floorplan = "/floorplans/c20.webp";
const C21_floorplan = "/floorplans/c21.webp";
const C22_floorplan = "/floorplans/c22.webp";
const C23_floorplan = "/floorplans/c23.webp";
const C24_floorplan = "/floorplans/c24.webp";
const C25_floorplan = "/floorplans/c25.webp";
const C26_floorplan = "/floorplans/c26.webp";

// Floor images
const ground_floor = "/floorplans/floors/ground.jpg";
const floor_1 = "/floorplans/floors/1.jpg";
const floor_2 = "/floorplans/floors/2.jpg";
const floor_3 = "/floorplans/floors/3.jpg";

// Apartments array
export const apartmentsData: Apartment[] = [
  {
    id: 0,
    titleKey: "office",
    floor: "ground",
    area: 143.36,
    type: "office",
    rooms: null,
    coverImage: office_cover,
    image: [office, office_floorplan, ground_floor],
    premises: [
      { type: "businessPremises", area: 139.99 },
      { type: "mensToilet", area: 3.92 },
      { type: "womensToilet", area: 3.89 },
    ],
    soldOut: false,
  },
  {
    id: 1,
    titleKey: "apartment1",
    floor: "ground",
    area: 29.05,
    type: "small",
    rooms: "studio",
    coverImage: C1_cover,
    image: [C1, C1_floorplan, ground_floor],
    premises: [
      { type: "hallwayWardrobe", area: 2.77 },
      { type: "bathroom", area: 3.54 },
      { type: "kitchen", area: 7.8 },
      { type: "livingRoomDiningArea", area: 15.84 },
    ],
    soldOut: false,
  },
  {
    id: 2,
    titleKey: "apartment2",
    floor: "ground",
    area: 65,
    type: "medium",
    rooms: "threeRooms",
    coverImage: C2_cover,
    image: [C2, C2_floorplan, ground_floor],
    premises: [
      { type: "hallway", area: 9.92 },
      { type: "bathroom", area: 3.52 },
      { type: "kidsRoom", area: 7.9 },
      { type: "bedroom", area: 9.39 },
      { type: "livingRoomDiningArea", area: 26.49 },
      { type: "kitchen", area: 5.86 },
    ],
    soldOut: false,
  },
  {
    id: 3,
    titleKey: "apartment3",
    floor: "ground",
    area: 61.8,
    type: "medium",
    rooms: "threeRooms",
    coverImage: C3_cover,
    image: [C3, C3_floorplan, ground_floor],
    premises: [
      { type: "hallwayWardrobe", area: 6.98 },
      { type: "bathroom", area: 4.43 },
      { type: "kidsRoom", area: 7.78 },
      { type: "bedroom", area: 10.84 },
      { type: "livingRoomDiningArea", area: 27.5 },
      { type: "kitchen", area: 6.18 },
    ],
    soldOut: false,
  },
  {
    id: 4,
    titleKey: "apartment4",
    floor: "1",
    area: 38.48,
    type: "small",
    rooms: "twoRooms",
    coverImage: C4_C12_C20_cover,
    image: [C4_C12_C20, C4_floorplan, floor_1],
    premises: [
      { type: "hallwayWardrobe", area: 4.71 },
      { type: "bathroom", area: 3.61 },
      { type: "bedroom", area: 8.94 },
      { type: "livingRoomDiningArea", area: 13.21 },
      { type: "kitchen", area: 5.81 },
      { type: "loggia", area: 3.28 },
    ],
    soldOut: false,
  },
  {
    id: 5,
    titleKey: "apartment5",
    floor: "1",
    area: 47.74,
    type: "small",
    rooms: "twoRooms",
    coverImage: C5_C13_C21_cover,
    image: [C5_C13_C21, C5_floorplan, floor_1],
    premises: [
      { type: "hallway", area: 3.04 },
      { type: "entranceHall", area: 1.88 },
      { type: "bathroom", area: 3.74 },
      { type: "bedroom", area: 12.67 },
      { type: "livingRoomDiningArea", area: 19.09 },
      { type: "kitchen", area: 4.92 },
      { type: "loggia", area: 3.75 },
    ],
    soldOut: false,
  },
  {
    id: 6,
    titleKey: "apartment6",
    floor: "1",
    area: 59.85,
    type: "medium",
    rooms: "threeRooms",
    coverImage: C6_C14_C22_cover,
    image: [C6_C14_C22, C6_floorplan, floor_1],
    premises: [
      { type: "hallwayWardrobe", area: 8.84 },
      { type: "bathroom", area: 3.5 },
      { type: "bedroom", area: 11.11 },
      { type: "kidsRoom", area: 7.7 },
      { type: "livingRoomDiningArea", area: 20.84 },
      { type: "kitchen", area: 5.74 },
      { type: "loggia", area: 3.85 },
    ],
    soldOut: true,
  },
  {
    id: 7,
    titleKey: "apartment7",
    floor: "1",
    area: 58.43,
    type: "medium",
    rooms: "threeRooms",
    coverImage: C7_C15_C23_cover,
    image: [C7_C15_C23, C7_floorplan, floor_1],
    premises: [
      { type: "hallwayWardrobe", area: 7.48 },
      { type: "bathroom", area: 4.47 },
      { type: "bedroom", area: 11.07 },
      { type: "kidsRoom", area: 7.75 },
      { type: "livingRoomDiningArea", area: 18.73 },
      { type: "kitchen", area: 4.07 },
      { type: "balcony", area: 6.47 },
    ],
    soldOut: false,
  },
  {
    id: 8,
    titleKey: "apartment8",
    floor: "1",
    area: 59,
    type: "medium",
    rooms: "threeRooms",
    coverImage: C8_C16_C24_cover,
    image: [C8_C16_C24, C8_floorplan, floor_1],
    premises: [
      { type: "hallwayWardrobe", area: 7.54 },
      { type: "bathroom", area: 4.62 },
      { type: "bedroom", area: 11.07 },
      { type: "kidsRoom", area: 7.88 },
      { type: "livingRoomDiningArea", area: 19.01 },
      { type: "kitchen", area: 4.05 },
      { type: "balcony", area: 6.47 },
    ],
    soldOut: false,
  },
  {
    id: 9,
    titleKey: "apartment9",
    floor: "1",
    area: 51.32,
    type: "medium",
    rooms: "threeRooms",
    coverImage: C9_C17_cover,
    image: [C9_C17, C9_floorplan, floor_1],
    premises: [
      { type: "hallway", area: 6.59 },
      { type: "bathroom", area: 3.33 },
      { type: "bedroom", area: 9.06 },
      { type: "kidsRoom", area: 7.36 },
      { type: "livingRoomDiningArea", area: 17.66 },
      { type: "kitchen", area: 5.18 },
      { type: "loggia", area: 3.6 },
    ],
    soldOut: true,
  },
  {
    id: 10,
    titleKey: "apartment10",
    floor: "1",
    area: 49.59,
    type: "small",
    rooms: "twoRooms",
    coverImage: C10_C18_cover,
    image: [C10_C18, C10_floorplan, floor_1],
    premises: [
      { type: "hallway", area: 6.94 },
      { type: "entranceHall", area: 2.37 },
      { type: "bathroom", area: 4.76 },
      { type: "bedroom", area: 9.34 },
      { type: "livingRoomDiningArea", area: 20.6 },
      { type: "kitchen", area: 4.17 },
      { type: "loggia", area: 2.86 },
    ],
    soldOut: true,
  },
  {
    id: 11,
    titleKey: "apartment11",
    floor: "1",
    area: 39.94,
    type: "small",
    rooms: "twoRooms",
    coverImage: C11_C19_C26_cover,
    image: [C11_C19_C26, C11_floorplan, floor_1],
    premises: [
      { type: "hallway", area: 4.62 },
      { type: "bathroom", area: 4.83 },
      { type: "bedroom", area: 9.27 },
      { type: "livingRoomDiningArea", area: 14.67 },
      { type: "kitchen", area: 4.24 },
      { type: "loggia", area: 3.24 },
    ],
    soldOut: false,
  },
  {
    id: 12,
    titleKey: "apartment12",
    floor: "2",
    area: 38.48,
    type: "small",
    rooms: "twoRooms",
    coverImage: C4_C12_C20_cover,
    image: [C4_C12_C20, C12_floorplan, floor_2],
    premises: [
      { type: "hallwayWardrobe", area: 4.71 },
      { type: "bathroom", area: 3.61 },
      { type: "bedroom", area: 8.94 },
      { type: "livingRoomDiningArea", area: 13.21 },
      { type: "kitchen", area: 5.81 },
      { type: "loggia", area: 3.28 },
    ],
    soldOut: false,
  },
  {
    id: 13,
    titleKey: "apartment13",
    floor: "2",
    area: 47.74,
    type: "small",
    rooms: "twoRooms",
    coverImage: C5_C13_C21_cover,
    image: [C5_C13_C21, C13_floorplan, floor_2],
    premises: [
      { type: "hallway", area: 3.04 },
      { type: "entranceHall", area: 1.88 },
      { type: "bathroom", area: 3.74 },
      { type: "bedroom", area: 12.67 },
      { type: "livingRoomDiningArea", area: 19.09 },
      { type: "kitchen", area: 4.92 },
      { type: "loggia", area: 3.75 },
    ],
    soldOut: false,
  },
  {
    id: 14,
    titleKey: "apartment14",
    floor: "2",
    area: 59.85,
    type: "medium",
    rooms: "threeRooms",
    coverImage: C6_C14_C22_cover,
    image: [C6_C14_C22, C14_floorplan, floor_2],
    premises: [
      { type: "hallwayWardrobe", area: 8.84 },
      { type: "bathroom", area: 3.5 },
      { type: "bedroom", area: 11.11 },
      { type: "kidsRoom", area: 7.7 },
      { type: "livingRoomDiningArea", area: 20.84 },
      { type: "kitchen", area: 5.74 },
      { type: "loggia", area: 3.85 },
    ],
    soldOut: false,
  },
  {
    id: 15,
    titleKey: "apartment15",
    floor: "2",
    area: 58.43,
    type: "medium",
    rooms: "threeRooms",
    coverImage: C7_C15_C23_cover,
    image: [C7_C15_C23, C15_floorplan, floor_2],
    premises: [
      { type: "hallwayWardrobe", area: 7.48 },
      { type: "bathroom", area: 4.47 },
      { type: "bedroom", area: 11.07 },
      { type: "kidsRoom", area: 7.75 },
      { type: "livingRoomDiningArea", area: 18.73 },
      { type: "kitchen", area: 4.07 },
      { type: "balcony", area: 6.47 },
    ],
    soldOut: false,
  },
  {
    id: 16,
    titleKey: "apartment16",
    floor: "2",
    area: 59,
    type: "medium",
    rooms: "threeRooms",
    coverImage: C8_C16_C24_cover,
    image: [C8_C16_C24, C16_floorplan, floor_2],
    premises: [
      { type: "hallwayWardrobe", area: 7.54 },
      { type: "bathroom", area: 4.62 },
      { type: "bedroom", area: 11.07 },
      { type: "kidsRoom", area: 7.88 },
      { type: "livingRoomDiningArea", area: 19.01 },
      { type: "kitchen", area: 4.05 },
      { type: "balcony", area: 6.47 },
    ],
    soldOut: true,
  },
  {
    id: 17,
    titleKey: "apartment17",
    floor: "2",
    area: 51.32,
    type: "medium",
    rooms: "threeRooms",
    coverImage: C9_C17_cover,
    image: [C9_C17, C17_floorplan, floor_2],
    premises: [
      { type: "hallway", area: 6.59 },
      { type: "bathroom", area: 3.33 },
      { type: "bedroom", area: 9.06 },
      { type: "kidsRoom", area: 7.36 },
      { type: "livingRoomDiningArea", area: 17.66 },
      { type: "kitchen", area: 5.18 },
      { type: "loggia", area: 3.6 },
    ],
    soldOut: true,
  },
  {
    id: 18,
    titleKey: "apartment18",
    floor: "2",
    area: 49.59,
    type: "small",
    rooms: "twoRooms",
    coverImage: C10_C18_cover,
    image: [C10_C18, C18_floorplan, floor_2],
    premises: [
      { type: "hallway", area: 6.94 },
      { type: "entranceHall", area: 2.37 },
      { type: "bathroom", area: 4.76 },
      { type: "bedroom", area: 9.34 },
      { type: "livingRoomDiningArea", area: 20.6 },
      { type: "kitchen", area: 4.17 },
      { type: "loggia", area: 2.86 },
    ],
    soldOut: false,
  },
  {
    id: 19,
    titleKey: "apartment19",
    floor: "2",
    area: 39.94,
    type: "small",
    rooms: "twoRooms",
    coverImage: C11_C19_C26_cover,
    image: [C11_C19_C26, C19_floorplan, floor_2],
    premises: [
      { type: "hallway", area: 4.62 },
      { type: "bathroom", area: 4.83 },
      { type: "bedroom", area: 9.27 },
      { type: "livingRoomDiningArea", area: 14.67 },
      { type: "kitchen", area: 4.24 },
      { type: "loggia", area: 3.24 },
    ],
    soldOut: true,
  },
  {
    id: 20,
    titleKey: "apartment20",
    floor: "3",
    area: 38.48,
    type: "small",
    rooms: "twoRooms",
    coverImage: C4_C12_C20_cover,
    image: [C4_C12_C20, C20_floorplan, floor_3],
    premises: [
      { type: "hallwayWardrobe", area: 4.71 },
      { type: "bathroom", area: 3.61 },
      { type: "bedroom", area: 8.94 },
      { type: "livingRoomDiningArea", area: 13.21 },
      { type: "kitchen", area: 5.81 },
      { type: "loggia", area: 3.28 },
    ],
    soldOut: false,
  },
  {
    id: 21,
    titleKey: "apartment21",
    floor: "3",
    area: 47.74,
    type: "small",
    rooms: "twoRooms",
    coverImage: C5_C13_C21_cover,
    image: [C5_C13_C21, C21_floorplan, floor_3],
    premises: [
      { type: "hallway", area: 3.04 },
      { type: "entranceHall", area: 1.88 },
      { type: "bathroom", area: 3.74 },
      { type: "bedroom", area: 12.67 },
      { type: "livingRoomDiningArea", area: 19.09 },
      { type: "kitchen", area: 4.92 },
      { type: "loggia", area: 3.75 },
    ],
    soldOut: false,
  },
  {
    id: 22,
    titleKey: "apartment22",
    floor: "3",
    area: 59.85,
    type: "medium",
    rooms: "threeRooms",
    coverImage: C6_C14_C22_cover,
    image: [C6_C14_C22, C22_floorplan, floor_3],
    premises: [
      { type: "hallwayWardrobe", area: 8.84 },
      { type: "bathroom", area: 3.5 },
      { type: "bedroom", area: 11.11 },
      { type: "kidsRoom", area: 7.7 },
      { type: "livingRoomDiningArea", area: 20.84 },
      { type: "kitchen", area: 5.74 },
      { type: "loggia", area: 3.85 },
    ],
    soldOut: false,
  },
  {
    id: 23,
    titleKey: "apartment23",
    floor: "3",
    area: 58.43,
    type: "medium",
    rooms: "threeRooms",
    coverImage: C7_C15_C23_cover,
    image: [C7_C15_C23, C23_floorplan, floor_3],
    premises: [
      { type: "hallwayWardrobe", area: 7.48 },
      { type: "bathroom", area: 4.47 },
      { type: "bedroom", area: 11.07 },
      { type: "kidsRoom", area: 7.75 },
      { type: "livingRoomDiningArea", area: 18.73 },
      { type: "kitchen", area: 4.07 },
      { type: "balcony", area: 6.47 },
    ],
    soldOut: false,
  },
  {
    id: 24,
    titleKey: "apartment24",
    floor: "3",
    area: 59,
    type: "medium",
    rooms: "threeRooms",
    coverImage: C8_C16_C24_cover,
    image: [C8_C16_C24, C24_floorplan, floor_3],
    premises: [
      { type: "hallwayWardrobe", area: 7.54 },
      { type: "bathroom", area: 4.61 },
      { type: "bedroom", area: 11.07 },
      { type: "kidsRoom", area: 7.88 },
      { type: "livingRoomDiningArea", area: 19 },
      { type: "kitchen", area: 4.07 },
      { type: "balcony", area: 6.47 },
    ],
    soldOut: false,
  },
  {
    id: 25,
    titleKey: "apartment25",
    floor: "3",
    area: 104.84,
    type: "large",
    rooms: "fourRooms",
    coverImage: C25_cover,
    image: [C25, C25_floorplan, floor_3],
    premises: [
      { type: "hallway", area: 12.64 },
      { type: "bathroom", area: 3.31 },
      { type: "bathroom", area: 3.86 },
      { type: "bedroom", area: 9.73 },
      { type: "kidsRoom", area: 8.91 },
      { type: "kidsRoom", area: 8.32 },
      { type: "laundryRoom", area: 2.65 },
      { type: "livingRoom", area: 18.78 },
      { type: "diningRoom", area: 11.57 },
      { type: "kitchen", area: 4.95 },
      { type: "balcony", area: 22.55 },
    ],
    soldOut: false,
  },
  {
    id: 26,
    titleKey: "apartment26",
    floor: "3",
    area: 39.94,
    type: "small",
    rooms: "twoRooms",
    coverImage: C11_C19_C26_cover,
    image: [C11_C19_C26, C26_floorplan, floor_3],
    premises: [
      { type: "hallway", area: 4.82 },
      { type: "bathroom", area: 4.83 },
      { type: "bedroom", area: 9.27 },
      { type: "livingRoomDiningArea", area: 14.67 },
      { type: "kitchen", area: 4.24 },
      { type: "loggia", area: 3.24 },
    ],
    soldOut: false,
  },
];
