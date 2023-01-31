export default function cleanSet(set, startString) {
  const strlen = startString.length - 1;
  let str = '';
  if (startString && typeof startString === 'string') {
    for (const ele of set) {
      if (ele && ele.startsWith(startString)) {
        if (str === '') {
          str = str.concat(ele.slice(strlen + 1));
        } else {
          str = str.concat('-', ele.slice(strlen + 1));
        }
      }
    }
  }
  return str;
}
