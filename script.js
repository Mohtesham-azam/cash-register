function calcSum(){
let cashValue = {
"penny": 0.01,
"nickle": 0.05,
"dime": 0.10,
"quarter": 0.25,
"one": 1.00,
"five": 5.00,
"ten": 10.00,
"twenty": 20.00,
"hundred": 100.00
}
let p = document.getElementsByName("penny")[0].value;
let n = document.getElementsByName("nickle")[0].value;
let d = document.getElementsByName("dime")[0].value;
let q = document.getElementsByName("quarter")[0].value;
let o = document.getElementsByName("one")[0].value;
let f = document.getElementsByName("five")[0].value;
let t = document.getElementsByName("ten")[0].value;
let tw = document.getElementsByName("twenty")[0].value;
let h = document.getElementsByName("hundred")[0].value;
let sum = Number(p) + Number(n) + Number(d) + Number(q) + Number(o) + Number(f) + Number(t) + Number(tw) + Number(h);
if(p>=0 && n>=0 && d>=0 && q>=0 && o>=0 && f>=0 && t>=0 && tw>=0 && h>=0){
if(Math.floor(p % 0.01) == 0 && Math.floor(n % 0.05) == 0 && Math.floor(d % 0.1) == 0 && q % 0.25 == 0 && o % 1 == 0 && f % 5 == 0 && t % 10 == 0 && tw % 20 == 0 && h % 100 == 0){
document.getElementsByName("total")[0].value = sum.toFixed(2);
let c = document.getElementsByName("cash")[0].value;
let pr = document.getElementsByName("price")[0].value;
let chng = Number(c) - Number(pr);
chng = chng.toFixed(2);
let arr = [];
let cid = [["penny",p],["nickle",n],["dime",d],["quarter",q],["one",o],["five",f],["ten",t],["twenty",tw],["hundred",h]];
if(c<0 || pr<0){
document.getElementById("list").innerHTML = "";
document.getElementById("message").innerHTML = "";
alert("Please enter positive(greater or equal to 0) number only.");
}
else if(Number(pr) > Number(c)){
document.getElementById("list").innerHTML = "";
document.getElementById("message").innerHTML = "FULL PRICE NOT PAID";
}
else if(chng > sum){
document.getElementById("list").innerHTML = "";
document.getElementById("message").innerHTML = "INSUFFICENT_FUND";
}
else if(pr == c){
document.getElementById("list").innerHTML = "";
document.getElementById("message").innerHTML = "NO CASH RETURN";
}
else if(Number(chng) === Number(sum)){
document.getElementById("list").innerHTML = "";
document.getElementById("message").innerHTML = "CLOSED";
document.getElementById("list");
cid.forEach((item)=> {
if(item[1] > 0){
let li = document.createElement("li");
li.innerText = item[0] + ": " + item[1];
list.appendChild(li);
}
})
}
else{
cid = cid.reverse();
for(let i of cid){
let temp = [i[0], 0];
while(chng >= cashValue[i[0]] && i[1] > 0){
temp[1] += cashValue[i[0]];
i[1] -= cashValue[i[0]];
chng -= cashValue[i[0]];
chng = chng.toFixed(2);
}
if(temp[1] > 0)
arr.push(temp);
}
if(chng > 0){
document.getElementById("list").innerHTML = "";
document.getElementById("message").innerHTML = "INSUFFICENT_FUND";
}
else{
document.getElementById("list").innerHTML = "";
document.getElementById("message").innerHTML = "OPEN";
document.getElementById("list");
arr.forEach((item)=> {
let li = document.createElement("li");
li.innerText = item[0] + ": " + item[1].toFixed(2);
list.appendChild(li);
})
}
}
}
else{
document.getElementById("list").innerHTML = "";
document.getElementById("message").innerHTML = "";
document.getElementsByName("total")[0].value = "";
alert("please enter exact multiple of corresponding value.");
}
}
else{
document.getElementById("list").innerHTML = "";
document.getElementById("message").innerHTML = "";
document.getElementsByName("total")[0].value = "";
alert("please enter positive(greater or equal to 0) value.");
}
}