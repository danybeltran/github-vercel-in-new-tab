const allLinks = document.querySelectorAll("a")

allLinks.forEach((link) => {
  if (
    link.innerHTML.match(/visit preview/i) ||
    (link.innerHTML.match(/inspect/i) &&
      link.href.startsWith("https://vercel.com"))
  ) {
    if (link.getAttribute("target") !== "_blank") {
      link.setAttribute("target", "_blank")
    }
  }
})
