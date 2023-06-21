

$("#goToMap").on("click", function (event) {
  window.open("https://maps.app.goo.gl/arAnxNQZ9BjNMHXf7?g_st=ic", "_blank");
});
$("#goMath").on("click", function (event) {
  window.open("toan-hoc", "_self");
});
$("#goDev").on("click", function (event) {
  window.open("lap-trinh", "_self");
});

// form_mobile
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

  // Kiểm tra hợp lệ cho tên và số điện thoại
  var nameRegex = /^[^\d\s]+$/; // Regex kiểm tra tên không chứa số
  var phoneRegex = /^0/; // Regex kiểm tra số điện thoại bắt đầu từ 0

  if (!nameRegex.test(name)) {
    collection[0].style.border = "2px solid red";
    collection[0].setAttribute("placeholder", "Vui lòng nhập tên hợp lệ");
    collection[0].addEventListener("focusout", function () {
      if (nameRegex.test(this.value)) {
        this.style.border = "none";
      }
    });
  }
  if (!/^0|\+84/.test(phone)) {
    collection[2].style.border = "2px solid red";
    collection[2].setAttribute(
      "placeholder",
      "Vui lòng nhập số điện thoại hợp lệ"
    );
    collection[2].addEventListener("focusout", function () {
      if (/^0|\+84/.test(this.value)) {
        this.style.border = "none";
      }
    });
  } else {
    var src = window.location.href;
    submitStudent(name, grade, phone, true, false, src);
  }
});
// end_form
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
