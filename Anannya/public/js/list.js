$(document).ready(function () {
  console.log("ready!");

  var table = document.getElementById("myTable");
  var tbl = $("<table/>").attr("id", "mytable");

  // var tr1 = "<tr>"
  // var th1 = "<th>Name</td>";
  // var th2 = "<th>Equipments</th>";
  // var th3 = "<th>State</th></tr>";
  $("#div1").append(tbl);
  axios({
      method: 'get',
      url: '/members',
      timeout: 4000, // Let's say you want to wait at least 4 mins
      data: {
        id: '1234',
      }
    })
    .then(function (response) {
<<<<<<< HEAD
      for (var i = 0; i < response.data.length; i++) {
        var tr = "<tr>";
        var td1 = "<td class="+"small-w>" + response.data[i]["name"] + "</td>";
        var td5 = "<td class="+"small-w>" + response.data[i]["org_name"] + "</td>";
        var td2 = "<td class="+"small-w>" + response.data[i]["equipments"] + "</td>";
        var td3 = "<td>" + response.data[i]["state"] + "</td>";
        var td4 = "<td class="+"hide-on-mobile>" + response.data[i]["clients"] + "</td>";
        var td6 = "<td class="+"hide-on-mobile>" + response.data[i]["work_nature"] + "</td></tr>";
        $("#mytable").append(tr + td1 + td5 + td2 + td3 + td4 + td6);

=======
      for (var i = 1; i <response.data.length; i++) {
        var tr = "<tr>";
        var td4 = "<td class="+"hide-on-mobile>" + i + "</td>";
        var td1 = "<td class="+"small-w>" + response.data[i]["name"] + "</td>";
        var td5 = "<td class="+"small-w>" + response.data[i]["org_name"] + "</td>";
        var td2 = "<td class="+"hide-on-mobile>" + response.data[i]["address"] + "</td>";
        var td3 = "<td>" + response.data[i]["city"] + "</td>";
        $("#mytable").append(tr + td4 + td1 + td5 + td2 + td3);
>>>>>>> 1d4f4e7ea1b765f02bbb37a9c1017c6cb425c512
      }
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