// modal functionality

// Get the modal
var modal = document.querySelector("[data-modal]");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var images = document.querySelectorAll("[data-image]");
var modalImg = document.querySelector("[data-modal-img]");
var captionText = document.querySelector("[data-modal-caption]");

images.forEach((image, i) => {
  image.addEventListener("click", (e) => {
    modalImg.src = `../img/${e.target.attributes[2].value}.webp`;

    modal.style.display = "block";
    body.classList.add("prevent-scroll");
    html.classList.add("prevent-scroll");
  });
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  body.classList.remove("prevent-scroll");
  html.classList.remove("prevent-scroll");
};
