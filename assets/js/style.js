$(document).ready(function () {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    animateOut: "slideOutDown",
    animateIn: "slideInDown",
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 1000,
  });
  $("#pagepiling").pagepiling({
    anchors: ["explore", "player", "premium", "author"],
    menu: "#menu",
    verticalCentered: false,
    onLeave: function (index, nextIndex, direction) {
      if (index == 3 && direction == "down") {
        $("#section-author").addClass("focus-in-expand-fwd");
        $("#author-github").addClass("focus-in-expand-fwd");
      }
      if (index == 4 && direction == "up") {
        $("#section-author").removeClass("focus-in-expand-fwd");
        $("#author-github").removeClass("focus-in-expand-fwd");
      }
    },
  });
  GreenAudioPlayer.init({
    selector: ".player",
    stopOthersOnPlay: true,
  });
  var wavesurfer = WaveSurfer.create({
    container: "#wave1",
    waveColor: "green",
    progressColor: true,
  });
  wavesurfer.load("assets/audio/youngboy-badbad.mp3");
  var wavesurfer = WaveSurfer.create({
    container: "#wave2",
    waveColor: "green",
    progressColor: true,
  });
  wavesurfer.load("assets/audio/travisscott-highestintheroom.mp3");
  var wavesurfer = WaveSurfer.create({
    container: "#wave3",
    waveColor: "green",
    progressColor: true,
  });
  wavesurfer.load("assets/audio/theweeknd-blindinglights.mp3");
  var wavesurfer = WaveSurfer.create({
    container: "#wave4",
    waveColor: "green",
    progressColor: true,
  });
  wavesurfer.load("assets/audio/KendrickLamar-DNA.mp3");
  var wavesurfer = WaveSurfer.create({
    container: "#wave5",
    waveColor: "green",
    progressColor: true,
  });
  wavesurfer.load("assets/audio/KendrickLamar-DNA.mp3");
  var wavesurfer = WaveSurfer.create({
    container: "#wave6",
    waveColor: "green",
    progressColor: true,
  });
  wavesurfer.load("assets/audio/KendrickLamar-DNA.mp3");
});
