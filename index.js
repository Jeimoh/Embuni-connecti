let username;
let DOB;
let Tel;
let Email;
let firstName;
let lastName;
let Terms = document.getElementById("TermsCheckBox")

//How to collect user input
function Submit(){
    if(Terms.checked == true)//The same Idea applies in the radio buttons using if else statements
    {
        username = "James Ngatia"
        firstName = username.slice(username.charAt /*Character at*/ (0),username.indexOf(" "))
        lastName = username.slice(username.indexOf(" "))//This takes a slice of the username and makes it a string. We do this by username.slice(1st position, last position + 1. The use of index is because we dont know the users input. It takes then that from the space onwards is the last name) 
        DOB = document.getElementById("DOB").value
        Tel = document.getElementById("TEL").value
        Email = document.getElementById("mail").value
        console.log("First Name is :",firstName, "\nLast Name is :", lastName ,"")

    }
    else{
        alert("Please Accept to the Terms and Services")

    }
   
}

//converting a string into a number etc
Tel = Number(Tel)
//
/*
James Ngatia
0765243286
example@gmail.com
*/