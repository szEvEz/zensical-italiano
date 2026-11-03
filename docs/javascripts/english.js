// Global IT/EN toggle: shows or hides every element with the class "en".
// The choice is stored per browser and applied as a class on <html>, which
// survives instant navigation.
(function () {
  var KEY = "show-en"
  var root = document.documentElement

  function read() {
    try { return localStorage.getItem(KEY) === "1" } catch (e) { return false }
  }

  function write(on) {
    try { localStorage.setItem(KEY, on ? "1" : "0") } catch (e) {}
  }

  function apply(on) {
    root.classList.toggle("show-en", on)
    var button = document.querySelector(".en-toggle")
    if (button) {
      button.setAttribute("aria-pressed", on ? "true" : "false")
      button.title = on ? "Nascondi l'inglese (Hide English)" : "Mostra l'inglese (Show English)"
    }
  }

  function mount() {
    if (document.querySelector(".en-toggle")) return
    var header = document.querySelector(".md-header__inner")
    if (!header) return
    var button = document.createElement("button")
    button.type = "button"
    button.className = "md-header__button en-toggle"
    button.innerHTML = '<span class="en-toggle__it">IT</span><span class="en-toggle__en">EN</span>'
    button.addEventListener("click", function () {
      var on = !root.classList.contains("show-en")
      write(on)
      apply(on)
    })
    var anchor = header.querySelector("[data-md-component=palette]") ||
                 header.querySelector("[data-md-component=search]")
    header.insertBefore(button, anchor)
    apply(read())
  }

  apply(read())
  if (window.document$) {
    window.document$.subscribe(mount)
  } else {
    document.addEventListener("DOMContentLoaded", mount)
  }
})()
