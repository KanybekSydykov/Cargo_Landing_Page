let fracht = document.getElementById('fracht');
let kargo = document.getElementById('kargo');
let select = document.getElementById('select');

kargo.addEventListener('click',()=>{
    kargo.classList.add("tabbed");
    fracht.classList.remove("tabbed");
    select.classList.remove('d-none')
})
fracht.addEventListener('click',()=>{
    kargo.classList.remove("tabbed");
    fracht.classList.add("tabbed")
    select.classList.add('d-none')
})

let priceTag = document.getElementById('price');
let rateTag = document.getElementById('rate');
let time = document.getElementById('time');
let radio = document.getElementById('radio');

let form = document.forms['calculator'];

let weight = form.weight;

let volume = form.volume;

let from = form.from;

let type = form.types;

let checked = form.flexRadioDefault;

let density = 0;
let option = from.value





function deliveryTime(option,days){
    if(!days){
    if ( option === '1'){
       
        days = '15 - 25 дней';
        
    } else if (option === '2'){
        
        days = '25 - 35 дней';
    
}  time.textContent = days; 
} else if(days){
    time.textContent = days;
}
  
}

function count(rate){
    
    if(rate < 200) {
        price = rate * weight.value
    } else if(rate >= 200){ price = rate * volume.value;}
     
   
    renderPriceRate(price,rate);
}

function countShoesPrice(rate){
    price = rate * volume.value;
    renderPriceRate(price,rate);
};

function renderPriceRate(price,rate){
    
    
   
    price = Math.round(price);
    priceTag.textContent = price + ' $';
    rateTag.textContent = rate + '$';
}


function houseGoods(density,option){
if(density < 100){
        
    if(option === '1'){
        rate = 200;
        
        count(rate);
    } else if( option === '2'  || option === '3' ){
        rate = 250;
       
        count(rate);
    }
} else if( density >= 100 && density < 150){
    if(option === '1'){
        rate = 1.6;
        
        count(rate);
    } else if( option === '2' || option === '3' ){
        rate = 2;
        
        count(rate);
    }
} else if( density >= 150 && density < 199){
    if(option === '1'){
        rate = 1.4;
        
        count(rate);
    } else if( option === '2'  || option === '3' ){
        rate = 1.7;
        count(rate);
    }
} else if( density > 199 && density < 250){
    if(option === '1'){
        rate = 1.3;
        count(rate);
    } else if(option === '2'  || option === '3' ){
        rate = 1.5;
        count(rate);
    }
}else if( density > 249  && density < 300){
    if(option === '1'){
        rate = 1.2;
        count(rate);
    } else if(option === '2'  || option === '3' ){
        rate = 1.4;
        count(rate);
    }
} else if( density > 299  && density < 400){
    if(option === '1'){
        rate = 1.1;
        count(rate);
    } else if(option === '2'  || option === '3' ){
        rate = 1.3;
        count(rate);
    }
}else if( density > 399  && density < 500){
    if(option === '1'){
        rate = 1;
        count(rate);
    } else if(option === '2'  || option === '3' ){
        rate = 1.2;
        count(rate);
    }
}else if( density > 499  && density < 800){
    if(option === '1'){
        rate = 0.9;
        count(rate);
    } else if(option === '2'  || option === '3' ){
        rate = 1.1;
        count(rate);
    }
} else if( density > 799) {
    if(option === '1'){
        rate = 0.8;
        count(rate);
    } else if(option === '2'  || option === '3' ){
        rate = 1;
       count(rate);
}
}
}

function shoes(density){
    if(density < 160){
        if(checked.value === '1'){
            rate = 320;
            countShoesPrice(rate)
            
        } else if(checked.value=== '2' ){
            rate = 340;
            countShoesPrice(rate)
        }
    } else if(density > 159 && density < 200) {
        if(checked.value === '1') {
            rate = 340;
            countShoesPrice(rate)
        } else if(checked.value ==='2'){
            rate = 360;
            countShoesPrice(rate)
        }
    } else if(density > 199){
        if(checked.value === '1'){
            price = (370 * volume.value) + (1.2 * weight.value);
            renderPriceRate(price, '370$ + 1.2')
        } else if(checked.value === '2'){
            price = (390 * volume.value) + (1.2 * weight.value);
            renderPriceRate(price, '390$ + 1.2')
        }
    }
}

function clothes(rate){
    price = rate * weight.value;
    renderPriceRate(price,rate);
}

function socks(rate){
    price = rate * weight.value;
    renderPriceRate(price,rate);
}

function technic(rate){
    if(rate> 150){
        price = rate * volume.value;
        renderPriceRate(price,rate);
        deliveryTime(option);
    } else {
        price = rate * weight.value;
        renderPriceRate(price,rate);
        deliveryTime(option);
    }

}

function toys(rate){
    if(rate < 100){
        price = rate * weight.value;
        renderPriceRate(price,rate);
        deliveryTime(option);
    } else {
        price = rate  * volume.value;
        renderPriceRate(price,rate);
        deliveryTime(option);
    }
}

function parts(rate){
    price = rate * weight.value;
    renderPriceRate(price,rate);
    deliveryTime(option);
}

type.addEventListener('click',()=>{
    if(type.value === "2"){
        radio.classList.remove('d-none');
    } else radio.classList.add('d-none');
})


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    density = Number(weight.value) / Number(volume.value);
    option = from.value;
    
    if( kargo.classList.contains('tabbed')){
        if( type.value === '1'){
            houseGoods(density,option);
            deliveryTime(option);
        } 
        else if( type.value === '2'){
            shoes(density);
            deliveryTime(option);
        }else if(type.value === '3'){
            if(density > 149){
                if(option === '1'){
                   clothes(rate = 2.25);
                    
                    deliveryTime(option,'20-30 дней');
                } else if(option === '2'  || option === '3' ){
                    clothes(rate = 2.45);
                    deliveryTime(option,'30-40 дней');
                }
            } else deliveryTime(option,'Недоступно');
    } else if(type.value === '4'){
            if(density < 200){
                if(option === '1'){
                socks(rate = 1.3);
                deliveryTime(option)
            } else if(option ==='2'  || option === '3' ){
                socks(rate = 1.6);
                deliveryTime(option);
            }
        } else if(density >= 200){
            if(option === '1'){
            socks(rate = 1.2);
            deliveryTime(option)
        } else if(option ==='2'  || option === '3' ){
            socks(rate = 1.4);
            deliveryTime(option);
        }
    }
    } else if(type.value === '5'){
            if(density < 100){
                if(option === '1'){
                technic(rate = 230);
                } else if(option === '2'  || option === '3' ){
                    technic(rate = 280);
                }
            } else if(density > 99 && density < 120){
                if(option === '1'){
                    technic(rate = 220);
                    } else if(option === '2'  || option === '3' ){
                        technic(rate = 270);
                    }
            } else if (density > 119 && density < 150){
                if(option === '1'){
                    technic(rate = 210);
                    } else if(option === '2'  || option === '3' ){
                        technic(rate = 260);
                    }
            } else if (density > 149 && density < 180) {
                if(option === '1'){
                    technic(rate = 1.3);
                    } else if(option === '2'  || option === '3' ){
                        technic(rate = 1.7);
                    }
            } else if (density > 179 && density < 200){
                if(option === '1'){
                    technic(rate = 1.2);
                    } else if(option === '2'  || option === '3' ){
                        technic(rate = 1.5);
                    }
            } else if (density > 199 && density < 250){
                if(option === '1'){
                    technic(rate = 1.1);
                    } else if(option === '2'  || option === '3' ){
                        technic(rate = 1.3);
                    }
            } else if (density > 249){
                if(option === '1'){
                    technic(rate = 0.9);
                    } else if(option === '2'  || option === '3' ){
                        technic(rate = 1.1);
                    }
            }
    } else if (type.value === '6'){
        if(density < 120) {
            toys(rate = 210);
        } else if (density > 119 && density < 200){
            toys(rate = 230)
        } else if (density > 199 && density < 250){
            toys(rate = 1.4);
        } else if (density > 249 && density < 300){
            toys(rate = 1.3)
        } else if (density > 299) {
            toys(rate = 1.1);
        }
    } else if (type.value === '7'){
        if(density < 150) {
            if(option === '1'){
                parts(rate=1.6);
            } else if(option === '2'  || option === '3' ){
                parts(rate=1.8)
            }
        } else if (density > 149 && density < 200){
            if(option === '1'){
                parts(rate=1.4);
            } else if(option === '2'  || option === '3' ){
                parts(rate=1.6)
            }
        } else if (density > 199 && density < 250){
            if(option === '1'){
                parts(rate=1.2);
            } else if(option === '2'  || option === '3' ){
                parts(rate=1.5)
            }
        } else if (density > 249 && density < 300) {
            if(option === '1'){
                parts(rate=1);
            } else if(option === '2'  || option === '3' ){
                parts(rate=1.2)
            }
        } else if (density > 299 && density < 400){
            if(option === '1'){
                parts(rate=0.9);
            } else if(option === '2'  || option === '3' ){
                parts(rate=1.1)
            }
        } else if(density > 399 && density < 500) {
            if(option === '1'){
                parts(rate=0.8);
            } else if(option === '2'  || option === '3' ){
                parts(rate=1)
            }
        } else if (density > 499 && density < 1000){
            if(option === '1'){
                parts(rate=0.7);
            } else if(option === '2'  || option === '3' ){
                parts(rate=0.9)
            }
        } else if(density > 999){
            if(option === '1'){
                parts(rate=0.6);
            } else if(option === '2'  || option === '3' ){
                parts(rate=0.8)
            }
        }
    }
    } 
    if(fracht.classList.contains('tabbed')){
       count(rate=1.4)
            deliveryTime(option);
    }
})



let copyText = document.querySelectorAll('.card-text');

let btnCopy = document.querySelectorAll('.btn-copy');

console.log(copyText);
console.log(btnCopy);

for(let i=0;i<btnCopy.length;i++){
    btnCopy[i].addEventListener('click',(e)=>{
        e.preventDefault();
        let inp = document.createElement('input');
       inp.value = copyText[i].innerText;
       inp.select();
       inp.setSelectionRange(0, 99999); /* For mobile devices */
   /* Copy the text inside the text field */
  navigator.clipboard.writeText(inp.value);
    })
}