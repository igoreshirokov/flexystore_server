import { BASE_URL } from "../constants"

export interface IBanner {
  id: number,
  name: string, 
  href: string,
  images: string[]
}

export const banners: IBanner[] = [
  { id: 1, name: 'Кроссовки', href: '#',  images: [`${BASE_URL}images/banners/0.jpg`, `${BASE_URL}images/banners/1.jpg`] },
  { id: 2, name: 'Кроссовки', href: '#', images: [`${BASE_URL}images/banners/0.jpg`, `${BASE_URL}images/banners/1.jpg`] },
  { id: 3, name: 'Кроссовки', href: '#', images: [`${BASE_URL}images/banners/0.jpg`, `${BASE_URL}images/banners/1.jpg`] },
]