let string = "";
  let buttons = document.querySelectorAll(".button");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if(e.target.innerHTML == "="){
            string = eval(string);
            document.querySelector("input").value=string;
        }
         else if(e.target.innerHTML == "C"){
            string ="";
            document.querySelector("input").value=string;
        }
        else if(e.target.innerHTML == "d"){
            string =string.slice(0,string.length-1);
            document.querySelector("input").value=string;
        }
        else{
            console.log(e.target.innerHTML);
            string = string + e.target.innerHTML;
            document.querySelector("input").value= string;
        }
 
    });
  });
