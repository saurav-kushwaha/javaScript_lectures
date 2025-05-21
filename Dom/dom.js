// Dom --> document object model

// steps to see document 

// 1. cosole.log(window) get window object 
// 2.console.log(window.document)
// 3. console.log(document)// gives only html
// 4. console.dir(document)// gives all hidden informations
  

// by using dot operator(.) we can get methods related to document
//console.log(document.baseURI)


// All DoM selectors Node list and HTMLCOLLECTION

// **** Selectors ****
// getElementById('parameter');
// getElementById('title')
// getElementById('title').id// title
// getElementById('title').class// undefined
// getElementById('title').className// heading
// const title = getElementById('title')
// title.getAttribute('id')// title
// title.getAttribute('class')// heading
// title.setAttribute('class','test')// it's override the existing class
// title.getAttribute('class','test heading')// heading test


// adding style

// title.style.backgroundcolor="black";
// title.style.boardRadius="15px";


// Adding content 

// title.innerText// show only visible content
// title.innerContent// show the text hidden by using css
//title.innerHTML// it show html also


const title = document.getElementById('title');
title.style.backgroundColor ="red";
title.style.padding="5px";
title.style.borderRadius="15px";
title.style.textAlign="center";
title.style.color="black";
// title.innerText="Hello, hey how are you ?..";
//title.innerHTML='<h2>Nice to meet you...</h2>';


// querySelector
// document.querySelector('#title')
// <h1 id=​"title" class=​"heading" style=​"background-color:​ red;​ padding:​ 5px;​ border-radius:​ 15px;​ text-align:​ center;​ color:​ black;​">​Hello, hey how are you ?..​</h1>​
// document.querySelector('class')
// null
// document.querySelector('.heading')
// <h1 id=​"title" class=​"heading" style=​"background-color:​ red;​ padding:​ 5px;​ border-radius:​ 15px;​ text-align:​ center;​ color:​ black;​">​Hello, hey how are you ?..​</h1>​

// document.querySelector('h2')
// <h2>​Lorem ipsum dolor sit amet.​</h2>​
// document.querySelector('ul')
// <ul>​…​</ul>​

// document.querySelector('li')
// <li>​…​</li>​::marker​"one"</li>​


const turnwhit = document.querySelector('li')

turnwhit.style.backgroundColor="white";

turnwhit.style.color="green"

turnwhit.style.padding="10px"

turnwhit.innerText="Saurav"

const tempLiList = document.querySelectorAll('li');// return nodelist
//tempLiList.style.color='darkred'; give error 
//tempLiList[0].style.color='darkred';
tempLiList.forEach(function(l){
    l.style.textAlign='center';
    l.style.color='yellow';
})


// converting  HTMLCOLLECTION into Array
const tempClassList = document.getElementsByClassName('list-item')// get htmlcollection
const convertedArray=Array.from(tempClassList)// converting htmlcollection into array
convertedArray.forEach(function(li){
    li.style.color='orange';
})
convertedArray.map((li)=>li.style.backgroundColor="pink")
convertedArray.map((li)=>li.style.margin="5px")
convertedArray.map((li)=>li.style.padding="25px")


