window.addEventListener("scroll", () => {
    let mobileSearch = document.getElementsByClassName("mobile-search-open")
    let mobileMenuDiv = document.getElementById('mobile-menu')
    let mobileHam = document.getElementById('sm_menu_ham')
    // let storeSelectorDrawer = document.getElementById('store-selector-drawer')
    let storeSelectorDrawer = document.getElementById('store-selector-drawer-2')
    let upperNavMenu = document.getElementsByClassName("nav__upper")
    // let lowerNavMenu = document.getElementsByClassName("nav__lower")
    let lowerNavMenu = document.getElementsByClassName("nav__lower-2")
// let shadowGradient = document.querySelector(".banner__shadow-gradient")

    storeSelectorDrawer.classList.toggle("sticky-store-selector", pageYOffset > 2)
    mobileMenuDiv.classList.toggle("sticky-mobile-menu", pageYOffset > 2)
    mobileHam.classList.toggle("sticky-hamburger", pageYOffset > 2)
    mobileSearch[0].classList.toggle("sticky", pageYOffset > 2)
    upperNavMenu[0].classList.toggle("sticky", pageYOffset > 2)
    lowerNavMenu[0].classList.toggle("sticky2", pageYOffset > 2)
    // shadowGradient.classList.toggle("sticky3", pageYOffset > 2)

    if ($(document).width() === 1024) {
        lowerNavMenu[0].classList.toggle("sticky3", pageYOffset > 2)
    }
    
    lowerNavMenu[0].classList.toggle("colorize", pageYOffset > 2)
})

function openStoreSelector() {
    // let drawer = document.getElementById("store-selector-drawer")
    let drawer = document.getElementById("store-selector-drawer-2")
    let overlay = document.getElementById("store-selector-overlay")
    let storeSelectorArrow = document.getElementById("store-selector-arrow")
    let mobileStoreSelectorArrow = document.getElementById("mobile-store-selector-arrow")
    let lowerNav = document.getElementsByClassName("store-selector-nav")

    if (drawer.style.display === 'block' || overlay.style.display === 'block') {

        if (lowerNav.length !== 0) {
            lowerNav[0].style.background = "linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0) 100%)"
        }
        drawer.style.display = "none";
        drawer.className = "make-store-selector-drawer  w3-bar-block w3-animate-top"
        overlay.style.display = "none";
        storeSelectorArrow.className = "store-selector-arrow"
        mobileStoreSelectorArrow.className = "mobile-store-selector-arrow"

    } else {

        if (lowerNav.length !== 0) {
            lowerNav[0].style.background = "#397cee"
        }
        drawer.style.display = "block";
        drawer.className = "make-store-selector-drawer  w3-bar-block w3-animate-top active"
        overlay.style.display = "block";
        storeSelectorArrow.className = "store-selector-arrow active"
        mobileStoreSelectorArrow.className = "mobile-store-selector-arrow active"

    }
}

function closeStoreSelector() {
    let storeSelectorArrow = document.getElementById("store-selector-arrow")
    let mobileStoreSelectorArrow = document.getElementById("mobile-store-selector-arrow")
    // let lowerNav = document.getElementsByClassName("fashion-nav")
    let lowerNav = document.getElementsByClassName("nav__lower-2")

    lowerNav[0].style.background = "linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0) 100%)"
    document.getElementById("store-selector-drawer-2").style.display = "none";
    document.getElementById("store-selector-overlay").style.display = "none";
    storeSelectorArrow.className = "store-selector-arrow"
    mobileStoreSelectorArrow.className = "mobile-store-selector-arrow"
}