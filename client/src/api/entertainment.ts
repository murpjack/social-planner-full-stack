import axios from 'axios'
import { activity } from "../types/data";

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertActivity = (activity: activity) => api.post(`/entertainment`, activity)
export const getAllActivities = () => api.get(`/entertainment`)
export const updateActivityById = (id: number, activity: activity) => api.put(`/entertainment/${id}`, activity)
export const deleteActivityById = (id: number) => api.delete(`/entertainment/${id}`)

export default {
    insertActivity,
    getAllActivities,
    updateActivityById,
    deleteActivityById
}
