$(document).ready(function() {
  var plot = document.getElementById("plot");

  plot.onclick = function() {
    var data = JSON.parse(xaringan_figure_data);
    var newData = data.data.slice(data.index, data.index + 10);
    newData.forEach(d => {d.visible = true;});
    xaringan_figure_data = JSON.stringify({data: newData, index: data.index + 10});
    xaringan_reveal_all();
  };
});