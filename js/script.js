//Toggle class active
const navbarnav = document.querySelector(".navbar-nav");
//ketika menu di klik
document.querySelector("#menu").onclick = () => {
  navbarnav.classList.toggle("active");
};

//klik diluar syber untuk menghilangkan nav
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
});

const start_recording = document.getElementById("start_recording");
const result_convert = document.getElementById("result_convert");

start_recording.addEventListener("click", function () {
  var speech = true;

  if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
    var SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "id-ID";
    recognition.interimResults = true;

    recognition.addEventListener("result", (e) => {
      const transcript = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join(" ");

      result_convert.innerHTML = transcript;
      console.log(transcript);
    });

    if (speech) {
      recognition.start();
    }
  } else {
    alert("Browser Anda tidak mendukung pengenalan suara.");
  }
});
