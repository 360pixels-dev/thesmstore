function toggleSearch() {
    let upperNav = document.getElementsByClassName('nav__upper')
    let searchContainer = document.getElementsByClassName('mobile-search-open')
    let searchButton = document.getElementsByClassName('mobile-search-button')
    let searchOverlay = document.getElementsByClassName('mobile-search-overlay')

    searchButton[0].style.display = 'none'
    upperNav[0].style.display = 'none'
    searchContainer[0].style.display = 'block'
    searchOverlay[0].style.display = 'block'
}

function closeMobileSearch() {
    let upperNav = document.getElementsByClassName('nav__upper')

    let searchContainer = document.getElementsByClassName('mobile-search-open')
    let searchButton = document.getElementsByClassName('mobile-search-button')
    let searchOverlay = document.getElementsByClassName('mobile-search-overlay')

    
    searchButton[0].style.display = 'block'
    upperNav[0].style.display = 'flex'
    searchContainer[0].style.display = 'none'
    searchOverlay[0].style.display = 'none'
}

function closeMobileMenu() {
    let menuDiv = document.getElementById('mobile-menu');
    let menuOverlay = document.getElementById('mobile-menu-overlay')
    let menuList = document.getElementById('mobile-menu-list')
    let menus = document.getElementsByClassName('mobile-menu-item')

    menuDiv.style.display = 'none'
    menuOverlay.style.display = 'none'
    menuList.style.display = 'block'

    for (let i = 0; i < menus.length; i++) {
        menus[i].style.display = 'none'
    }
}

function toggleMobileMenu() {
    let menu = document.getElementById('mobile-menu')
    let menuOverlay = document.getElementById('mobile-menu-overlay')

    if (menu !== null) {
        if (menu.style.display === "block") {
            menu.style.display = 'none'
            menuOverlay.style.display = 'none'
        } else {
            menu.style.display = 'block'
            menuOverlay.style.display = 'block'
        }
    }
}

function toggleCategoriesSubMenu() {
    let mainMenu = document.getElementById('mobile-menu-list')
    let menu = document.getElementById('mobile-menu-categories-list')
    
    if (menu !== null) {
        if (menu.style.display === "block") {
            menu.style.display = 'none'
            mainMenu.style.display = 'block'
        } else {
            menu.style.display = 'block'
            mainMenu.style.display = 'none'
        }
    }
}

function toggleFashionSubMenu() {
    let categoriesMenu = document.getElementById('mobile-menu-categories-list')
    let menu = document.getElementById('mobile-menu-categories-fashion')
    
    if (menu !== null) {
        if (menu.style.display === "block") {
            menu.style.display = 'none'
            categoriesMenu.style.display = 'block'

        } else {
            menu.style.display = 'block'
            categoriesMenu.style.display = 'none'
        }
    }
}

function toggleBnkSubMenu() {
    let categoriesMenu = document.getElementById('mobile-menu-categories-list')
    let menu = document.getElementById('mobile-menu-categories-bnk')
    
    if (menu !== null) {
        if (menu.style.display === "block") {
            menu.style.display = 'none'
            categoriesMenu.style.display = 'block'

        } else {
            menu.style.display = 'block'
            categoriesMenu.style.display = 'none'
        }
    }
}

function toggleHomeSubMenu() {
    let categoriesMenu = document.getElementById('mobile-menu-categories-list')
    let menu = document.getElementById('mobile-menu-categories-home')
    
    if (menu !== null) {
        if (menu.style.display === "block") {
            menu.style.display = 'none'
            categoriesMenu.style.display = 'block'

        } else {
            menu.style.display = 'block'
            categoriesMenu.style.display = 'none'
        }
    }
}

function toggleBeautySubMenu() {
    let categoriesMenu = document.getElementById('mobile-menu-categories-list')
    let menu = document.getElementById('mobile-menu-categories-beauty')
    
    if (menu !== null) {
        if (menu.style.display === "block") {
            menu.style.display = 'none'
            categoriesMenu.style.display = 'block'

        } else {
            menu.style.display = 'block'
            categoriesMenu.style.display = 'none'
        }
    }
}

function toggleOthersSubMenu() {
    let categoriesMenu = document.getElementById('mobile-menu-categories-list')
    let menu = document.getElementById('mobile-menu-categories-others')
    
    if (menu !== null) {
        if (menu.style.display === "block") {
            menu.style.display = 'none'
            categoriesMenu.style.display = 'block'

        } else {
            menu.style.display = 'block'
            categoriesMenu.style.display = 'none'
        }
    }
}

function toggleServicesSubMenu() {
    let mainMenu = document.getElementById('mobile-menu-list')
    let menu = document.getElementById('mobile-menu-services-list')
    
    if (menu !== null) {
        if (menu.style.display === "block") {
            menu.style.display = 'none'
            mainMenu.style.display = 'block'
        } else {
            menu.style.display = 'block'
            mainMenu.style.display = 'none'
        }
    }
}

function toggleWhatsNewSubMenu() {
    let mainMenu = document.getElementById('mobile-menu-list')
    let menu = document.getElementById('mobile-menu-whatsnew-list')
    
    if (menu !== null) {
        if (menu.style.display === "block") {
            menu.style.display = 'none'
            mainMenu.style.display = 'block'
        } else {
            menu.style.display = 'block'
            mainMenu.style.display = 'none'
        }
    }
}

function togglePromosSubMenu() {
    let whatsNewMenu = document.getElementById('mobile-menu-whatsnew-list')
    let menu = document.getElementById('mobile-menu-whatsnew-promos')

    console.log(menu.style.display)
    
    if (menu !== null) {
        if (menu.style.display === "block") {
            whatsNewMenu.style.display = 'block'
            menu.style.display = 'none'
        } else {
            whatsNewMenu.style.display = 'none'
            menu.style.display = 'block'
        }
    }
}

// function showHideMenu(ele) {
//     let menu = document.getElementById(ele);
//     let menuOverlay = document.getElementById('mobile-menu-overlay')
//     let menuList = document.getElementById('mobile-menu-list')
//     let menus = document.getElementsByClassName('mobile-menu-item')
//     // let menuArrow = document.getElementById("mobile-menu-arrow")

//     if (menu !== null) {
//         if (menu.style.display === "block") {
//             // menuArrow.className = "mobile-menu-arrow"
//             menu.style.display = 'none'
//             menuOverlay.style.display = 'none'
//             menuList.style.display = 'block'
//             for (let i = 0; i < menus.length; i++) {
//                 menus[i].style.display = 'none'
//             }
//         }
//         else {
//             menu.style.display = 'block'
//             menuOverlay.style.display = 'block'
//             // menuArrow.className = "mobile-menu-arrow active"
//         }
//         return false;
//     }
// }

// function showHideSubMenu(ele) {
//     let selectedMenu = document.getElementById(ele);

//     let menuList = document.getElementById('mobile-menu-list')
//     let menus = document.getElementsByClassName('mobile-menu-item')
//     let categoriesList = document.getElementById('mobile-menu-categories-list')
//     let servicesList = document.getElementById('mobile-menu-services-list')
//     let whatsnewList = document.getElementById('mobile-menu-whatsnew-list')

//     let categoriesFashion = document.getElementById('mobile-menu-categories-fashion')
//     let categoriesHome = document.getElementById('mobile-menu-categories-home')
//     let categoriesBnk = document.getElementById('mobile-menu-categories-bnk')
//     let categoriesBeauty = document.getElementById('mobile-menu-categories-beauty')
//     let categoriesOthers = document.getElementById('mobile-menu-categories-others')

//     let whatsnewPromos = document.getElementById('mobile-menu-whatsnew-promos')

//     switch (ele) {
//         case 'mobile-menu-list':
//             for (let i = 0; i < menus.length; i++) {
//                 menus[i].style.display = 'none'
//             }
//             menuList.style.display = 'block'
//             break;
    
//         case 'mobile-menu-categories-list':
//             for (let i = 0; i < menus.length; i++) {
//                 menus[i].style.display = 'none'
//             }
//             // menuList.style.display = 'none'
//             categoriesList.style.display = 'block'
//             break;
    
//         case 'mobile-menu-services-list':
//             // menuList.style.display = 'none'
//             servicesList.style.display = 'block'
//             break;
    
//         case 'mobile-menu-whatsnew-list':
//             // menuList.style.display = 'none'
//             whatsnewPromos.style.display = 'none'
//             whatsnewList.style.display = 'block'
//             break;
    
//         case 'mobile-menu-categories-fashion':
//             for (let i = 0; i < menus.length; i++) {
//                 menus[i].style.display = 'none'
//             }
//             // menuList.style.display = 'none'
//             categoriesFashion.style.display = 'block'
//             break;
    
//         case 'mobile-menu-categories-home':
//             for (let i = 0; i < menus.length; i++) {
//                 menus[i].style.display = 'none'
//             }
//             // menuList.style.display = 'none'
//             categoriesHome.style.display = 'block'
//             break;
    
//         case 'mobile-menu-categories-bnk':
//             for (let i = 0; i < menus.length; i++) {
//                 menus[i].style.display = 'none'
//             }
//             // menuList.style.display = 'none'
//             categoriesBnk.style.display = 'block'
//             break;
    
//         case 'mobile-menu-categories-beauty':
//             for (let i = 0; i < menus.length; i++) {
//                 menus[i].style.display = 'none'
//             }
//             // menuList.style.display = 'none'
//             categoriesBeauty.style.display = 'block'
//             break;
    
//         case 'mobile-menu-categories-others':
//             for (let i = 0; i < menus.length; i++) {
//                 menus[i].style.display = 'none'
//             }
//             // menuList.style.display = 'none'
//             categoriesOthers.style.display = 'block'
//             break;
    
//         case 'mobile-menu-whatsnew-promos':
//             // menuList.style.display = 'none'
//             // whatsnewList.style.display = 'none'
//             whatsnewPromos.style.display = 'block'
//             break;
    
//         default:
//             break;
//     }
// }