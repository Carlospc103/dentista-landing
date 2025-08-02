
  const toggleButton = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  toggleButton.addEventListener("click", () => {
    if (mobileMenu.classList.contains("max-h-0")) {
      mobileMenu.classList.remove("max-h-0");
      mobileMenu.classList.add("max-h-[500px]");
      mobileMenu.classList.add("flex");
    } else {
      mobileMenu.classList.remove("max-h-[500px]");
      mobileMenu.classList.add("max-h-0");
      setTimeout(() => {
        mobileMenu.classList.remove("flex");
      }, 500); // espera que termine la animación
    }
  });

  // Cerrar menú al hacer clic en un enlace (opcional)
  const links = mobileMenu.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 1280) {
        mobileMenu.classList.remove("max-h-[500px]");
        mobileMenu.classList.add("max-h-0");
        setTimeout(() => {
          mobileMenu.classList.remove("flex");
        }, 500);
      }
    });
  });

