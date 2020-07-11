var buttons = document.getElementsByTagName("button");
// console.log(buttons);
var display =  document.getElementById("display");
// console.log(display.isnnerHTML);
var previous = '0';
var current = '';
var operator = '';
function clearAll(){
    current='';
         previous='';
         display.innerHTML=''; 
         console.log('cleared');  
}
var isOperatorPressed=false;
var latestOperator;
 for(var  i = 0 ; i < buttons.length; i++){
    buttons[i].addEventListener('click',function(){
        var value = this.getAttribute('data-value');
 
        if(value == '1'||value == '2'||value == '3'||value == '4'||value == '5'||value == '6'||value == '7'||value == '8'||value == '9'||value=='0'){
           current+=value;
            display.innerText=current;
            console.log(current);
        }
         else if ( value == '+' || value == '-' || value == '*' || value=='/'){
            previous = display.innerText;
            operator = value;
            display.innerText=''
            current = ''

         }
         else if (value == '='){
             current = parseFloat( display.innerText);
             var final = previous +operator+current
             var result  = eval(final);
             display.innerText = result;
             console.log(result); 
         }
         else if (value = 'clear'){
             clearAll();
         }
        
    })
}