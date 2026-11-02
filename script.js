function toggleMode() {
  const html = document.documentElement

  /*if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }*/
  html.classList.toggle("light")
  /* pegar a tag imagem
  substituir a imagem
  se iver light mode, adicionar a imagem light
  se tivem se light mode, manter a imagem normal*/

  const img = document.querySelector("#profile img")
  const footerLogo = document.querySelector("#footer-logo")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    footerLogo.setAttribute("src", "./assets/logos/mateus-heleno-logo-completa-preta.svg")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    footerLogo.setAttribute("src", "./assets/logos/mateus-heleno-logo-completa-branca.svg")
  }
}
