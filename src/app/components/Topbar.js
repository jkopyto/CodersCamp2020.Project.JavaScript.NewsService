export default class Topbar {
  constructor() {}
  setActiveClass(subpageID) {
    const elements = document.getElementsByClassName("active")   
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove("active")
    }
    document.getElementById(subpageID).classList.add("active")
  }
}