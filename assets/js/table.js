
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

jQuery("form").submit(function(e){
    e.preventDefault();  
});

const tabledata = document.getElementById('tableForm');
function add()
{
  var  restid = window.localStorage.getItem('resturantid');
  if( tabledata.checkValidity() == true)
  {
  const data = {
    "name": document.getElementById('table_num').value,
    "desc": document.getElementById('description').value,
    "restid": restid,
    };
    // console.log(JSON.stringify(data));
try {

// Options to be given as parameter
// in fetch for making requests
// other then GET
const api = 'http://162.240.56.117:5000/kottable' 

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
    if(data.message = "success")
    {
    window.location.reload();
    }
})

} catch (e) {
// console.log(e);
}
}
}

var restaurant_id = window.localStorage.getItem('resturantid')
fetch('http://162.240.56.117:5000/menu/getProduct/' + restaurant_id, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(function(response) {
        return response.json();
      }).then(function(data) {
        // console.log(data);
        for (var i = 1; i < data.length; i++) {
          
        }
        if (data.length > 0) {
            var temp = "";
            data.forEach((itemData, i) => {
              temp += "<tr>";
              temp += "<td>" +`<input type="checkbox" style="height: 20px;"/>` + "</td>"
              temp += `<td>`+ `<input type="text" placeholder="Enter quantity" style="font-size : 15px" required/>`+ "</td>"
              temp += `<td style="display: none;">` + [i+1] + "</td>";
              temp += "<td>" + itemData.Name + "</td>";
              temp += `<td style="display: none;">` + `<img src="http://162.240.56.117:5000/product/${itemData.product_picture}" style ="max-width: 45px">` + "</td>";
              temp += "<td>" + itemData.Price + "</td>";
              temp += `<td style="display: none;">` + itemData.Product_Id + "</td>";
              temp += `<td style="display: none;" >` + itemData.Category + "</td>";
              temp += "<td>" + itemData.Type + "</td>";
              temp += `<td style="display: none;">`+ itemData.Description + "</td>";
              temp += "</tr>"
            });
            document.getElementById('orderdata').innerHTML = temp;
        }
      }).catch(function() {
      });

      $('.input-number-increment').click(function() {
        var $input = $(this).parents('.input-number-group').find('.input-number');
        var val = parseInt($input.val(), 10);
        $input.val(val + 1);
      });
      
      $('.input-number-decrement').click(function() {
        var $input = $(this).parents('.input-number-group').find('.input-number');
        var val = parseInt($input.val(), 10);
        $input.val(val - 1);
      })
      
   function gotoQuantity(Product_Id)
   {
    //  console.log(Product_Id);
    document.getElementById("myquantityForm").style.display = "block"; 
   }
 
var  restid = window.localStorage.getItem('resturantid');
fetch('http://162.240.56.117:5000/kottable'+'/'+restid , {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(function(response) {
        return response.json();
      }).then(function(data) {
        // console.log(data);
        for (var i = 1; i < data.Data.length; i++) {
          
        }
        if (data.Data.length > 0) {
            var temp = "";
            data.Data.forEach((itemData, i) => {
                
                temp += `<div class="card" style="width: 12rem; border-radius: 1.25rem;margin : 10px;margin-left : 25px;   box-shadow: 2px 2px 3px grey;">
                  <div class="card-body"> <label style="color : #FF901F">Table Name:</label>
                  <span class="card-title" style="font-weight: bold; cursor: pointer; text-decoration: underline;" onclick = "gotoorder('${itemData.name}')">${itemData.name}</span>
                  <br>
                  <label style="color : #FF901F"> Description: </label> 
                  <span class="card-text" style="font-weight: bold;">${itemData.description}</span>
                 <br>
                  <i onclick = "gotodelete(${itemData.id})"  class=" fas fa-trash-alt " style="font-size:18px; color : red; align="center" "  ></i>
                  <i onclick = "gotoedit('${itemData.id}','${itemData.name}','${itemData.description}')" class= "fas fa-edit" style="font-size:18px; float: right; color : green" ></i>
                </div>
              </div>`
               // <i  class= "fa fa-arrow-right" style="font-size:18px ; color : #FF901F" ></i>
        });
        document.getElementById('data').innerHTML = temp;
    }
      }).catch(function() {
       
      });

      function gotoorder(name)
      {
        // console.log(name);
        window.location.href = "orders.html";
        window.localStorage.setItem('tablename', name);
      
      }

function gotodelete(id)
{
    console.log(id);
//   var userid = window.localStorage.getItem('deleteid');
  fetch('http://162.240.56.117:5000/kottable'+'/'+id , {
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

function gotoedit(id,name,description)
{
    // console.log(description);
  window.localStorage.setItem('orderid',id)
  document.getElementById("myForm").style.display = "block";
  document.getElementById('pname').setAttribute('value', name);
  document.getElementById('tabledescription').setAttribute('value', description);
 
}


const uporderFormdata = document.getElementById('upform');
function updateForm()
{
  var  user_id = window.localStorage.getItem('orderid');
  // console.log(user_id);
  if( uporderFormdata.checkValidity() == true)
  {
  const data = {
      "name": document.getElementById('pname').value,
      "desc": document.getElementById('tabledescription').value,
    };
    console.log(JSON.stringify(data));
try {

// Options to be given as parameter
// in fetch for making requests
// other then GET
const api = 'http://162.240.56.117:5000/kottable/'+  user_id 

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
    if(data.message = "success in Edit")
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
    document.getElementById("myForm").style.display = "none";
  }

  $(document).ready(function() {
    $("td:nth-child(7)").each(function() {
        if ($(this).text() === "Non-Veg") {
            $(this).parent().children().css({'background-color': '#d88882'});
        }
        else if($(this).text() === "Veg"){
            $(this).parent().children().css({'background-color': 'lightgreen'});
        }
    });
  });
function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("mytable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[2];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
}

function gotokitchen()
{
    let b = localStorage.getItem('orderdata');
    // console.log(b);
    // localStorage.removeItem('orderdata'); 
}
$('#selectall').click(function(event) {
  $(':checkbox').prop('checked', this.checked);
});

function savequantity()
{
 var quantity = document.getElementById('quantityno').value
//  console.log(quantity);
 document.getElementById('quantitynodis').innerHTML = quantity
//  document.getElementById('quantitynodis').setAttribute('value', quantity);
 document.getElementById("myquantityForm").style.display = "none";
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


var arr;
$('#save').click(function(){
  if ($(this).is(':not(:checked)'))
  {
      document.getElementById('messageverify').innerHTML = "please select checkbox"
  }
  
    var rows=[];
    $('input:checked').each(function () {
	   var OrderName=$(this).closest('tr').find('td:nth-child(4)').text();
	   var Type=$(this).closest('tr').find('td:nth-child(9)').text();
	   var price=$(this).closest('tr').find('td:nth-child(6)').text();
     var quantity = $(this).closest('tr').find('td:nth-child(2) input').val();
     var id=$(this).closest('tr').find('td:nth-child(7)').text();
    //  console.log(quantity);
	   var vals={OrderName ,Type, price,quantity, id};
        rows.push(vals);
        // console.log(rows);
        localStorage.setItem('orderdata',JSON.stringify(rows))
        window.location.href = "ordertaken.html"
        //debugger;
    });
   
});
document.getElementById('ordername').innerHTML = " " + window.localStorage.getItem('tablename')+ " " + "Table"


function myserchFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("mytable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
 