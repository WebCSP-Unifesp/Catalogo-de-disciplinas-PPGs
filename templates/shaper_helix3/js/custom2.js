window.onload = function(){

if (document.getElementById('grupo') != null){

var groupid = document.querySelector("#grupo").value;
var decisao =  document.querySelector("#decisao");
var parecer =  document.querySelector("#parecer");
var publica = document.querySelector("#bfElemWrap1374");
document.querySelector("#ff_elem1270").value = groupid;

if (groupid == 12){
	decisao.style.display = "block";
}else{
	decisao.style.display = "none";
}
if (groupid == 11){
	parecer.style.display = "block";
}else{
	parecer.style.display = "none";
}

if (groupid != 10 && groupid != 11){
publica.style.display = "block";
}else{
publica.style.display = "none";
}

if (groupid != 10){
document.getElementById("ff_elem174").setAttribute("readonly", "readonly");
document.getElementById("ff_elem175").setAttribute("readonly", "readonly");
document.getElementById("ff_elem176").setAttribute("readonly", "readonly");
document.getElementById("ff_elem177").setAttribute("readonly", "readonly");
document.getElementById("ff_elem178").setAttribute("readonly", "readonly");
document.getElementById("ff_elem178_calendarButton").setAttribute("disabled", "disabled");
document.getElementById("ff_elem179").setAttribute("readonly", "readonly");
document.getElementById("ff_elem179_calendarButton").setAttribute("disabled", "disabled");
document.getElementById("ff_elem180").setAttribute("readonly", "readonly");
document.getElementById("ff_elem180_calendarButton").setAttribute("disabled", "disabled");
document.getElementById("ff_elem181").setAttribute("readonly", "readonly");
document.getElementById("ff_elem181_calendarButton").setAttribute("disabled", "disabled");
document.getElementById("ff_elem182").setAttribute("readonly", "readonly");
document.getElementById("ff_elem183").setAttribute("readonly", "readonly");
document.getElementById("ff_elem184").setAttribute("readonly", "readonly");
document.getElementById("ff_elem186").setAttribute("readonly", "readonly");
document.getElementById("ff_elem187").setAttribute("readonly", "readonly");
document.getElementById("ff_elem188").setAttribute("readonly", "readonly");
document.getElementById("ff_elem189").setAttribute("readonly", "readonly");
document.getElementById("ff_elem190").setAttribute("readonly", "readonly");
document.getElementById("ff_elem191").setAttribute("readonly", "readonly");


}


}
}
