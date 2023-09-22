let firstdropdownEle = document.getElementById("firstdropdown");
let firstdropdownparaEle = document.getElementById("firstdropdownpara");
let seconddropdownEle = document.getElementById("seconddropdown");
let seconddropdownparaEle = document.getElementById("seconddropdownpara");
let thirddropdownEle = document.getElementById("thirddropdown");
let thirddropdownparaEle = document.getElementById("thirddropdownpara");
let fourthdropdownEle = document.getElementById("fourthdropdown");
let fourthdropdownparaEle = document.getElementById("fourthdropdownpara");
let formSubmissionButton = document.getElementById("form")
let closeButton1 = "https://res.cloudinary.com/dxmnrzmsx/image/upload/v1695351856/close_j1necq.png";
let dropdown = "https://res.cloudinary.com/dxmnrzmsx/image/upload/v1695350761/arrow_drop_down_s4cvbk.png";
let count = 0;

formSubmissionButton.addEventListener("submit", (event) => {
    event.preventDefault();
})

function dropDown(ele, elePara, count) {
    ele.addEventListener("click", () => {
        count += 1;
        if (count % 2 !== 0) {
            elePara.classList.replace("each-card-para", "show");
            ele.src = closeButton1;
        } else {
            elePara.classList.replace("show", "each-card-para");
            ele.src = dropdown;

        }

    })
}
dropDown(firstdropdownEle, firstdropdownparaEle, count = 0);
dropDown(seconddropdownEle, seconddropdownparaEle, count = 0);
dropDown(thirddropdownEle, thirddropdownparaEle, count = 0);
dropDown(fourthdropdownEle, fourthdropdownparaEle, count = 0);
