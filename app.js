let a = Number(prompt("ใส่เลขตัวที่ 1"));
let b = Number(prompt("ใส่เลขตัวที่ 2"));
let c = Number(prompt("ใส่เลขตัวที่ 3"));
if (isNaN(a) || isNaN(b) || isNaN(c)){
    alert('Invalid number');
}
console.log(`Num1 = ${a} ,Num2 = ${b} ,Num3 = ${c}`)
let d = [a, b, c];
console.log(`ก่อนเรียงคือ ${d}`)
d.sort((a, b) => a - b);
console.log(`เรียงใหม่ได้ ${d}`)
alert(`ก่อนเรียงคือ ${a},${b},${c} \nเรียงใหม่ได้ ${d}`)
