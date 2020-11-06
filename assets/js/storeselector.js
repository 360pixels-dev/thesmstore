function openStoreSelector() {
    let drawer = document.getElementById("store-selector-drawer")
    let overlay = document.getElementById("store-selector-overlay")
    let storeSelectorArrow = document.getElementById("store-selector-arrow")
    let mobileStoreSelectorArrow = document.getElementById("mobile-store-selector-arrow")

    console.log("ARROW", mobileStoreSelectorArrow)


    if (drawer.style.display === 'block' || overlay.style.display === 'block') {
        drawer.style.display = "none";
        overlay.style.display = "none";
        storeSelectorArrow.className = "store-selector-arrow"
        mobileStoreSelectorArrow.className = "mobile-store-selector-arrow"

    } else {

        drawer.style.display = "block";
        overlay.style.display = "block";
        storeSelectorArrow.className = "store-selector-arrow active"
        mobileStoreSelectorArrow.className = "mobile-store-selector-arrow active"

    }
}

function closeStoreSelector() {
    
    document.getElementById("store-selector-drawer").style.display = "none";
    document.getElementById("store-selector-overlay").style.display = "none";
}