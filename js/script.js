// MESSAGGIO ALERT DI PROVA
alert("Javascript calcolo biglietto treno");



// VADO A RICHIAMARE I BOTTONI E VERIFICO CON IL CONSOLE LOG SE FUNZIONA CORRETTAMENTE

const btn = document.getElementById('generate-price')
btn.addEventListener('click', function () {
    let name = document.getElementById('name').value;
    let km = document.getElementById('km').value;
    let eta = document.getElementById('eta').value;
    console.log(name, km, eta);

    // CALCOLIAMO LO SCONTO IN BASE ALL'ETA'

    let final_price = total_price;

    if (eta < 18) {
        let discount = total_price * 20;
        final_price -= discount;
    }
    else if (eta > 65) {
        let discount = total_price * 40;
        final_price -= discount;
    }
})