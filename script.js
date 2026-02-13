
/* RESUME DOWNLOAD */

document.getElementById("downloadBtn").addEventListener("click", () => {

  const link = document.createElement("a");

  link.href = "assets/resume.pdf";
  link.download = "My_Resume.pdf";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

});


/* PROJECT VIEWER */

function openProject(title, cover, video, images, desc){

  const modal = document.getElementById("modal");

  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalVideo").src = video;
  document.getElementById("modalDesc").innerText = desc;

  const gallery = document.getElementById("modalGallery");
  gallery.innerHTML = "";

  images.forEach(img => {

    const image = document.createElement("img");
    image.src = img;

    image.onclick = () => {
      window.open(img, "_blank");
    };

    gallery.appendChild(image);

  });

  modal.style.display = "flex";
}


function closeModal(){

  document.getElementById("modal").style.display = "none";
  document.getElementById("modalVideo").src = "";

}
