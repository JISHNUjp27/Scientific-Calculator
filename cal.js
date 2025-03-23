    function sin(){
         let value = parseFloat(display.value);
        display.value=Math.sin(display.value * Math.PI / 180);
        string = display.value.toString();
        trigapplied=true;
    }
    function cos(){
        let value = parseFloat(display.value);
        display.value=Math.cos(display.value * Math.PI / 180);
        string = display.value.toString();
        trigapplied=true;
    }
    function tan(){
        let value = parseFloat(display.value);
        display.value=Math.tan(display.value * Math.PI / 180);
        string = display.value.toString();
        trigapplied=true;
        
    }
    const darkModeToggle = document.querySelector("h1"); 
    darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    });

    let trigapplied=false;
    let string = "";
    let buttons=document.querySelectorAll('button');
    Array.from(buttons).forEach((button)=>{
        button.addEventListener('click',(e)=>{
            // console.log(e.target.innerHTML)
            if(e.target.innerHTML=="="){
                try{
                    string=eval(string).toString();
                    document.querySelector('#display').value=string; 
                    trigapplied=false; 
                }
                catch{
                    document.querySelector('#display').value="Error";
                    string="";
                }
            }
            else if(e.target.innerHTML=="AC"){
                string="";
                document.querySelector('#display').value=string;
                trigapplied=false;
            }
            else if(e.target.innerHTML=="Sin"){
                sin();
                trigapplied=true;
            }
            else if(e.target.innerHTML=="Cos"){
                cos();
                trigapplied=true;
            }
            else if(e.target.innerHTML=="Tan"){
                tan();
                trigapplied=true;
            }
            else if (e.target.closest("button").querySelector("i.ri-delete-back-2-line")) {
                if(!trigapplied){
                string = string.substring(0, string.length - 1);
                document.querySelector("#display").value = string;
                }
            } 
            else{
                console.log(e.target)
                string=string+e.target.innerHTML;
                document.querySelector('#display').value=string;
            }
        })
    })


   
    
