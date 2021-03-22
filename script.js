

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
    
   /*---In the HTML div with the id="3D" is specified as the 
   the parent of the canvas ,on which the p5.js WEBGL code for 3D shape is appearing-*/
    let radius = 0;
    let angle1 = 0;
    let shape;
    let cnv;
    function setup() {
        cnv = createCanvas(230, 230,WEBGL);
        shape=createGraphics(230,230)
        //With div id, parent for the canvas is specified
        cnv.parent('3D');
        }
    function draw(){
        background(255,255,255,0);
        push()
            for (let i = 0; i < width - 50; i += 50) {
                shape.noFill()
                shape.stroke(radius,mouseY, i)
                shape.strokeWeight(5)
                radius +=1.5
                shape.ellipse(i, i,radius + i, radius + i)
                if (radius > width || radius < 0 || radius > height || radius < 0) {
                 radius=0
                }
            }
            shape.stroke(255)
            shape.textSize(50)
            shape.text("Hello",50,120)
        pop()
        push()
            noStroke()
            texture(shape)
            rotateX(angle1)
            rotateY(angle1)
            rotateZ(angle1)
            box(120)
            
        pop()
        angle1+=0.03
    }
 
   