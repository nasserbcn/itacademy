
// Exercise 7
function validate() {
	var error = 0;
	const  letters_check = /^[A-Za-z]+$/;
	const password_check = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;

	// Get the input fields
	var fName = document.getElementById("fName");
	var fLastName = document.getElementById("fLastN");
    var fPassword = document.getElementById("fPassword");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");  
	 var errorLastN = document.getElementById("errorLastN");
	 var errorPassword = document.getElementById("errorPassword");
	 var errorAddress = document.getElementById("errorAddress");
     var errorPhone = document.getElementById("errorPhone");
	
	// Validate fields entered by the user: name, phone, password, and email
	//- Tots els camps són obligatoris.
    //- Tots els camps han de tenir almenys 3 caràcters.
    //- El nom i cognoms han de contenir només lletres.
	//- El telèfon ha de contenir només números.
    //- La contrasenya ha d'incloure números i lletres.
    //- L'email ha de tenir format d'email.

	//NAME
	if(fName.value.length >= 3 && fName.value.match(letters_check)) {
		errorName.style.display = "none";
	}
	else {
		errorName.style.display = "block";
		error=1;
	}

	//LASTNAME
	if(fLastName.value.length >= 3 && fLastName.value.match(letters_check)) {
		errorLastN.style.display = "none";
	}
	else {
		errorLastN.style.display = "block";
		error=1;
	}


    //EMAIL
	if(fEmail.value.length >= 3 && fEmail.value.includes("@")) {
		errorEmail.style.display = "none";
		//console.log("fEmail:"+fEmail)
	}
	else {
		errorEmail.style.display = "block";
		//console.log("fEmail:"+fEmail)
		error=1;
	}


	//PASSWORD
	if(fPassword.value.length >= 3 && fPassword.value.match(password_check)) {
		errorPassword.style.display = "none";
	}
	else {
		errorPassword.style.display = "block";
		error=1;
	}

	//ADRESS
	if(fAddress.value.length >= 3) {
		errorAddress.style.display = "none";
	}
	else {
		errorAddress.style.display = "block";
		error=1;
	}

	//PHONE
	//It is not necessary to check if they are digits because the input is type number.
	if(fPhone.value.length >= 9) {
		errorPhone.style.display = "none";
	}
	else {
		errorPhone.style.display = "block";
		error=1;
	}

}
