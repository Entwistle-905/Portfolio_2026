
/* RESUME DOWNLOAD */

document.getElementById("downloadBtn").addEventListener("click", () => {

  const link = document.createElement("a");

  link.href = "assets/resume.pdf";
  link.download = "SoominLee_Resume.pdf";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

});

//getting the image modal  used to zoom images and binding events to it
let imageModal = document.getElementById("image-modal")
let projectImages = null;
let CurrentImageIndex = 0;

imageModal.onclick = (e) => {
    if (e.target === imageModal) imageModal.style.display = "none";
};

document.addEventListener("keydown", (e) => {
    if (imageModal.style.display !== "block") return;

    if (e.key === "ArrowLeft") OpenImage(CurrentImageIndex - 1);
    if (e.key === "ArrowRight") OpenImage(CurrentImageIndex + 1);
    if (e.key === "Escape") imageModal.style.display = "none";
});

// Close modal
document.getElementById("image-modal-close").onclick = () => imageModal.style.display = "none";

// Buttons
document.getElementById("imageModalPrevImage").onclick = () => OpenImage(CurrentImageIndex - 1);
document.getElementById("imageModalNextImage").onclick = () => OpenImage(CurrentImageIndex + 1);


/* PROJECT VIEWER */

function openProject(title, cover, video, images, desc){

  const modal = document.getElementById("modal");

  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalVideo").src = video;
  document.getElementById("modalDesc").innerText = desc;

  const gallery = document.getElementById("modalGallery");
  gallery.innerHTML = "";

  projectImages = images;
  images.forEach((img, index) => {

    const image = document.createElement("img");
    image.src = img;

    image.onclick = () => {
      OpenImage(index);
    };

    gallery.appendChild(image, index);

  });

  modal.style.display = "flex";
}


function closeModal(){

  document.getElementById("modal").style.display = "none";
  document.getElementById("modalVideo").src = "";

}

function OpenImage(index){

  if (index < 0){
    index = projectImages.length - 1;
  }

  if (index >= projectImages.length){
    index = 0;
  }

  imageModal.style.display = "block";
  let ZoomImage = document.getElementById("modal-img");
  ZoomImage.src = projectImages[index];
  CurrentImageIndex = index;

}
