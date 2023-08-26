new WOW().init()

//drag and drop
let offsetX, offsetY;

    function dragStart(event) {
      offsetX = event.clientX - event.target.getBoundingClientRect().left;
      offsetY = event.clientY - event.target.getBoundingClientRect().top;
    }

    document.addEventListener("mousemove", dragElement);

    function dragElement(event) {
      const modalWindow = document.getElementById("modalWindow");

      if (modalWindow.getAttribute("dragging") === "true") {
        event.preventDefault();
        const x = event.clientX - offsetX;
        const y = event.clientY - offsetY;
        modalWindow.style.left = x + "px";
        modalWindow.style.top = y + "px";
      }
    }

    document.addEventListener("mouseup", () => {
      document.getElementById("modalWindow").setAttribute("dragging", "false");
    });

    document.getElementById("modalWindow").addEventListener("mousedown", () => {
      document.getElementById("modalWindow").setAttribute("dragging", "true");
    });

    function closeModalWindow() {
        document.getElementById("modalWindow").style.visibility = "hidden";
        }

function openModalWindow(){
    console.log("openModalWindow");
    document.getElementById("modalWindow").style.visibility = "visible";
}

function openModalWindowText(){
    console.log("openModalWindowText");
    document.getElementById("modalWindowText").style.visibility = "visible";
}

function createText() {
    const text = document.getElementById("text").value;
    const textColor = document.getElementById("textColor").value;
    const backgroundColor = document.getElementById("backgroundColor").value;
    const fontSize = document.getElementById("fontSize").value + "px";
    const position = document.getElementById("position").value;
    const font = document.getElementById("font").value;
    const bold = document.getElementById("bold").checked;

    const newTextElement = document.createElement("div");
    newTextElement.innerText = text;
    newTextElement.style.color = textColor;
    newTextElement.style.backgroundColor = backgroundColor;
    newTextElement.style.fontSize = fontSize;
    newTextElement.style.textAlign = position;
    newTextElement.style.fontFamily = font;
    if (bold) {
      newTextElement.style.fontWeight = "bold";
    }

    document.getElementById("webpage").appendChild(newTextElement);
  }

  function closeText() {
    document.getElementById("modalWindowText").style.visibility = "hidden";
  }

function saveWebpage(){
    console.log("saveWebpage");
    //se manda html a backend
}