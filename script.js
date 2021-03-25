

/*-- Code for enlarging the images in the more articles section on the Main Page--*/
    function highlight(x){
        x.style.width="350px";
        x.style.height="250px";
        x.style.padding="10px";
        x.style.boxShadow="0px 4px 8px #555";
        
    }
    function normal(x){
        x.style.width= " 300px ";
        x.style.height=" 200px ";
        x.style.padding= " 10px ";
        x.style.boxShadow= " none ";
        
    }
    
   /*-- Code for confirming the information before submission in Sign Up form in Get In Touch page-- */
    function myfunction(){
        let firstname = document.getElementById('firstname').value;
        let lastname = document.getElementById('lastname').value;
        let email = document.getElementById('e-mail').value;
        let message ='Confirm your details:\nFirst Name: '+firstname+'\n'+'Last Name: '+lastname+'\n'+'Email: '+email;
        confirm(message);
    }

  /*---In the Articles Page ,the HTML div with the id="3D" is specified as the 
   the parent of the canvas ,on which the p5.js WEBGL code for 3D shape is appearing-*/
   let radius = 0;
   let angle1 = 0;
   let shape;
   let cnv;
   function setup() {
       cnv = createCanvas(230, 230,WEBGL);
       shape=createGraphics(230,230)
       //With div id, parent for the canvas is specified in the setup function.
       cnv.parent('3D');
       }
   function draw(){
       background(255,255,255,0);  //background is given alpha of 0.
       push()
           //Code for the 2D object which is looped.
           for (let i = 0; i < width - 50; i += 50) {
               shape.noFill();
               shape.stroke(radius,mouseY, i);  //mouseY is used to change the colour of the stroke when hover over.
               shape.strokeWeight(5);
               radius += 1.5;
               shape.ellipse(i, i,radius + i, radius + i);
               if (radius > width || radius < 0 || radius > height || radius < 0) {
                radius = 0;
               }
           }
           //Code for the text to appear as a texture.
           shape.stroke(255, 255, mouseY);
           shape.fill(mouseY, 168, 255);
           shape.textSize(50);
           shape.text("Hover",50,120);
           
       pop()
       push()
          //Code for the 3D object which is textured with the 2D shape by using the createGraphics function.
           noStroke();
           texture(shape);
           rotateX(angle1);
           rotateY(angle1);
           rotateZ(angle1);
           box(100);    
       pop()
       angle1 += 0.008;
   }
   