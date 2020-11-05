function calc(x,z,operation)
if(isNaN(x)==true||isNaN(z)==true){
return="неправилтно";
}
{
if (operation == "+")
	return x+z;
}
{
if (operation == "-")
	return x-z;
}
{
if (operation == "*")
	return x*z;
}
{
if (operation == "/")
	return x/z;
}
window.addEventListener("load" function(){
var numtext1 = document.querySelector("#num1");
var numtext2 = document.querySelector("#num2");
var divresalt = document.querySelector("#resault");
var btn = document.querySelector("#button");
var textoperation = document.querySelector("#operation");
btn.addEventListener("click",function(){
var result = calc(parseFloat(numtext1.value),parseFloat(numtext2.value),textoperation.value);
  divresalt.innerHTML=result;
  
	});
});