// ARRAY
// MENAMBAH RENDOM
let hewan : string[];
hewan =["singa", "kerbau","harimau"];
hewan[3] = "unta";
console.log('MENAMBAH',hewan);

// MENGURANG DARI DEPAN
let hewan2 : string[];
hewan2 =["singa", "kerbau","harimau"];
hewan2.shift();
console.log('SHIFT',hewan2);   

// MENGURANGI DARI BELAKANG
let hewan3 : string[];
hewan3 =["singa", "kerbau","harimau"];
hewan3.pop();
console.log('POP',hewan3);

// MENGURANGI RENDOM
let hewan4 : string[];
hewan4 =["singa", "kerbau","harimau"];
delete hewan4 [1];
console.log('DELETE',hewan4);

// SPILE
let hewan5 : string[];
hewan5 =["singa", "kerbau","harimau"];
hewan5.splice(1,2);
console.log('SPILE',hewan5);

// FILTER
let hewan6 : any =[2,3,5,8,1,2,31,24,36,12];
const filterHewan6 =hewan6.filter((a : any) => {
    return a < 10;
})
console.log('FILTER',filterHewan6);

// MERUBAH FILTER
let hewan7 : string[];
hewan7 =["singa", "kerbau","harimau"];
hewan7[0] = "kambing";
console.log('SPILE',hewan7);
console.log('MERUBAH FILTER',hewan7);

//METHOD FILTER
let hewan8 : any =[10,15,20,30,35];
const jmlhewan = hewan8.filter((a : any) => a < 30)
console.log('METHOD FILTER',jmlhewan);

// MAP
let hewan9 = hewan8.map((b : any) => b * 2 )
console.log('MAP',hewan9);

//REDUCE
let hewan10 = hewan9.reduce(
    (Sun: any ,dom: any) => Sun * dom
)
console.log('REDUCE',hewan10);

// CHAINING
let hewan11 = [12,11,4,5,7]
let chainingHewan = hewan11.filter((q) => q < 10).map((r) => r * 2).reduce((wap: any,wep: any) => wap + wep)
console.log('chaining',chainingHewan);







