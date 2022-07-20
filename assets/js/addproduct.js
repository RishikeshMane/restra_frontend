
// let timer, currSeconds = 0;
  
// function resetTimer() {
//     clearInterval(timer);
//     currSeconds = 0;
//     timer = 
//         setInterval(startIdleTimer, 300000);
// }

// window.onload = resetTimer;
// window.onmousemove = resetTimer;
// window.onmousedown = resetTimer;
// window.ontouchstart = resetTimer;
// window.onclick = resetTimer;
// window.onkeypress = resetTimer;

// function startIdleTimer() {
//     currSeconds++;
//   window.location.href="../login.html"
//   localStorage.clear();
//   sessionStorage.clear();
// }
var is_login = window.sessionStorage.getItem("is_login");
// console.log(is_login);
      
if(is_login != "true")
{
   window.location.href = "../login.html"
}
window.onbeforeunload = () => {
  localStorage.removeItem(key);
  sessionStorage.removeItem(key);
}            

function gotologout()
{
   window.location.href ="../login.html";
   window.sessionStorage.clear();
   window.localStorage.clear();
}

function gotoproductdetaillogout()
{
  window.location.href ="../login.html";
  window.sessionStorage.clear();
  window.localStorage.clear();
}

 window.history.forward();
 function noBack() {
 window.history.forward();
 window.sessionStorage.clear();
 window.localStorage.clear();
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
//         window.location.href ="../login.html";
        
//       }if(data.message == "login again : TokenExpiredError: jwt expired")
//       {
//         window.location.href ="../login.html";
//       }
//       }).catch(function() {
       
//       });
// function gotologout()
// {

//     window.location.href ="../login.html";
//     window.sessionStorage.removeItem('IsThisFirstTime_Log_From_LiveServer');
//     window.localStorage.removeItem('login_token');
          
// }
// function gotoaddproductlogout()
// {
//   window.location.href ="../login.html";
//   window.sessionStorage.removeItem('IsThisFirstTime_Log_From_LiveServer');
//   window.localStorage.removeItem('login_token');
// }
// function gotoproductdetaillogout()
// {
//   window.location.href ="../login.html";
//   window.sessionStorage.removeItem('IsThisFirstTime_Log_From_LiveServer');
//   window.localStorage.removeItem('login_token');
// }
// window.history.forward();
//        function noBack() {
//            window.history.forward();
//            window.sessionStorage.clear();
//            window.localStorage.clear();
//        }

function isNumberKey(evt)
{
	var charCode = (evt.which) ? evt.which : event.keyCode
	if (charCode > 31 && (charCode < 48 || charCode > 57))
	return false;

	return true;
}

$(".chosen-select").chosen({
  no_results_text: "Oops, nothing found!",
  width: "90%",

})

jQuery("form").submit(function(e){
    e.preventDefault();  
    //or
    //return false;
    });
 
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
      var y = document.getElementById("myadddiv");
    y.querySelector('.text-disabled').innerHTML = data.firstname + ' ' + data.lastname ;
    
    }

 
 var restaurant_id = window.localStorage.getItem('resturantid');
 var image = window.localStorage.getItem('imagefile');
const formdata = document.getElementById('form');
var category = [];
// $('#Catagory').change(function ()
// {
//   $("#Catagory").each(function() {
//     alert(this.value);
//     category.push(this.value);
//   });
// });
$('#Catagory').change(function ()
{
var selectedValues = $('#Catagory').val();
// console.log(JSON.stringify(selectedValues));
window.localStorage.setItem('category', selectedValues)

});
function addproduct()
{ 
  const name = localStorage.getItem('category');

  if(name){
      // console.log('Name exists');
  }else{
    document.getElementById('messageaddverify').innerHTML = "Select Category!!.."
      // console.log('Name is not found');
  }
    // const fd = new FormData();
    // fd.append("product_picture", document.getElementById('myFile').files[0]);
    if( formdata.checkValidity() == true)
    {

      // if(window.localStorage.getItem('category') == null)
      // {
      //   document.getElementById('messageaddverify').innerHTML = "Select Category!!.."
      // }
      const fd = new FormData();
        
      fd.append("Name", document.getElementById('pname').value),
      fd.append("Price", document.getElementById('price').value)
      fd.append("Type", document.getElementById('Subcatagory').value),
      fd.append("Category", localStorage.getItem('category')),
      fd.append("restaurant_id", restaurant_id),
      fd.append("description", document.getElementById('description').value),
      fd.append("Image",document.getElementById('myFile').files[0]),     
      fd.append("quantity", document.getElementById('quantity').value),
        console.log(fd);
       
        try {

        // Options to be given as parameter
        // in fetch for making requests
        // other then GET
        const api = "http://162.240.56.117:5000/addProduct";

        let options = {
            method: 'POST',
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
            if(data.message == "Product Added")
            {

                window.location.href = "../product/productdetail.html";
                window.localStorage.removeItem('category')
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
        if(data.length == 0)
        {
          document.getElementById('tablediv').style.display = "none";
          document.getElementById('messagedisplay').innerHTML = "PRODUCT NOT ADDED!!.."
        }
        if (data.length > 0) {
          document.getElementById('messagedisplay').innerHTML = ""
            var temp = "";
            data.forEach((itemData, i) => {
            
              if(itemData.status == "inactive" || itemData.status == "nonact")
              {
              temp += "<tr>";
              temp += "<td>" + [i+1] + "</td>";
              temp += "<td>" + itemData.Name + "</td>";
              temp += "<td>" + `<img src="http://162.240.56.117:5000/product/${itemData.product_picture}" style ="max-width: 45px; max-height: 45px">` + "</td>";
              temp += "<td>" + itemData.Price + "</td>";
              temp += "<td>" + itemData.Category + "</td>";
              temp += "<td>" + itemData.Type + "</td>";
              temp += "<td>" + itemData.quantity + "</td>";
              temp += "<td>" + itemData.Description + "</td>";
              temp += "<td>" + `<i onclick = "gotoedit(${itemData.Product_Id},'${itemData.Name}','${itemData.Price}','${itemData.Category}','${itemData.Type}',
              '${itemData.Description}','${itemData.status}','${itemData.quantity}')" class= "fas fa-edit" ></i>`     + "</td>";
              temp += "<td>" +  `<i onclick = "gotodelete(${itemData.Product_Id})"  class=" fas fa-trash-alt "  >`    + "</td>"
              // temp += `<td id="available">` +  `<span class="badge badge-success">Available</span>`    + "</td>"
              temp += `<td id="notavailable">` +  `<span class="badge badge-primary">Not Available</span>`    + "</td>"
              }

              if(itemData.status == "active" || itemData.status == null )
              {
              temp += "<tr>";
              temp += "<td>" + [i+1] + "</td>";
              temp += "<td>" + itemData.Name + "</td>";
              temp += "<td>" + `<img src="http://162.240.56.117:5000/product/${itemData.product_picture}" style ="max-width: 45px; max-height: 45px">` + "</td>";
              temp += "<td>" + itemData.Price + "</td>";
              temp += "<td>" + itemData.Category + "</td>";
              temp += "<td>" + itemData.Type + "</td>";
              temp += "<td>" + itemData.quantity + "</td>";
              temp += "<td>" + itemData.Description + "</td>";
              temp += "<td>" + `<i onclick = "gotoedit(${itemData.Product_Id},'${itemData.Name}','${itemData.Price}','${itemData.Category}','${itemData.Type}',
              '${itemData.Description}','${itemData.status}','${itemData.quantity}')" class= "fas fa-edit" ></i>`     + "</td>";
              temp += "<td>" +  `<i onclick = "gotodelete(${itemData.Product_Id})"  class=" fas fa-trash-alt "  >`    + "</td>"
              temp += `<td id="available">` +  `<span class="badge badge-success">Available</span>`    + "</td>"
              // temp += `<td id="notavailable">` +  `<span class="badge badge-primary">Not Available</span>`    + "</td>"
              }
            });
            
            document.getElementById('data').innerHTML = temp;
           
        }
      }).catch(function() {
       
      });

      
      function gotoedit(Product_Id,Name,Price,Category,Type,Description,status, quantity, quantitys)
      {
        
        // var selected = Category.split(",");
        // console.log(selected);
        var array = [];
        $.each(Category.split(","), function(i,e){
          $("input[value='" + e + "']").prop('checked', true);
          array.push(e);
          console.log(array);
          document.getElementById('selectedop').innerHTML = array
      });
     
        window.localStorage.setItem('productid', Product_Id)
        document.getElementById("myForm").style.display = "block";
        document.getElementById('pname').setAttribute('value', Name);
        // $('#Catagory').val(Category);
        $('#Subcatagory').val(Type);
        document.getElementById('price').setAttribute('value', Price);
        document.getElementById('description').setAttribute('value', Description);
        document.getElementById('quantity').setAttribute('value', quantity);
        document.getElementById('status').setAttribute('value', status);
        // document.getElementById('myFile').setAttribute('value',);
      }
    

      const upemailFormdata = document.getElementById('upform');
      function updateForm()
      {
        var selected = new Array();
            $("input[type=checkbox]:checked").each(function () {
                selected.push(this.value);
                console.log(selected);
            });
        var  product_id = window.localStorage.getItem('productid');
        if( upemailFormdata.checkValidity() == true)
        {
          const fd = new FormData();
          fd.append("name", document.getElementById('pname').value),
          fd.append("price", document.getElementById('price').value)
          fd.append("type", document.getElementById('Subcatagory').value),
          fd.append("category", selected),
          fd.append("product_id", product_id),
          fd.append("description", document.getElementById('description').value),
          fd.append("status", document.getElementById('status').value),
          fd.append("Image",document.getElementById('myFile').files[0]),     
          fd.append("quantity", document.getElementById('quantity').value),
        // const data = {
        //     "Name": document.getElementById('pname').value,
        //     "Price" : document.getElementById('price').value,
        //     "Type" : document.getElementById('Subcatagory').value,
        //     "Category": document.getElementById('Catagory').value,
        //     "restaurant_id" :window.localStorage.getItem('resturantid'),
        //     "description": document.getElementById('description').value,
        //     "status" : document.getElementById('status').value,
        //   };
          console.log();
      try {
      
      // Options to be given as parameter
      // in fetch for making requests
      // other then GET
      const api = 'http://162.240.56.117:5000/updateProductdetails'
      
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
          if(data.message = "Product updated")
          {
          window.location.reload();
          }
      })
      
      } catch (e) {
      // console.log(e);
      }
    }
}

function gotodelete(userid)
{
  document.getElementById('id01').style.display='block'
        // console.log(userid);
  window.localStorage.setItem('deleteid', userid)
     
}

function gotoproductdelete()
{
  var userid = window.localStorage.getItem('deleteid');
  fetch('http://162.240.56.117:5000/menu/updateProduct'+'/'+userid , {
  method: 'DELETE',
  headers: {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  },
  }).then(function(response) {
  return response.json();
  }).then(function(data) {
  // console.log(data);
  if(data.message == "Product deleted")
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
function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

 function uploadbulk(event)
 {
  
}

const input = document.getElementById('avatar');
input.addEventListener('change', () => {
    uploadFile(input.files[0]);
    // console.log(input.files[0]);
});
const uploadFile = (file) => {

  // add file to FormData object
  const fd = new FormData();
  fd.append('uploadfile', file);

  // send `POST` request
  fetch('http://162.240.56.117:5000/api/uploadfile', {
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
$(".dropdown dt a").on('click', function () {
  $(".dropdown dd ul").slideToggle('fast');
});

$(".dropdown dd ul li a").on('click', function () {
  $(".dropdown dd ul").hide();
});

function getSelectedValue(id) {
  return $("#" + id).find("dt a span.value").html();
}

$(document).bind('click', function (e) {
  var $clicked = $(e.target);
  if (!$clicked.parents().hasClass("dropdown")) {
    $(".dropdown dd ul").hide()
  };
});


$('.mutliSelect input[type="checkbox"]').on('click', function () {

  var title = $(this).closest('.mutliSelect').find('input[type="checkbox"]').val(),
      title = $(this).val() + ",";

  if ($(this).is(':checked')) {
    var html = '<span title="' + title + '">' + title + '</span>';
    $('.multiSel').append(html);
    $(".hida").hide();
  }else {
    $('span[title="' + title + '"]').remove();
    var ret = $(".hida");
    $('.dropdown dt a').append(ret);
  }

});