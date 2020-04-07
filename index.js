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
  console.log(data);
  let state = data.state;
  let cases = data.cases;
  let deaths = data.deaths;

  $("tbody").append("<td> " + state + "</td>");
  $("tbody").append("<td> " + cases + "</td>");
  $("tbody").append("<td> " + deaths + "</td>");

  $("tbody").append("</tr>");
}
