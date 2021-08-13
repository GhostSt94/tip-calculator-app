var input_bill = document.querySelector('.bill input');
var input_ppl = document.querySelector('.ppl input');
var div_bill = document.querySelector('.bill > div');
var div_ppl = document.querySelector('.ppl > div');
var span=document.querySelector('.A span');
var custom=document.querySelector('.A .custom');
var tip_amount=document.querySelector('.tip_amount');
var total=document.querySelector('.total');
// var bill_container = document.querySelector('.bill');
// var custom_val=false;

var bill=0;
var tip=0;
var ppl=0;


input_bill.addEventListener('focus', () => {
    div_bill.classList.add('foc')
})
input_bill.addEventListener('blur', () => {
    div_bill.classList.remove('foc');
})

input_ppl.addEventListener('focus', () => {
    div_ppl.classList.add('foc')
})
input_ppl.addEventListener('blur', () => {
    div_ppl.classList.remove('foc');
})


const tips = document.querySelectorAll('.grid-container div')

for(let i=0;i<tips.length;i++){
    tips[i].addEventListener('click',()=>{
            tips[i].classList.add('clicked');
            for(let j=0;j<tips.length;j++){
                if(j==i){continue;}
            tips[j].classList.remove('clicked');
            span.classList.remove('dis');
            custom.classList.add('dis');
            switch (tips[i].innerHTML){
            case '50%':tip=0.5;break;
            case '25%':tip=0.25;break;
            case '15%':tip=0.15;break;
            case '10%':tip=0.1;break;
            case '5%':tip=0.05;break;
        } 
            if(bill==0){bill=eval(inp1.value)}
            if(ppl==0){ppl=eval(inp2.value)}
            tip_amount.innerHTML='$'+Math.round(eval(bill*tip/ppl)).toFixed(2);
            total.innerHTML='$'+Math.round(eval((bill/ppl)+(bill*tip/ppl))).toFixed(2);
            custom.addEventListener('input',()=>{
                var val=custom.value;
                if(!isNaN(val)){
                    custom.parentElement.classList.remove('error_tip');
                    tip=val/100;
                    tip_amount.innerHTML='$'+Math.round(eval(bill*tip/ppl)).toFixed(2);
                    total.innerHTML='$'+Math.round(eval((bill/ppl)+(bill*tip/ppl))).toFixed(2);
                }else{
                    custom.parentElement.classList.add('error_tip');
                    tip=0;
                }
            })         
        
        }
    })
}

var custom_div=document.querySelector('.A');
custom_div.addEventListener('click',()=>{
    span.style.display='none';
    custom.style.display='inline';
})

var inp1 = document.querySelector('.inp1')
var inp2 = document.querySelector('.inp2')
var error_span1 = document.querySelector('.bill .error_span')
var error_span2 = document.querySelector('.ppl .error_span')

inp1.addEventListener('input',()=>{
    try{
        var val=inp1.value;
        if(!isNaN(val)){
            div_bill.classList.remove('error')
            error_span1.style.display='none';
            bill=val;
            // console.log(tip)
            tip_amount.innerHTML='$'+Math.round(eval(bill*tip/ppl)).toFixed(2);
                    total.innerHTML='$'+Math.round(eval((bill/ppl)+(bill*tip/ppl))).toFixed(2);
        }else{
            div_bill.classList.add('error');
            error_span1.style.display='inline';
    }}catch(e){
    }
})

inp2.addEventListener('input',()=>{
    try{
        var val=inp2.value;
        if(!isNaN(val)){
            div_ppl.classList.remove('error')
            error_span2.style.display='none';
            ppl=val;
            if(bill==0){bill=eval(inp1.value)}
            tip_amount.innerHTML='$'+Math.round(eval(bill*tip/ppl)).toFixed(2);
                    total.innerHTML='$'+Math.round(eval((bill/ppl)+(bill*tip/ppl))).toFixed(2);
        }else{
            div_ppl.classList.add('error');
            error_span2.style.display='inline';
    }}catch(e){
    }
})

function reset(){
    inp1.value='';
    inp2.value='';
    tip_amount.innerHTML='$00.00';
    total.innerHTML='$00.00';
}