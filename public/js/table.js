$(document).ready(function () {

  var n = localStorage.getItem('on_load_counter');
  if (n === null) {
    n = 0;
  }
  n++;

  localStorage.setItem("on_load_counter", n);

  nums = n.toString().split('').map(Number);
  var modal = document.getElementById('myModal');
  var span = document.getElementsByClassName("close")[0];
  $(".filter").click(function () {
    modal.style.display = "block";
  });
  span.onclick = function () {
    modal.style.display = "none";
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  if (n == 1) {
    var url = "/members"
  } else {
    url = "/searched"
  }

  $(".submit").click(function () {
    console.log("Submit!")
  })



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
      var th1 = "<th style='padding:0 18px;'>#</th>";
      var th2 = "<th style='padding:0 50px;'>Name</th>";
      var th3 = "<th style='padding:0 35px;'>BAI Center</th>";
      var th4 = "<th class = 'hide-on-mobile'style='padding:0 33px;'>Phone</th>"
      var th5 = "<th class = 'hide-on-mobile'style='padding:0 124px;'>Email</th></tr><thead><tbody>";
      $("#mytable").append(tr + th1 + th2 + th3 + th4 + th5);
      var a = 1;
      for (var i = 0; i < response.data.length; i++) {

        var td1 = "<tr><td class=" + "tno>" + a + "</td>";
        var td2 = "<td class=" + "tname>" + response.data[i]["name"] + "</td>";
        var td3 = "<td class=" + "tplace>" + response.data[i]["city"] + "</td>";
        var td4 = "<td class=" + "tphone hide-on-mobile>" + response.data[i]["office"] + "</td>";
        var td5 = "<td  class=" + "temail hide-on-mobile>" + response.data[i]["email"] + "</td></tr>";
        $("#mytable").append(td1 + td2 + td3 + td4 + td5);
        a++;
      }
      var th6 = "</tbody>";
      $("#mytable").append(th6);
    })
    .catch(function (error) {

      if (!error.response) {
        this.errorStatus = 'Error: Network Error';
      } else {
        this.errorStatus = error.response.data.message;
      }
    });
});