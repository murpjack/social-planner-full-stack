import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertDiner = payload => api.post(`/dining`, payload)
export const getAllDiners = () => api.get(`/dining`)
export const updateDinerById = (id, payload) => api.put(`/dining/${id}`, payload)
export const deleteDinerById = id => api.delete(`/dining/${id}`)

const diningApis = {
    insertDiner,
    getAllDiners,
    updateDinerById,
    deleteDinerById
}

export default diningApis
