var islogout  = window.sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer');
// console.log(islogout);

if(window.localStorage.getItem('login_data') != null)
{
  var data = JSON.parse(window.localStorage.getItem('login_data'));
  var y = document.getElementById("mydiv");
  y.querySelector(".text-disabled").innerHTML = data.firstname + ' ' + data.lastname ;
  var x = document.getElementById("mytitle");
  x.querySelector(".db-header-title").innerHTML = "Welcome" + ' ' + data.RestraName;
}

window.onbeforeunload = () => {
  localStorage.removeItem(key);
  sessionStorage.removeItem(key);
}
// var token = window.localStorage.getItem('login_token');

// fetch('http://162.240.56.117:5000/dashboard'+'/'+token , {
//     method: 'GET',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//   }).then(function(response) {
//         return response.json();
//       }).then(function(data) {
//         console.log(data);
//         if(token == null )
//       {
//         window.location.href ="pages/login.html";
        
//       }
//       if(data.message == "login again : TokenExpiredError: jwt expired")
//       {
//         window.location.href ="pages/login.html";
//       }
//       }).catch(function() {
       
//       });
      

function gotologout()
{
    // href="pages/prebuilt-pages/default-login.html"
    // var backlen = history.length;
    // history.go(-backlen);
    // window.location.href = loggedOutPageUrl
//  sessionStorage.removeItem("IsThisFirstTime_Log_From_LiveServer");
 window.location.href ="pages/login.html";
 window.sessionStorage.clear();
 window.localStorage.clear();
//  window.sessionStorage.removeItem('IsThisFirstTime_Log_From_LiveServer');
//  window.localStorage.removeItem('login_token');
    
          
}
window.history.forward();
        function noBack() {
            window.history.forward();
            window.sessionStorage.clear();
            window.localStorage.clear();
        }

      