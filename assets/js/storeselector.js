window.addEventListener("scroll", () => {
    

    if ($(window).width() > 1024) {
        let mobileSearch = document.getElementsByClassName("mobile-search-open")
        // let mobileMenuDiv = document.getElementById('mobile-menu')
        let mobileMenuDiv = document.getElementsByClassName('sm_menu_outer')
        let mobileHam = document.getElementById('sm_menu_ham')
        let storeSelectorDrawer = document.getElementById('store-selector-drawer')
        
        let upperNavMenu = document.getElementsByClassName("nav__upper")
        upperNavMenu[0].classList.toggle("sticky", pageYOffset > 2)
    
        let lowerNavMenu = document.getElementsByClassName("nav__lower")
        
    
    
        // let shadowGradient = document.querySelector(".banner__shadow-gradient")
    
        let storeSelectorDrawer2 = document.getElementById('store-selector-drawer-2')
        let lowerNavMenu2 = document.getElementsByClassName("nav__lower-2")
    
    
    
        if (storeSelectorDrawer !== null) {
            storeSelectorDrawer.classList.toggle("sticky-store-selector", pageYOffset > 2)
        }
    
        if (storeSelectorDrawer2 !== null) {
            storeSelectorDrawer2.classList.toggle("sticky-store-selector", pageYOffset > 2)
        }
    
        if (lowerNavMenu.length !== 0) {
            lowerNavMenu[0].classList.toggle("sticky2", pageYOffset > 2)
            lowerNavMenu[0].classList.toggle("colorize", pageYOffset > 2)
        }
    
        if (lowerNavMenu2.length !== 0) {
            lowerNavMenu2[0].classList.toggle("sticky2", pageYOffset > 2)
            lowerNavMenu2[0].classList.toggle("colorize", pageYOffset > 2)
        }
        
        // mobileMenuDiv[0].classList.toggle("sticky3", pageYOffset > 2)
        // mobileHam.classList.toggle("sticky-hamburger", pageYOffset > 2)
        mobileSearch[0].classList.toggle("sticky", pageYOffset > 2)
        // shadowGradient.classList.toggle("sticky3", pageYOffset > 2)
    }
    
})

function openStoreSelector() {
    let drawer = document.getElementById("store-selector-drawer")
    let drawer2 = document.getElementById("store-selector-drawer-2")
    let overlay = document.getElementById("store-selector-overlay")
    let storeSelectorArrow = document.getElementById("store-selector-arrow")
    let mobileStoreSelectorArrow = document.getElementById("mobile-store-selector-arrow")
    let lowerNav = document.getElementsByClassName("store-selector-nav")

    if (drawer !== null) {
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

    if (drawer2 !== null) {
        if (drawer2.style.display === 'block' || overlay.style.display === 'block') {

            if (lowerNav.length !== 0) {
                lowerNav[0].style.background = "linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0) 100%)"
            }
            drawer2.style.display = "none";
            drawer2.className = "make-store-selector-drawer  w3-bar-block w3-animate-top"
    
            overlay.style.display = "none";
            storeSelectorArrow.className = "store-selector-arrow"
            mobileStoreSelectorArrow.className = "mobile-store-selector-arrow"
    
        } else {
    
            if (lowerNav.length !== 0) {
                lowerNav[0].style.background = "#397cee"
            }
            drawer2.style.display = "block";
            drawer2.className = "make-store-selector-drawer  w3-bar-block w3-animate-top active"
            overlay.style.display = "block";
            storeSelectorArrow.className = "store-selector-arrow active"
            mobileStoreSelectorArrow.className = "mobile-store-selector-arrow active"
        }
    }
}

function closeStoreSelector() {
    let storeSelectorArrow = document.getElementById("store-selector-arrow")
    let mobileStoreSelectorArrow = document.getElementById("mobile-store-selector-arrow")

    let lowerNav = document.getElementsByClassName("fashion-nav")
    let drawer = document.getElementById("store-selector-drawer")

    let lowerNav2 = document.getElementsByClassName("nav__lower-2")
    let drawer2 = document.getElementById("store-selector-drawer-2")

    if (drawer !== null) {
        lowerNav[0].style.background = "linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0) 100%)"
        drawer.style.display = "none";

        document.getElementById("store-selector-overlay").style.display = "none";
        storeSelectorArrow.className = "store-selector-arrow"
        mobileStoreSelectorArrow.className = "mobile-store-selector-arrow"
    }

    if (drawer2 !== null) {
        lowerNav2[0].style.background = "linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0) 100%)"
        drawer2.style.display = "none";

        document.getElementById("store-selector-overlay").style.display = "none";
        storeSelectorArrow.className = "store-selector-arrow"
        mobileStoreSelectorArrow.className = "mobile-store-selector-arrow"
    }
    
    
}