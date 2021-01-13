class Subpage {
  stylesheet
  constructor(stylesheet) {
    this.stylesheet = stylesheet
  }

  initStylesheet = () => {
    const css = document.createElement("style")
    css.innerText = this.stylesheet
    document.getElementsByTagName("head")[0].appendChild(css)
  }

  removeStylesheet = () => {
    this.stylesheet && this.stylesheet.remove()
  }
}

export default Subpage
