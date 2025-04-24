function createGrid(n=16) {
  let div = document.createElement("div");
  div.classList.toggle("block");
  div.style.width = `calc(100%/${n})`;
  div.style.opacity = 1;


  let container = document.querySelector(".container");
  container.addEventListener("mouseover", (e) => {
    let r = parseInt(Math.random()*100);
    let g = parseInt(Math.random()*100);
    let b = parseInt(Math.random()*100);
    e.target.style.backgroundColor = `rgb(${r}% ${g}% ${b}%)`;
    e.target.style.opacity -= 0.1;
  })

  for (let j = 0; j < n; ++j) {
    for (let i = 0; i < n; ++i) {
      container.appendChild(div.cloneNode());
    }
  }
}

function removeGrid() {
  let container = document.querySelector(".container");
  let children = Array.from(container.children);
  children.forEach(el => el.remove());
}
  

let updateBtn = document.querySelector(".update")
updateBtn.addEventListener("click", (e) => {
  removeGrid();
  let size = parseInt(prompt("Size:"));
  while (size > 100 || size < 0 || isNaN(size)) {
    size = prompt("Size: (no more than 100 and not less than 0)");
  }
  createGrid(size);
})