
const numbers = document.querySelector(".show-numb");

const arrayPcNum = []; 

const btn = document.querySelector(".start_game"); 

btn.addEventListener('click' , showNumbers)

btn.addEventListener('click' , DeleteNumbers)








// DEFINITION OF FUNCTION 

function showNumbers(){

   btn.removeEventListener('click',showNumbers); 
  
   for(let i =0; i < 5 ; i++){    

      let ranNum = Math.floor((Math.random()*100) + 1);     
      arrayPcNum[i] = ranNum; 

     }
         
    numbers.innerHTML = arrayPcNum; 
    
}



function DeleteNumbers(){

    btn.removeEventListener('click' , DeleteNumbers); 

     setTimeout(function(){
        numbers.innerHTML = ""; 
     },30000)

    setTimeout(function(){
       
        let j =0; 
        let count = 0; 

        while(j<5){
 
            let x = parseInt(prompt("inserire numero:"))

            if(arrayPcNum.includes(x)){
                count++; 
                delete arrayPcNum[j]
            }
            j++; 
        }

       alert("il tuo punteggio è " + count)

        btn.addEventListener('click', showNumbers); 
        btn.addEventListener('click', DeleteNumbers);
        arrayPcNum = []; 

    }, 32000)


}