const metin = prompt("Metin Gir:");

const temizMetin = metin.toLocaleLowerCase().replace(/[^\w\s]/g, '');

const kelimeler = temizMetin.split('');

const kelimeSayisi = {};
for (let i = 0; i < kelimeler.length; i++) {
    const kelime = kelimeler[i];

if(kelimeSayisi[kelime]){
    kelimeSayisi[kelime]++;
}
else{
    kelimeSayisi[kelime] = 1;
}
}
console.log(kelimeSayisi);
