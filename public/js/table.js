$(document).ready(function () {
  console.log("ready!");

  

var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];
  $(".filter").click(function(){
    console.log("HELP ME")
    modal.style.display = "block";
  });
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }}

  var table = document.getElementById("myTable");
  var tbl = $("<table/>").attr("id", "mytable");


  $("#div1").append(tbl);
  axios({
      method: 'get',
      url: '/members',
      data: {
        id: 'SKSLtechnologies',
      }
    })
    .then(function (response) {
      var tr = "<thead><tr>";
      var th1 = "<th style='padding:0 18px;'>#</th>";
      var th2 = "<th style='padding:0 50px;'>Name</th>";
      var th3 = "<th style='padding:0 35px;'>BAI Center</th>";
      var th4 = "<th style='padding:0 33px;'>Phone</th>"
      var th5 = "<th style='padding:0 124px;'>Email</th></tr><thead><tbody>";
      $("#mytable").append(tr + th1 + th2 + th3 + th4 + th5);
      for (var i = 1; i < response.data.length; i++) {
        
        var td1 = "<tr><td class=" + "hide-on-mobile>" + i + "</td>";
        var td2 = "<td>" + response.data[i]["name"] + "</td>";
        var td3 = "<td>" + response.data[i]["city"] + "</td>";
        var td4 = "<td>" + response.data[i]["office"] + "</td>";
        var td5 = "<td>" + response.data[i]["email"] + "</td></tr>";
        $("#mytable").append(td1 + td2 + td3 + td4 + td5);
      }
      var th6 = "</tbody>";
      $("#mytable").append(th6);
    })
    .catch(function (error) {
      if (error.response) {
        console.log(
          "Request was made and server responded with a non 200 status"
        );
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log("Request was made, but no response was received");
        console.log(error.request);
      } else {
        console.log("Something happened setting up the request");
        console.log(error.message);
      }
    });
});