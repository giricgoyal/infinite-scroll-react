import data from "./data.json";
export function getData(page, count) {
  console.log(page, count);
  const start = (page - 1) * count;
  return data.slice(start, start + count);
}
