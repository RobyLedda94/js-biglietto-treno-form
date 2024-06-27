// MESSAGGIO ALERT DI PROVA
// alert("Javascript calcolo biglietto treno");



// GENERATE BTN

const btn = document.getElementById('generate-price')
btn.addEventListener('click', function () {
    let name = document.getElementById('name').value;
    let km = document.getElementById('km').value;
    let eta = document.getElementById('eta').value;
    

    // CALCOLO PREZZO BASE
    let total_price = 0.21 * km;

    // CALCOLIAMO LO SCONTO IN BASE ALL'ETA'
    
    let discount = 0;
    
    if (eta == 'under') {
        discount = total_price * 0.2;
        

    }
    else if (eta == 'over') {
        discount = total_price * 0.4;
        
    }

    let final_price = total_price - discount;



    let carrozza = Math.floor(Math.random() * 10) + 1;
    
    document.getElementById('nominativo').innerHTML = name;
    document.getElementById('carrozza').innerHTML = 'n°' + carrozza;
    document.getElementById('prezzo').innerHTML =  '€' + final_price.toFixed(2);
})


// RESET BTN

const resetBtn = document.getElementById('resetbtn');
resetBtn.addEventListener('click', function(){
    
    document.getElementById('name').value = '';
    document.getElementById('km').value = '';
    document.getElementById('eta').value ='';
    


    


    document.getElementById('nominativo').innerHTML = '';
    document.getElementById('carrozza').innerHTML = '';
    document.getElementById('prezzo').innerHTML = '';
})