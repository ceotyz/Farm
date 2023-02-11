class Animal {
 constructor(name, age) {
   this.name = name;
   this.age = age;

 if (animals.length > 0) {
	 output += animals.reduce((acc, current) => {
		  let count = 0;
		  return acc + current.age + count;
   }, 0);
 }
 function generateAnimals(type, count) {
 let output = [];

 for (let i = 0; i <= count; i++) {
   let parameter = {
     name: `${type} ${i}`,
     age: i,
   };

   let item = null;

   switch (type) {
     case "Rabbit":
       item = new Rabbit(parameter.name, parameter.age);
       break;
     case "Sheep":
       item = new Sheep(parameter.name, parameter.age);
       break;
     case "Cow":
       item = new Cow(parameter.name, parameter.age);
       break;
   }
    if (item) {
     output.push(item);
   }
 }

 return output;
}
console.log(getAnimalsAge(animals))













