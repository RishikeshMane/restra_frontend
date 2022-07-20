

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

jQuery("form").submit(function(e){
    e.preventDefault();  
    //or
    //return false;
    });
const formdata = document.getElementById('addform');
function Addproduct()
{
    if( formdata.checkValidity() == true)
    {
         const data = {
            "pname": document.getElementById('pname').value,
            "pcurrentstock":"0",
            "pquantity":document.getElementById('quantity').value,
            "premarks":document.getElementById('remarks').value,
            };
            // console.log(JSON.stringify(data));
    try {
    
        // Options to be given as parameter
        // in fetch for making requests
        // other then GET
        var id = window.localStorage.getItem('resturantid');
        const api = "http://162.240.56.117:5000/productinventadd/" + id;
        
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
            if(data.msg == "Data Insert Success")
            {
                window.location.reload();
            }
        })
       
    } catch (e) {
        // console.log(e);
    }     
 }  
}
var id = window.localStorage.getItem('resturantid');
fetch('http://162.240.56.117:5000/inventoryproducts/' + id, {
   
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    
  }).then(function(response) {
        return response.json();
      }).then(function(data) {
    //    console.log(data);
       for (var i = 0; i < data.length; i++) {
    }
    if(data.length == 0)
        {
          document.getElementById('tablediv').style.display = "none";
          document.getElementById('messagedisplay').innerHTML = "PRODUCT NOT ADDED!!.."
        }
    if (data.length > 0) {
        document.getElementById('messagedisplay').innerHTML = ""
      var temp = "";
      data.forEach((itemData, i) => {
        temp += "<tr>";
        // temp += "<td>" + [i+1] + "</td>";
        temp += "<td>" + itemData.code + "</td>";
        temp += "<td>" + itemData.name + "</td>";
        temp += "<td>" + itemData.stock + "</td>";
        temp += `<td contenteditable="true" id="quantity_count" name="quantity_count">` + itemData.quantity + "</td>";
        temp += "<td>" + itemData.remarks + "</td>";
        temp += "<td>" + `<a><i class='fas fa-pencil-alt text-secondary' onclick = "gotoedit(${itemData.code})"></i></a>
                <a ><i class='far fa-trash-alt ms-text-danger' onclick = "gotodelete(${itemData.code})"></i></a>`     + "</td>";
        // temp += "<td>" +  `<i onclick = "gotodelete(${itemData.id})"  class=" fas fa-trash-alt "  >`    + "</td>"
       
      });
      document.getElementById('data').innerHTML = temp;
    
  }
      }).catch(function() {
});

function addinventory()
{
    document.getElementById("myForm").style.display = "block";
}
function closeaddForm() {
    document.getElementById("myForm").style.display = "none";
}

function gotoedit(id)
{
    document.getElementById("myupForm").style.display = "block";
    // console.log(id);
    window.localStorage.setItem('editinveid', id)
}
const formupdata = document.getElementById('upform');
function Upproduct()
{
    if( formupdata.checkValidity() == true)
    {
         const data = {
            "pcode": window.localStorage.getItem('editinveid'),
            "pquantity":document.getElementById('upquantity').value,
            };
            // console.log(JSON.stringify(data));
    try {
    
        // Options to be given as parameter
        // in fetch for making requests
        // other then GET
        const api = "http://162.240.56.117:5000/productstockadd";
        
        let options = {
            method: 'PUT',
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
            if(data.msg == "success in Edit")
            {
                window.location.reload();
            }
        })
       
    } catch (e) {
        // console.log(e);
    }     
 }  
}
function closeForm() {
    document.getElementById("myupForm").style.display = "none";
}

function gotodelete(id)
{
    document.getElementById('id01').style.display='block'
    // console.log(id);
   window.localStorage.setItem('deleteinveid', id)

}
function gotoproductdelete()
{
    const data = {
        "pcode": window.localStorage.getItem('deleteinveid'),
        };
  fetch('http://162.240.56.117:5000/inventorydelete' + pcode, {
  method: 'DELETE',
  headers: {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  },
  }).then(function(response) {
  return response.json();
  }).then(function(data) {
//   console.log(data);
  if(data.msg == "success in Delete")
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

function uploadfile() {
    let input = document.createElement('input');
    input.type = 'file';
    input.id ='avatar';
    input.onchange = _ => {
      // you can use this method to get file and perform respective operations
              let files =   Array.from(input.files);
            //   console.log(files);
              uploadFile(input.files[0]);
          };
    input.click();
  }
    
  const uploadFile = (file) => {
            const fd = new FormData();
              fd.append('uploadfile', file);
            // send `POST` request
            fetch('http://162.240.56.117:5000/api/inventory/', {
                method: 'POST',
                body: fd
            })
            .then(function(response) {
            return response.json();
            }).then(function(data) {
            // console.log(data);
            if(data.msg == "File uploaded/import successfully!")
            {
                window.location.reload();
            }
            
            }).catch(function() {
            
            });
 }