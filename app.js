let myCheckbox = document.querySelector(".switch input"),
    duration = document.querySelector(".month"),
    price = document.querySelector(".price .pricefix"),
    switcher = document.querySelector(".switch"),
    range = document.querySelector(".myrange");
    
switcher.onclick = function(){

    

    if(myCheckbox.checked == true){
        
        let priceInt = parseInt(price.textContent);
        price.textContent = `${(priceInt - (priceInt * .25)) * 12}`;
        duration.textContent = `/year`;

    }else{

        refreshPrices();
        duration.textContent = `/month`;
    }
}

// generate price on range
let pageViews = document.querySelector(".page-views span");
range.addEventListener('input', refreshPrices);

function refreshPrices(){
    
    if(range.value == 1){

        if(myCheckbox.checked == true){
            price.textContent = `${(8 - (8 * .25)) * 12}`;
        }else{
            price.textContent = 8;
        }

        pageViews.textContent = "10k";

    } 

    if(range.value == 2){
        
        if(myCheckbox.checked == true){
            price.textContent = 108;
        }else{
            price.textContent = 12;
        }

        pageViews.textContent = "50k";
    }

    if(range.value == 3){
        
        if(myCheckbox.checked == true){
            price.textContent = 144;
        }else{
            price.textContent = 16;
        }

        pageViews.textContent = "100k";
    }

    if(range.value == 4){

        if(myCheckbox.checked == true){
            price.textContent = 216;
        }else{
            price.textContent = 24;
        }

        pageViews.textContent = "500k";

    }

    if(range.value == 5){

        if(myCheckbox.checked == true){
            price.textContent = 324;
        }else{
            price.textContent = 36;
        }

        pageViews.textContent = "1M";
    }

    



}
var isDark=0
function myFunction() {
    if(isDark===0){
        var back=document.getElementById('text-dark')
        back.style.background='rgba(0,0,0,0.8)';
        back.style.color='rgba(255,255,255,0.9)'
        isDark=1;
        var back2=document.getElementById('text-dark2')
        back2.style.color='white'
        back2.style.backgroundColor='rgba(40,40,40,0.6)'
        var back3=document.getElementById('final-Id')
        back3.style.color='white'
        // back3.style.backgroundColor='grey'
        
    }
    else{
        var back=document.getElementById('text-dark')
        back.style.background='rgba(255,255,255,0.9)';
        back.style.color='rgba(0,0,0,0.8)';
        isDark=0;
        var back2=document.getElementById('text-dark2')
        back2.style.color='black'
        back2.style.backgroundColor='white'
        var back3=document.getElementById('final-Id')
        back3.style.color='black'

    }
    
 }