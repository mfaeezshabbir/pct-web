export interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image?: string;
}

export const products: Product[] = [
  {
    id: "prod1",
    name: "Official ICC CT25 Jersey",
    price: "PKR 4,500",
    category: "Apparel",
  },
  {
    id: "prod2",
    name: "Training Kit 2024",
    price: "PKR 3,200",
    category: "Apparel",
  },
  {
    id: "prod3",
    name: "PCT Signature Cap",
    price: "PKR 1,500",
    category: "Accessories",
  },
  {
    id: "prod4",
    name: "Signed Bat - Babar Azam Ed.",
    price: "PKR 50,000",
    category: "Collectibles",
  },
];
