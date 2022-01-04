console.log('You are welcome to my javascript calculator.');

//get dom elements
let screen=document.getElementById('screen');
let buttons= document.querySelectorAll('button');

let screenValue='';

for(element of buttons){
    element.addEventListener('click',(e)=>
    {
       buttonText=e.target.innerText;
       console.log(buttonText);
       
       if(buttonText=='C')
       {
           screenValue='';
           screen.value=screenValue;
       }
       else if(buttonText=='=')
       {
           screen.value=eval(screenValue);
           
       }
       else{
           screenValue=screenValue+buttonText;
           screen.value=screenValue;
       }
       
    })
}


