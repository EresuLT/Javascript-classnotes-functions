// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// !3.YÖNTEM  : ARROW FUNCTIONS
// !-----------------------------------------------------------

console.log('****** 3- ARROW FUNCTIONS ******');

//* Örnek1:
//*************************************************************/

const topla = (x,y) => x+y;
//! Arrow fonksiyonlarda eğer tek bir ifade kullanılırsa süslü paranteze ihtiyaç olmaz ve dolayısıyla return gerekmez, aksi takdirde gerekir
const usAl = (a,b) => {
    return a ** b;
}

const usAl2 = (a,b) => a**b;

console.log('Sonuç= ', topla(6,7)); 
console.log('Üs Al= ', usAl(3,4)); 
console.log('Üs Al= ', usAl2(3,4)); 


//! Ok fonksiyonunda birden fazla ifade var ise fonksiyonda süslü parantez kullanmalıyız. Ve lazımsa return yapmalıyız.
const menu = (times) => {
console.log('==================');
console.log('JAVASCRİPT ÇOK KOLAYMIŞ');
console.log('==================');
return times *2
};

console.log(menu(2));

//* Örnek2:
//*************************************************************/

const tekMi = (n) => (n % 2 ? 'TEKTIR' : 'CIFTTIR'); 
const tekMi2 = (n) => (n % 2 ===1 ? 'TEKTIR' : 'CIFTTIR'); 

console.log(tekMi(3));
console.log(tekMi2(6));

//* Örnek3:
//*************************************************************/

const r = prompt("Yarıçapı giriniz= ")
const h = prompt("Yükseklik giriniz= ")

const hacimHesapla = (r,h) => (Math.PI * r * r * h);

console.log("Silindirin Hacmi= ",Math.trunc(hacimHesapla(r,h)));
console.log("Silindirin Hacmi= ",(hacimHesapla(r,h)).toFixed(2)); //string yapar//