// Make the DIV element draggable:

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// printDiv("main-page");

const printDiv = (id) => {
  fillTextArea();
  var printContents = document.getElementById(id).innerHTML;
  console.log("printContents", printContents);
  var originalContents = document.body.innerHTML;
  document.body.innerHTML = printContents;
  document.querySelector("#mydivheader").style.display = "none";
  window.print();
  // document.body.innerHTML = originalContents;
  location.reload();
};

const fillTextArea = () => {
  var allTextArea = document.querySelectorAll("textarea");
  allTextArea.forEach((ele) => {
    ele.innerHTML = ele.value;
    console.log(ele);
  });
};
const saveContent = () => {
  const content = document.querySelector("#main-page").innerHTML;
  localStorage.setItem("content", content);
  //   console.log("content saved!", content);
};

const getContentFromStorage = () => {
  const content = localStorage.getItem("content");
  // console.log('Previously saved content', content)
  if (content) {
    document.querySelector("#main-page").innerHTML = `${content}`;
    // console.log('Content Syced', content);
  }
};

const resetSavedContent = () => {
  let text = "Are you sure ?";
  if (confirm(text) == true) {
    localStorage.removeItem("content");
    alert("Page content removed");
    location.reload();
  }
};

window.addEventListener("load", (event) => {
  getContentFromStorage();
  dragElement(document.getElementById("mydiv"));

  document.onmouseup = () => {
    saveContent();
  };

  document.onkeyup = () => {
    saveContent();
  };

  document.onmousedown = () => {
    saveContent();
  };

  document.onkeydown = () => {
    saveContent();
  };

  document.getElementById("mydiv").onmouseout = () => {
    saveContent();
  };
});


const fillDemoContent = () => {
    document.querySelector("#main-page").innerHTML = `\n<div id="mydiv"><grammarly-extension data-grammarly-shadow-root="true" class="dnXmp" style="position: absolute; top: 0px; left: 0px; pointer-events: none;"></grammarly-extension><grammarly-extension data-grammarly-shadow-root="true" class="dnXmp" style="position: absolute; top: 0px; left: 0px; pointer-events: none;"></grammarly-extension>\n<div id="mydivheader">Click here to move\n</div>\n<div class="form-field" contenteditable="true" spellcheck="false">Junaid Ashraf&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 7278523122<div><br></div><div><br><div>21, Market Street, 3rd Floor, Kolkata - 700087&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;07/09/2023<div></div></div></div><div><br></div><div><br></div><div>1&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1st item description&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Rs.50,000.00</div><div><br></div><div><br></div><div>2&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2nd item description&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Rs. 30,000.00<br></div><div><br></div><div><br></div><div><br></div><div><br></div><div><br></div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Rs. 80,000.00</div>\n<div>\n</div>\n</div>\n</div>\n`;

    dragElement(document.getElementById("mydiv"));
};