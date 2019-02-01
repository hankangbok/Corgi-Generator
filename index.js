const Corgi = require('./corgi.js');

const fooey = new Corgi({
  birthdate: new Date(),
  nickname: 'fooey'
});
const baloo = new Corgi({
  birthdate: new Date(),
  nickname: 'baloo'
});

const popop = new Corgi();
setTimeout(() => {
  const gooby = new Corgi();
  console.log('gooby', gooby);
},3000);
console.log('fooey', fooey);
console.log('baloo', baloo);
console.log('popop', popop);