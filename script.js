// get button---getElementById(button)
// addEventListener(submit,funtion(e) )
// e.preventdefault();

// create empty func
// fname.value-->for all String
// empty string assign


function myFunction(){

    
var fname=document.getElementById("firstname").value;
var lname=document.getElementById("lastname").value;
var address=document.getElementById("address").value;
var pin=document.getElementById("pincode").value;
var gen=document.getElementById("gender").value;
var food=document.getElementById("food").value;
var state=document.getElementById("state").value;
var country=document.getElementById("country").value;

var table = document.createElement('table');
 var thead=document.createElement('thead');
 thead.setAttribute('class','thead');
var tr=document.createElement('tr');
var th1=document.createElement('th');
th1.innerHTML="First Name";
var th2=document.createElement('th');
th2.innerHTML="Last Name";
var th3=document.createElement('th');
th3.innerHTML="Address";
var th4=document.createElement('th');
th4.innerHTML="Pincode";
var th5=document.createElement('th');
th5.innerHTML="Gender";
var th6=document.createElement('th');
th6.innerHTML="Food";
var th7=document.createElement('th');
th7.innerHTML="State";
var th8=document.createElement('th');
th8.innerHTML="Country";

var tbody = document.createElement('tbody');
var tr1 = document.createElement('tr');
        var td1  = document.createElement('td');
        var td2  = document.createElement('td');
        var td3  = document.createElement('td');
        var td4  = document.createElement('td');
        var td5  = document.createElement('td');
        var td6  = document.createElement('td');
        var td7  = document.createElement('td');
        var td8  = document.createElement('td');
        td1.innerText = fname;
        td2.innerText = lname;
        td3.innerText = address;
        td4.innerText = pin;
        td5.innerText = gen;
        td6.innerText = food;
        td7.innerText = state;
        td8.innerText = country;
tr.append(th1,th2,th3,th4,th5,th6,th7,th8);
thead.append(tr);

tr1.append(td1,td2,td3,td4,td5,td6,td7,td8);
tbody.append(tr1);

table.append(tbody);
document.body.append(table);
}
