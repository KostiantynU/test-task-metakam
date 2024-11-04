export const createDescription = title => {
  const titleArray =
    title.split(' ').length >= 2 ? title.split(' ').splice(0, 2) : `${title.split(' ')}`;

  const withoutLongStrings = titleArray.some(el => el.length >= 8)
    ? titleArray.reduce((acuum, el, index, incomingArray) => {
        if (index === 0) {
          if (el.length >= 15) {
            return [`...${el.slice(-15, -1)}`];
          } else {
            return [`${el}`];
          }
        } else if (index + 1 === incomingArray.length && el.length >= 3) {
          return [...acuum, `${el.slice(0, 3)}...`];
        } else if (index + 1 === incomingArray.length && el.length <= 3) {
          return [...acuum, `${el}...`];
        } else {
          return [...acuum, `${el}`];
        }
      }, [])
    : titleArray.map((el, indx, incomingArray) => {
        if (indx + 1 === incomingArray.length) {
          return `${el}...`;
        } else return el;
      });

  return withoutLongStrings;
};
