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
title.innerText="Hello, hey how are you ?..";
//title.innerHTML='<h2>Nice to meet you...</h2>';