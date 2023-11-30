const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "/imagens/imgf1.jpg") {
    myImage.setAttribute("src", "/imagens/imgf2.jpg");
  } else {
    myImage.setAttribute("src", "/imagens/imgf1.jpg");
  }
};





