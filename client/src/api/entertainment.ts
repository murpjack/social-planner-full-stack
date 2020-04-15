import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertActivity = payload => api.post(`/activity`, payload)
export const getAllActivities = () => api.get(`/activities`)
export const updateActivityById = (id, payload) => api.put(`/activity/${id}`, payload)
export const deleteActivityById = id => api.delete(`/activity/${id}`)

const entertainmentApis = {
    insertActivity,
    getAllActivities,
    updateActivityById,
    deleteActivityById
}

export default entertainmentApis
