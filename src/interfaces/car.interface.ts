export interface Car {
  model: string;
  make: string;
  color: string;
  gas: "gasoline" | "electric";
  year: number;
  description: string;
  price: number;
}
