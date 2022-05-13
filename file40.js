// object destructuring
const films = {
    filmNames: "hindi films",
    famousSongs: "hindi songs",
    year: 1968,
    anotherFamousSong: "runaway",
  };
  
//   By taking keys as variables

//   let { filmNames, famousSongs, ...obj } = films;
//   console.log(filmNames);
//   console.log(famousSongs)
//   console.log(obj);

// By declaring new Variables

let {filmNames:var1,famousSongs:var2,...obj1}=films;

console.log(var1);
console.log(var2);
console.log(obj1)