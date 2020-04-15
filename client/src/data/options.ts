import { dataEntry } from "../types/data";
import d from '../data/dining.json';
import e from '../data/entertainment.json';

export const options: dataEntry[] = [{
  _id: 0,
  name: "Option 1",
  dining: d.data.dining[0],
  fun: e.data.entertainment[0]
},
{
  _id: 1,
  name: "Option 2",
  dining: d.data.dining[1],
  fun: e.data.entertainment[1]
},
{
  _id: 2,
  name: "Option 3",
  dining: d.data.dining[2],
  fun: e.data.entertainment[2]
}];
export default options;
