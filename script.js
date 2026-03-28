const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
    });
  });
}

// MODAL
let actionType = "call";

function openModal(type) {
  actionType = type;
  document.getElementById("phoneModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("phoneModal").style.display = "none";
}

function selectPhone(number) {
  if (actionType === "call") {
    window.location.href = "tel:+9" + number;
  } else {
    window.open(
      "https://wa.me/9" + number,
      "_blank"
    );
  }

  closeModal();
}
