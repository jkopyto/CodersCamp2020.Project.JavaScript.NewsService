export default class Topbar {
  constructor() {}
  setActiveClass(subpageID) {
    //const elements = document.getElementsByClassName("active")
    //elements[0].classList.remove("active")
    document.getElementById(subpageID).classList.add("active")
  }
}
