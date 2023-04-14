// modal functionality

// Get the modal
var modal = document.querySelector("[data-modal]");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var videos = document.querySelectorAll("[data-video]");
var modalIVideo = document.querySelector("[data-modal-video]");
var captionText = document.querySelector("[data-modal-caption]");

videos.forEach((video, i) => {
  video.addEventListener("click", (e) => {
    modalIVideo.src = e.target.attributes[2].value;

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
  modalIVideo.src = "";
};
