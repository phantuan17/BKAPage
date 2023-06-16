
      // <![CDATA[  <-- For SVG support
      if ("WebSocket" in window) {
        (function () {
          function refreshCSS() {
var sheets = [].slice.call(document.getElementsByTagName("link"));
            var head = document.getElementsByTagName("head")[0];
            for (var i = 0; i < sheets.length; ++i) {
              var elem = sheets[i];
              var parent = elem.parentElement || head;
              parent.removeChild(elem);
              var rel = elem.rel;
              if (
                (elem.href && typeof rel != "string") ||
                rel.length == 0 ||
                rel.toLowerCase() == "stylesheet"
              ) {
                var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, "");
                elem.href =
                  url +
                  (url.indexOf("?") >= 0 ? "&" : "?") +
                  "_cacheOverride=" +
                  new Date().valueOf();
              }
              parent.appendChild(elem);
            }
          }
          var protocol =
            window.location.protocol === "http:" ? "ws://" : "wss://";
          var address =
            protocol + window.location.host + window.location.pathname + "/ws";
          var socket = new WebSocket(address);
          socket.onmessage = function (msg) {
            if (msg.data == "reload") window.location.reload();
            else if (msg.data == "refreshcss") refreshCSS();
          };
          if (
            sessionStorage &&
            !sessionStorage.getItem("IsThisFirstTime_Log_From_LiveServer")
          ) {
            console.log("Live reload enabled.");
            sessionStorage.setItem("IsThisFirstTime_Log_From_LiveServer", true);
          }
        })();
      } else {
        console.error(
          "Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading."
        );
      }
      // ]]>
    

    
 
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

    function submitStudent(name, grade, phone, testMath, testDev, src) {
      console.log(name);
      console.log(grade);
      console.log(phone);
      console.log(testMath);
      console.log(testDev);
      $("#alert").show();
      $("#loadingAl").show();

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

    $(".submitButton").on("click", function (event) {
      var form = event.currentTarget.parentElement;
      var collection = form.getElementsByClassName("textField");
      var name = collection[0].value;
      var grade = collection[1].value;
      var phone = collection[2].value;
      if (phone == "") {
        collection[2].style.border = "2px solid red";
        collection[2].setAttribute(
          "placeholder",
          "Vui lòng nhập số điện thoại"
        );
        collection[2].addEventListener("focusout", function () {
          if (this.value != "") {
            this.style.border = "none";
          }
        });
      } else {
        var src = window.location.href;
        submitStudent(name, "null", phone, true, false, src);
      }
    });

    $("#alBtn").on("click", function (event) {
      $("#alert").hide();
      $("#sucessAl").hide();
    });
    $("#goToRes3Btn").on("click", function (event) {
      $("html, body").animate(
        {
          scrollTop: $("#submitForm2").offset().top,
        },
        1000
      );
    });
    $("#goToRes2Btn").on("click", function (event) {
      $("html, body").animate(
        {
          scrollTop: $("#submitForm2").offset().top,
        },
        1000
      );
    });
    $("#goToRes1Btn").on("click", function (event) {
      $("html, body").animate(
        {
          scrollTop: $("#submitForm1").offset().top,
        },
        1000
      );
    });
 
    var slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
      showSlides((slideIndex += n));
    }

    // Thumbnail image controls
    function currentSlide(n) {
      showSlides((slideIndex = n));
    }

    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
    }
