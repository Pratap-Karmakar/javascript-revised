
console.log(document.getElementById("title"));

console.log(document.getElementById('title').id);
console.log(document.getElementById('title').className);

console.log(document.getElementById('title').getAttribute("id"));
console.log(document.getElementById('title').getAttribute("className"));

console.log(document.getElementById("title").setAttribute('class', 'test'));    // it will overwrite the class name everytime not in the html page but in the element in the webpage (element can be found just like the console)

console.log(document.getElementById("title").setAttribute('class', 'heading test'));  // we can set two className at the same time using set attribute

// document.getElementById("title").setAttribute('id' ,'something')    // we can set the id as well like this

let title = document.getElementById("title");
console.log(title);


// we can set the style of the page like this

title.style.backgroundColor="green";
title.style.borderRadius='15px';
title.style.padding='15px'



console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> importent');
console.log('textContent',title.textContent);  // it will show the total content and it isn't get any interuption by any css style
console.log('innerText',title.innerText);  // it will get interupped by the css style so sometimes it will not display the total content because of the css style

console.log(title.innerHTML);   // it will give the whole html value and will show everything under the 'title' id like this --> 'DOM Learning on youtube  <span style="display: none;">test text</span>'


console.log(document.getElementsByClassName('heading'));

console.log('querySelector h2',document.querySelector('h2'));  // it will select the 1st h2 tag
// console.log(document.querySelectorAll("h1")); // it will select all the h1 tags are available there
console.log(document.querySelector("#title"));
console.log(document.querySelector(".heading"));
console.log(document.querySelector("input[type='password']"));


document.querySelector("ul").style.color="yellow"   // we can change the css style using the querySelector as well

document.querySelector("ul").querySelector("li").innerHTML="nine 9"
document.getElementById("kuchbhi").style.color="brown"


let liList = document.querySelectorAll("li");
console.log(liList);    // by using querySelectorAll we will get a nodelist


// liList.style.color="green"     // it will not change the color of the li because it is a node list
liList[0].style.color="green"     // it will change the color of the li because here we have gaave the index value of the li because the node list is like an array but not an array


liList.forEach((item)=>{
    console.log('forEach',item);
})

liList.forEach((item)=>{
    item.style.backgroundColor="skyblue"
})



let classList = document.getElementsByClassName("list-item")

console.log(classList);  // it will give us a HTML collection which is not an array so in this html collection we can't use the array functions, so for that we need to convert the HTML collection in an arrayssss


let calssArrayList = Array.from(classList)  // this is how we canvert anything in to an array as we are converting the HTML collection in to an array
console.log(calssArrayList);

calssArrayList.forEach((item)=>{
    console.log('calssArrayList forEach',item);
})

calssArrayList.forEach((item)=>{
    item.style.padding='10px'
})


