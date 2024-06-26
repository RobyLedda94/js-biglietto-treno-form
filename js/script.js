// MESSAGGIO ALERT DI PROVA
alert("Javascript calcolo biglietto treno");



// VADO A RICHIAMARE I BOTTONI E VERIFICO CON IL CONSOLE LOG SE FUNZIONA CORRETTAMENTE

const btn = document.getElementById('generate-price')
btn.addEventListener('click', function () {
    let name = document.getElementById('name').value;
    let km = document.getElementById('km').value;
    let eta = document.getElementById('eta').value;
    console.log(name, km, eta);
})