var btn = document.querySelector('.contact100-form-btn');
var numberCheck;
var btnBill = document.querySelector('.btn-bill');
btn.onclick = function(){

    var km = document.querySelector('#soKM').value;
    var time = document.querySelector('#thoiGianCho').value;
    var check = document.getElementsByName('selector');
    var sum;
    var blockprice = document.querySelector('#divThanhTien');
    var price = document.querySelector('#xuatTien');
    var checkText = ''
    for (i = 0; i < check.length ; i++){
        if(check[i].checked===true){
             numberCheck = i;
            if(numberCheck==0){
                checkText = 'Uber X'
            }
            else if(numberCheck==1)
            {
                checkText = 'Uber SUV';
            }
            else if(numberCheck==2) {
                checkText = 'Uber Black';
            }
        }
    }
    if(km == 0){
        sum = 0 + time * 2000;  
    }
    else if(km < 1){
        if(numberCheck == 0){
            var sum = 8000 + time * 2000;
        }
        else if(numberCheck == 1){
            var sum =  9000 + time * 3000;
        }

        else if(numberCheck == 2) {
            var sum =  10000 + time * 4000;
        }
    }
    else if(km >=1 && km <=20){
        if(numberCheck == 0){
            var sum = 12000 + time * 2000;
        }
        else if(numberCheck == 1){
            var sum =  14000 + time * 3000;
        }

        else if(numberCheck == 2) {
            var sum =  16000 + time * 4000;
        }
    }
    else if(km >20){
        if(numberCheck == 0){
            var sum = 10000 + time * 2000;
        }
        else if(numberCheck == 1){
            var sum =  12000 + time * 3000;
        }

        else if(numberCheck == 2) {
            var sum =  14000 + time * 4000;
        }
    }

    blockprice.style.display='block ';
    price.innerHTML = sum;

    
        var billType = document.querySelector('.bill-type');
        var billKm = document.querySelector ('.bill-km')
        var billTime = document.querySelector('.bill-time');
        var billPrice = document.querySelector('.bill-price')
        billType.innerText = checkText ;
        billKm.innerText = km;
        billTime.innerText = time;
        billPrice.innerText = sum;
    
}

