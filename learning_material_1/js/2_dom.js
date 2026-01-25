window.onload = setup
function setup() {
    console.log("running setup");

    //getting an element by ID
    console.log(document.getElementById("one"));

    //another way to get an element by ID
    console.log(document.querySelector("#one"));

    //to get elements by TAG NAME
    console.log(document.getElementsByTagName("div"));
    console.log(document.getElementsByTagName("div").length);//show length of the divs(how many)8
    console.log(document.getElementsByTagName("div")[0]);//show first div

    //getting elements by tag name another way
    console.log(document.querySelectorAll("div"));
    console.log(document.querySelectorAll("div").length);
    console.log(document.querySelectorAll("div")[0]);

    //getting elements bt class name

    console.log(document.getElementsByClassName("square_shape"));
    console.log(document.getElementsByClassName("square_shape").length);
    console.log(document.getElementsByClassName("square_shape")[0]);

    //DON'T UNDERSTAND THIS! And again if we want to NOT return an array - and for some reason only want to return the first match we could use document.querySelect() i.e.:
    console.log(document.querySelector(".square_shape"));

    //getting elements by class name another way
    console.log(document.querySelectorAll(".square_shape"));
    console.log(document.querySelectorAll(".square_shape").length);
    console.log(document.querySelectorAll(".square_shape")[0]);

    ////////ACCESS ELEMENTS AND ATTRIBUTES 

    //access html content(.innerHTML)
    console.log(document.getElementById("two").innerHTML);

    //access text content
    console.log(document.getElementById("two").textContent);

    //access attributes of elements
    //by id
    console.log(document.querySelector("#five").getAttribute("id"));
    //by class
    console.log(document.querySelector("#five").getAttribute("class"));

    console.log(document.querySelector("#two").getAttribute("class"));
    console.log(typeof (document.querySelector("#two").getAttribute("class")));

    //access by classlist
    console.log(document.querySelector("#two").classList);

    //access style attributes of elements
    //access style then a particular property
    console.log(document.querySelector("#one").style);
    console.log(document.querySelector("#one").style.background);
    console.log(document.querySelector("#six").style.width);

    //parent element
    console.log(document.querySelectorAll("span")[0].parentElement);
    console.log(document.querySelectorAll("span")[0].parentElement.parentElement);

    //children
    console.log(document.querySelector(".wrapper_flex_box").children[0]);

}

//modify html content
document.querySelector("#two").children[0].innerHTML = "<h2>this is now a header</h2>";

/////////////modify text content

//get the group
let allSquareShapes = document.querySelectorAll(".square_shape");
//go through each element
for (let singleSquareShape of allSquareShapes) {
    //get children
    console.log(singleSquareShape.children[0])
    singleSquareShape.children[0].textContent += "adding content"
}

/*
//get the group
let allSquareShapes = document.querySelectorAll(".square_shape");
//go through each element
for(let  singleSquareShape of allSquareShapes){
    //get children
    if(singleSquareShape.querySelector("p span")!== null){
    singleSquareShape.querySelector("p span").textContent+= " other Content"
    }
}
*/

////////modify attributes using classlist
document.querySelector(".square_shape").classList.remove(".square_shape");//first one only
document.querySelector("p span").classList.add("change_span");

////////modify attributes using setAttribute()
document.querySelectorAll(".another_class")[0].setAttribute("id", "newTest");
console.log(document.querySelectorAll(".another_class")[0]);

//remove
let element = document.querySelectorAll("span")[1].parentElement.parentElement;
element.removeAttribute("id");
console.log(element);

////////change style attribute

//add
document.querySelector("#four").style.background = "cornflowerBlue";
document.querySelector("#four").style.borderColor = "darkblue";
//modify
document.querySelector("#one").style.background = "pink";
document.querySelector("#one").style.borderColor = "darkblue";

///////adding elements to the DOM

//1-create element node
//2-append this to an existing element


//new element
let newDiv = document.createElement("div");
newDiv.classList.add("square_shape");
newDiv.style.backgroundColor = "purple";
newDiv.innerHTML = " NEW ELEMENT ";
//access parent element
let parentElement = document.querySelector(".wrapper_flex_box");
parentElement.appendChild(newDiv);



//samw way with insert before
let newDivTwo = document.createElement("div");
newDivTwo.classList.add("square_shape");
newDivTwo.innerHTML = "<p>NEW ELEMENT TWO</p>";
newDivTwo.style.backgroundColor = "yellow";
newDivTwo.querySelector("p").style.color = "black"
//access parent element
let sibling = document.querySelector("#three")
let parentElementAgain = document.querySelector(".wrapper_flex_box")
parentElementAgain.insertBefore(newDivTwo, sibling);

//removing element from the DOM with removeChild()
let parentElementToRemoveFrom = document.querySelector(".wrapper_flex_box")
let toRemove = document.getElementById("six");
parentElementToRemoveFrom.removeChild(toRemove);
