// Tambahkan kode JavaScript kalian di file ini
//No. 6
function handleGetFormData() { //for get value from 5 <input>
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const city = document.getElementById('city').value;
    const zipCode = document.getElementById('zip-code').value;
    const status = document.getElementById('status').checked;

    const dataForm = { //object
        name,
        email,
        city,
        zipCode,
        status
    };

    return dataForm;
}

//No. 7
function isNumber(str) { // only number
    return !isNaN(str) && !isNaN(parseFloat(str));
}

//No. 8
function checkboxIsChecked(){ // for check whether checkbox status is has been checked
    const check = document.getElementById('status').checked;
    return check;
}

//No. 9
function validateFormData(dataForm){
    if (!dataForm){ // for check whether all properti on object dataForm is null 
        return false;
    }
    const validatezipCode = isNumber(dataForm.zipCode); // for check whether zipCode in dataForm is a number
    const validatestatus = checkboxIsChecked(); // for check whether status has been checked
    return validatezipCode && validatestatus; // return if 3 conditions are true
}

//No. 10
function submit(){
    const warning = document.getElementById('warning');
    if(validateFormData(handleGetFormData()) == false){
        warning.innerText = "Periksa form anda sekali lagi"; 
        warning.style.color = "red"; 
    } else if(validateFormData(handleGetFormData()) == true){
        warning.innerText = "";
    }
}
const form =  document.getElementById('warning');
form.addEventListener("submit", submit);