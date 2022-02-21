'use strict';

// Example #1
const list =  document.getElementById('list'),
      users = list.getElementsByTagName('*');

console.log(users[0].innerHTML);
console.log(users[4].innerHTML);
console.log(users[1].innerHTML);
console.log(users[3].innerHTML);
console.log(users[2].innerHTML);



// Example #2
let user5 = document.querySelectorAll('ul > li:last-child'),
    user1 = document.querySelectorAll('ul > li:first-child'),
    user2 = document.querySelectorAll('ul > li:nth-child(even)'),
    user3 = document.querySelectorAll('ul > li:nth-child(3)');

for (let elem of user1) {
    console.log(elem.innerHTML);
}
for (let elem of user5) {
    console.log(elem.innerHTML);
}
for (let elem of user2) {
    console.log(elem.innerHTML);
}
for (let elem of user3) {
    console.log(elem.innerHTML);
}