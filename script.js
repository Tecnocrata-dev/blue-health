// Menú móvil
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("is-open");
});

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navMenu.classList.remove("is-open"));
});

// Newsletter: abre el correo del cliente con los datos prellenados
const form = document.getElementById("newsletterForm");
const ok = document.getElementById("newsletterOk");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = form.nombre.value.trim();
  const email = form.email.value.trim();
  const asunto = encodeURIComponent("Nueva suscripción al boletín de Blue Health");
  const cuerpo = encodeURIComponent(
    `Hola, quiero suscribirme al boletín.\n\nNombre: ${nombre}\nCorreo: ${email}`
  );
  window.open(`mailto:bluehealth30@gmail.com?subject=${asunto}&body=${cuerpo}`, "_self");
  ok.hidden = false;
  form.reset();
});
