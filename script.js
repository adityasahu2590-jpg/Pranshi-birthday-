const wishes = [
  {
    title: "✦ THE WAY YOU LAUGH ✦",
    text: "your laugh is one of those sounds that just makes a room feel warmer. wishing you a year full of the kind of moments that bring it out again and again."
  },
  {
    title: "✦ THE WAY YOU SHOW UP ✦",
    text: "you remember the small things — the worry from a Tuesday, the random text on a hard day. it always feels like being seen, not just heard. wishing you the same softness back this year."
  },
  {
    title: "✦ THE YEAR AHEAD ✦",
    text: "may this year be kinder than the last. may every new chapter bring you good food, better naps, and people who love you the way you deserve."
  }
];

let currentPage = 1;

function go(n) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  const page = document.getElementById("p" + n);
  if (page) {
    page.classList.add("active");
    currentPage = n;
    updateDots();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function wish(i) {
  const box = document.getElementById("wishBox");
  if (!box || !wishes[i]) return;

  box.innerHTML = `
    <div class="wish-card">
      <div class="wish-title">${wishes[i].title}</div>
      <p>${wishes[i].text}</p>
    </div>
  `;
}

function updateDots() {
  const dots = document.getElementById("dots");
  if (!dots) return;

  dots.innerHTML = "";
  for (let i = 1; i <= 6; i++) {
    const dot = document.createElement("span");
    dot.className = "dot" + (i === currentPage ? " active" : "");
    dots.appendChild(dot);
  }
}

updateDots();
