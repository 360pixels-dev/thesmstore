function showHideMenu(ele) {
    let menu = document.getElementById(ele);
    let menuList = document.getElementById('mobile-menu-list')
    let menus = document.getElementsByClassName('mobile-menu-item')

    if (menu !== null) {
        if (menu.style.display === "block") {
            menu.style.display = 'none'
            menuList.style = 'block'
            for (let i = 0; i < menus.length; i++) {
                menus[i].style.display = 'none'
            }
        }
        else {
            menu.style.display = 'block'
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