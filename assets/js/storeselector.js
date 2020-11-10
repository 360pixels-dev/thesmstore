function openStoreSelector() {
    let drawer = document.getElementById("store-selector-drawer")
    let overlay = document.getElementById("store-selector-overlay")
    let storeSelectorArrow = document.getElementById("store-selector-arrow")
    let mobileStoreSelectorArrow = document.getElementById("mobile-store-selector-arrow")
    let lowerNav = document.getElementsByClassName("fashion-nav")

    if (drawer.style.display === 'block' || overlay.style.display === 'block') {

        lowerNav[0].style.background = "transparent"
        drawer.style.display = "none";
        drawer.className = "make-store-selector-drawer w3-sidebar w3-bar-block w3-animate-top"
        overlay.style.display = "none";
        storeSelectorArrow.className = "store-selector-arrow"
        mobileStoreSelectorArrow.className = "mobile-store-selector-arrow"

    } else {

        lowerNav[0].style.background = "#397cee"
        drawer.style.display = "block";
        drawer.className = "make-store-selector-drawer w3-sidebar w3-bar-block w3-animate-top active"
        overlay.style.display = "block";
        storeSelectorArrow.className = "store-selector-arrow active"
        mobileStoreSelectorArrow.className = "mobile-store-selector-arrow active"

    }
}

function closeStoreSelector() {
    
    document.getElementsByClassName("fashion-nav")[0].style.background = "transparent"
    document.getElementById("store-selector-drawer").style.display = "none";
    document.getElementById("store-selector-overlay").style.display = "none";
}