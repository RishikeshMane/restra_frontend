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
       if(data.msg.length == 0)
       {
         document.getElementById('tablediv').style.display = "none";
         document.getElementById('messagedisplay').innerHTML = "NO DATA FOUND!!.."
       }
    if (data.msg.length > 0) {
     var temp = "";
   data.msg.forEach((itemData, i) => {
    document.getElementById('messagedisplay').innerHTML = "";
    if(itemData.del_status == null)
    {
      
    temp += "<tr>";
    temp += "<td>" + [i+1] + "</td>";
    temp += "<td>" + itemData.bname  + "</td>";
    temp += "<td>" + itemData.purchaseid  + "</td>";
    temp += "<td>" + itemData.item + "</td>";
    temp += "<td>" + itemData.quantity + "</td>";
    // temp += "<td>" + itemData.role_name + "</td>";
    temp += "<td>" + `<i onclick = "gotoedit('${itemData.id}','${itemData.comments}')" class= "fas fa-edit" ></i>`     + "</td>";
    temp += "<td>" +  `<i onclick = "gotodelete(${itemData.id})" class="fas fa-window-close">`    + "</td>"
    }
    
   });
  
   document.getElementById('data').innerHTML = temp
   
 }

}).catch(function() {

});

function onselectchange()
{
  if(document.getElementById('Status').value == "reject")
  {
  document.getElementById('divcomment').style.display = "block";
  document.getElementById('comment').setAttribute("required", "")
  }
  if(document.getElementById('Status').value == "approve")
  {
  document.getElementById('divcomment').style.display = "block";
  }
}

function gotoedit(id, comments)
{
// console.log(id, comments);
window.localStorage.setItem('purchaseid', id);
document.getElementById("myForm").style.display = "block";
document.getElementById('comment').setAttribute('value',comments)
}

jQuery("form").submit(function(e){
  e.preventDefault();  
  //or
  //return false;
  });
const formdata = document.getElementById('upemailForm');

function updateemailForm()
{
  if( formdata.checkValidity() == true)
  {
   
    // console.log(document.getElementById('myFile').files[0]);
    // console.log(document.getElementById('Status').value);
    // console.log(document.getElementById('comment').value);

    const fd = new FormData();
    
    fd.append("id", window.localStorage.getItem('purchaseid'));
    fd.append("status",document.getElementById('Status').value);
    fd.append("comments", document.getElementById('comment').value)
    fd.append("dataFile", document.getElementById('myFile').files[0]);

    // console.log(fd);
 
   
try {

// Options to be given as parameter
// in fetch for making requests
// other then GET
const api = "http://162.240.56.117:5000/status_purchaseorder";

let options = {
    method: 'PUT',
    headers: {"Access-Control-Allow-Origin" : "*",
         'Accept': 'application/json'
    },
    body: fd
}

// Fake api for making post requests
let fetchRes = fetch(
    api,
    options);
fetchRes.then(res => {
    return res.json();
}).then((data) => {
    // console.log(data);    
})

} catch (e) {
// console.log(e);
}     
}
}
function closeemailForm() {
  document.getElementById("myForm").style.display = "none";
}

function gotodelete(id)
{
    document.getElementById('id01').style.display='block'
    // console.log(id);
   window.localStorage.setItem('deletebookid', id)

}
function gotoproductdelete()
{
  var id = window.localStorage.getItem('deletebookid');

  fetch('http://162.240.56.117:5000/do_deleteorderpurchase/'+id, {
  method: 'PUT',
  headers: {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  },
  body: JSON.stringify(data)
  }).then(function(response) {
  return response.json();
  }).then(function(data) {
  // console.log(data);
  if(data.Message == "Entry Deleted")
  {
      window.location.reload();
  }
  
  }).catch(function() {
  
  });
}
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
