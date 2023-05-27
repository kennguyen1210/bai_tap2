// bai 2
// nhap gia tri cua mang 2 chieu;
let m, n;
let k = 0;
n = Number(prompt("nhap so dong cua mang"));
m = Number(prompt("nhap so cot cua mang"));
let arrInt = new Array(n);
for (let i = 0; i < n; i++) {
  arrInt[i] = new Array(m);
}
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    arrInt[i][j] = Number(prompt("nhap phan tu cho" + `arrInt[${i}][${j}]`));
  }
}
// in ra gia tri cua cac phan tu nam tren duong bien
let arr1 = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    console.log(`arrInt[${i}][${j}]`, arrInt[i][j]);
    if (i == 0 || j == 0 || i == n - 1 || j == m - 1) {
      arr1 = arrInt[i][j];
    }
  }
}
console.log(arr1);

// in ra gia tri cua cac phan tu nam tren duong cheo chinh va phu
if (m == n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i == j) {
        console.log("phan tu tren duong cheo chinh" + arrInt[i][j]);
      }

      if (i + j == n - 1) {
        console.log("phan tu tren duong cheo phu" + arrInt[i][j]);
      }
    }
  }
}
// sap xep mang tang dan theo dong

for (let i = 0; i < m; i++) {
  for (let j = 1; j < n; j++) {
    let current = arrInt[i][j];
    let k = j - 1;
    while (k >= 0 && arrInt[i][k] > current) {
      arrInt[i][k + 1] = arrInt[i][k];
      k--;
    }
    arrInt[i][k + 1] = current;
  }
}
console.log(arrInt);
