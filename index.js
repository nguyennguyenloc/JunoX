var listRegex = [];

$(function () {
  getListRegex();

  $("#Main_Form_ID").submit(function () {
    var v_input = $("#input").val();

    if (!v_input) {
      // show error message
      alert("Please enter Regex!");
      return false;
    }

    var Regex = {
      input: v_input,
    };
    console.log("new Regex", Regex);

    //hàm đẩy dữ liệu tạo Regex
    $.post("http://localhost:8080/api/Regexs", Regex, function (data, status) {
      if (status == "error") {
        alert("Error When loading data");
        return;
      }

      //success
      getListRegex();
    });

    // listRegex.push(Regex);
    showRegex();
  });
});

//hàm lấy dữ liệu Regex
function getListRegex() {
  $.get("http://localhost:8080/api/v1/listRegex", function (data, status) {
    if (status == "error") {
      alert("Error When loading data");
      return;
    }
    data.forEach((item) => {
      var regex = {
        // id: item.id,
        name: item.name,
      };
      listRegex.push(regex);
    });
    // console.log("list position", listPosition);
  });
}

//Viết hàm showRegex()
function showRegex() {
  $("#Result_TB").empty();
  for (var index = 0; index < listRegex.length; index++) {
    $("#Result_TB").append(`${listRegex[index].RegexID}`);
  }
}
