
    function checkPasswordMatch() {
        var password = $("#psw").val();
        var confirmPassword = $("#confirm").val();
        if (password != confirmPassword)
        {
            $("#CheckPasswordMatch").html("Passwords does not match!");
            setTimeout(function(){
                $('#CheckPasswordMatch').remove();
              }, 7000);
        }
        else
            $("#CheckPasswordMatch").html("Passwords match.");
            setTimeout(function(){
                $('#CheckPasswordMatch').remove();
              }, 7000);

    }

    $(document).ready(function () {
       $("#confirm").keyup(checkPasswordMatch);
    });
   

jQuery("form").submit(function(e){
    e.preventDefault();  
    //or
    //return false;
  });

  const formdata = document.getElementById('form');
// form.addEventListener("change", () => {
//     document.getElementById('submit').disabled = !form.checkValidity()
   
// });

function registrationForm()
{  
    //  event.preventDefault();
     jQuery.support.cors = true;
    //  var fullName = document.getElementById('flname').value.split(' '),
    //  firstName = fullName[0],
    //  lastName = fullName[fullName.length - 1];

    if( formdata.checkValidity() == true)
     {
     const data = {
        "email": document.getElementById('Remail').value,
        "Fname": document.getElementById('fname').value,
        "Lname": document.getElementById('lname').value,
        "restraname": document.getElementById('resturant').value,
        "phone_num": document.getElementById('mobilenum').value,
        // "location": document.getElementById('location').value,
        // "password": document.getElementById('psw').value
        };
        // console.log(JSON.stringify(data));
        window.localStorage.setItem("email", data.email);
try {

    // Options to be given as parameter
    // in fetch for making requests
    // other then GET
    const api = "http://162.240.56.117:5000/register";
    
    let options = {
        method: 'POST',
        headers: {"Access-Control-Allow-Origin" : "*",
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    }

    // Fake api for making post requests
    let fetchRes = fetch(
        api,
        options);
    fetchRes.then(res => {
        return res.json();
    }).then((data) => {
        // console.log(data);
     
        var message = data.message 
        if(message == "Registration sucessfull")
        {
        //     $('#flname').prop('required',false)
        // var x = document.getElementById("snackbar");
        // x.className = "show";  
        // setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
          window.location.href="../emailverify.html"
        }
        if(data.message == "The E-mail already in use")
        {
            $('#flname').prop('required',false)
            document.getElementById("messageverify").innerHTML = "The E-mail already in use";
            // setTimeout(function(){ 
            //     document.getElementById("messageverify").innerHTML = "";
            // }, 3000);
        }
        if(data.message == "The Phone number is already used")
        {
            $('#flname').prop('required',false)
            document.getElementById("messageverify").innerHTML = "The Phone number is already used";
            // setTimeout(function(){ 
            //     document.getElementById("messageverify").innerHTML = "";
            // }, 3000);
        }
        else
        {
            return;
        }
       
    })
   
} catch (e) {
    // console.log(e);
}     

$("#form").trigger('reset');
// document.getElementById("form").reset();
  }
//   document.getElementById("form").reset();

}




  