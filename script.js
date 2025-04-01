
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a");

  links.forEach(link => {
    if (link.href && link.getAttribute("href").includes("projects/")) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = this.getAttribute("href");

        document.body.classList.add("fade-out");

        setTimeout(() => {
          window.location.href = href;
        }, 500); // Duration of fade-out
      });
    }
  });
});
