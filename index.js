// Shery.imageEffect(element,configuration)

Shery.imageEffect("#back", {
  style: 5,
  config: {
    a: { value: 1, range: [0, 30] },
    b: { value: -0.9, range: [-1, 1] },
    aspect: { value: 2.148190111735243 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.2, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: false },
    onMouse: { value: 1 },
    noise_speed: { value: 1.68, range: [0, 10] },
    metaball: { value: 0.17, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.4, range: [0, 2] },
    noise_scale: { value: 14.02, range: [0, 100] },
  },
  gooey: true,
  //   debug: true,
});
var elems = document.querySelectorAll(".elem");
elems.forEach(function (elem) {
  let header = elem.querySelectorAll("h1");
  let index = 0;
  var animating = false;
  document.querySelector("#main").addEventListener("click", () => {
    if (!animating) {
      animating = true;
      gsap.to(header[index], {
        top: "-=100%",
        duration: 0.5,
        ease: "Expo.easeInOut",
        onComplete: () => {
          gsap.set(header[index], {
            top: "100%",
          });
          index === header.length - 1 ? (index = 0) : index++;
          gsap.to(header[index], {
            top: "-=100%",
            duration: 0.5,
            ease: "Expo.easeInOut",
          });
          animating = false;
        },
      });
    }
  });
});
