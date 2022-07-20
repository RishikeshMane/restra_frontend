// jQuery(document).ready(function($) {
//   $('a[href^="#"]').on('click', function(event) {
  
//       var target = $( $(this).attr('href') );
//       target.fadeToggle(100);
  
//   });
//   });

// var userName = document.querySelector('#mobilenum');

// userName.addEventListener('input', restrictNumber);
// function restrictNumber (e) {  
//   var newValue = this.value.replace(new RegExp(/[^\d]/,'ig'), "");
//   this.value = newValue;
// }
  
// window.addEventListener('mouseup',function(event){
//   var pol = document.getElementById('myregForm');
//   if($(event.target).closest('.form-popup').length)
//   {
    
//   }
//  else if(event.target != pol && event.target.parentNode != pol ){
//       pol.style.display = 'none';
//   }
// });  

function openregForm()
{
    document.getElementById("myregForm").style.display = "block";
}

    function registrationForm()
{ 
  const data = {
    "email": document.getElementById('Remail').value,
    "Fname": document.getElementById('flname').value,
    "Lname": document.getElementById('flname').value,
    "restraname": document.getElementById('resturant').value,
    "phone_num": document.getElementById('mobilenum').value,
    "location": document.getElementById('location').value,
    "password": document.getElementById('psw').value
};
console.log(JSON.stringify(data));

try {

    // Options to be given as parameter
    // in fetch for making requests
    // other then GET
    const api = "http://162.240.56.117:5000/register";
    
    let options = {
        method: 'POST',
        headers: {
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
        console.log(data);
        // window.location.replace("pages/success.html");
    })
} catch (e) {
    console.log(e);
}
      
  }
function closeregForm() {
    document.getElementById("myregForm").style.display = "none";
  }

