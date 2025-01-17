// Function to modify Vercel links
const modifyVercelLinks = () => {
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
}

// Create a MutationObserver to watch for changes in the DOM
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    // Check if new nodes were added
    if (mutation.addedNodes.length) {
      modifyVercelLinks()
    }
  })
})

// Start observing the body for changes in the DOM
observer.observe(document.body, {
  childList: true,
  subtree: true,
})

// Initial modification on page load
modifyVercelLinks()
