function submitStudent(name, grade, phone, testMath, testDev, src) {
  $("#alert").show();
  $("#loadingAl").show();
  console.log(src);
  var api =
    "https://script.google.com/macros/s/AKfycbzjgavpwX-u-fxq8sjPhRM3-Riyoswfog9XZ1qQmOdKYE5Zea8SVx0OckgfmqwhknXikg/exec";

  api =
    api +
    "?name=" +
    name +
    "&grade=" +
    grade +
    "&phoneNo=" +
    phone +
    "&testMath=" +
    testMath +
    "&testDev=" +
    testDev +
    "&src=" +
    src;

  fetch(api, {
    redirect: "follow",
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
  }).then((res) => {
    $("#loadingAl").hide();
    $("#sucessAl").show();
  });
}

$(".submitbtn").on("click", function (event) {
  var form = event.currentTarget.parentElement;
  var collection = form.getElementsByClassName("txtfield");
  var name = collection[0].value;
  var phone = collection[1].value;
  if (phone == "") {
    collection[1].style.border = "2px solid red";
    collection[1].setAttribute("placeholder", "Vui lòng nhập số điện thoại");
    collection[1].addEventListener("focusout", function () {
      if (this.value != "") {
        this.style.border = "none";
      }
    });
  } else {
    var src = window.location.href;
    submitStudent(name, null, phone, false, true, src);
  }
});

$("#alBtn").on("click", function (event) {
  $("#alert").hide();
  $("#sucessAl").hide();
});
//  map
$("#goToMap").on("click", function (event) {
  window.open("https://maps.app.goo.gl/arAnxNQZ9BjNMHXf7?g_st=ic", "_blank");
});
$("#goMath").on("click", function (event) {
  window.open("toan-hoc", "_self");
});
$("#goDev").on("click", function (event) {
  window.open("lap-trinh", "_self");
});

// link_youtube
function openVideoPopup() {
  var videoPopup = document.getElementById("videoPopup");
  videoPopup.style.display = "block";
}

// Đóng popup video
function closeVideoPopup() {
  var videoPopup = document.getElementById("videoPopup");
  videoPopup.style.display = "none";
}
