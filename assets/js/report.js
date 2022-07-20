var is_login = window.sessionStorage.getItem("is_login");
console.log(is_login);
      
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


$(".chosen-select").chosen({
  no_results_text: "Oops, nothing found!"
});

$('#selectmonth').change(function ()
{
var selectedValues = $('#selectmonth').val();
console.log(JSON.stringify(selectedValues));
var values = $('#selectmonth').find('option:selected').map(function() {
  return $(this).val()
}).get()
console.log(values);
window.localStorage.setItem('reportmonth', JSON.stringify(values));
$( "#chartContainer" ).load(window.location.href + " #chartContainer" );
getData();
});


// window.onload = function() {
//   var selItem = localStorage.getItem("reportmonth");  
//   jQuery('#selectyear').val(selItem);
//   jQuery('#selectmonth').val(selItem);
//   }
function checkCategory() {
   
  var invoice = document.getElementById('selectinvoice').value;
  console.log(invoice);
  window.localStorage.setItem('invoicevalue', invoice)
  getdata1();
}

function checkCategory1() {
   
  var year = document.getElementById('selectyear').value;
  console.log(year);
  window.localStorage.setItem('reportmonth',  JSON.stringify(year));
  getData();
}

getData();

async function getData() {

  fetch('http://162.240.56.117:5000/orders/'+ window.localStorage.getItem('resturantid') , {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(function(response) {
        return response.json();
      }).then(function(data) {
           var date_total = [];
           for (i = 0; i < data.Data.length; i++) {
        }   
        if (data.Data.length > 0) {
          data.Data.forEach((itemData, i) => {
            date_total.push(itemData.date);
            function onlyUnique(value, index, self) {
              return self.indexOf(value) === index;
            }
            var unique = date_total.filter(onlyUnique);
            console.log(unique); 
            window.localStorage.setItem('datereport', unique)
          });
        }
      }).catch(function() {
      });

  const data1 = {
        "restid":window.localStorage.getItem('resturantid'),
        "date": window.localStorage.getItem('datereport')
        };
        try {
  
          const api = "http://162.240.56.117:5000/sort_order_reports";
          
          let options = {
              method: 'POST',
              headers: {"Access-Control-Allow-Origin" : "*",
                  'Content-Type': 'application/json;charset=utf-8'
              },
              body: JSON.stringify(data1)
          }
      
          let fetchRes = fetch(
              api,
              options);
          fetchRes.then(res => {
              return res.json();
          }).then((data) => {
              console.log(data);
              length = data.Data.length;
              // console.log(length);
             const unique = [...new Set(data.Data.map(item => item.date))];
             console.log(unique);
              var month_name = function(dt){
                mlist = [ 'jan','feb','march','april','may','june','july','aug','sep','oct','nov'];
                  return mlist[dt.getMonth()];
                };
                var month1 = month_name(new Date(unique))
                console.log(month1);
                var month = window.localStorage.getItem('reportmonth').replace(/[[\]]/g, '').replace(/['"]+/g, '')
                console.log(month);
                var elsemonth  = [];
                elsemonth.push(month)
                const newArr = elsemonth[0].split(',').map(x => x.trim());
          //       console.log(newArr);
          //       var month1 = month_name(new Date(window.localStorage.getItem('datereport')))
          //       console.log(month1);
                var label = []
                var values = [];
                label.push(month_name(new Date(unique)));
                values.push(data.Total);
              //   for (i = 0; i < length; i++) {
                 
                 
              // }
                if(month == month1)
                {
                 
                  new Chart(document.getElementById("barchart"), {
                    type: 'bar',
                    data: {
                        labels: label,
                        datasets: [
                            {
                                label: "Amount(INR)",
                                backgroundColor: ["#3e95cd",
                                                  "#8e5ea2", 
                                                  "#3cba9f", 
                                                  "#e8c3b9", 
                                                  "#c45850",
                                                  "#CD5C5C", 
                                                  "#40E0D0"],
                                                  
                                data: values
                            }
                        ]
                    },
                    options: {
                        legend: { display: false },
                        title: {
                            display: true,
                            text: 'Order Data'
                        }
                    }
                });
                }
                
                else{
                  new Chart(document.getElementById("barchart"), {
                    type: 'bar',
                    data: {
                        labels: newArr,
                        datasets: [
                            {
                                label: "Amount(INR)",
                                backgroundColor: ["#3e95cd",
                                                  "#8e5ea2", 
                                                  "#3cba9f", 
                                                  "#e8c3b9", 
                                                  "#c45850",
                                                  "#CD5C5C", 
                                                  "#40E0D0"],
                                                  
                                data: 0
                            }
                        ]
                    },
                    options: {
                        legend: { display: false },
                        title: {
                            display: true,
                            text: 'Order Data'
                        }
                    }
                });
                }

                if(month == "month")
                {
                     new Chart(document.getElementById("barchart"), {
                       type: 'bar',
                       data: {
                           labels: [
                             'Jan',
                             'Feb',
                             'Mar',
                             'April'
                           ],
                       
                           datasets: [
                               {
                                   label: "Amount(INR)",
                                   backgroundColor: ["#3e95cd",
                                                     "#8e5ea2", 
                                                     "#3cba9f", 
                                                     "#e8c3b9", 
                                                     "#c45850",
                                                     "#CD5C5C", 
                                                     "#40E0D0"],
                                                     
                                   data: [12, 19, 3, 5]
                               }
                           ]
                       },
                       options: {
                           legend: { display: false },
                           title: {
                               display: true,
                               text: 'Order Data'
                           }
                       }
                   });
                   }
               
                   if(month == "year")
                   {
                        new Chart(document.getElementById("barchart"), {
                          type: 'bar',
                          data: {
                              labels: [
                                '2018-19',
                                '2019-20',
                                '2020-21',
                                '2021-22'
                              ],
                          
                              datasets: [
                                  {
                                      label: "Amount(INR)",
                                      backgroundColor: ["#3e95cd",
                                                        "#8e5ea2", 
                                                        "#3cba9f", 
                                                        "#e8c3b9", 
                                                        "#c45850",
                                                        "#CD5C5C", 
                                                        "#40E0D0"],
                                                        
                                      data: [12, 19, 3, 5]
                                  }
                              ]
                          },
                          options: {
                              legend: { display: false },
                              title: {
                                  display: true,
                                  text: 'Order Data'
                              }
                          }
                      });
                      }
         
                      if(month == "quarter")
                      {
                           new Chart(document.getElementById("barchart"), {
                             type: 'bar',
                             data: {
                                 labels: [
                                   'Jan',
                                   'Feb',
                                   'Mar',
                                   'April'
                                 ],
                             
                                 datasets: [
                                     {
                                         label: "Amount(INR)",
                                         backgroundColor: ["#3e95cd",
                                                           "#8e5ea2", 
                                                           "#3cba9f", 
                                                           "#e8c3b9", 
                                                           "#c45850",
                                                           "#CD5C5C", 
                                                           "#40E0D0"],
                                                           
                                         data: [12, 19, 3, 5]
                                     }
                                 ]
                             },
                             options: {
                                 legend: { display: false },
                                 title: {
                                     display: true,
                                     text: 'Order Data'
                                 }
                             }
                         });
                         }
          
            })
          

           } catch (e) {
                    console.log(e);
          }
      }
getdata1();
async function getdata1() {
  fetch('http://162.240.56.117:5000/get_totalinovices_report/'+ window.localStorage.getItem('resturantid') , {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(function(response) {
        return response.json();
      }).then(function(data) {
        console.log(data);
        var label = []
        var values = [];
        var values1 = [];
        var values2 = [];
        label.push(window.localStorage.getItem('invoicevalue'));
        values.push(data.Total);
        values1.push(data.count_for_cash);
        values2.push(data.count_for_card);
        var invoice = window.localStorage.getItem('invoicevalue')
        if(invoice == "cash")
        {
         
          new Chart(document.getElementById("barchart1"), {
            type: 'bar',
            data: {
                labels: label,
                datasets: [
                    {
                        label: "Amount(INR)",
                        backgroundColor: ["#3e95cd",
                                          "#8e5ea2", 
                                          "#3cba9f", 
                                          "#e8c3b9", 
                                          "#c45850",
                                          "#CD5C5C", 
                                          "#40E0D0"],
                                          
                        data: values1
                    }
                ]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Total Billing Data'
                }
            }
        });
        }
        if(invoice == "card")
        {
         
          new Chart(document.getElementById("barchart1"), {
            type: 'bar',
            data: {
                labels: label,
                datasets: [
                    {
                        label: "Amount(INR)",
                        backgroundColor: ["#3e95cd",
                                          "#8e5ea2", 
                                          "#3cba9f", 
                                          "#e8c3b9", 
                                          "#c45850",
                                          "#CD5C5C", 
                                          "#40E0D0"],
                                          
                        data: values2
                    }
                ]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Total Billing Data'
                }
            }
        });
        }
        if(invoice == "total")
        {
         
          new Chart(document.getElementById("barchart1"), {
            type: 'bar',
            data: {
                labels: label,
                datasets: [
                    {
                        label: "Amount(INR)",
                        backgroundColor: ["#3e95cd",
                                          "#8e5ea2", 
                                          "#3cba9f", 
                                          "#e8c3b9", 
                                          "#c45850",
                                          "#CD5C5C", 
                                          "#40E0D0"],
                                          
                        data: values
                    }
                ]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Total Billing Data'
                }
            }
        });
        }
      }).catch(function() {
      });
}

$('#downloadPdf').click(function(event) {
    // get size of report page
    var reportPageHeight = $('#reportPage').innerHeight();
    var reportPageWidth = $('#reportPage').innerWidth();
    
    // create a new canvas object that we will populate with all other canvas objects
    var pdfCanvas = $('<canvas />').attr({
      id: "canvaspdf",
      width: reportPageWidth,
      height: reportPageHeight
    });
    
    // keep track canvas position
    var pdfctx = $(pdfCanvas)[0].getContext('2d');
    var pdfctxX = 0;
    var pdfctxY = 0;
    var buffer = 100;
    
    // for each chart.js chart
    $("canvas").each(function(index) {
      // get the chart height/width
      var canvasHeight = $(this).innerHeight();
      var canvasWidth = $(this).innerWidth();
      
      // draw the chart into the new canvas
      pdfctx.drawImage($(this)[0], pdfctxX, pdfctxY, canvasWidth, canvasHeight);
      pdfctxX += canvasWidth + buffer;
      
      // our report page is in a grid pattern so replicate that in the new canvas
      if (index % 2 === 1) {
        pdfctxX = 0;
        pdfctxY += canvasHeight + buffer;
      }
    });
    
    // create new pdf and add our new canvas as an image
    var pdf = new jsPDF('l', 'pt', [reportPageWidth, reportPageHeight]);
    pdf.addImage($(pdfCanvas)[0], 'PNG', 0, 0);
    
    // download the pdf
    pdf.save('filename.pdf');
  });