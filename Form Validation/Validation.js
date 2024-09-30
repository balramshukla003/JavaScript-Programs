
const Name = document.getElementById("name");
const Email = document.getElementById("email");
const Phone = document.getElementById("phone");
const Course = document.getElementById("course");
const Query = document.getElementById("query");
const Pincode = document.getElementById("pincode");


function Validation(event) {

    if (document.getElementById("name").value ||
        document.getElementById("email").value ||
        document.getElementById("phone").value ||
        document.getElementById("query").value ||
        document.getElementById("pincode").value
        === "") {
        alert("No field should empty")
        
    } else {

        const nameRegex = /^[A-Za-z\s]+$/;

        if (!nameRegex.test(Name.value)) {
            alert("Name should contain only letters.");
            event.preventDefault();
            return;
        }

        const emailRegex = /^[a-zA-Z 0-9]{4,}@[a-zA-Z]+\.[a-zA-Z]+$/;

        if (!emailRegex.test(Email.value)) {
            alert("Email must have at least 4 alphabets before @ and a valid domain.");
            event.preventDefault();
            return;
        }

        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(Phone.value)) {
            alert("Phone number must be 10 digits.");
            event.preventDefault();
            return;
        }


        const pincodeRegex = /^\d{6,}$/;
        if (!pincodeRegex.test(Pincode.value)) {
            alert("Pincode must be at least 6 digits.");
            event.preventDefault();
            return;
        }


        const courseRegex = /^[A-Za-z\s]+$/;
        if (!courseRegex.test(Course.value)) {
            alert("Course should contain only letters.");
            event.preventDefault();
            return;
        }


        const queryRegex = /^[A-Za-z\s]+$/;
        if (!queryRegex.test(Query.value)) {
            alert("Query should contain only letters.");
            event.preventDefault();
            return;
        }

        alert("Form Validate")
    }
}




