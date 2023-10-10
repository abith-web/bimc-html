function bmical(){
    var weight=document.querySelectorAll("input")[1].value
    var height=document.querySelectorAll("input")[2].value
    var Bmi=weight/(height*height)
    document.querySelectorAll("input")[3].value=(Bmi.toFixed(2));
    if(Bmi<18.5){
        document.querySelector(".result").innerHTML="Time to eat some good food, You are Under-weight"
        document.querySelector(".res").setAttribute("src","./Screenshot 2023-10-08 105321.png")
        
        }
        else if(Bmi>=18.5&&Bmi<=24.9){
            document.querySelector(".result").innerHTML="Perfect, You have normal weight"  
            document.querySelector(".res").setAttribute("src","./Screenshot 2023-10-08 105322.png")
        }
        else if(Bmi>=25&&Bmi<=29.9){
            document.querySelector(".result").innerHTML="Hey keep watching, You are over weight"  
            document.querySelector(".res").setAttribute("src","./Screenshot 2023-10-08 105616.png")  
        }
        else if(Bmi>=30){
            document.querySelector(".result").innerHTML="Time to Runnn, You are obese"  
            document.querySelector(".res").setAttribute("src","./Screenshot 2023-10-08 105710.png")
        }
        else{
            document.querySelector(".result").innerHTML=""
        
        }
        }
      

bmical();

