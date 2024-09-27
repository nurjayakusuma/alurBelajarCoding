var jmlAngkot = 10;
var angkotBroprasi = 6;
var noAngkot = 1;

while (noAngkot <= angkotBroprasi) {
    console.log ('angkot no. ' + noAngkot + 'beroprasi.');

noAngkot++;
}

for (noAngkot = angkotBroprasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
    console.log ('angkot no. ' + noAngkot + ' tidak beroprasi.');
}