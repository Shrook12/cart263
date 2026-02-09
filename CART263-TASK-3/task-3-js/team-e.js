setup_E();

//b:Sama,4 pictures grid different colors, hover randomizes colors
//a:Dylan, grid of 50 letters, space randomizes, look for words
//3:
/** THEME: SARCASM  */
function setup_E() {
  console.log("in e");
  /**************************************************** */
  //get the buttons
  activateButtons(`#TEAM_E`, "ani_canvE", aniA, aniB, aniC, aniD);


  /**************** ANI A ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN A INSIDE HERE */
  /**************** ANI A ************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
   * 1: create a creative, visual pattern using text, divs as shapes, images ...
   * 2: add in mouseclick event listener(s) somewhere to make the sketch interactive
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function  -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/

  function aniA(parentCanvas) {
    console.log("in ani-A -teamE");
  }


  /****************ANI B ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN B INSIDE HERE */
  /****************ANI B ************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:).
   * 1: create a creatve, visual pattern using text, divs as shapes, images ... 
   * 2: add in mouseover event listener(s) somewhere to make the sketch interactive
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/

  function aniB(parentCanvas) {
    console.log("in ani-B -teamE");

  }
  /****************ANI C ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN C INSIDE HERE */
  /****************ANI C************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
   * 1: use the PROVIDED keyup/down callbacks `windowKeyDownRef` and/or `windowKeyUpnRef` to handle keyboard events
   * 2: create an interactive pattern/sketch based on keyboard input. Anything goes.
   * 
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/

  /* TASK: make an interactive pattern .. colors, shapes, sizes, text, images....
   * using  ONLY key down and/or keyup -- any keys::
   */

  function aniC(parentCanvas) {
    console.log("in ani-C -teamE");

    /*** THIS IS THE CALLBACK FOR KEY DOWN (* DO NOT CHANGE THE NAME *..) */
    windowKeyDownRef = function (e) {
      //code for key down in here
      console.log(e);
      console.log("e-down");
    };

    /*** THIS IS THE CALLBACK FOR KEY UP (*DO NOT CHANGE THE NAME..) */
    windowKeyUpRef = function (e) {
      console.log(e);
      console.log("e-up");
    };
    //DO NOT REMOVE
    window.addEventListener("keydown", windowKeyDownRef);
    window.addEventListener("keyup", windowKeyUpRef);
  }

  /****************ANI D************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN D INSIDE HERE */
  /****************ANI D************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:).
   * 1: create a creative, visual pattern using text, divs as shapes, images ...
   * 2: add in animation using requestAnimationFrame somewhere to make the sketch animate :)
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/
  function aniD(parentCanvas) {
    console.log("in ani-D -teamE");

    let sampleColors = [
      "white",
      "yellow",
      "purple",

    ];

    //get bound
    // let boundingBoxParent = parentCanvas.getBoundingClientRect();

    /* let stars = 25;
    let starsCount = 0;
    let speed = 100;
    //make mutiple lines
    /*   function addCircles() {
        for (let i = 0; i < stars; i++) {
          let ellipse = document.createElement("div");
          parentCanvas.appendChild(ellipse);
          ellipse.style.position = "absolute";
          ellipse.style.left = `${Math.random() * (window.innerWidth - 200)}px`;
          ellipse.style.top = `${Math.random() * (window.innerWidth - 200)}px`;
          ellipse.style.width = "10px";
          ellipse.style.height = "10px";
          ellipse.style.opacity = 1;
          ellipse.style.background = sampleColors[parseInt(Math.random() * sampleColors.length)];
          ellipse.style.borderRadius = "50%";
          if (speed > 200) {
            speed -= 20;
          }
  
          setTimeout(addCircles, speed);
  
        }
      }
      addCircles(); */

    /* function addCircles() {
 
       //if (starsCount === stars) return;
 
       let ellipse = document.createElement("div");
       parentCanvas.appendChild(ellipse);
       ellipse.style.position = "absolute";
 
       let boundingBoxParent = parentCanvas.getBoundingClientRect();
       ellipse.style.left = `${Math.random() * (boundingBoxParent.width - 10)}px`;
       ellipse.style.top = `${Math.random() * (boundingBoxParent.height - 10)}px`;
       ellipse.style.width = "10px";
       ellipse.style.height = "10px";
       ellipse.style.opacity = 1;
       ellipse.style.background = sampleColors[parseInt(Math.random() * sampleColors.length)];
       ellipse.style.borderRadius = "50%";
 
       // let circleSpeed = Math.random() < 0.5 ? 1 : -1;//move right or left
       let speedX = Math.random() < 0.5 ? 2 : -2;
 
       function animate() {
         ellipse.style.left = parseInt(ellipse.style.left) + speedX + "px";
 
 
 
         window.requestAnimationFrame(animate);
         // checkBounds(document.getElementById("parent"), ellipse)
 
         /*       if (ellipse.style.left === 0) {
                 ellipse.style.left = 0;
                 speedX *= -1;
       
               } else if (ellipse.style.left + 10 >= boundingBoxParent) {
                 ellipse.style.left = boundingBoxParent.width - 10;
                 speedX *= -1;
               } */
    /*  }
      animate();


      //starsCount++;
      if (speed > 200) {
        speed -= 20;
      }

      /*       function checkBounds(parent, ellipse) {
              let bounds = parent.getBoundingClientRect();
      
              if (parseInt(ellipse.style.left) > bounds.right) {
                speedX *= -1;
              } else if (parseInt(ellipse.style.left) < bounds.left) {
                speedX *= -1;
              } */

    //}

    /* setTimeout(addCircles, speed);

   }

   addCircles();
 } */
    let boundingBoxParent = parentCanvas.getBoundingClientRect();
    let size = 7;
    let squareS = 60;



    // I am going to try something else
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        let square = document.createElement("div");

        square.style.left = col * 52 + "px";
        square.style.top = row * 52 + "px";
        square.style.width = squareS + "px";
        square.style.height = squareS + "px";
        square.style.position = "absolute";

        square.style.backgroundColor =
          (row + col) % 2 === 0 ? "white" : "black";
        /*   if ((row + col) % 2 === 0) {
            square.style.backgroundColor = "white";
          } else {
            square.style.backgroundColor = "black";
          } */

        parentCanvas.appendChild(square);
      }

    }
    let ellipseS = 35;
    let circles = [];
    let images = ["image1.png", "image2.png", "image3.png"];


    function addCircles(row, col) {
      let ellipse = document.createElement("div");

      ellipse.style.position = "absolute";
      ellipse.style.width = ellipseS + "px";
      ellipse.style.height = ellipseS + "px";
      //ellipse.style.borderRadius = "50%";
      // ellipse.style.backgroundColor = "purple";

      // to pick random images
      ellipse.style.background = `url(${images[parseInt(Math.random() * images.length)]})`;
      ellipse.style.backgroundSize = "cover";
      ellipse.style.backgroundPosition = "center";
      ellipse.style.backgroundRepeat = "no-repeat";

      ellipse.style.left = col * 55 + (squareS - ellipseS) / 2 + "px";
      ellipse.style.top = row * 55 + (squareS - ellipseS) / 2 + "px";
      ellipse.style.transform = "translate(-50%,-50%)";
      ellipse.setAttribute("move", "true")

      ellipse.row = row;
      ellipse.col = col;
      console.log(ellipse.col)

      parentCanvas.appendChild(ellipse);

      return ellipse;
    }


    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        // if (Math.random() < 0.9) {
        circles.push(addCircles(row, col));
        //}
      }
    }

    function animate() {

      for (let i = 0; i < circles.length; i++) {



        let ellipse = circles[i];
        if (ellipse.getAttribute("move") === "true") {

          console.log("here")
          let move = [-1, 1, 0];
          console.log(move)

          let rowMove = move[parseInt(Math.random() * move.length)];
          let colMove = move[parseInt(Math.random() * move.length)];

          //stay inside grid
          //if (newRow >= 0 && newRow < size) { ellipse.row = newRow; }

          if (parseFloat(ellipse.style.left) === 12.5 && colMove === -1) {
            colMove = 1;

          }
          else if (parseFloat(ellipse.style.left) === 12.5 + (55 * 7) && colMove === 1) {
            colMove = -1;

          }

          if (parseFloat(ellipse.style.top) === 12.5 && rowMove === -1) {
            rowMove = 1;

          }
          else if (parseFloat(ellipse.style.top) === 12.5 + (55 * 7) && rowMove === 1) {
            colMove = -1;

          }

          let newPosition = parseFloat(ellipse.style.left) + colMove * 55;
          let newPositionRow = parseFloat(ellipse.style.top) + rowMove * 55;
          ellipse.setAttribute("colMove", colMove);
          ellipse.setAttribute("rowMove", rowMove);
          ellipse.setAttribute("newPosition", newPosition);
          ellipse.setAttribute("newPositionRow", newPositionRow);


          //new position
          // let newRow = ellipse.row + rowMove;
          //let newCol = ellipse.col + colMove;
          ellipse.setAttribute("move", "moving")
        }


        if (ellipse.getAttribute("move") === "moving") {

          let colMove = parseInt(ellipse.getAttribute("colMove"));
          let rowMove = parseInt(ellipse.getAttribute("rowMove"));
          let newPosition = parseFloat(ellipse.getAttribute("newPosition"));
          let newPositionRow = parseFloat(ellipse.getAttribute("newPositionRow"));

          if (colMove !== 0) {
            console.log(colMove)

            ellipse.style.left = parseFloat(ellipse.style.left) + (1 * colMove) + "px";
            console.log(ellipse.style.left)
          }

          if (rowMove !== 0) {
            console.log(rowMove)

            ellipse.style.top = parseFloat(ellipse.style.top) + (1 * rowMove) + "px";
            console.log(ellipse.style.top)
          }

          if (parseFloat(ellipse.style.left) === parseFloat(newPosition)) {
            console.log("stop")
            ellipse.setAttribute("move", "false")

            setTimeout(function () {
              ellipse.setAttribute("move", "true")
            }, 500)
          }
          if (parseFloat(ellipse.style.top) === parseFloat(newPositionRow)) {
            console.log("stop")
            ellipse.setAttribute("move", "false")

            setTimeout(function () {
              ellipse.setAttribute("move", "true")
            }, 500)
          }

          console.log(ellipse.style.left)
          // ellipse.style.top = ellipse.row * 55 + 15 + "px";
        }
      }
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }

}
