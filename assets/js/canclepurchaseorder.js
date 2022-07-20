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

function gotologout()
{

    window.location.href ="login.html";
    window.sessionStorage.clear();
    window.localStorage.clear();
          
}
if(window.localStorage.getItem('login_data') != null)
    {
      var data = JSON.parse(window.localStorage.getItem('login_data'));
      var y = document.getElementById("myuserdiv");
     y.querySelector('.text-disabled').innerHTML = data.firstname + ' ' + data.lastname ;
    
    }
var id = window.localStorage.getItem('resturantid');
fetch('http://162.240.56.117:5000/getallorderpurchasesbyrestid/' + id, {
   
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    
  }).then(function(response) {
        return response.json();
      }).then(function(data) {
      //  console.log(data);
       if (data.msg.length == 0) {
        document.getElementById('tablediv').style.display = "none";
        document.getElementById('messagedisplay').innerHTML = "NO DATA FOUND!!.."
       }
    if (data.msg.length > 0) {
     var temp = "";
   data.msg.forEach((itemData, i) => {
   
    if(itemData.del_status == 0)
    {
      
    temp += "<tr>";
    temp += "<td>" + [i+1] + "</td>";
    temp += "<td>" + itemData.bname  + "</td>";
    temp += "<td>" + itemData.purchaseid  + "</td>";
    temp += "<td>" + itemData.item + "</td>";
    temp += "<td>" + itemData.quantity + "</td>";
    // temp += "<td>" + itemData.role_name + "</td>";
    // temp += "<td>" + `<i onclick = "gotoedit('${itemData.id}','${itemData.comments}')" class= "fas fa-edit" ></i>`     + "</td>";
    // temp += "<td>" +  `<i onclick = "gotodelete(${itemData.id})" class="fas fa-window-close">`    + "</td>"
    }
    
   });
  
   document.getElementById('data').innerHTML = temp
   
 }

}).catch(function() {

});
