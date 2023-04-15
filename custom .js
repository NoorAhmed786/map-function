// const students=[
//     {firtsName:"noor",lastName:"ahmed"},
//     {firtsName:"fiza",lastName:"ahmed"},
//     {firtsName:"kabeer",lastName:"ahmed"},

// ];
// students.map(getFullName);

// const getFullName= items =>{
//     return[items.firtsName,items.lastName].join(" ");

// }

const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ];
  
  persons.map(getFullName);
  
  function getFullName(item) {
    return [item.firstname,item.lastname].join(" ");
  }
  console.log(persons)


//multiply all values with the help of map func
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}
console.log(newArr)

//takeout sqrt with the help of map func //
const teacher=[2,3,56,19,12];
const newTeach=teacher.map(Math.sqrt);

console.log(newTeach)