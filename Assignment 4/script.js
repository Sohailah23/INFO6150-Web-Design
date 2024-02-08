var form = document.getElementById('myForm');

form.addEventListener("click", () => {
    console.log("page loaded");
})

form.addEventListener("submit", submitted);

var validFirstName = false;
var validLastName = false;
var validEmailId = false;
var validPhoneNumber = false;
var validStreetAdd = false;
var validCity = false;
var validState = false;
var validZipCode = false;


//regex validation strings
var regexPhone = /^\(?([0-9]{3})\)?-?([0-9]{3})-?([0-9]{4})$/;
var regexEmail = /[a-z0-9._%+-]+@northeastern.edu$/;
var regexName = /^[a-zA-Z]+$/;
var regexZipCode = /^\d{5}(-\d{4})?$/;

const firstName = document.getElementById("firstName");
firstName.addEventListener("input", validate);

const lastName = document.getElementById("lastName");
lastName.addEventListener("input", validate);

const phoneNumber = document.getElementById("phoneNumber");
phoneNumber.addEventListener("input", validate);

const emailId = document.getElementById("emailId");
emailId.addEventListener("input", validate);

const streetAddress1 = document.getElementById("streetAddress1");

const streetAddress2 = document.getElementById("streetAddress2");

const city = document.getElementById("city");

const state = document.getElementById("state");

const zipcode = document.getElementById("zipcode");
zipcode.addEventListener("input", validate);

const drink = document.getElementById("drinks");

const size = document.getElementById("selectedsize");

const txtbox = document.getElementById("txtbox");

const source = document.querySelectorAll('input[name="source"]:checked');

const comments = document.getElementById("comments");

//const title = document.querySelectorAll('input[type="radio"');


   
function getTitle(){
    if(document.getElementById("miss").checked){
    const title = "Miss";
}else if(document.getElementById("mr").checked){
    const title = "Mr.";
}else {
    const title = "mrs"
}
}

function displayResults(){

    document.getElementById("result").style.display = "block";
    var table = document.getElementById("myTable");
    var row = table.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    var cell4 = row.insertCell();
    var cell5 = row.insertCell();
    var cell6 = row.insertCell();
    var cell7 = row.insertCell();
    var cell8 = row.insertCell();
    var cell9 = row.insertCell();
    var cell10 = row.insertCell();
    var cell11 = row.insertCell();
    var cell12 = row.insertCell();
    var cell13 = row.insertCell();
    var cell14 = row.insertCell();
    var cell15 = row.insertCell();

    //cell1.innerHTML = getTitle();
    if(document.getElementById("miss").checked){
        cell1.innerHTML = "Miss";
    }else if(document.getElementById("mr").checked){
        cell1.innerHTML = "Mr.";
    }else {
        cell1.innerHTML= "mrs"
    }

    cell2.innerHTML = firstName.value; 
    cell3.innerHTML = lastName.value; 
    cell4.innerHTML = emailId.value; 
    cell5.innerHTML = phoneNumber.value; 
    cell6.innerHTML = streetAddress1.value; 
    cell7.innerHTML = streetAddress2.value; 
    cell8.innerHTML = city.value; 
    cell9.innerHTML = state.value; 
    cell10.innerHTML = zipcode.value;
    cell11.innerHTML = drink.value;
    cell12.innerHTML = document.getElementById("selectedsize").value;
    cell13.innerHTML = txtbox.value;
    //cell14.innerHTML = source.value;

    let checkboxes = document.querySelectorAll('input[name="source"]:checked');
    let values = [];

    for(i=0; i<checkboxes.length; i++){
        values.push(checkboxes[i].value);
    }

    cell14.innerHTML = values;
    
    cell15.innerHTML = comments.value;



}


function validate(e){
    var value = e.target.value;
    var type = this.id;
    var em = "error_" + type;

    switch(type){
        case("firstName"):
            if(!value.trim().match(regexName)){
                 document.getElementById(em).style.display = "block";    //this will display the error block according to the type. In this case its the error_firstName
                 this.style.border = "2px solid red";
                 validFirstName = false;
             }
             else{
                 document.getElementById(em).style.display = "none";    //this will hide the error block according to the type. In this case its the error_firstName
                 this.style.border = "";
                 validFirstName = true;
             }
            break;
        case("lastName"):    
            if(!value.trim().match(regexName)){
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                validLastName = false;
            }
            else {
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validLastName = true;
            }
            break;
        case("emailId"):
            if(!value.trim().match(regexEmail)){
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                validEmailId = false;
            }
            else {
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validEmailId = true;
            }
            break;
        case("phoneNumber"):
            if(!value.trim().match(regexPhone)){
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                validPhoneNumber = false;
            }
            else{
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validPhoneNumber = true;
            }
            break;
        case("zipcode"):
            if(!value.trim().match(regexZipCode)){
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                validZipCode = false;
            }
            else {
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validZipCode = true;
            }    
            break;    
    }
}

function isSelected(val){
    var item = document.getElementById("selectedsize");
    if(item.checked){
        document.getElementById("txtbox").style.display = "block";
    }
    else{
        document.getElementById("txtbox").style.display = "none";
    }
}

function selectSize(){
    var drink = document.getElementById("drinks").value;
    document.getElementById("checkbox").innerHTML = `<input type="checkbox" id="selectedsize" onchange="isSelected(this)" value="large"> ${drink} Large Drink ($1 extra)</input><br>`;

}

function submitted(e){
    e.preventDefault();
    if(validFirstName && validLastName && validEmailId && validPhoneNumber && validZipCode){
        alert('Data is saved successfully');
        displayResults();
        form.reset();
    }
    else {
        alert("Please enter valid data");
    }
}