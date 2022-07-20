window.onbeforeunload = () => {
  localStorage.removeItem(key);
  sessionStorage.removeItem(key);
}
let params = (new URL(document.location)).searchParams;
let name = params.get("restid");
// console.log(name);
window.localStorage.setItem('resturantidweb', name)
if(name != null || window.localStorage.getItem('resturantidweb') == null)
{
document.getElementById('ms-side-nav').style.display = "none"
}
if(window.localStorage.getItem('resturantidweb') != null)
{
  fetch('http://162.240.56.117:5000/menu/getProduct/' + window.localStorage.getItem('resturantidweb'), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(function(response) {
        return response.json();
      }).then(function(data) {
        // console.log(data);
        window.localStorage.setItem('product_data',JSON.stringify(data))
        
        for (var i = 0; i < data.length; i++) {
          
        }
       
        if (data.length > 0) {
          document.getElementById('messagedisplay').innerHTML = ""
            var temp = "";
            data.forEach((itemData, i) => {
              if(itemData.status == "inactive")
              {
              temp += "<tr>";
              temp += "<td>" + [i+1] + "</td>";
              temp += "<td>" + itemData.Name + "</td>";
              temp += "<td>" + `<img src="http://162.240.56.117:5000/product/${itemData.product_picture}" style ="max-width: 90px;max-height: 50px;">` + "</td>";
              temp += "<td>" + itemData.Price + "</td>";
              temp += "<td>" + itemData.Type + "</td>";
              temp += "<td>" + itemData.Description + "</td>";
              temp += `<td id="notavailable">` +  `<span class="badge badge-primary">Not Available</span>`    + "</td>"
              }

              if(itemData.status == "active" || itemData.status == null )
              {
              temp += "<tr>";
              temp += "<td>" + [i+1] + "</td>";
              temp += "<td>" + itemData.Name + "</td>";
              temp += "<td>" + `<img src="http://162.240.56.117:5000/product/${itemData.product_picture}" style ="max-width: 90px;max-height: 50px;">` + "</td>";
              temp += "<td>" + itemData.Price + "</td>";
              temp += "<td>" + itemData.Type + "</td>";
              temp += "<td>" + itemData.Description + "</td>";
              temp += `<td id="available">` +  `<span class="badge badge-success">Available</span>`    + "</td>"
              // temp += `<td id="notavailable">` +  `<span class="badge badge-primary">Not Available</span>`    + "</td>"
              }
            });
            
            document.getElementById('data').innerHTML = temp;
           
        }
      }).catch(function() {
       
      });
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
        window.localStorage.setItem('product_data',JSON.stringify(data))
        
        for (var i = 0; i < data.length; i++) {
          
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
              temp += "<td>" + `<img src="http://162.240.56.117:5000/product/${itemData.product_picture}" style ="max-width: 90px;max-height: 50px;">` + "</td>";
              temp += "<td>" + itemData.Price + "</td>";
              temp += "<td>" + itemData.Type + "</td>";
              temp += "<td>" + itemData.Description + "</td>";
              temp += `<td id="notavailable">` +  `<span class="badge badge-primary">Not Available</span>`    + "</td>"
              }

              if(itemData.status == "active" || itemData.status == null )
              {
              temp += "<tr>";
              temp += "<td>" + [i+1] + "</td>";
              temp += "<td>" + itemData.Name + "</td>";
              temp += "<td>" + `<img src="http://162.240.56.117:5000/product/${itemData.product_picture}" style ="max-width: 90px;max-height: 50px;">` + "</td>";
              temp += "<td>" + itemData.Price + "</td>";
              temp += "<td>" + itemData.Type + "</td>";
              temp += "<td>" + itemData.Description + "</td>";
              temp += `<td id="available">` +  `<span class="badge badge-success">Available</span>`    + "</td>"
              // temp += `<td id="notavailable">` +  `<span class="badge badge-primary">Not Available</span>`    + "</td>"
              }
            });
            
            document.getElementById('data').innerHTML = temp;
           
        }
      }).catch(function() {
       
      });


function gotologout()
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



     
     function gotocart() {
          var count = parseInt($("#lblCartCount").text());
          $("#lblCartCount").html(count + 1);
      }

      function removecart() {
        var count = parseInt($("#lblCartCount").text());
        $("#lblCartCount").html(count - 1);
    }

    // var data = JSON.parse(localStorage.getItem('product_data'))
    // console.log(data);
    // document.addEventListener('change', () => {
    //   const checkedValues = [...document.querySelectorAll('.storesCheckBox')]
    //     .filter(input => input.checked)
    //     .map(input => input.value);
    //   const filteredStores = data.filter(({ Veg }) => checkedValues.includes(Veg));
    //   console.log(filteredStores);
    // });
    
function filterSelection()
{
     
if(document.getElementById('veg').checked)
{
 var data = JSON.parse(localStorage.getItem('product_data'))
 const filteredData = data.filter(elem => elem.Type === "Veg");
//  console.log(filteredData);

if (data.length > 0) {
  var temp = "";
  filteredData.forEach((itemData, i) => {
    if(itemData.status == "inactive" || itemData.status == "nonact")
    {
    temp += "<tr>";
    temp += "<td>" + [i+1] + "</td>";
    temp += "<td>" + itemData.Name + "</td>";
    temp += "<td>" + `<img src="http://162.240.56.117:5000/product/${itemData.product_picture}" style ="max-width: 90px;max-height: 50px;">` + "</td>";
    temp += "<td>" + itemData.Price + "</td>";
    temp += "<td>" + itemData.Type + "</td>";
    temp += "<td>" + itemData.Description + "</td>";
    temp += `<td id="notavailable">` +  `<span class="badge badge-primary">Not Available</span>`    + "</td>"
    }

    if(itemData.status == "active" || itemData.status == null )
    {
    temp += "<tr>";
    temp += "<td>" + [i+1] + "</td>";
    temp += "<td>" + itemData.Name + "</td>";
    temp += "<td>" + `<img src="http://162.240.56.117:5000/product/${itemData.product_picture}" style ="max-width: 90px;max-height: 50px;">` + "</td>";
    temp += "<td>" + itemData.Price + "</td>";
    temp += "<td>" + itemData.Type + "</td>";
    temp += "<td>" + itemData.Description + "</td>";
    temp += `<td id="available">` +  `<span class="badge badge-success">Available</span>`    + "</td>"
    // temp += `<td id="notavailable">` +  `<span class="badge badge-primary">Not Available</span>`    + "</td>"
    }
});
document.getElementById('data').innerHTML = temp;
}
}

if(document.getElementById('nonveg').checked)
{
 var data = JSON.parse(localStorage.getItem('product_data'))
 const filteredData = data.filter(elem => elem.Type === "Non-Veg");
//  console.log(filteredData);

if (data.length > 0) {
  var temp = "";
  filteredData.forEach((itemData, i) => {
 if(itemData.status == "inactive" || itemData.status == "nonact")
  {
  temp += "<tr>";
  temp += "<td>" + [i+1] + "</td>";
  temp += "<td>" + itemData.Name + "</td>";
  temp += "<td>" + `<img src="http://162.240.56.117:5000/product/${itemData.product_picture}" style ="max-width: 90px;max-height: 50px;">` + "</td>";
  temp += "<td>" + itemData.Price + "</td>";
  temp += "<td>" + itemData.Type + "</td>";
  temp += "<td>" + itemData.Description + "</td>";
  temp += `<td id="notavailable">` +  `<span class="badge badge-primary">Not Available</span>`    + "</td>"
  }

  if(itemData.status == "active" || itemData.status == null )
  {
  temp += "<tr>";
  temp += "<td>" + [i+1] + "</td>";
  temp += "<td>" + itemData.Name + "</td>";
  temp += "<td>" + `<img src="http://162.240.56.117:5000/product/${itemData.product_picture}" style ="max-width: 90px;max-height: 50px;">` + "</td>";
  temp += "<td>" + itemData.Price + "</td>";
  temp += "<td>" + itemData.Type + "</td>";
  temp += "<td>" + itemData.Description + "</td>";
  temp += `<td id="available">` +  `<span class="badge badge-success">Available</span>`    + "</td>"
  // temp += `<td id="notavailable">` +  `<span class="badge badge-primary">Not Available</span>`    + "</td>"
  }
});
document.getElementById('data').innerHTML = temp;
}
}
if(document.getElementById('maincourse').checked)
{
 var data = JSON.parse(localStorage.getItem('product_data'))
 const filteredData = data.filter(elem => elem.Type === "Maincourse");
//  console.log(filteredData);

if (data.length > 0) {
  var temp = "";
  filteredData.forEach((itemData, i) => {
    if(itemData.status == "inactive" || itemData.status == "nonact")
    {
    temp += "<tr>";
    temp += "<td>" + [i+1] + "</td>";
    temp += "<td>" + itemData.Name + "</td>";
    temp += "<td>" + `<img src="http://162.240.56.117:5000/product/${itemData.product_picture}" style ="max-width: 90px;max-height: 50px;">` + "</td>";
    temp += "<td>" + itemData.Price + "</td>";
    temp += "<td>" + itemData.Type + "</td>";
    temp += "<td>" + itemData.Description + "</td>";
    temp += `<td id="notavailable">` +  `<span class="badge badge-primary">Not Available</span>`    + "</td>"
    }

    if(itemData.status == "active" || itemData.status == null )
    {
    temp += "<tr>";
    temp += "<td>" + [i+1] + "</td>";
    temp += "<td>" + itemData.Name + "</td>";
    temp += "<td>" + `<img src="http://162.240.56.117:5000/product/${itemData.product_picture}" style ="max-width: 90px;max-height: 50px;">` + "</td>";
    temp += "<td>" + itemData.Price + "</td>";
    temp += "<td>" + itemData.Type + "</td>";
    temp += "<td>" + itemData.Description + "</td>";
    temp += `<td id="available">` +  `<span class="badge badge-success">Available</span>`    + "</td>"
    // temp += `<td id="notavailable">` +  `<span class="badge badge-primary">Not Available</span>`    + "</td>"
    }
});
document.getElementById('data').innerHTML = temp;
}
}

if(document.getElementById('starter').checked)
{
 var data = JSON.parse(localStorage.getItem('product_data'))
 const filteredData = data.filter(elem => elem.Type === "Starter");
//  console.log(filteredData);

if (data.length > 0) {
  var temp = "";
  filteredData.forEach((itemData, i) => {
    if(itemData.status == "inactive" || itemData.status == "nonact")
    {
    temp += "<tr>";
    temp += "<td>" + [i+1] + "</td>";
    temp += "<td>" + itemData.Name + "</td>";
    temp += "<td>" + `<img src="http://162.240.56.117:5000/product/${itemData.product_picture}" style ="max-width: 90px;max-height: 50px;">` + "</td>";
    temp += "<td>" + itemData.Price + "</td>";
    temp += "<td>" + itemData.Type + "</td>";
    temp += "<td>" + itemData.Description + "</td>";
    temp += `<td id="notavailable">` +  `<span class="badge badge-primary">Not Available</span>`    + "</td>"
    }

    if(itemData.status == "active" || itemData.status == null )
    {
    temp += "<tr>";
    temp += "<td>" + [i+1] + "</td>";
    temp += "<td>" + itemData.Name + "</td>";
    temp += "<td>" + `<img src="http://162.240.56.117:5000/product/${itemData.product_picture}" style ="max-width: 90px;max-height: 50px;">` + "</td>";
    temp += "<td>" + itemData.Price + "</td>";
    temp += "<td>" + itemData.Type + "</td>";
    temp += "<td>" + itemData.Description + "</td>";
    temp += `<td id="available">` +  `<span class="badge badge-success">Available</span>`    + "</td>"
    // temp += `<td id="notavailable">` +  `<span class="badge badge-primary">Not Available</span>`    + "</td>"
    }
});
document.getElementById('data').innerHTML = temp;
}
}

if(document.getElementById('drink').checked)
{
 var data = JSON.parse(localStorage.getItem('product_data'))
 const filteredData = data.filter(elem => elem.Type === "Drink");
//  console.log(filteredData);

if (data.length > 0) {
  var temp = "";
  filteredData.forEach((itemData, i) => {
    if(itemData.status == "inactive" || itemData.status == "nonact")
    {
    temp += "<tr>";
    temp += "<td>" + [i+1] + "</td>";
    temp += "<td>" + itemData.Name + "</td>";
    temp += "<td>" + `<img src="http://162.240.56.117:5000/product/${itemData.product_picture}" style ="max-width: 90px;max-height: 50px;">` + "</td>";
    temp += "<td>" + itemData.Price + "</td>";
    temp += "<td>" + itemData.Type + "</td>";
    temp += "<td>" + itemData.Description + "</td>";
    temp += `<td id="notavailable">` +  `<span class="badge badge-primary">Not Available</span>`    + "</td>"
    }

    if(itemData.status == "active" || itemData.status == null )
    {
    temp += "<tr>";
    temp += "<td>" + [i+1] + "</td>";
    temp += "<td>" + itemData.Name + "</td>";
    temp += "<td>" + `<img src="http://162.240.56.117:5000/product/${itemData.product_picture}" style ="max-width: 90px;max-height: 50px;">` + "</td>";
    temp += "<td>" + itemData.Price + "</td>";
    temp += "<td>" + itemData.Type + "</td>";
    temp += "<td>" + itemData.Description + "</td>";
    temp += `<td id="available">` +  `<span class="badge badge-success">Available</span>`    + "</td>"
    // temp += `<td id="notavailable">` +  `<span class="badge badge-primary">Not Available</span>`    + "</td>"
    }
});
document.getElementById('data').innerHTML = temp;
}
}

if(document.getElementById('all').checked)
{
 var data = JSON.parse(localStorage.getItem('product_data'))
 const filteredData = data.filter(elem => elem);
//  console.log(filteredData);

if (data.length > 0) {
  var temp = "";
  filteredData.forEach((itemData, i) => {
    if(itemData.status == "inactive" || itemData.status == "nonact")
    {
    temp += "<tr>";
    temp += "<td>" + [i+1] + "</td>";
    temp += "<td>" + itemData.Name + "</td>";
    temp += "<td>" + `<img src="http://162.240.56.117:5000/product/${itemData.product_picture}" style ="max-width: 90px;max-height: 50px;">` + "</td>";
    temp += "<td>" + itemData.Price + "</td>";
    temp += "<td>" + itemData.Type + "</td>";
    temp += "<td>" + itemData.Description + "</td>";
    temp += `<td id="notavailable">` +  `<span class="badge badge-primary">Not Available</span>`    + "</td>"
    }

    if(itemData.status == "active" || itemData.status == null )
    {
    temp += "<tr>";
    temp += "<td>" + [i+1] + "</td>";
    temp += "<td>" + itemData.Name + "</td>";
    temp += "<td>" + `<img src="http://162.240.56.117:5000/product/${itemData.product_picture}" style ="max-width: 90px;max-height: 50px;">` + "</td>";
    temp += "<td>" + itemData.Price + "</td>";
    temp += "<td>" + itemData.Type + "</td>";
    temp += "<td>" + itemData.Description + "</td>";
    temp += `<td id="available">` +  `<span class="badge badge-success">Available</span>`    + "</td>"
    // temp += `<td id="notavailable">` +  `<span class="badge badge-primary">Not Available</span>`    + "</td>"
    }
});
document.getElementById('data').innerHTML = temp;
}
}
}


//    function filterSelectionname()
//    {
//     var chboxs = document.getElementById("all");
//      var data = JSON.parse(localStorage.getItem('product_data'))
//      const filteredData = data.filter(elem => elem.Type === 'Non-Veg');
//     console.log(filteredData);
//     if (data.length > 0) {
//       var temp = "";
//       filteredData.forEach((itemData, i) => {
//       temp+= ` 
//         <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
//         <div class="ms-card" >
//          <div class="ms-card-img">
//            <img src="http://162.240.56.117:5000/product/${itemData.product_picture}"  width="530px"  style="height : 150px" alt="card_img">
//          </div>
//          <div class="ms-card-body">

//            <div class="new" >
//              <h6 class="mb-0" id="name">${itemData.Name}</h6>
//              <h6 class="ms-text-primary mb-0">${itemData.Price}</h6>
//            </div>
//            <div class="new meta">
//              <p>${itemData.Type}</p>
//              <span class="badge badge-success">In Stock</span>
//            </div>
//            <p>${itemData.Description}</p>
//            <div class="new mb-0">
//              <button class="btn grid-btn mt-0 btn-sm btn-primary fa fa-shopping-cart" id="addtocart" onclick="gotocart()">Add to cart</button>
//              <button type="button" class="btn grid-btn mt-0 btn-sm btn-secondary" onclick="removecart()">Remove</button>
//            </div>
//          </div>
//          </div>
//     </div>`
//   });
//   document.getElementById('card').innerHTML = temp;

// }
//    }

   
//    function filterSelectiondiscount()
//    {
//      var data = JSON.parse(localStorage.getItem('product_data'))
//      const filteredData = data.filter(elem => elem.Price === '100');
//     console.log(filteredData);
//     if (data.length > 0) {
//       var temp = "";
//       filteredData.forEach((itemData, i) => {
//       temp+= ` 
//         <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
//         <div class="ms-card" >
//          <div class="ms-card-img">
//            <img src="http://162.240.56.117:5000/product/${itemData.product_picture}"  width="530px"  style="height : 150px" alt="card_img">
//          </div>
//          <div class="ms-card-body">

//            <div class="new" >
//              <h6 class="mb-0" id="name">${itemData.Name}</h6>
//              <h6 class="ms-text-primary mb-0">${itemData.Price}</h6>
//            </div>
//            <div class="new meta">
//              <p>${itemData.Type}</p>
//              <span class="badge badge-success">In Stock</span>
//            </div>
//            <p>${itemData.Description}</p>
//            <div class="new mb-0">
//              <button class="btn grid-btn mt-0 btn-sm btn-primary fa fa-shopping-cart" id="addtocart" onclick="gotocart()">Add to cart</button>
//              <button type="button" class="btn grid-btn mt-0 btn-sm btn-secondary" onclick="removecart()">Remove</button>
//            </div>
//          </div>
//          </div>
//     </div>`
//   });
//   document.getElementById('card').innerHTML = temp;

// }
// }
// function filterSelectionall()
//    {
//      var data = JSON.parse(localStorage.getItem('product_data'))
//      const filteredData = data.filter(elem => elem);
//     console.log(filteredData);

//     if (data.length > 0) {
//       var temp = "";
//       filteredData.forEach((itemData, i) => {
//       temp+= ` 
//         <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
//         <div class="ms-card" >
//          <div class="ms-card-img">
//            <img src="http://162.240.56.117:5000/product/${itemData.product_picture}"  width="530px"  style="height : 150px" alt="card_img">
//          </div>
//          <div class="ms-card-body">

//            <div class="new" >
//              <h6 class="mb-0" id="name">${itemData.Name}</h6>
//              <h6 class="ms-text-primary mb-0">${itemData.Price}</h6>
//            </div>
//            <div class="new meta">
//              <p>${itemData.Type}</p>
//              <span class="badge badge-success">In Stock</span>
//            </div>
//            <p>${itemData.Description}</p>
//            <div class="new mb-0">
//              <button class="btn grid-btn mt-0 btn-sm btn-primary fa fa-shopping-cart" id="addtocart" onclick="gotocart()">Add to cart</button>
//              <button type="button" class="btn grid-btn mt-0 btn-sm btn-secondary" onclick="removecart()">Remove</button>
//            </div>
//          </div>
//          </div>
//     </div>`
//   });
//   document.getElementById('card').innerHTML = temp;

// }
// }