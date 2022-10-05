// template_fr4n8xr
// service_msaie71
// Q9FuKnCZ0OIxnm5Gt

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_msaie71",
      "template_fr4n8xr",
      event.target,
      "Q9FuKnCZ0OIxnm5Gt"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on christinesabbagh.tech@gmail.com"
      );
    });
}
