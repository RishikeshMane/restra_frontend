var is_login = window.sessionStorage.getItem("is_login");
// console.log(is_login);
var is_sub = window.localStorage.getItem("subscriptionpurchase");
 if(is_login != "true")
 {
   window.location.href = "login.html"
 }

 if(is_sub != "true")
 {
   window.location.href = "../subscription.html"
 }

 window.history.forward();
 function noBack() {
     window.history.forward();
     window.sessionStorage.clear();
     window.localStorage.clear();
 }
var token 
function selectNum(){
var data = JSON.parse(localStorage.getItem('addtocartarray'));
data.forEach((itemData) => {
var getValue = document.getElementById('ddlViewBy').value;
// console.log(getValue);
const value = document.getElementById('ddlViewBy').value ;
var price = itemData.Price * value;
// console.log(price);
document.getElementById('product-price').innerHTML=price;
});
document.getElementById('purchasediv').style.display = "none";
}

$("a").click(function(event){
    event.preventDefault();
  });
function show()
{
    var price = document.getElementById("product-price").textContent;
    document.getElementById('purchasediv').style.display = "block";
    document.getElementById('totalprice').innerHTML=  price;
    window.localStorage.setItem("Actualprice", price);
    window.localStorage.setItem("Discount", document.getElementById("discount").textContent);
    var numVal1 = Number(document.getElementById("totalprice").textContent);
    // console.log(numVal1);
    var numVal2 = Number(document.getElementById("discount").textContent) / 100;
    // console.log(numVal2);
    var totalValue = numVal1 - (numVal1 * numVal2);
    // console.log(totalValue);
   document.getElementById("discountedtotal").textContent = parseFloat(totalValue.toFixed(2));
   var cupon = JSON.parse(window.localStorage.getItem('coupondata'));
  //  console.log(cupon.Coupon);
   const data = {
    "coupon" : cupon.Coupon,
    "amount" : document.getElementById("discountedtotal").textContent,
    
  };
  // console.log();
try {

// Options to be given as parameter
// in fetch for making requests
// other then GET
const api = 'http://162.240.56.117:5000/submitpayments'

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
})

} catch (e) {
// console.log(e);
}

}


$('table'). on('click', 'a[class="btn btn-light btn-round"]', function(e){
$(this). closest('tr'). remove()
})

var addtocartdata = JSON.parse(window.localStorage.getItem('addtocartarray'));
// console.log(addtocartdata);
for (var i = 1; i < addtocartdata.length; i++) {
      
}
if (addtocartdata.length > 0) {
  var temp = "";
  addtocartdata.forEach((itemData, i) => {
    window.localStorage.setItem('packagename',itemData.OrderName);
    window.localStorage.setItem('subprice',itemData.Price);
    
  temp += `<td>
  <figure class="itemside align-items-center">
      <div class="aside"><img src="../assets/img/fries.jfif" class="img-sm"></div>
      <figcaption class="info"> <a href="#"  style="font-weight: bold;" class="title text-dark" data-abc="true">${itemData.OrderName}</a>
          <p class="text-muted small" >Price: <a id="price">${itemData.Price}</a> <br>Description : ${itemData.Description}</p>
      </figcaption>
  </figure>
  </td>
  <td> <select class="form-control" id="ddlViewBy" onchange="selectNum()">
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  </select> </td>
  <td>
  <div class="price-wrap"> <var class="price" >₹<a id="product-price">${itemData.Price}</a></var> </div>
  </td>
  <td class="text-right d-none d-md-block"> 
  <!-- <a data-original-title="Save to Wishlist" title="" href="" class="btn btn-light" data-toggle="tooltip" data-abc="true"> <i class="fa fa-heart"></i></a> -->
  <!--<a href="" class="btn btn-light btn-round" data-abc="true"> Remove</a> -->
 </td>
<div class="container">
 <p>Use Promo Code: <span class="promo" id="promoid"></span></p>
</div>`
 });
document.getElementById('data').innerHTML = temp;
}

fetch('http://162.240.56.117:5000/getdiscount', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(function(response) {
        return response.json();
      }).then(function(data) {
        // console.log(data);
        window.localStorage.setItem('coupondata', JSON.stringify(data))
        document.getElementById('promoid').innerHTML = data.Coupon;
      }).catch(function() {
       
      });
function apply()
{
 var code = document.getElementById('couponcode').value
 var data = JSON.parse(window.localStorage.getItem('coupondata'));
 var couponcode = data.Coupon
//  console.log(couponcode)
const formdata = document.getElementById('form');
if( formdata.checkValidity() == true)
{
 if(document.getElementById('couponcode').value  === "")
 {
  document.getElementById("messageverify").innerHTML = "Please enter coupon code!!..";
 }
 if(couponcode != code)
 {
  document.getElementById("messageverify").innerHTML = "Wrong Coupon!!..";
 }
 if(couponcode == code)
 {
  document.getElementById("messageverify").innerHTML = "Coupon is Applied!!..";
 }
}
 
  if(data.Coupon == document.getElementById('couponcode').value)
  {
     document.getElementById('discount').innerHTML = data.Discount;
   }

}
var  user_id = window.localStorage.getItem('userid')
fetch('http://162.240.56.117:5000/testuser/' + user_id, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(function(response) {
        return response.json();
      }).then(function(data) {
        // console.log(data);
        window.localStorage.setItem('registerdata', JSON.stringify(data))
      }).catch(function() {
       
      });

  // var razopayData = JSON.parse(window.localStorage.getItem('razopayData'));
  // console.log(razopayData);
 

