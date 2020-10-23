function openStoreSelector() {
    let drawer = document.getElementById("store-selector-drawer")
    let overlay = document.getElementById("store-selector-overlay")

    

    if (drawer.style.display === 'block' || overlay.style.display === 'block') {
        drawer.style.display = "none";
        overlay.style.display = "none";

    } else {

        drawer.style.display = "block";
        overlay.style.display = "block";
    }


}

function closeStoreSelector() {
    
    document.getElementById("store-selector-drawer").style.display = "none";
    document.getElementById("store-selector-overlay").style.display = "none";
}