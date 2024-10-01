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
    title: "Serenity Suite",
    description: "A peaceful and serene suite with a beautiful garden view.",
    capacity: 1,
    price: 99,
    type: "single",
  },
  {
    id: 2,
    title: "Cozy Corner",
    description: "A cozy corner apartment perfect for a couple.",
    capacity: 1,
    price: 119,
    type: "single",
  },
  {
    id: 3,
    title: "Harmony Suite",
    description: "A spacious suite designed for comfort and relaxation.",
    capacity: 2,
    price: 139,
    type: "double",
  },
  {
    id: 4,
    title: "Metropolitan Loft",
    description: "A modern loft located in the heart of the city.",
    capacity: 6,
    price: 159,
    type: "extended",
  },
  {
    id: 5,
    title: "Urban Escape",
    description: "An urban apartment offering a perfect escape from city life.",
    capacity: 2,
    price: 129,
    type: "double",
  },
  {
    id: 6,
    title: "Luxury Penthouse",
    description: "A luxurious penthouse with stunning city views.",
    capacity: 8,
    price: 199,
    type: "extended",
  },
];
