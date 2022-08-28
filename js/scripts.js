window.addEventListener("load", function() {
  const firstHeader = document.querySelector("h1");
  firstHeader.remove();

  const bodyElement = document.querySelector("body");
  const hElement = document.createElement("h1");
  const hTwoElement = document.createElement("h1");
  const pElement = document.createElement("p");
  const image = document.createElement("img");
  const listElement = document.createElement("ul");
  const liOne = document.createElement("li");
  const liTwo = document.createElement("li");
  const secondHElement = document.createElement("h2");
  const anchorTag = document.createElement("a");

  hElement.append("The Webpage Recreation Practice");
  bodyElement.append(hElement);

  pElement.append("The HTML of this webpage was created with Javascript");
  bodyElement.append(pElement);

  bodyElement.append(image);
  image.setAttribute("src", "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900");
  image.setAttribute("alt", "This is an image of a Multicolored Tanager bird from birdsoftheworld.org");
  image.setAttribute("style", "width:50%");

  hTwoElement.append("Facts about the Multicolored Tanager");
  bodyElement.append(hTwoElement);
  image.after(hTwoElement);

  liOne.append("It is endemic to the mountains of Colombia.");
  listElement.append(liOne);

  liTwo.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");
  listElement.append(liTwo);

  secondHElement.append("Source");
  bodyElement.append(secondHElement);

  anchorTag.setAttribute("href", "https://en.wikipedia.org/wiki/Multicoloured_tanager");
  anchorTag.append("Wikipedia");
  bodyElement.append(anchorTag);

  

});   