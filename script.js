

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

  /*-- Code for enlarging code snippets in Articles page-- */
   function smallFont(x){
       x.style.width='400px';
       x.style.height='300px';
       x.style.padding='10px';
   }
   function bigFont(x){
       x.style.width='600';
       x.style.height='400px';
       x.style.padding='5px';
   }

   