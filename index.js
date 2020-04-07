let url = "https://covid19-brazil-api.now.sh/api/report/v1";

window.onload = function () {
  let data = getData();
  this.console.log(data);
};

function getData() {
  let req = new XMLHttpRequest();
  req.open("GET", url);
  req.responseType = "json";
  req.send();

  req.onload = function () {
    var data = req.response.data;
    showData(data);
  };
}

function showData(data) {
  for (let i = 0; i < data.length; i++) {
    createTable(data[i]);
  }
}

function createTable(data) {
  $("tbody").append("<tr>");

  $("tbody").append("<td> " + data.state + "</td>");
  $("tbody").append("<td> " + data.cases + "</td>");
  $("tbody").append("<td> " + data.deaths + "</td>");

  $("tbody").append("</tr>");
}
