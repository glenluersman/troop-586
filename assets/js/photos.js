const photosEl = document.getElementById("gallery");

const wb22 = ["./assets/images/WB22/WB2.JPG","./assets/images/WB22/WB1.JPG","./assets/images/WB22/WB3.JPG","./assets/images/WB22/WB3.JPG","./assets/images/WB22/WB4.JPG","./assets/images/WB22/WB5.JPG","./assets/images/WB22/WB6.JPG","./assets/images/WB22/WB7.JPG","./assets/images/WB22/falls.jpg"];

const rlfa22 = ["./assets/images/RLFA22/RLFA1.jpg","./assets/images/RLFA22/RLFA2.jpg","./assets/images/RLFA22/RLFA3.jpg","./assets/images/RLFA22/RLFA4.jpg","./assets/images/RLFA22/RLFA5.jpg","./assets/images/RLFA22/RLFA6.jpg","./assets/images/RLFA22/RLFA7.jpg","./assets/images/RLFA22/RLFA8.jpg","./assets/images/RLFA22/RLFA9.jpg","./assets/images/RLFA22/RLFA10.jpg","./assets/images/RLFA22/RLFA11.jpg","./assets/images/RLFA22/RLFA12.jpg","./assets/images/RLFA22/RLFA13.jpg","./assets/images/RLFA22/RLFA14.jpg","./assets/images/RLFA22/RLFA15.jpg","./assets/images/RLFA22/RLFA16.jpg","./assets/images/RLFA22/RLFA17.jpg","./assets/images/RLFA22/RLFA18.jpg","./assets/images/RLFA22/RLFA19.jpg","./assets/images/RLFA22/RLFA20.jpg","./assets/images/RLFA22/RLFA21.jpg"]

const sff22 = ["./assets/images/SFF22/scouting-for-food.jpeg"]

const fwlm22 = ["./assets/images/F&WM22/F&WM1.JPG","./assets/images/F&WM22/F&WM2.JPG","./assets/images/F&WM22/F&WM3.JPG","./assets/images/F&WM22/F&WM4.jpg","./assets/images/F&WM22/F&WM5.jpg","./assets/images/F&WM22/F&WM6.jpg","./assets/images/F&WM22/F&WM7.jpg","./assets/images/F&WM22/F&WM8.jpg","./assets/images/F&WM22/F&WM9.jpg","./assets/images/F&WM22/F&WM10.jpg","./assets/images/F&WM22/F&WM11.jpg","./assets/images/F&WM22/F&WM12.jpg","./assets/images/F&WM22/F&WM13.jpg"]

const cme22 = ["./assets/images/CME22/CME1.JPG","./assets/images/CME22/CME3.JPG","./assets/images/CME22/CME4.JPG","./assets/images/CME22/CME5.JPG","./assets/images/CME22/CME6.JPG","./assets/images/CME22/CME7.JPG","./assets/images/CME22/CME9.JPG","./assets/images/CME22/CME13.JPG","./assets/images/CME22/CME14.JPG"]

const md22 = ["./assets/images/MD22/flags1.JPG","./assets/images/MD22/flags2.JPG","./assets/images/MD22/conservation1.JPG","./assets/images/MD22/conservation2.JPG","./assets/images/MD22/parade.JPG"]

const renderPhotos = (value) => {
  photosEl.innerHTML = "";

  for (let i = 0; i < value.length; i++) {
    const item = document.createElement("div");
    item.setAttribute("class", "gallery-item");
    const img = document.createElement("img");
    img.setAttribute("id", "myImg");
    img.setAttribute("src", value[i]);
    img.setAttribute("onclick", "imgModal(src)")
    img.setAttribute("width", "600");
    img.setAttribute("height", "400");
    item.appendChild(img);
    photosEl.appendChild(item);
  }
};

//creating the modal
let imgModal = (src) => {
  const modal = document.createElement("div");
  modal.setAttribute("class", "modal");
  //add modal to the parent element 
  document.querySelector(".main").append(modal);
  //adding image to modal
  const newImage = document.createElement("img");
    newImage.setAttribute("src", src);
    //creating the close button
    const closeBtn = document.createElement("i");
    closeBtn.setAttribute("class", "fas fa-times closeBtn");
    //close function
    closeBtn.onclick = () => {
        modal.remove();
      }; 
    modal.append(newImage, closeBtn);
};