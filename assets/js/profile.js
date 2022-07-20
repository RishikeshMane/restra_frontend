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
window.history.forward();
function noBack() {
window.history.forward();
window.sessionStorage.clear();
window.localStorage.clear();
}

var data = JSON.parse(window.localStorage.getItem('userdata'));
if (data.length > 0) {
  var temp = "";
  data.forEach((itemData) => {
    var firstName = itemData.Fname;
    var lastName = itemData.Lname;
    var intials = itemData.Fname.charAt(0) + itemData.Lname.charAt(0);
    // console.log(intials);
    var profileImage = $('#profileImage1').text(intials);
  });
}

if(window.localStorage.getItem('login_data') != null)
{
  var data = JSON.parse(window.localStorage.getItem('login_data'));
  var y = document.getElementById("myprofilediv");
  y.querySelector('.text-disabled').innerHTML = data.firstname + ' ' + data.lastname ;

}
// $("#profileImage").click(function(e) {
//   $("#image").click();
// });

// function fasterPreview( uploader ) {
//   if ( uploader.files && uploader.files[0] ){
//         $('#profileImage').attr('src', 
//            window.URL.createObjectURL(uploader.files[0]) );
//   }
 
// }

// $("#image").change(function(){
//   fasterPreview( this );
// });
// document.getElementById("image").addEventListener('change', function() {
//   var file = this.files[0];
//   var reader = new FileReader();
//   reader.readAsDataURL(file);
//   console.log(file);
//   var filePath = document.getElementById("image").value;
//   var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
//   if(!allowedExtensions.exec(filePath)){
//       alert('Please upload file having extensions .jpeg/.jpg/.png/.gif only.');
   
     
//       window.location.reload()
//   }else{
    
//   }
//   var maxSizeKB = 70; //Size in KB
//   var maxSize = maxSizeKB * 1024; //File size is returned in Bytes
//   if (this.files[0].size > maxSize) {
//     $(this).val("");
//     alert("Max size exceeded");
//     window.location.reload()
//   }
//   var user_id = window.localStorage.getItem('userid')   ;
//   const fd = new FormData();
//   fd.append("Image", file);
// try {

//   const api = "http://162.240.56.117:5000/uploadImage" + "/" + user_id;
  
//   let options = {
//       method: 'POST',
//       headers: {"Access-Control-Allow-Origin" : "*",
//                 'Accept': 'application/json',
//       },
//       body: fd,
     
//   }
//   // Fake api for making post requests
//   let fetchRes = fetch(
//       api,
//       options);
//   fetchRes.then(res => {
//       return res.json()
//   }).then((data) => {
//       console.log(data);
//       window.location.reload();
//   })
// } catch (e) {
//   console.log(e);
// }     
// } );

// window.onload = function() {
//   var profileImage = localStorage.getItem("profileImageData");
//   if (profileImage !== null) {
//       // document.getElementyId("profileImage").innerHTML = "<img src='" + profileImage + "'>";
//       document.getElementById("profileImage").src = profileImage
//   }
// }




jQuery("form").submit(function(e){
  e.preventDefault();  
  //or
  //return false;
  });



//   var profileImage = JSON.parse(localStorage.getItem("userdata"));
//   if (profileImage.length > 0) {
//     var temp = "";
//     profileImage.forEach((itemData) => {

//   if (itemData.picture == null ) {
//     var outputImg = document.getElementById('profileImage');
//     outputImg.src = "https://via.placeholder.com/270x270"
//   }
// });
// }
 

  // if(data.userDetail.picture == null)
  // {
  //   var outputImg = document.getElementById('profileImage');
  //   outputImg.src = "https://via.placeholder.com/270x270"
    
  // }
  // var y = document.getElementById("myprofilediv");
  // y.querySelector(".text-disabled").innerHTML = data.userDetail.Fname + ' ' + data.userDetail.Lname ;

   var token = window.localStorage.getItem('userid');
   
    fetch('http://162.240.56.117:5000/users' + '/' + token , {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }).then(function(response) {
            return response.json();
          }).then(function(data) {
            // console.log(data);
 
            window.localStorage.setItem('userdata', JSON.stringify(data))
            
            for (var i = 0; i < data.length; i++) {
            }
            if (data.length > 0) {
                var temp = "";
                data.forEach((itemData) => {
                 
                  var firstName = itemData.Fname;
                  var lastName = itemData.Lname;
                  var intials = itemData.Fname.charAt(0) + itemData.Lname.charAt(0);
                  // console.log(intials);
                  var profileImage = $('#profileImage').text(intials);
                  // var outputImg1 = document.getElementById('profileImage1');
                  // outputImg1.src = 'http://162.240.56.117:5000/product/'+ itemData.picture;
                  // var outputImg = document.getElementById('profileImage');
                  // outputImg.src = 'http://162.240.56.117:5000/product/'+ itemData.picture;
                  var x = document.getElementById("myDIV");
                  x.querySelector(".ms-profile-username").innerHTML = itemData.Fname + ' ' + itemData.Lname ;
                  x.querySelector(".ms-profile-role").innerHTML = itemData.role_name;
                  temp += "<tr>";
                  temp +=  `<th scope="row">Full Name</th>`
                  temp += "<td>" + itemData.Fname + ' ' + itemData.Lname + "</td>"; 
                  temp += "</tr>"
                  temp += `<th scope="row">Email</th>`
                  temp += "<td>" + itemData.email + "</td>";
                  temp += "</tr>"
                  // temp += `<th scope="row" id="locate">location</th>`
                  // temp += "<td>" + itemData.location + "</td>";
                  temp += "</tr>"
                  temp += `<th scope="row">Mobile Number</th>`
                  temp += "<td>" + itemData.phone_num + "</td>";
                  temp += "</tr>"
                  temp += `<th scope="row">Resturant Name</th>`
                  temp += "<td>" + itemData.restraname + "</td>";
                  temp += "</tr>"
                  temp += `<th scope="row">Role</th>`
                  temp += "<td>" + itemData.role_name + "</td>";
                  temp += "</tr>"
                  temp += `<th scope="row">Edit Your Profile</th>`
                  temp += "<td>" + `<i onclick = "gotoedit(${itemData.userid},'${itemData.email}', '${itemData.phone_num}')" class= "fas fa-edit" ></i>`     + "</td>";
                });
                document.getElementById('data').innerHTML = temp;
               
              }
          }).catch(function() {
           
          });
    
    
          function gotoedit(userid, email, phone_num)
          {
            window.localStorage.setItem('userid', userid)
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
            var  user_id = window.localStorage.getItem('userid');
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
            var  user_id = window.localStorage.getItem('userid');
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
                window.location.href = "login.html";
                window.history.forward();
                window.sessionStorage.clear();
                window.localStorage.clear();
              }if(data.message == "mobile wrong otp: check again")
            {
              document.getElementById("messagemobileverify").innerHTML = data.message;
            }
          })
    
          } catch (e) {
          // console.log(e);
          }
          }
          }
          function mobileotp()
          {  
              var user_id = window.localStorage.getItem('userid')   ;
            
              const data = {
                  "phone_num":  document.getElementById('mobilenum').value,
              };
          // console.log(JSON.stringify(data));
          
          try {
          
              // Options to be given as parameter
              // in fetch for making requests
              // other then GET
              const api = "http://162.240.56.117:5000/verification/mobileOtpVerification" + "/" + user_id;
              
              let options = {
                  method: 'POST',
                  headers: {"Access-Control-Allow-Origin" : "*",
                      'Content-Type': 'application/json;charset=utf-8',
                      "Authorization": token
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
              // console.log(e);
          }     
          
          }
    
     function mobileresendotp(event)
    {  
      event.preventDefault();
       var user_id = window.localStorage.getItem('userid')   ;
         const data = {
                  "phone_num":  document.getElementById('mobilenum').value,
              };
          // console.log(JSON.stringify(data));
          
          try {
          
              // Options to be given as parameter
              // in fetch for making requests
              // other then GET
              const api = "http://162.240.56.117:5000/verification/mobileOtpVerification" + "/" + user_id;
              
              let options = {
                  method: 'POST',
                  headers: {"Access-Control-Allow-Origin" : "*",
                      'Content-Type': 'application/json;charset=utf-8',
                      "Authorization": token
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
        var user_id = window.localStorage.getItem('userid')   ;
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
                  "Authorization": token
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
        var user_id = window.localStorage.getItem('userid')   ;
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
                  "Authorization": token
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
 function closeemailForm() {
   document.getElementById("myemailForm").style.display = "none";
}
    
function closemobileForm() {
    document.getElementById("mymobileForm").style.display = "none";
  }
            
  var userdata = JSON.parse(window.localStorage.getItem('userdata'));

  if (userdata.length > 0) {
    userdata.forEach((itemData, i) => {
      // console.log(itemData.access_id);
      if(itemData.access_id != 1 && itemData.access_id != 0)
      {
        document.getElementById('subdetail').style.display = "none"
      }
    var phoneno = window.localStorage.getItem('userid');
    fetch('http://162.240.56.117:5000/gettranscompletedetailsadminsort'+'/'+phoneno , {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }).then(function(response) {
              return response.json();
            }).then(function(data) {
              // console.log(data);
              for (var i = 0; i < data.Data.length; i++) {
              }
              if (data.Data.length > 0) {
               
                  var temp = "";
                  data.Data.forEach((itemData) => {
                  
                    const nr = itemData.amount;
                    const result = Math.floor(nr / 100)
                    temp += "<tr>";
                    temp +=  `<th scope="row"> Name</th>`
                    temp += "<td>" + itemData.name +"</td>"; 
                    temp += "</tr>"
                    temp += `<th scope="row">Email</th>`
                    temp += "<td>" + itemData.email + "</td>";
                    temp += "</tr>"
                    temp += `<th scope="row">Mobile Number</th>`
                    temp += "<td>" + itemData.phoneno + "</td>";
                    temp += "</tr>"
                    temp += `<th scope="row" id="locate">Package Name</th>`
                    temp += "<td>" + itemData.nameofproduct + "</td>";
                    temp += "</tr>"
                    temp += `<th scope="row">Receipt No</th>`
                    temp += "<td>" + itemData.receiptno + "</td>";
                    temp += "</tr>"
                    temp += `<th scope="row">Amount</th>`
                    temp += "<td>" + `₹` + result + "</td>";
                    temp += "</tr>"
                    temp += "</tr>"
                  
                    // temp +="</br>"
                  });
                  var date = JSON.parse(window.localStorage.getItem("dates"));
                  date.forEach((itemData) => {
                  temp += `<th scope="row">Start Date</th>`
                  temp += "<td>" + itemData.startdate + "</td>";
                  temp += "</tr>"
                  temp += "</tr>"
                  temp += `<th scope="row">End Date</th>`
                  temp += "<td>" + itemData.enddate + "</td>";
                  temp += "</tr>"
                  });
                  document.getElementById('subscription_data').innerHTML = temp;
               
                }
            }).catch(function() {
             
            }); 
    });
  }
  var phoneno = window.localStorage.getItem('userid');
  fetch('http://162.240.56.117:5000/user_metadata'+'/'+phoneno , {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }).then(function(response) {
              return response.json();
            }).then(function(data) {
              // console.log(data);
              window.localStorage.setItem("dates", JSON.stringify(data.Data));
            }).catch(function() {
             
            }); 
 
           

//           var token = window.localStorage.getItem('login_token');

//           fetch('http://162.240.56.117:5000/dashboard'+'/'+token , {
//               method: 'GET',
//               headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json',
//               },
//             }).then(function(response) {
//                   return response.json();
//                 }).then(function(data) {
//                   console.log(data);
//                   if(token == null )
//                 {
//                   window.location.href ="login.html";
                  
//                 }if(data.message == "login again : TokenExpiredError: jwt expired")
//                 {
//                   window.location.href ="login.html";
//                 }
//                 }).catch(function() {
                 
//                 });
//           function gotologout()
//           {
          
//               window.location.href ="login.html";
//               window.sessionStorage.removeItem('IsThisFirstTime_Log_From_LiveServer');
//               window.localStorage.removeItem('login_token');
                    
//           }
//      window.history.forward();
//      function noBack() {
//      window.history.forward();
//      window.sessionStorage.clear();
//      window.localStorage.clear();
// }          

// function uploadimage()
// {  

 

function create_UUID(){
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (dt + Math.random()*16)%16 | 0;
      dt = Math.floor(dt/16);
      return (c=='x' ? r :(r&0x3|0x8)).toString(16);
     
  });
  window.localStorage.setItem('uuid', uuid)
  return uuid;

}
