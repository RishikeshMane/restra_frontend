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
window.onbeforeunload = () => {
  localStorage.removeItem(key);
  sessionStorage.removeItem(key);
}

function generateqr()
{
  var rest_id =  window.localStorage.getItem('resturantid')

  const qrcode = new QRCode(document.getElementById('qrcode'), {
   
    text: 'http://kodever.co.in/resturant/pages/product/productgrid.html?restid=' + rest_id ,
    width: 128,
    height: 128,
    colorDark : '#000',
    colorLight : '#fff',
    correctLevel : QRCode.CorrectLevel.H
  });
  $("#qrcode").click(function(e){
    e.preventDefault();
    window.location.href = "http://kodever.co.in/resturant/pages/product/productgrid.html?restid=" + rest_id;    
});
  // document.getElementById('barcode').src = qrcode
}

// function generateqr()
//    {
  
       
//         try {

//         // Options to be given as parameter
//         // in fetch for making requests
//         // other then GET
//         const api = "http://162.240.56.117:5000/generateQR";

//         let options = {
//             method: 'GET',
//             headers: {"Access-Control-Allow-Origin" : "*",
//                 'Content-Type': 'application/json;charset=utf-8'
                
//             },
//             // body: JSON.stringify(data)
//         }

//     // Fake api for making post requests
//         let fetchRes = fetch(
//             api,
//             options);
//         fetchRes.then(res => {
//             return res.json();
//         }).then((data) => {
//             console.log(data);
//              window.localStorage.setItem('qrtoken', data.message);
//             //  window.location.reload()
//             // if(data.message == "Product Added")
//             // {

//             //     window.location.href = "../product/productdetail.html";
//             // }
//         })

//     } catch (e) {
//     console.log(e);
// }     
// }

// var canvas = document.getElementById("tools_sketch");
// var ctx = canvas.getContext("2d");

// 

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
//         window.location.href ="login.html";
        
//       }if(data.message == "login again : TokenExpiredError: jwt expired")
//       {
//         window.location.href ="login.html";
//       }
//       }).catch(function() {
       
//       });
let timer, currSeconds = 0;
  
function resetTimer() {

    /* Hide the timer text */
    
    /* Clear the previous interval */
    clearInterval(timer);

    /* Reset the seconds of the timer */
    currSeconds = 0;

    /* Set a new interval */
    timer = 
        setInterval(startIdleTimer, 300000);
}

// Define the events that
// would reset the timer
window.onload = resetTimer;
window.onmousemove = resetTimer;
window.onmousedown = resetTimer;
window.ontouchstart = resetTimer;
window.onclick = resetTimer;
window.onkeypress = resetTimer;

function startIdleTimer() {
      
    /* Increment the
        timer seconds */
    currSeconds++;

    /* Set the timer text
        to the new value */
    // document.querySelector(".secs")
    //     .textContent = currSeconds;

    /* Display the timer text */
  // alert("logout"+ currSeconds)
  window.location.href="login.html"
  localStorage.clear();
  sessionStorage.clear();
}

var is_login = window.sessionStorage.getItem("is_login");
// console.log(is_login);
      
if(is_login != "true")
{
   window.location.href = "login.html"
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