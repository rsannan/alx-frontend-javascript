export default function updateUniqueItems(map) {
  if (map instanceof Map) {
    for (const obj of map) {
      if (obj[1] === 1) {
        map.set(obj[0], 100);
      }
    }
  } else { throw Error('Cannot process'); }
}
