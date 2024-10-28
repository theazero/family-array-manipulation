let myname = "Thea";
let bfname = "Anton";
let dadname = "Anders";
let momname = "Monika";
let broname = "Max";

let names = [myname, bfname, dadname, momname, broname];

let count = 0;

names.sort();
console.log(names);

const removedName = names.pop();
console.log(names);

names.unshift(removedName);
console.log(names);

for (let i = 0; i < names.length; i++) {
    count += 1;
}

console.log(count);

const greetings = names.map(name => "Hejsan " + name);
greetings.forEach(greeting => console.log(greeting));
