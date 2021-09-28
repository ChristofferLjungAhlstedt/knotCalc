function seaSpeed() {
    const inputKnot = document.getElementById('knot');
    const inputNm = document.getElementById('nm');
    const knot = inputKnot.value;
    const nm = inputNm.value;
    inputKnot.value = '';
    inputNm.value = '';
    let answer = document.getElementById('answer');
    if ((knot == 0 || knot == undefined || knot == '') || (nm == 0 || nm == undefined || nm == '')) {
        answer.innerHTML = 'Input must be above 0'
        return;
    }
    let min = nm / knot;
    let hour = 0;
    min = min * 60;
    while (min / 60 >= 1) {
        min = min - 60;
        hour = hour + 1;
    }
    answer.innerHTML = min + 'min ' + hour;
}
function noobBoatPerson() {
    const inputKmh = document.getElementById('kmh');
    const inputKm = document.getElementById('km');
    const kmh = inputKmh.value;
    const km = inputKm.value;
    inputKmh.value = '';
    inputKm.value = '';
    let answer = document.getElementById('answer');
    if ((kmh == 0 || kmh == undefined || kmh == '') || (km == 0 || km == undefined || km == '')) {
        answer.innerHTML = 'Input must be above 0'
        return;
    }
    let min = km / kmh;
    let hour = 0;
    min = min * 60;
    while (min / 60 >= 1) {
        min = min - 60;
        hour = hour + 1;
    }
    answer.innerHTML = min + 'min ' + hour;
}