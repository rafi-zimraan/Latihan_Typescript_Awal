// PERULANGAN
// DI TENGAH
for (let y = 0; y <= 10; y++) {
    for (let x = 0; x <= 10; x++) {
        if (x != 5 || y != 5) {
            document.write(" - ")
        } else {
            document.write(" * ")
        }
    }
    document.write("</br>")   
    
}

document.write("</br>")   
// document.write("</br>")   

// SILANG
for (let q = 0; q <= 10;  q++) {
    for (let w = 0; w <= 10; w++) {
        if (q == w || q + w == 10  ) {
            document.write(" * ")
        } else {
            document.write(" - ")
        }
        
    }
    document.write("</br>")
}
document.write("</br>")   

// SILANG + POJOK + TENGAH
for (let z = 0; z <= 10; z++) {
    for (let a = 0; a <= 10; a++) {
        if (z == a || z + a == 10 || a == 10 || a == 0 || a == 5) {
            document.write(" * ")
        } else {
            document.write( " - ")
        }
        
    }
    document.write("</br>")
}


// SEGITIGA
for (let m = 0; m <= 10; m++) {
    for (let b = 0; b <= 10; b++) {
        for (let v = 0; v <= 10; v++) {
            if (v == b) {
                
            } else {
                
            }
            
        }
        
    }
    
}


