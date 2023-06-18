 
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
        collection[1].setAttribute(
          "placeholder",
          "Vui lòng nhập số điện thoại"
        );
        collection[1].addEventListener("focusout", function () {
          if (this.value != "") {
            this.style.border = "none";
          }
        });
      } else {
        var src = window.location.href;
        submitStudent(name, "null", phone, false, true, src);
      }
    });

    $("#alBtn").on("click", function (event) {
      $("#alert").hide();
      $("#sucessAl").hide();
    });
//  map
    $("#goToMap").on("click", function (event) {
      window.open(
        "https://maps.app.goo.gl/arAnxNQZ9BjNMHXf7?g_st=ic",
        "_blank"
      );
    });
    $("#goMath").on("click", function (event) {
      window.open("toan-hoc", "_self");
    });
    $("#goDev").on("click", function (event) {
      window.open("lap-trinh", "_self");
    });
 
    // link_youtube
    document.addEventListener("DOMContentLoaded", function () {
      var popupButtons = document.querySelectorAll(".video-popup-button");
      var videoPopup = document.querySelector(".video-popup");
      var videoClose = document.querySelector(".video-popup-close");
      var videoIframe = document.querySelector(".video-popup-content iframe");

      popupButtons.forEach(function (button) {
        button.addEventListener("click", function () {
          var videoId = button.getAttribute("data-video-id");
          var videoUrl = "https://www.youtube.com/embed/" + videoId;
          videoIframe.src = videoUrl;
          videoPopup.style.display = "block";
        });
      });

      videoClose.addEventListener("click", function () {
        videoPopup.style.display = "none";
        videoIframe.src = "";
      });
    });
  