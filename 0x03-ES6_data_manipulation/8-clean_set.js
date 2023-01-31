export default function cleanSet(set, startString) {
  const strlen = startString.length - 1;
  if (strlen < 0 || !(typeof startString === 'string')) {
    return '';
  }
  let str = '';
  for (const ele of set) {
    if (ele && ele.startsWith(startString)) {
      if (str === '') {
        str = str.concat(ele.slice(strlen + 1));
      } else {
        str = str.concat('-', ele.slice(strlen + 1));
      }
    }
  }
  return str;
}
