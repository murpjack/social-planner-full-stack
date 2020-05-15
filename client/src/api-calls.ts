import { encaseP } from "fluture";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api"
});

export const postF = encaseP(api.post);
export const getF = encaseP(api.get);
export const putF = encaseP(api.put);
export const deleteF = encaseP(api.delete);

// dining api
// export const insertDiner = (diner: diner) => postF(`/dining`, diner);
export const getAllDiners = () => getF(`/dining/getVenues`);
// export const updateDiner = (id: number, diner: diner) =>
//   putF(`/dining/${id}`, diner);
export const deleteDiner = (id: number) => deleteF(`/dining/${id}`);

// entertainment api
// export const insertActivity = (activity: activity) =>
//   postF(`/entertainment`, activity);
export const getAllActivities = () => getF(`/entertainment/getVenues`);
// export const updateActivity = (id: number, activity: activity) =>
//   putF(`/entertainment/${id}`, activity);
export const deleteActivity = (id: number) => deleteF(`/entertainment/${id}`);

export default {
  // insertDiner,
  // getAllDiners,
  getAllDiners,
  // updateDinerById,
  deleteDiner,
  // insertActivity,
  getAllActivities,
  // updateActivity,
  deleteActivity
};
