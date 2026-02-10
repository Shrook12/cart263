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

    //this is for making a background of a chess board
    //a grid of squares
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {

        //create divs for the squares
        let square = document.createElement("div");

        //charactersitcs for the squares
        square.style.left = col * 52 + "px";
        square.style.top = row * 52 + "px";
        square.style.width = squareS + "px";
        square.style.height = squareS + "px";
        square.style.position = "absolute";

        //make it white and black
        square.style.backgroundColor =
          (row + col) % 2 === 0 ? "white" : "black";
        /*   if ((row + col) % 2 === 0) {
            square.style.backgroundColor = "white";
          } else {
            square.style.backgroundColor = "black";
          } */
        //append it to parent
        parentCanvas.appendChild(square);
      }

    }
    let ellipseS = 35;
    let circles = [];
    let images = ["image1.png", "image2.png", "image3.png"];

    //for circles/images
    function addCircles(row, col) {
      //create divs for the images
      let pawn = document.createElement("div");
      //characteristicsfor the images
      pawn.style.position = "absolute";
      pawn.style.width = 50 + "px";
      pawn.style.height = 50 + "px";
      //ellipse.style.borderRadius = "50%";
      // ellipse.style.backgroundColor = "purple";

      // to pick random images
      pawn.style.background = `url(${images[parseInt(Math.random() * images.length)]})`;
      pawn.style.backgroundSize = "cover";
      pawn.style.backgroundPosition = "center";
      pawn.style.backgroundRepeat = "no-repeat";

      pawn.style.left = col * 57 + (squareS - ellipseS) / 2 + "px";
      pawn.style.top = row * 57 + (squareS - ellipseS) / 2 + "px";
      pawn.style.transform = "translate(-50%,-50%)";
      pawn.setAttribute("move", "true")

      pawn.row = row;
      pawn.col = col;
      console.log(pawn.col)

      //append it to parents
      parentCanvas.appendChild(pawn);

      return pawn;
    }

    //call the function addCircles and create multiple of it
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        // if (Math.random() < 0.9) {
        circles.push(addCircles(row, col));
        //}
      }
    }

    //do animation  of moving pawns from square to square
    function animate() {

      //to put the animation for all pawns
      for (let i = 0; i < circles.length; i++) {



        let pawn = circles[i];

        //if the pawns move it become true
        if (pawn.getAttribute("move") === "true") {

          console.log("here")
          //steps
          let move = [-1, 1, 0];
          console.log(move)

          //moving for the pawns using -1,1 or 0
          let rowMove = move[parseInt(Math.random() * move.length)];
          let colMove = move[parseInt(Math.random() * move.length)];

          //stay inside grid
          //if (newRow >= 0 && newRow < size) { ellipse.row = newRow; }


          // put limits to where the pawns can go with random numbers after multiple tries and console log
          if (parseFloat(pawn.style.left) < 60 && colMove === -1) {
            colMove = 1;

          }
          else if (parseFloat(pawn.style.left) > 295 && colMove === 1) {
            colMove = -1;

          }

          if (parseFloat(pawn.style.top) < 60 && rowMove === -1) {
            rowMove = 1;

          }
          else if (parseFloat(pawn.style.top) > 295 && rowMove === 1) {
            rowMove = -1;

          }




          //pawns new position for colum and row
          let newPosition = parseFloat(pawn.style.left) + colMove * 55;
          let newPositionRow = parseFloat(pawn.style.top) + rowMove * 55;


          pawn.setAttribute("colMove", colMove);
          pawn.setAttribute("rowMove", rowMove);
          pawn.setAttribute("newPosition", newPosition);
          pawn.setAttribute("newPositionRow", newPositionRow);


          //new position
          // let newRow = ellipse.row + rowMove;
          //let newCol = ellipse.col + colMove;
          pawn.setAttribute("move", "moving")

        }

        //if state of pawn is moving then move this code
        if (pawn.getAttribute("move") === "moving") {

          //get attribute
          let colMove = parseInt(pawn.getAttribute("colMove"));
          let rowMove = parseInt(pawn.getAttribute("rowMove"));
          let newPosition = parseFloat(pawn.getAttribute("newPosition"));
          let newPositionRow = parseFloat(pawn.getAttribute("newPositionRow"));

          if (colMove !== 0) {
            console.log(colMove)

            //to move left or right
            pawn.style.left = parseFloat(pawn.style.left) + (1 * colMove) + "px";
            console.log(pawn.style.left)
          }

          if (rowMove !== 0) {
            console.log(rowMove)

            //to move up or down
            pawn.style.top = parseFloat(pawn.style.top) + (1 * rowMove) + "px";
            console.log(pawn.style.top)
          }
          //if pawn is a new position
          if (parseFloat(pawn.style.left) === parseFloat(newPosition)) {
            console.log("stop")

            //then turn into false and wait 500ms then move again
            pawn.setAttribute("move", "false")

            setTimeout(function () {
              pawn.setAttribute("move", "true")
            }, 500)
          }
          /* 
                    if (parseFloat(pawn.style.top) === parseFloat(newPositionRow)) {
                      console.log("stop")
                      pawn.setAttribute("move", "false")
          
                      setTimeout(function () {
                        pawn.setAttribute("move", "true")
                      }, 500)
                    } */

          console.log(pawn.style.left)
          // ellipse.style.top = ellipse.row * 55 + 15 + "px";
        }
        //
      }
      requestAnimationFrame(animate);

    }
    requestAnimationFrame(animate);

    /*     function checkBounds(parent, ellipse) {
          let boundingBoxParent = parentCanvas.getBoundingClientRect();
          if (parseFloat(ellipse.style.left) > boundingBoxParent) {
            colMove = 1;
    
          }
          else if (parseFloat(ellipse.style.left) < boundingBoxParent) {
            colMove = -1;
    
          }
    
          if (parseFloat(ellipse.style.top) > boundingBoxParent) {
            rowMove = 1;
    
          }
        } */


  }
}
