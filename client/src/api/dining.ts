import axios from 'axios'
import { diner } from "../types/data";
const api = axios.create({
  baseURL: 'http://localhost:3000/api',
})

export const insertDiner = (diner: diner) => api.post(`/dining`, diner)
export const getAllDiners = () => api.get(`/dining`)
export const updateDinerById = (id: number, diner: diner) => api.put(`/dining/${id}`, diner)
export const deleteDinerById = (id: number) => api.delete(`/dining/${id}`)

export default {
  insertDiner,
  getAllDiners,
  updateDinerById,
  deleteDinerById
}
