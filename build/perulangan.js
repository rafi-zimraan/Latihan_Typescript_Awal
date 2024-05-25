"use strict";
for (let y = 0; y <= 10; y++) {
    for (let x = 0; x <= 10; x++) {
        if (x != 5 || y != 5) {
            document.write(" - ");
        }
        else {
            document.write(" * ");
        }
    }
    document.write("</br>");
}
document.write("</br>");
for (let q = 0; q <= 10; q++) {
    for (let w = 0; w <= 10; w++) {
        if (q == w || q + w == 10) {
            document.write(" * ");
        }
        else {
            document.write(" - ");
        }
    }
    document.write("</br>");
}
document.write("</br>");
for (let z = 0; z <= 10; z++) {
    for (let a = 0; a <= 10; a++) {
        if (z == a || z + a == 10 || a == 10 || a == 0 || a == 5) {
            document.write(" * ");
        }
        else {
            document.write(" - ");
        }
    }
    document.write("</br>");
}
