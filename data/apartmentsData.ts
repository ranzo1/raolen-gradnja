interface Apartment {
  id: number;
  title: string;
  description: string;
  capacity: number;
  price: number;
  type: string;
}

export const apartmentsData: Apartment[] = [
  {
    id: 1,
    title: "Garsonjera 1",
    description: "A peaceful and serene suite with a beautiful garden view.",
    capacity: 1,
    price: 99,
    type: "single",
  },
  {
    id: 2,
    title: "Garsonjera 2",
    description: "A cozy corner apartment perfect for a couple.",
    capacity: 1,
    price: 119,
    type: "single",
  },
  {
    id: 3,
    title: "Dvosobni 1",
    description: "A spacious suite designed for comfort and relaxation.",
    capacity: 2,
    price: 139,
    type: "double",
  },
  {
    id: 4,
    title: "Jednoiposobni 1",
    description: "A modern loft located in the heart of the city.",
    capacity: 6,
    price: 159,
    type: "extended",
  },
  {
    id: 5,
    title: "Dvosobni 2",
    description: "An urban apartment offering a perfect escape from city life.",
    capacity: 2,
    price: 129,
    type: "double",
  },
  {
    id: 6,
    title: "Jednoiposobni 2",
    description: "A luxurious penthouse with stunning city views.",
    capacity: 8,
    price: 199,
    type: "extended",
  },
  {
    id: 7,
    title: "Trosobni 1",
    description: "An urban apartment offering a perfect escape from city life.",
    capacity: 2,
    price: 129,
    type: "three-room",
  },
  {
    id: 8,
    title: "Trosobni 2",
    description: "A luxurious penthouse with stunning city views.",
    capacity: 8,
    price: 199,
    type: "three-room",
  },
];
