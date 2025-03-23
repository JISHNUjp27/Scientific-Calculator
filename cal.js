    let string = "";
    let buttons=document.querySelectorAll('button');
    Array.from(buttons).forEach((button)=>{
        button.addEventListener('click',(e)=>{
            // console.log(e.target.innerHTML)
            if(e.target.innerHTML=="="){
                try{
                    string=eval(string).toString();
                    document.querySelector('#display').value=string;  
                }
                catch{
                    document.querySelector('#display').value="Error";
                    string="";
                }
            }
            else if(e.target.innerHTML=="AC"){
                string="";
                document.querySelector('#display').value=string;
            }
            // else if(e.target.classList.contains("ri-delete-back-2-line") || 
            // e.target.parentElement.classList.contains("ri-delete-back-2-line")){
            //      string=string.substring(0,string.length-1);
            //      document.querySelector('#display').value=string;
            // }
            else if (e.target.closest("button").querySelector("i.ri-delete-back-2-line")) {
                string = string.substring(0, string.length - 1);
                document.querySelector("#display").value = string;
            } 
            else{
                console.log(e.target)
                string=string+e.target.innerHTML;
                document.querySelector('#display').value=string;
            }
        })
    })
