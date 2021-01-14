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
    if (this.stylesheet && typeof this.stylesheet.remove === "function") {
      this.stylesheet.remove()
    }
  }
}

export default Subpage
