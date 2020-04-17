export type entertainmentResponse = {
  entertainment: activity[]
}

export type activity = {
  _id: number,
  name: string,
  description: string,
  priceRating: number,
  telephone: string,
  theme: number,
  coords: [number, number]
}

export type diningResponse = {
  dining: diner[]
}

export type diner = {
  _id: number,
  name: string,
  description: string,
  priceRating: number,
  telephone: string,
  theme: number,
  coords: [number, number]
}

export type dataEntry = {
  id: number,
  name: string,
  dining: diner,
  fun: activity
}
