var data = JSON.parse(window.localStorage.getItem('userdata'));
if (data.length > 0) {
  var temp = "";
  data.forEach((itemData) => {
    var firstName = itemData.Fname;
    var lastName = itemData.Lname;
    var intials = itemData.Fname.charAt(0) + itemData.Lname.charAt(0);
    console.log(intials);
    var profileImage = $('#profileImage').text(intials);
  });
}
if(window.localStorage.getItem('login_data') != null)
{
  var data = JSON.parse(window.localStorage.getItem('login_data'));
  var y = document.getElementById("myuserdiv");
  y.querySelector('.text-disabled').innerHTML = data.firstname + ' ' + data.lastname ;

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
//         window.location.href ="login.html";
        
//       }if(data.message == "login again : TokenExpiredError: jwt expired")
//       {
//         window.location.href ="login.html";
//       }
//       }).catch(function() {
       
//       });



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
    localStorage.clear();
}
window.history.forward();
function noBack() {
window.history.forward();
window.sessionStorage.clear();
window.localStorage.clear();
}    

var orderdata =JSON.parse( window.localStorage.getItem('orderdata'));
// console.log(orderdata);
for (var i = 1; i < orderdata.length; i++) {
      
}
if (orderdata.length > 0) {
    var temp = "";
    orderdata.forEach((itemData, i) => {
        temp +=`<div class="card" style="width: 12rem; border-radius: 1.25rem;margin : 10px;margin-left : 25px;   box-shadow: 3px 4px 9px grey;">
        <div class="card-body">
        <label style="color : #FF901F">Order Name:</label>
        <span class="card-title" style="font-weight: bold;font-size: 15px">${itemData.OrderName}</span>
        <br>
        <label style="color : #FF901F"> Description: </label> 
        <span class="card-text" style="font-weight: bold;font-size: 15px">${itemData.Type}</span>
        <br>
        <label style="color : #FF901F"> Quantity: </label> 
        <span class="card-text" style="font-weight: bold;font-size: 15px">${itemData.quantity}</span>
        <br>
        <button onclick="ordertaken(${itemData.id},'${itemData.OrderName}',${itemData.price},'${itemData.Type}','${itemData.quantity}')" style="color: white; background: lightslategray;border: none;
        margin: 1px;border-radius: 22px;">Submit</button>
        <i onclick="gotodelete(${itemData.id})"  class=" fas fa-trash-alt " style="font-size:18px; color : red; float : right " ></i>
    </div>
    </div>`
    });
    document.getElementById('data').innerHTML = temp;
}


function ordertaken(id, orderName, price, Type, quantity)
{

//   console.log(id, orderName, price, Type, quantity);
    var dtToday = new Date();
    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();

    var minDate= month + '-' + day + '-' + year;
    // console.log(minDate);
         const data = {
          "tablename":window.localStorage.getItem('tablename'),
          "ordername": orderName,
          "description": Type,
          "quantity":quantity,
          "price" : price,
          "status":"active",
          "restid": window.localStorage.getItem('resturantid'),
          "date": minDate
        };
            // console.log(JSON.stringify(data));
    try {   
        // Options to be given as parameter
        // in fetch for making requests
        // other then GET
        const api = "http://162.240.56.117:5000/workingtable" ;
        
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
            if(data.msg == "success in Insert")
            {
             window.location.href = "runningorder.html"
            }
        })
       
    } catch (e) {
        // console.log(e);
    } 
    
 }  

 function gotodelete(id)
 {
     fetch('http://162.240.56.117:5000/workingtable/'+ id, {
     method: 'DELETE',
     headers: {
     Accept: 'application/json',
     'Content-Type': 'application/json',
     },
 
     }).then(function(response) {
     return response.json();
     }).then(function(data) {
     // console.log(data);
     if(data.msg == "success in Delete")
     {
       window.location.reload();
     }
 
     }).catch(function() {
 
     });
 }

 
document.getElementById('ordername').innerHTML = " " + window.localStorage.getItem('tablename')+ " " + "Table";
   