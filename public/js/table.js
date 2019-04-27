var table = document.getElementById("myTable");
axios
  .get("https://infinite-hamlet-63164.herokuapp.com/members")
  .then(function(response) {
    for (var i = 0; i < response.data.length; i++) {
      row = table.insertRow(i);
      contr_name = row.insertCell(0);
      equipments = row.insertCell(1);
      city = row.insertCell(2);
      org_name = row.insertCell(3);
      clients = row.insertCell(4);
      contr_name.innerHTML = response.data[i].name;
      equipments.innerHTML = response.data[i].equipments;
      city.innerHTML = response.data[i].state;
      org_name.innerHTML = response.data[i].org_name;
      clients.innerHTML = response.data[i].clients;
    }
  })
  .catch(function(error) {
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