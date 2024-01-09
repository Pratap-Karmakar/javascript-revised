
console.log(document.getElementById("title"));
console.log(document.getElementById("title").id);
console.log(document.getElementById("title").className);
console.log(document.getElementsByClassName("heading"));
// console.log(document.getElementsByClassName("heading").className);
// console.log(document.getElementsByClassName("heading").id);



let titleStyle = document.getElementById("title")
console.log('titleStyle',titleStyle);

titleStyle.style.color="yellow"
titleStyle.style.backgroundColor="green"
titleStyle.style.padding="15px"
titleStyle.style.borderRadius="15px"


console.log('textContent',titleStyle.textContent);
console.log('innerText',titleStyle.innerText);

console.log('innerHTML',titleStyle.innerHTML);

console.log('querySelector ul',document.querySelector("ul"));
console.log('querySelector li',document.querySelector("li"));

console.log('querySelector input',document.querySelector("input[type=password]"));

let ulList = document.querySelector("ul");
ulList.style.color='blue'

console.log(document.querySelector("li"));

let liList = document.querySelector("ul").querySelectorAll("li");
console.log('liList',liList);

document.querySelector("li").style.backgroundColor='red'
document.querySelector("li").style.color='yellow'

liList[1].style.backgroundColor='gray'

liList[3].style.padding='15px'

document.querySelector("ul").querySelector("li").innerText='uuuuuuu'

liList[3].innerText='lllllllllllll'


liList.forEach((item)=>{
    // console.log(item);
    item.style.padding='10px'
})


let listItem = document.getElementsByClassName("list-item")

console.log('listItem',listItem);


listItemArray = Array.from(listItem);

console.log(listItemArray);

listItemArray.forEach((item)=>{
    item.style.backgroundColor='skyblue'
})