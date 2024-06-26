// MESSAGGIO ALERT DI PROVA
// alert("Javascript calcolo biglietto treno");



// VADO A RICHIAMARE I BOTTONI E VERIFICO CON IL CONSOLE LOG SE FUNZIONA CORRETTAMENTE

const btn = document.getElementById('generate-price')
btn.addEventListener('click', function () {
    let name = document.getElementById('name').value;
    let km = document.getElementById('km').value;
    let eta = document.getElementById('eta').value;
    console.log(name, km, eta);
    let total_price = 0.21 * km;

    // CALCOLIAMO LO SCONTO IN BASE ALL'ETA'
    
    let final_price = total_price;
    
    if (eta == 'under') {
        let discount = total_price * 0.20;
        final_price -= discount;
    }
    else if (eta == 'over') {
        let discount = total_price * 0.40;
        final_price -= discount;
    }

    document.getElementById('ciccio').innerHTML = name;
    document.getElementById('prezzo').innerHTML = final_price.toFixed(2);
})


