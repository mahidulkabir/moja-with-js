

let sum = 0;
       const zeroValue = document.getElementById('zero');
    document.getElementById('btn-add').addEventListener('click', function(){
        sum += 1;
        zeroValue.innerText= sum;
    })



    document.getElementById('btn-minus').addEventListener('click', function(){
        sum -= 1;
        zeroValue.innerText= sum;
    })