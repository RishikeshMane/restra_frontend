
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
    var profileImage = $('#profileImage').text(intials);
  });
}
if(window.localStorage.getItem('login_data') != null)
{
  var data = JSON.parse(window.localStorage.getItem('login_data'));
  var y = document.getElementById("myuserdiv");
  y.querySelector('.text-disabled').innerHTML = data.firstname + ' ' + data.lastname ;

}

fetch('http://162.240.56.117:5000/workingtable' , {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(function(response) {
        return response.json();
      }).then(function(data) {
        // console.log(data);
        if (data.Data.length > 0) {
          var temp = "";
          data.Data.forEach((itemData, i) => {
              temp +=`<div style="padding-top: 10px;">
              <div class="card-header">
                        <label>Order No : ${itemData.id}</label>
                        <button style="float: right;background-color: skyblue;
                        border: none;">18/02/2022</button>
            </div>
            <div class="card-body">
              <h5 class="card-title">${itemData.order_name}</h5>
              <p class="card-text">Rs. 200</p>
            </div>
            <div class="card-footer text-muted text-center">
              Table Name : ${itemData.table_name}
            </div>
            </div>`
          });
          document.getElementById('data').innerHTML = temp;
        }
      }).catch(function() {
       
      });