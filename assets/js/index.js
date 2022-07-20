
// var hours = 1; // to clear the localStorage after 1 hour
// // (if someone want to clear after 8hrs simply change hours=8)
// var now = new Date().getTime();
// var setupTime = localStorage.getItem('setupTime');
// if (setupTime == null) {
// localStorage.setItem('setupTime', now)
// } else {
// if(now-setupTime > hours*60*60*1000) {
// localStorage.clear();
// sessionStorage.clear();
// // localStorage.setItem('setupTime', now);
// }
// }


var is_login = window.sessionStorage.getItem("is_login");
// console.log(is_login);

 if(is_login != "true")
 {
   window.location.href = "pages/login.html"
 }

 window.onbeforeunload = () => {
  localStorage.removeItem(key);
  sessionStorage.removeItem(key);
}
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
        if(data.length == 0)
        {
          window.location.href = "pages/login.html"
          window.sessionStorage.clear();
          window.localStorage.clear();
        }
        window.localStorage.setItem('userdata', JSON.stringify(data));
      });

var data = JSON.parse(window.localStorage.getItem('userid'))
var userid = data
 fetch('http://162.240.56.117:5000/getrestaurant/' + userid , {
     method: 'GET',
     headers: {
       Accept: 'application/json',
       'Content-Type': 'application/json',
     },
   }).then(function(response) {
         return response.json();
       }).then(function(data) {
        //  console.log(data);
         for (var i = 0; i < data.length; i++) {
        }
        if (data.Data.length > 0) {
            data.Data.forEach((itemData) => {
                window.localStorage.setItem('resturantid', itemData.Restaurant_Id);
            });
        }
        
       }).catch(function() {
        
       });

window.onload = function() {
        if(!window.location.hash) {
          window.location = window.location + '#loaded';
          window.location.reload();
        }
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

if(window.localStorage.getItem('accessid') == 1 || (window.localStorage.getItem('accessid') == 0 ))
{
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

const data1 = {
  "user_id":window.localStorage.getItem('userid'),
  "rest_id": window.localStorage.getItem('resturantid')
}
// console.log(JSON.stringify(data1));

try {

// Options to be given as parameter
// in fetch for making requests
// other then GET
const api = "http://162.240.56.117:5000/check_subs_status";

let options = {
 method: 'POST',
 headers: {"Access-Control-Allow-Origin" : "*",
     'Content-Type': 'application/json;charset=utf-8',
     
 },
 body: JSON.stringify(data1)
}

// Fake api for making post requests
let fetchRes = fetch(
 api,
 options);
fetchRes.then(res => {
 return res.json();
}).then((data) => {
//  console.log(data);
 var messageverify =  data.Message;
//  console.log(messageverify);
 
 if(messageverify == "valid")
  {
      //  window.location.href = "index.html"
 } 
  
 if(messageverify == "Subscription not Purchased" || messageverify == "Renew Today")
  {
      
       window.location.href = "subscription.html"
 } 
 if(messageverify == "Expired")
  {
      
       window.location.href = "subscription.html"
 } 


})

} catch (e) {
// console.log(e);
}     
}
window.history.forward();
        function noBack() {
            window.history.forward();
            window.sessionStorage.clear();
            window.localStorage.clear();
        }