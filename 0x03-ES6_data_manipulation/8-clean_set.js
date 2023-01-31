export default function cleanSet(set, startString) {
  const strlen = startString.length;
  let str = '';
  if (startString && typeof startString === 'string') {
    for (const ele of set) {
      if (ele && ele.startsWith(startString)) {
        if (str === '') {
          str = str.concat(ele.slice(strlen));
        } else {
          str = str.concat('-', ele.slice(strlen));
        }
      }
    }
  }
  return str;
}
