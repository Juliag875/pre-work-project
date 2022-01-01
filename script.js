
const secondaryFooter = document.querySelector("#secondary-footer");
secondaryFooter.addEventListener("mouseover", function (e) {
  e.target.style.color = "red";
    setTimeout(function() {
      e.target.style.color = "";
    }, 1000);
}, false);

const figcaption = document.getElementById("figcaption").onclick = (e) => {
  e.target.style.display = "none";
}

