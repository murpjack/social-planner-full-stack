import { dataEntry } from "./types/data";

export default function toggleListOpen(list: dataEntry[], filterIdx: number) {
  const filterName = `option${filterIdx + 1}`;
  const cats = list.reduce((tot, cur, idx) => {
    const closed = {
      [`option${idx + 1}`]: false
    };
    const expanded = {
      [filterName]: true
    };
    const currentItem = (idx) === filterIdx ? expanded : closed;
    tot = { ...tot, ...currentItem };
    return tot;
  }, {});
  return cats
}

export const showListItem = (listObj: any, index: number) => listObj[`option${index + 1}`];
