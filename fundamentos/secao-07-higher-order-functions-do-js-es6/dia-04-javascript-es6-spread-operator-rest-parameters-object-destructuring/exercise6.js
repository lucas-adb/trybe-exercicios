
const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};
// yearSeasons: estações do ano.

const { spring, summer, autumn, winter } = yearSeasons;
const months = [...winter, ...spring, ...summer, ...autumn, 'December'].slice(1);
console.log(months);