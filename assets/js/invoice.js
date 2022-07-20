window.onload = function() {
    if(!window.location.hash) {
      window.location = window.location + '#loaded';
      window.location.reload();
    }
  }
var  rest_id = window.localStorage.getItem('resturantid')
fetch('http://162.240.56.117:5000/getaddresrestaurant/' + rest_id, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(function(response) {
        return response.json();
      }).then(function(data) {
        // console.log(data.Data);
  
        if (data.Data.length > 0) {
            data.Data.forEach((itemData, i) => {
        window.localStorage.setItem('address',itemData.address)
        window.localStorage.setItem('extraaddress', itemData.extra_address)
    });
    
    }
    
    }).catch(function() {
      
    
      });

var infodata = JSON.parse(window.localStorage.getItem('infoData'));
var  user_id = infodata.data.receipt
// console.log(user_id);
fetch('http://162.240.56.117:5000/gettranscomplete/' + user_id, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(function(response) {
        return response.json();
      }).then(function(data) {
        // console.log(data);
        window.localStorage.setItem('invoicedata', JSON.stringify(data))
        for (var i = 1; i < data.length; i++) {
           
        }
        if (data.length > 0) {
          var temp = "";
          var today = new Date();
           var dd = String(today.getDate()).padStart(2, '0');
           var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
           var yyyy = today.getFullYear();
           today = dd + '-' + mm + '-' + yyyy;
        //    console.log(today);
           
          data.forEach((itemData, i) => {
            const nr = itemData.amount;
           const result = Math.floor(nr / 100);
           var d = new Date();
           
            d.setMonth(d.getMonth() + parseInt(itemData.months));
            var endate = d.toISOString().replace(/T.*/,'').split('-').reverse().join('-');
           window.localStorage.setItem("endate", d.toISOString().replace(/T.*/,'').split('-').reverse().join('-'));
           var total = result * 0.18;
           var tot_price = parseFloat(result) + parseFloat(total);
           var address = window.localStorage.getItem('address');
           var extra_address = window.localStorage.getItem('extraaddress');
           var Discount = window.localStorage.getItem("Discount");
           var Actual_price = window.localStorage.getItem("Actualprice");
           var unit_price = parseInt(Actual_price)/(parseInt(itemData.months))
            if(extra_address == "" || extra_address == "null" || extra_address == null)
            {
                new_address = address;
                // console.log(new_address);
                localStorage.setItem('newaddress', new_address);
            }
            else
            {
                new_address = window.localStorage.getItem('extraaddress');
                // console.log(new_address);
                localStorage.setItem('newaddress', new_address);
            }
        //    document.getElementById('gstprice').innerHTML = tot_price
          temp += `<div id="printableArea">
                     <img style="float: right;" src="../assets/img/logo-kg.png"/>
                      <div class="row">
                        <div class="col-xs-12">
                            <h2 class="page-header">
                                <!-- <i class="fa fa-globe"></i> Trust point Co. -->
                                <b>Invoice</b> #${itemData.receiptno}<br>
                            </h2>
                        </div><!-- /.col -->
                        
                    </div>
                    <!-- info row -->
                    <div class="row invoice-info" >
                        <div class="col-sm-6 invoice-col">
                            From
                            <address>
                            <strong>Shailendra</strong>
                            <br>
                            Address: Pune<br>
                            Phone: 9325031747<br>
                            Email: share@konnectogrow.com</address>
                        </div><!-- /.col -->
                        <div class="col-sm-6 invoice-col" style="text-align : right">
                            To
                                <address>
                                <strong>${itemData.name}</strong>
                                <br>
                                Address: ${new_address}<br>
                                Phone: ${itemData.phoneno}<br>
                                Email: ${itemData.email} </address>
                        </div><!-- /.col -->
                       
                     </div><!-- /.row -->

                <!-- Table row -->
                <div class="row">
                    <div class="col-xs-12 table-responsive">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>Duration(Months)</th>
                                    <th>Package</th>
                                    <th>Unit Price(INR)</th>
                                    <th style="text-align: right;" >Total(INR)</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                
                                <tr>
                                    <td>${itemData.months}</td>
                                    <td>${itemData.nameofproduct}</td>
                                    <td>${unit_price}</td>
                                    <td style="text-align: center;">${Actual_price}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div><!-- /.col -->
                    
                </div><!-- /.row -->

                <div class="row">
                    <!-- accepted payments column -->
                    <div class="col-md-12">
                        
                        <div class="table-responsive" style="float: right;">
                            <table class="table" >
                                <tbody style="text-align: right;"> 
                                <tr >
                                    <th>Discount:</th>
                                    <td>${Discount}%</td>
                                </tr> 
                                <tr>
                                <th>Discount Amount: </th>
                                    <td>₹${result}</td>
                                </tr>
                                    <tr >
                                        <th>CGST:</th>
                                        <td>  9%</td>
                                    </tr> 
                                    <tr>
                                        <th>SGST:</th>
                                        <td>  9%</td>
                                    </tr>
                                    <tr>
                                        <th>Grand Total:</th>
                                        <td>₹ ${tot_price}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div><!-- /.col -->
                </div><!-- /.row -->

                <div class="row invoice-info" style="margin-top : 5%" >
                    <div class="col-sm-12 invoice-col">
                    <table class="table table-striped" style="text-align: center;" >
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Transaction Id</th>
                            <th>Subscription Start Date</th>
                            <th>Subscription End Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        
                        <tr>
                            <td>${itemData.userid}</td>
                            <td>${itemData.accountno}</td>
                            <td>${today}</td>
                            <td>${d.toISOString().replace(/T.*/,'').split('-').reverse().join('-')}</td>
                        </tr>
                    </tbody>
                </table>
                  
                </div><!-- /.col -->
                </div>
            </div>
      <!-- this row will not appear when printing -->
      <div class="row no-print">
          <div class="col-xs-12">
          <!--  <a href="" class="btn btn-default" onclick="printDiv('printableArea')"><i class="fa fa-print"></i> Print</a> -->
              <button class="btn btn-success pull-right" onclick="next()">Get Email</button>
              <button class="btn btn-primary pull-right" onclick="printDiv('printableArea')" style="margin-right: 5px;" ><i class="fa fa-print"></i> Print Invoice</button>
              <button class="btn btn-success pull-right" onclick="nextindex()" style="margin-right: 5px;" ><i class="fa fa-arrow-right"></i>Next</button>
          </div>
      </div>`
         });
        document.getElementById('data').innerHTML = temp;
        window.localStorage.setItem("startdate",today);
      
        }
        
      }).catch(function() {
       
      });


// var doc = new jsPDF();
// var specialElementHandlers = {
//     '#editor': function (element, renderer) {
//         return true;
//     }
// };

// function generatePDF()
// {
    
//     doc.fromHTML($('#printableArea').html(), 15, 15, {
//         'width': 1000,
//         'elementHandlers': specialElementHandlers
//     });
//     doc.save('Invoice.pdf');
// }
function nextindex()
{
    // window.location.href = "../index.html"
    const data = {
        "startdate":window.localStorage.getItem('startdate'),
        "enddate":window.localStorage.getItem('endate'),
        "userid":window.localStorage.getItem('userid'),
        "restid":window.localStorage.getItem('resturantid')
      };
    //   console.log(JSON.stringify(data));
      try {
    
        const api = "http://162.240.56.117:5000/user_metadata";
        
        let options = {
            method: 'POST',
            headers: {"Access-Control-Allow-Origin" : "*",
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        }
    
        let fetchRes = fetch(
            api,
            options);
        fetchRes.then(res => {
            return res.json();
        }).then((data) => {
            // console.log(data);
            if(data.msg == "success in Insert dates data")
            {
                window.location.href = "../index.html"
            }
            // document.getElementById('messageverify').innerHTML = data
        })
    } catch (e) {
        // console.log(e);
    }
  
    const data1 = {
        "rest_id": window.localStorage.getItem('resturantid'),
        "typeofsub":window.localStorage.getItem('packagename'),
        "phone_no":window.localStorage.getItem('mobile'),
        "amount": window.localStorage.getItem('subprice'),
        "datetime": window.localStorage.getItem('startdate'),
        "expire_time":window.localStorage.getItem('endate'),
      };
    //   console.log(JSON.stringify(data));
      try {
      
        const api = "http://162.240.56.117:5000/addsubscription";
        
        let options = {
            method: 'POST',
            headers: {"Access-Control-Allow-Origin" : "*",
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data1)
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
function next()
{
    var emaildata = JSON.parse(window.localStorage.getItem('registerdata'))
    var invoicedata = JSON.parse(window.localStorage.getItem('invoicedata'))
    // console.log(invoicedata);

    if (invoicedata.length > 0) {

        invoicedata.forEach((itemData, i) => {
            window.localStorage.setItem('invoicesingledata', JSON.stringify(itemData));
      });
    }
    var invoicesingledata = JSON.parse(window.localStorage.getItem('invoicesingledata'))
    // console.log(invoicesingledata);
    const nr = invoicesingledata.amount;
    const result = Math.floor(nr / 100)
    var email = emaildata.email
    var date = (new Date()).toISOString().split('T')[0];
    const data = {
        "dateinfo":date,
        "name": invoicesingledata.name,
        "address": window.localStorage.getItem('newaddress'),
        "phoneno":invoicesingledata.phoneno,
        "emailver":invoicesingledata.email,
        "receiptno":invoicesingledata.receiptno,
        "orderid":invoicesingledata.userid,
        "accountno":invoicesingledata.accountno,
        "month":invoicesingledata.months,
        "productname": invoicesingledata.nameofproduct,
        "amount": result,
        "startdate":window.localStorage.getItem('startdate'),
        "enddate":window.localStorage.getItem('endate'),
      };
    //   console.log(JSON.stringify(data));
      try {
    
        const api = "http://162.240.56.117:5000/sendinvoice/" + email;
        
        let options = {
            method: 'POST',
            headers: {"Access-Control-Allow-Origin" : "*",
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        }
    
        let fetchRes = fetch(
            api,
            options);
        fetchRes.then(res => {
            return res.json();
        }).then((data) => {
            // console.log(data);
            // alert(data.msg);
            if(data.msg == "sent email success")
            {
                document.getElementById('id01').style.display='block'
            }
            // document.getElementById('messageverify').innerHTML = data.msg
        })
    } catch (e) {
        // console.log(e);
    }
  
}
function printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}