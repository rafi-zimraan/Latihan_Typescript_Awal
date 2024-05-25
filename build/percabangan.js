"use strict";
let objec = prompt('kau mau kemana kawan, silahkan pulih 1-5');
let destinasi = "";
switch (objec) {
    case '1':
        destinasi = "Taman sari";
        break;
    case '2':
        destinasi = "Taman pintar";
        break;
    case '3':
        destinasi = "alun alun utara";
        break;
    case '4':
        destinasi = "Taman seribu bunga";
        break;
    case '5':
        destinasi = "malioboro";
        break;
    default:
        alert('anda salah memasukan kunci ');
}
if (destinasi == "") {
    alert("anda tidak brtuntung");
}
else {
    alert(" anda bisa ke " + destinasi);
}
