const marvel_heroes =["thor","ironman","spiderman"]
const dc_heroes= ["superman","batman","flash"]

//marvel_heroes.push(dc_heroes)
//console.log(marvel_heroes)  //2nd array will be merged directly but not good behavior

const all=marvel_heroes.concat(dc_heroes);
console.log(all);

const all_new=[...marvel_heroes,...dc_heroes]
console.log(all_new)

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array=another_array.flat(Infinity);
console.log(real_another_array)

console.log(Array.isArray("Devansh"))
console.log(Array.from("Hitesh"))


