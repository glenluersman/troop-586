const photosEl = document.getElementById("gallery");

const rlfa23 = ["./assets/images/RLFA23/RLFA1.JPG","./assets/images/RLFA23/RLFA2.JPG","./assets/images/RLFA23/RLFA3.JPG",
                "./assets/images/RLFA23/RLFA4.JPG","./assets/images/RLFA23/RLFA5.JPG","./assets/images/RLFA23/RLFA6.jpg",
                "./assets/images/RLFA23/RLFA7.jpg","./assets/images/RLFA23/RLFA8.jpg","./assets/images/RLFA23/RLFA9.jpg",
                "./assets/images/RLFA23/RLFA10.jpg","./assets/images/RLFA23/RLFA11.jpg","./assets/images/RLFA23/RLFA12.jpg",
                "./assets/images/RLFA23/RLFA13.jpg","./assets/images/RLFA23/RLFA14.jpg","./assets/images/RLFA23/RLFA15.jpg",
                "./assets/images/RLFA23/RLFA16.jpg","./assets/images/RLFA23/RLFA17.jpg","./assets/images/RLFA23/RLFA18.jpg",
                "./assets/images/RLFA23/RLFA19.jpg","./assets/images/RLFA23/RLFA20.jpg","./assets/images/RLFA23/RLFA21.jpg",
                "./assets/images/RLFA23/RLFA22.jpg","./assets/images/RLFA23/RLFA23.jpg","./assets/images/RLFA23/RLFA24.jpg",
                "./assets/images/RLFA23/RLFA25.jpg","./assets/images/RLFA23/RLFA27.jpg","./assets/images/RLFA23/RLFA28.jpg",
                "./assets/images/RLFA23/RLFA29.jpg","./assets/images/RLFA23/RLFA30.jpg","./assets/images/RLFA23/RLFA31.jpg",
                "./assets/images/RLFA23/RLFA32.jpg","./assets/images/RLFA23/RLFA33.jpg","./assets/images/RLFA23/RLFA34.jpg",
                "./assets/images/RLFA23/RLFA35.jpg","./assets/images/RLFA23/RLFA36.jpg","./assets/images/RLFA23/RLFA37.jpg",
                "./assets/images/RLFA23/RLFA38.jpg","./assets/images/RLFA23/RLFA39.jpg","./assets/images/RLFA23/RLFA40.jpg",
                "./assets/images/RLFA23/RLFA41.jpg","./assets/images/RLFA23/RLFA42.jpg","./assets/images/RLFA23/RLFA43.jpg",
                "./assets/images/RLFA23/RLFA44.jpg","./assets/images/RLFA23/RLFA45.jpg","./assets/images/RLFA23/RLFA46.jpg",
                "./assets/images/RLFA23/RLFA47.jpg","./assets/images/RLFA23/RLFA48.jpg","./assets/images/RLFA23/RLFA49.jpg",
                "./assets/images/RLFA23/RLFA50.jpg","./assets/images/RLFA23/RLFA51.jpg","./assets/images/RLFA23/RLFA52.jpg",
                "./assets/images/RLFA23/RLFA53.JPEG","./assets/images/RLFA23/RLFA54.JPEG","./assets/images/RLFA23/RLFA55.JPEG",
                "./assets/images/RLFA23/RLFA56.JPEG"];
                
const wb22 = ["./assets/images/WB22/WB2.JPG","./assets/images/WB22/WB1.JPG","./assets/images/WB22/WB3.JPG",
              "./assets/images/WB22/WB3.JPG","./assets/images/WB22/WB4.JPG","./assets/images/WB22/WB5.JPG",
              "./assets/images/WB22/WB6.JPG","./assets/images/WB22/WB7.JPG","./assets/images/WB22/falls.jpg"];

const rlfa22 = ["./assets/images/RLFA22/RLFA1.jpg","./assets/images/RLFA22/RLFA2.jpg","./assets/images/RLFA22/RLFA3.jpg",
                "./assets/images/RLFA22/RLFA4.jpg","./assets/images/RLFA22/RLFA5.jpg","./assets/images/RLFA22/RLFA6.jpg",
                "./assets/images/RLFA22/RLFA7.jpg","./assets/images/RLFA22/RLFA8.jpg","./assets/images/RLFA22/RLFA9.jpg",
                "./assets/images/RLFA22/RLFA10.jpg","./assets/images/RLFA22/RLFA11.jpg","./assets/images/RLFA22/RLFA12.jpg",
                "./assets/images/RLFA22/RLFA13.jpg","./assets/images/RLFA22/RLFA14.jpg","./assets/images/RLFA22/RLFA15.jpg",
                "./assets/images/RLFA22/RLFA16.jpg","./assets/images/RLFA22/RLFA17.jpg","./assets/images/RLFA22/RLFA18.jpg",
                "./assets/images/RLFA22/RLFA19.jpg","./assets/images/RLFA22/RLFA20.jpg","./assets/images/RLFA22/RLFA21.jpg"];

const sff22 = ["./assets/images/SFF22/scouting-for-food.jpeg"];

const fwlm22 = ["./assets/images/F&WM22/F&WM1.JPG","./assets/images/F&WM22/F&WM2.JPG","./assets/images/F&WM22/F&WM3.JPG",
                "./assets/images/F&WM22/F&WM4.jpg","./assets/images/F&WM22/F&WM5.jpg","./assets/images/F&WM22/F&WM6.jpg",
                "./assets/images/F&WM22/F&WM7.jpg","./assets/images/F&WM22/F&WM8.jpg","./assets/images/F&WM22/F&WM9.jpg",
                "./assets/images/F&WM22/F&WM10.jpg","./assets/images/F&WM22/F&WM11.jpg","./assets/images/F&WM22/F&WM12.jpg",
                "./assets/images/F&WM22/F&WM13.jpg"];

const cme22 = ["./assets/images/CME22/CME1.JPG","./assets/images/CME22/CME3.JPG","./assets/images/CME22/CME4.JPG",
               "./assets/images/CME22/CME5.JPG","./assets/images/CME22/CME6.JPG","./assets/images/CME22/CME7.JPG",
               "./assets/images/CME22/CME9.JPG","./assets/images/CME22/CME13.JPG","./assets/images/CME22/CME14.JPG"];

const md22 = ["./assets/images/MD22/flags1.JPG","./assets/images/MD22/flags2.JPG","./assets/images/MD22/conservation1.JPG",
              "./assets/images/MD22/conservation2.JPG","./assets/images/MD22/parade.JPG"];

const summerCamp22 = ["./assets/images/Summer_Camp22/summer3.JPG","./assets/images/Summer_Camp22/summer4.jpg","./assets/images/Summer_Camp22/summer5.jpg",
                      "./assets/images/Summer_Camp22/summer6.jpg","./assets/images/Summer_Camp22/summer7.jpg","./assets/images/Summer_Camp22/summer8.jpg",
                      "./assets/images/Summer_Camp22/summer10.jpg","./assets/images/Summer_Camp22/summer1.JPG","./assets/images/Summer_Camp22/summer2.JPG",
                      "./assets/images/Summer_Camp22/summer9.JPG","./assets/images/Summer_Camp22/summer11.jpg","./assets/images/Summer_Camp22/summer12.jpg",
                      "./assets/images/Summer_Camp22/summer13.jpg","./assets/images/Summer_Camp22/summer14.jpg","./assets/images/Summer_Camp22/summer15.jpg",
                      "./assets/images/Summer_Camp22/summer15.jpg","./assets/images/Summer_Camp22/summer16.jpg","./assets/images/Summer_Camp22/summer17.jpg",
                      "./assets/images/Summer_Camp22/summer35.JPEG","./assets/images/Summer_Camp22/summer18.JPG","./assets/images/Summer_Camp22/summer19.JPEG",
                      "./assets/images/Summer_Camp22/summer20.JPG","./assets/images/Summer_Camp22/summer21.jpg","./assets/images/Summer_Camp22/summer22.jpg",
                      "./assets/images/Summer_Camp22/summer23.jpg","./assets/images/Summer_Camp22/summer24.jpg","./assets/images/Summer_Camp22/summer25.jpg",
                      "./assets/images/Summer_Camp22/summer26.jpg","./assets/images/Summer_Camp22/summer27.jpg","./assets/images/Summer_Camp22/summer28.jpg",
                      "./assets/images/Summer_Camp22/summer29.jpg","./assets/images/Summer_Camp22/summer30.jpg","./assets/images/Summer_Camp22/summer31.jpg",
                      "./assets/images/Summer_Camp22/summer32.jpg","./assets/images/Summer_Camp22/summer33.jpg","./assets/images/Summer_Camp22/summer34.jpg",
                      "./assets/images/Summer_Camp22/summer40.JPG","./assets/images/Summer_Camp22/summer41.JPG","./assets/images/Summer_Camp22/summer42.JPG",
                      "./assets/images/Summer_Camp22/summer43.JPG","./assets/images/Summer_Camp22/summer44.JPG","./assets/images/Summer_Camp22/summer45.JPG",
                      "./assets/images/Summer_Camp22/summer47.JPG","./assets/images/Summer_Camp22/summer48.JPG","./assets/images/Summer_Camp22/summer49.JPG",
                      "./assets/images/Summer_Camp22/summer50.JPG","./assets/images/Summer_Camp22/summer51.JPG","./assets/images/Summer_Camp22/summer52.JPG",
                      "./assets/images/Summer_Camp22/summer53.JPG","./assets/images/Summer_Camp22/summer54.JPG","./assets/images/Summer_Camp22/summer55.JPG",
                      "./assets/images/Summer_Camp22/summer56.JPG","./assets/images/Summer_Camp22/summer57.JPG","./assets/images/Summer_Camp22/summer46.JPG",
                      "./assets/images/Summer_Camp22/summer36.jpg","./assets/images/Summer_Camp22/summer37.jpg","./assets/images/Summer_Camp22/summer38.jpg",
                      "./assets/images/Summer_Camp22/summer39.JPG"];


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