// DOM Select

// getElementByTagName('TagName')
var h1_elements = document.getElementsByTagName("h1");
console.log(h1_elements);

var first_item = h1_element[0];
console.log(first_item.innerText); //get inner content as a text
console.log(first_item.innerHTML); //get inner content as an HTML

first_item.innerText = "Hi Frontend !";
first_item.innerHTML = "<i> Hello Frontend  !</i>";

/*----------------------------------------------------------------*/

// getElementById("Id Name")
var id_element = document.getElementById("myID");
console.log(id_element.innerText);
console.log(id_element.innerHTML);

id_element.innerText = "Let's Learn C#";
id_element.innerHTML = "Let's Learn <i>C++</i>";            /*<i></i>  ---> ITALIC*/


/*------------------------------------------------------------*/

//getElementByClassName("ClassName")
var class_elements = document.getElementsByClassName("myClass");
var first_class_element = class_element[0];
console.log(first_class_element.innerText);
console.log(first_class_element.innerHTML);

first_class_element.innerText = "Let's learn software development"
first_class_element.innerHTML = "Let's learn <b>software development</b>";          /*<b></b>  ---> BOLD*/


/*------------------------------------------------------------*/

//querySelector("query")
var query_selected_element = document.querySelector("h6 > p")
console.log(query_selected_element);

/*------------------------------------------------------------*/

//querySelectorAll("query")
var all_selected_elements= document.querySelectorAll("p")
console.log(all_selected_elements);
