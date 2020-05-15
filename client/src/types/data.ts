export type apiResponse = {
  data: []
  success: boolean
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

export type diner = {
  _id: number,
  name: string,
  description: string,
  priceRating: number,
  telephone: string,
  theme: number,
  coords: [number, number]
}

export type option = {
  id: number,
  name: string,
  dining: diner | null,
  fun: activity | null
}
