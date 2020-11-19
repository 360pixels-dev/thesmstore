function toggleSearch() {
    let searchContainer = document.getElementsByClassName('search-container')
    let searchButton = document.getElementsByClassName('mobile-search-button')
    let searchOverlay = document.getElementsByClassName('mobile-search-overlay')

    searchButton[0].style.display = 'none'
    searchContainer[0].style.display = 'flex'
    searchOverlay[0].style.display = 'block'
}

function closeMobileSearch() {
    let searchContainer = document.getElementsByClassName('search-container')
    let searchButton = document.getElementsByClassName('mobile-search-button')
    let searchOverlay = document.getElementsByClassName('mobile-search-overlay')

    searchOverlay[0].style.display = 'none'
    searchButton[0].style.display = 'flex'
    searchContainer[0].style.display = 'none'
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

function showHideMenu(ele) {
    let menu = document.getElementById(ele);
    let menuOverlay = document.getElementById('mobile-menu-overlay')
    let menuList = document.getElementById('mobile-menu-list')
    let menus = document.getElementsByClassName('mobile-menu-item')
    // let menuArrow = document.getElementById("mobile-menu-arrow")

    if (menu !== null) {
        if (menu.style.display === "block") {
            // menuArrow.className = "mobile-menu-arrow"
            menu.style.display = 'none'
            menuOverlay.style.display = 'none'
            menuList.style.display = 'block'
            for (let i = 0; i < menus.length; i++) {
                menus[i].style.display = 'none'
            }
        }
        else {
            menu.style.display = 'block'
            menuOverlay.style.display = 'block'
            // menuArrow.className = "mobile-menu-arrow active"
        }
        return false;
    }
}

function showHideSubMenu(ele) {
    let selectedMenu = document.getElementById(ele);

    let menuList = document.getElementById('mobile-menu-list')
    let menus = document.getElementsByClassName('mobile-menu-item')
    let categoriesList = document.getElementById('mobile-menu-categories-list')
    let servicesList = document.getElementById('mobile-menu-services-list')
    let whatsnewList = document.getElementById('mobile-menu-whatsnew-list')

    let categoriesFashion = document.getElementById('mobile-menu-categories-fashion')
    let categoriesHome = document.getElementById('mobile-menu-categories-home')
    let categoriesBnk = document.getElementById('mobile-menu-categories-bnk')
    let categoriesBeauty = document.getElementById('mobile-menu-categories-beauty')
    let categoriesOthers = document.getElementById('mobile-menu-categories-others')

    let whatsnewPromos = document.getElementById('mobile-menu-whatsnew-promos')

    switch (ele) {
        case 'mobile-menu-list':
            for (let i = 0; i < menus.length; i++) {
                menus[i].style.display = 'none'
            }
            menuList.style.display = 'block'
            break;
    
        case 'mobile-menu-categories-list':
            for (let i = 0; i < menus.length; i++) {
                menus[i].style.display = 'none'
            }
            menuList.style.display = 'none'
            categoriesList.style.display = 'block'
            break;
    
        case 'mobile-menu-services-list':
            menuList.style.display = 'none'
            servicesList.style.display = 'block'
            break;
    
        case 'mobile-menu-whatsnew-list':
            menuList.style.display = 'none'
            whatsnewPromos.style.display = 'none'
            whatsnewList.style.display = 'block'
            break;
    
        case 'mobile-menu-categories-fashion':
            for (let i = 0; i < menus.length; i++) {
                menus[i].style.display = 'none'
            }
            menuList.style.display = 'none'
            categoriesFashion.style.display = 'block'
            break;
    
        case 'mobile-menu-categories-home':
            for (let i = 0; i < menus.length; i++) {
                menus[i].style.display = 'none'
            }
            menuList.style.display = 'none'
            categoriesHome.style.display = 'block'
            break;
    
        case 'mobile-menu-categories-bnk':
            for (let i = 0; i < menus.length; i++) {
                menus[i].style.display = 'none'
            }
            menuList.style.display = 'none'
            categoriesBnk.style.display = 'block'
            break;
    
        case 'mobile-menu-categories-beauty':
            for (let i = 0; i < menus.length; i++) {
                menus[i].style.display = 'none'
            }
            menuList.style.display = 'none'
            categoriesBeauty.style.display = 'block'
            break;
    
        case 'mobile-menu-categories-others':
            for (let i = 0; i < menus.length; i++) {
                menus[i].style.display = 'none'
            }
            menuList.style.display = 'none'
            categoriesOthers.style.display = 'block'
            break;
    
        case 'mobile-menu-whatsnew-promos':
            menuList.style.display = 'none'
            whatsnewList.style.display = 'none'
            whatsnewPromos.style.display = 'block'
            break;
    
        default:
            break;
    }
}