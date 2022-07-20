
var is_login = window.sessionStorage.getItem("is_login");
// console.log(is_login);
      
if(is_login != "true")
{
   window.location.href = "login.html"
}

window.onbeforeunload = () => {
  localStorage.removeItem(key);
  sessionStorage.removeItem(key);
}          
    
function gotologout()
{
   window.location.href ="login.html";
   window.sessionStorage.clear();
   window.localStorage.clear();
}
function gotouserlogout()
{
  window.location.href ="login.html";
  window.sessionStorage.clear();
  window.localStorage.clear();
       
}
 window.history.forward();
 function noBack() {
 window.history.forward();
 window.sessionStorage.clear();
 window.localStorage.clear();
}       
jQuery("form").submit(function(e){
e.preventDefault();  
//or
//return false;
});

var login_data = JSON.parse(window.localStorage.getItem('login_data'));
var admin = login_data.access_id;
// console.log(admin);
if(admin == 1 ||  admin == 0)
{
  $('#role option[value=1]').hide()
  // $('#role option[value=2]').hide()
}
if(admin == 2)
{
  $('#role option[value=1]').hide()
  $('#role option[value=2]').hide() 
}
if(admin == 3 && admin == 4 && admin == 5)
{
  $('#role option[value=1]').hide()
  $('#role option[value=2]').hide() 
}

var data = JSON.parse(window.localStorage.getItem('userdata'));
if (data.length > 0) {
  var temp = "";
  data.forEach((itemData) => {
    var firstName = itemData.Fname;
    var lastName = itemData.Lname;
    var intials = itemData.Fname.charAt(0) + itemData.Lname.charAt(0);
    // console.log(intials);
    var profileImage = $('#profileImage').text(intials);
  });
}
if(window.localStorage.getItem('login_data') != null)
{
  var data = JSON.parse(window.localStorage.getItem('login_data'));
  var y = document.getElementById("myuserdiv");
  y.querySelector('.text-disabled').innerHTML = data.firstname + ' ' + data.lastname ;

}

const formdata = document.getElementById('form');

function registrationForm()
{  
 jQuery.support.cors = true;

    if( formdata.checkValidity() == true)
    {
    
      const data = {
          "email": document.getElementById('email').value,
          "Fname": document.getElementById('fname').value,
          "Lname": document.getElementById('lname').value,
          "access_id" : document.getElementById('role').value,
          "phone_num": document.getElementById('mobilenum').value,
          // "admin":admin,
          "restraname" : window.localStorage.getItem('restraname')
          };
        // console.log(JSON.stringify(data));
      
        try {

        // Options to be given as parameter
        // in fetch for making requests
        // other then GET
        const api = "http://162.240.56.117:5000/adduser";

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
            if(data.Message == "New User Registration")
            {
              document.getElementById("messageverify").innerHTML = "User added successfully!";
              window.location.href = "userlist.html";
            }
            if(message == "The E-mail already in use")
            {
                document.getElementById("messageverify").innerHTML = "The E-mail already in use";
            }
            if(message == "The Phone number is already used")
            {
                document.getElementById("messageverify").innerHTML = "The Phone number is already used";
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
}
}


list=[];
var restraname = window.localStorage.getItem('restraname')
fetch('http://162.240.56.117:5000/users/getalluser/' + restraname, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(function(response) {
        return response.json();
      }).then(function(data) {
        // console.log(data);
        for (var i = 0; i < data.length; i++) {
        }
        if(data.length == 0)
        {
          document.getElementById('tablediv').style.display = "none";
          document.getElementById('messagedisplay').innerHTML = "USER NOT REGISTERD!!.."
        }
        if (data.length > 0) {
          document.getElementById('messagedisplay').innerHTML = ""
            var temp = "";
            data.forEach((itemData,i) => {
              temp += "<tr>";
              temp += "<td>" + [i+1] + "</td>";
              temp += "<td>" + itemData.Fname + ' ' + itemData.Lname + "</td>";
              temp += "<td>" + itemData.email + "</td>";
              temp += "<td>" + itemData.phone_num + "</td>";
              temp += "<td>" + itemData.role_name + "</td>";
              temp += "<td>" + `<i onclick = "gotoedit(${itemData.userid},'${itemData.email}', '${itemData.phone_num}')" class= "fas fa-edit" ></i>`     + "</td>";
              temp += "<td>" +  `<i onclick = "gotodelete(${itemData.userid})" class="fas fa-trash-alt">`    + "</td>"
             
            });
            document.getElementById('data').innerHTML = temp;
        }
      }).catch(function() {
       
      });

    

      function gotoedit(userid, email, phone_num)
      {
        window.localStorage.setItem('add_userid', userid)
        document.getElementById("choosefield").style.display = "block";
        document.getElementById('email').setAttribute('value', email);
        document.getElementById('mobilenum').setAttribute('value', phone_num);
      }
      function emailForm()
      {
        document.getElementById("myemailForm").style.display = "block";
      }

      function mobileForm()
      {
        document.getElementById("mymobileForm").style.display = "block";
      }
     
      window.addEventListener('mouseup',function(event){
      var pol = document.getElementById('choosefield');
      if($(event.target).closest('.form-popup').length)
      {
                
      }
     else if(event.target != pol && event.target.parentNode != pol ){
        pol.style.display = 'none';
     }
     });  

   const upemailFormdata = document.getElementById('upemailForm');
      function updateemailForm()
      {
        var  user_id = window.localStorage.getItem('add_userid');
        var email_token = window.localStorage.getItem('emailtoken');
        // console.log(email_token);
        if( upemailFormdata.checkValidity() == true)
        {
        const data = {
          "email": document.getElementById('email').value,
          "emailVerificationToken" : email_token,
          "emailOtp" : document.getElementById('email_otp').value,
          };
          // console.log(JSON.stringify(data));
      try {
      
      // Options to be given as parameter
      // in fetch for making requests
      // other then GET
      const api = 'http://162.240.56.117:5000/users/emailUpdate'+ '/'+ user_id 
      
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
          if(data.message == 'email wrong otp: check again')
              {
                document.getElementById("messageverify").innerHTML = data.message;
              } if(data.message == "profile updated")
              {
                window.location.reload();
              }
             
      })
      
      } catch (e) {
      // console.log(e);
      }
    }
}

const upmobileFormdata = document.getElementById('upmobileForm');
      function updatemobileForm()
      {
        var  user_id = window.localStorage.getItem('add_userid');
        var mobile_token = window.localStorage.getItem('mobiletoken');
        // console.log(mobile_token);
        if( upmobileFormdata.checkValidity() == true)
        {
        const data = {
          "phone_num": document.getElementById('mobilenum').value,
          "mobileVerificationToken": mobile_token,
          "mobileOtp" : document.getElementById('mobile_otp').value
          };
          // console.log(JSON.stringify(data));
      try {

      // Options to be given as parameter
      // in fetch for making requests
      // other then GET
      const api = 'http://162.240.56.117:5000/users/mobileUpdate'+ '/'+ user_id 

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
          if(data.message == "profile updated")
          {
            window.location.reload();
          }
       if(data.message == "mobile wrong otp: check again")
        {
          document.getElementById("messagemobileverify").innerHTML = data.message;
        }
      })

      } catch (e) {
      // console.log(e);
      }
      }
      }


      function closeemailForm() {
        document.getElementById("myemailForm").style.display = "none";
      }

      function closemobileForm() {
        document.getElementById("mymobileForm").style.display = "none";
      }

      function gotodelete(userid)
      {
          document.getElementById('id01').style.display='block'
          // console.log(userid);
         window.localStorage.setItem('deleteuserid', userid)
      
      }
      function gotoproductdelete()
      {
        var userid = window.localStorage.getItem('deleteuserid');
        fetch('http://162.240.56.117:5000/users'+'/'+userid , {
        method: 'DELETE',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        },
        }).then(function(response) {
        return response.json();
        }).then(function(data) {
        // console.log(data);
        if(data.message == "user deleted")
        {
            window.location.reload();
        }
        
        }).catch(function() {
        
        });
      }
      var modal = document.getElementById('id01');
      
     
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }

      function mobileotp()
      {  
      
          var user_id = window.localStorage.getItem('add_userid')   ;
        
          const data = {
              "phone_num":  document.getElementById('mobilenum').value,
          };
    
      
      try {
      
        
          const api = "http://162.240.56.117:5000/verification/mobileOtpVerification" + "/" + user_id;
          
          let options = {
              method: 'POST',
              headers: {"Access-Control-Allow-Origin" : "*",
                  'Content-Type': 'application/json;charset=utf-8',
                 
              },
              body: JSON.stringify(data)
          }
      
        
          let fetchRes = fetch(
              api,
              options);
          fetchRes.then(res => {
              return res.json();
          }).then((data) => {
             
              window.localStorage.setItem('mobiletoken', data.mobileVerificationToken )
              if(data.message == "OTP generated")
              {
                  document.getElementById("messagemobileverify").innerHTML = "Code send to your mobile";
                  document.getElementById('verifymobile').style.display = "block";
                  // document.getElementById('upmobilebtn').style.display = "initial";
                  document.getElementById('phonebutton').style.display = "none";
                  document.getElementById('upmobilebtn').style.display = "initial"
              }
              if(data.message == "Phone number is already in used")
              {
                document.getElementById("messagemobileverify").innerHTML = "Phone number is already in used";
                document.getElementById('upmobilebtn').style.display = "none";
                document.getElementById('phonebutton').style.display = "initial";
              }
              else{
                document.getElementById("messagemobileverify").innerHTML = data.message;
              }
          })
      } catch (e) {
         
      }     
      
      }

      function mobileresendotp(event)
      {  
        event.preventDefault();
          var user_id = window.localStorage.getItem('add_userid')   ;
        
          const data = {
              "phone_num":  document.getElementById('mobilenum').value,
          };
     
      
      try {
      
        
          const api = "http://162.240.56.117:5000/verification/mobileOtpVerification" + "/" + user_id;
          
          let options = {
              method: 'POST',
              headers: {"Access-Control-Allow-Origin" : "*",
                  'Content-Type': 'application/json;charset=utf-8',
                
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
              window.localStorage.setItem('mobiletoken', data.mobileVerificationToken )
              if(data.message == "OTP generated")
              {
                  document.getElementById("messagemobileverify").innerHTML = "Code send to your mobile";
                  document.getElementById('verifymobile').style.display = "block";
              }
              if(data.message == "Phone number is already in used")
              {
                document.getElementById("messagemobileverify").innerHTML = "Phone number is already in used";
              }
              else{
                document.getElementById("messagemobileverify").innerHTML = data.message;
              }
          })
      } catch (e) {
          // console.log(e);
      }     
      
      }

 function emailotp()
 {

    var user_id = window.localStorage.getItem('add_userid')   ;
      const data = {
          "email": document.getElementById('email').value,
      };
    // console.log(JSON.stringify(data));

    try {
      const api = "http://162.240.56.117:5000/verification/emailVerification" + "/" + user_id;
      
      let options = {
          method: 'POST',
          headers: {"Access-Control-Allow-Origin" : "*",
              'Content-Type': 'application/json;charset=utf-8',
              // "Authorization": token
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
          window.localStorage.setItem('emailtoken', data.emailVerification )
          if(data.message == "Verification send")
          {
              document.getElementById("messageverify").innerHTML = "Code send to your email";
              document.getElementById('verifyemail').style.display = "block"; 
              document.getElementById('upemailbtn').style.display = "initial";
              document.getElementById('emailbutton').style.display = "none";
          }
          else
          {
            document.getElementById("messageverify").innerHTML = data.message;
            document.getElementById('emailbutton').style.display = "initial";
            document.getElementById('upemailbtn').style.display = "none";
          }
      })
    } catch (e) {
      // console.log(e);
    }     

 }

 function emailresendotp(event)
 {
  event.preventDefault();
    var user_id = window.localStorage.getItem('add_userid')   ;
      const data = {
          "email": document.getElementById('email').value,
      };
    // console.log(JSON.stringify(data));

    try {
      const api = "http://162.240.56.117:5000/verification/emailVerification" + "/" + user_id;
      
      let options = {
          method: 'POST',
          headers: {"Access-Control-Allow-Origin" : "*",
              'Content-Type': 'application/json;charset=utf-8',
              // "Authorization": token
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
          window.localStorage.setItem('emailtoken', data.emailVerification )
          if(data.message == "Verification send")
          {
              document.getElementById("messageverify").innerHTML = "Code send to your email";
              document.getElementById('verifyemail').style.display = "block"; 
          }
          else
          {
            document.getElementById("messageverify").innerHTML = data.message;
          }
      })
    } catch (e) {
      // console.log(e);
    }     

 }



//  var token = window.localStorage.getItem('login_token');

//  fetch('http://162.240.56.117:5000/dashboard'+'/'+token , {
//      method: 'GET',
//      headers: {
//        Accept: 'application/json',
//        'Content-Type': 'application/json',
//      },
//    }).then(function(response) {
//          return response.json();
//        }).then(function(data) {
//          console.log(data);
//          if(token == null )
//        {
//          window.location.href ="login.html";
         
//        }if(data.message == "login again : TokenExpiredError: jwt expired")
//        {
//          window.location.href ="login.html";
//        }
//        }).catch(function() {
        
//   });

  
//  function gotologout()
//  {
 
//      window.location.href ="login.html";
//       window.sessionStorage.removeItem('IsThisFirstTime_Log_From_LiveServer');
//       window.localStorage.removeItem('login_token');
           
//  }
//  window.history.forward();
//         function noBack() {
//             window.history.forward();
//             window.sessionStorage.clear();
//             window.localStorage.clear();
//         }

// function gotouserlogout()
// {
//   window.location.href ="login.html";
//   window.sessionStorage.removeItem('IsThisFirstTime_Log_From_LiveServer');
//   window.localStorage.removeItem('login_token');
       
// }


