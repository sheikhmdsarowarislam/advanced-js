const nayok = [
    {age:20, name:'omor sunny'},
    {age:29, name:'sunny leone'},
    {age:32, name:'Manna'},
    {age:40, name:'samiya'},
];

const names = nayok.map(s => s.name);
const ids = nayok.map(i => i.age);
const bigger = nayok.filter(b => b.age > 30 )

console.log(names);
console.log(ids);
console.log(bigger);