let umur = 52;

function hasilUmur() {
    if (umur > 1 && umur < 10) {
        console.log('anda  masih kecil');
    } else if (umur > 11 && umur < 17) {
        console.log('anda remaja bro');
    } else if (umur > 18 && umur <= 30) {
        console.log('anda sudah menikah');
    } else if (umur > 31) {
        console.log('anda sudah bau tanah ');
    }
}
console.log(umur);
hasilUmur();
