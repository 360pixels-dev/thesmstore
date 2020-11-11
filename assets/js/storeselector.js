window.addEventListener("scroll", () => {
    let upperNavMenu = document.getElementsByClassName("nav__upper")
    let lowerNavMenu = document.getElementsByClassName("nav__lower")

    upperNavMenu[0].classList.toggle("sticky", pageYOffset > 100)

    lowerNavMenu[0].classList.toggle("sticky2", pageYOffset > 100)
    lowerNavMenu[0].classList.toggle("colorize", pageYOffset > 100)
})

function openStoreSelector() {
    let drawer = document.getElementById("store-selector-drawer")
    let overlay = document.getElementById("store-selector-overlay")
    let storeSelectorArrow = document.getElementById("store-selector-arrow")
    let mobileStoreSelectorArrow = document.getElementById("mobile-store-selector-arrow")
    let lowerNav = document.getElementsByClassName("fashion-nav")

    console.log(lowerNav)

    if (drawer.style.display === 'block' || overlay.style.display === 'block') {

        if (lowerNav.length !== 0) {
            lowerNav[0].style.background = "transparent"
        }
        drawer.style.display = "none";
        drawer.className = "make-store-selector-drawer w3-sidebar w3-bar-block w3-animate-top"
        overlay.style.display = "none";
        storeSelectorArrow.className = "store-selector-arrow"
        mobileStoreSelectorArrow.className = "mobile-store-selector-arrow"

    } else {

        if (lowerNav.length !== 0) {
            lowerNav[0].style.background = "#397cee"
        }
        drawer.style.display = "block";
        drawer.className = "make-store-selector-drawer w3-sidebar w3-bar-block w3-animate-top active"
        overlay.style.display = "block";
        storeSelectorArrow.className = "store-selector-arrow active"
        mobileStoreSelectorArrow.className = "mobile-store-selector-arrow active"

    }
}

function closeStoreSelector() {
    
    if (document.getElementsByClassName("fashion-nav").length === 0) {
        document.getElementsByClassName("fashion-nav")[0].style.background = "transparent"
    }
    document.getElementById("store-selector-drawer").style.display = "none";
    document.getElementById("store-selector-overlay").style.display = "none";
}