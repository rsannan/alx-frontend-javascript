export default function cleanSet(set, startString) {
  const strlen = startString.length - 1;
  if (strlen < 0) {
    return '';
  }
  let str = '';
  for (const ele of set) {
    if (ele.startsWith(startString)) {
      if (str === '') {
        str = str.concat(ele.slice(strlen + 1));
      } else {
        str = str.concat('-', ele.slice(strlen + 1));
      }
    }
  }
  return str;
}