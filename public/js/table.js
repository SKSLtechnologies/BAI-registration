$(document).ready(function () {

  var n = localStorage.getItem('on_load_counter');
  if (n === null) {
    n = 0;
  }
  n++;

  localStorage.setItem("on_load_counter", n);


  $(".filter").click(function () {
    window.location.replace("/filter");
  });

var url; 
  if (n == 1) {
    url = "/members"
  } else {
    url = "/searched"
  }



  $(".home").click(function () {
    window.location.replace("/");
  });

  $(".showAll").click(function () {
    localStorage.setItem("on_load_counter", 0)
    window.location.replace("/list");
  });


  var table = document.getElementById("myTable");
  var tbl = $("<table/>").attr("id", "mytable");


  $("#div1").append(tbl);
  axios({
      method: 'get',
      url: url,
      data: {
        id: 'SKSLtechnologies',
      }
    })
    .then(function (response) {
        var tr = "<thead><tr>";
        var th1 = "<th class = 'hide-on-mobile no' >#</th>";
        var th2 = "<th class = 'name'>Name</th>";
        var th3 = "<th class= 'center' >Center</th>";
        var th4 = "<th class = 'hide-on-mobile phone'>Phone</th>"
        $("#mytable").append(tr + th1 + th2 + th3 + th4);

      var a = 1;
      for (var i = 0; i < response.data.length; i++) {

        var td1 = "<tr><td class = 'tno hide-on-mobile'>" + a + "</td>";
        var td2 = "<td class= 'tname'>" + response.data[i]["name"] + "</td>";
        var td3 = "<td class= tplace>" + response.data[i]["city"] + "</td>";
        var td4 = "<td class= 'tphone hide-on-mobile'>" + response.data[i]["office"] + "</td>";
        $("#mytable").append(td1 + td2 + td3 + td4);
        a++;
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