const accordionHeaders = document.querySelectorAll('.accordion__item-header')
const listFilter = document.querySelectorAll('.filter-list-item')
const accordionItems = document.querySelectorAll('.accordion__item')
const dropdownFilter = document.querySelector('.dropdown-filter')

if (dropdownFilter) {
    dropdownFilter.addEventListener("change", event => {
        const selectedFilter = event.target.value
    
        for (let i = 0; i < accordionItems.length; i++) {
            if (selectedFilter === accordionItems[i].getAttribute("name")) {
                accordionItems[i].style.display = "block"
            } else if (selectedFilter === "All") {
                accordionItems[i].style.display = "block"
            } else {
                accordionItems[i].style.display = "none"
            }
        }
    })
}

if (listFilter) {
    listFilter.forEach(currentFilter => {
        currentFilter.addEventListener("click", event => {
            const activeFilter = document.querySelector('.filter-list-item.activeFilter')
    
            if (activeFilter && activeFilter === currentFilter) return
    
            if (activeFilter && activeFilter !== currentFilter) {
                activeFilter.classList.toggle("activeFilter")
            }
    
            currentFilter.classList.toggle("activeFilter")
    
            for (let i = 0; i < accordionItems.length; i++) {
                if (currentFilter.getAttribute("name") === accordionItems[i].getAttribute("name")) {
                    accordionItems[i].style.display = "block"
                } else if (currentFilter.getAttribute("name") === "All") {
                    accordionItems[i].style.display = "block"
                } else {
                    accordionItems[i].style.display = "none"
                }
            }
    
            accordionItems.forEach(item => {
                item.addEventListener("load", event => {
                    console.log(item)
                    console.log(currentFilter.getAttribute("name") !== item.getAttribute("name"))
                    if (currentFilter.getAttribute("name") !== item.getAttribute("name"))  {
                        item.style.display = "none"
                    }
                })
            })
        })
    })
}

if (accordionHeaders) {
    accordionHeaders.forEach(currentHeader => {
        currentHeader.addEventListener("click", event => {
    
            // to close any open accordions
            const openHeader = document.querySelector('.accordion__item-header.active')
            if (openHeader && openHeader !== currentHeader) {
                openHeader.classList.toggle("active") //removes "active" class
                const openBody = openHeader.nextElementSibling;
                openBody.style.maxHeight = 0;
            }
            currentHeader.classList.toggle("active")
            const body = currentHeader.nextElementSibling;
            currentHeader.classList.contains("active")
                ? body.style.maxHeight = body.scrollHeight + "px"
                : body.style.maxHeight = 0;
        })
    })
}

// For CTD -- temporary fix
const ctdAccordionHeaders = document.querySelectorAll('.ctd-accordion__item-header')

if (ctdAccordionHeaders) {
    ctdAccordionHeaders.forEach(currentHeader => {
        currentHeader.addEventListener("click", event => {
    
            // to close any open accordions
            const openHeader = document.querySelector('.ctd-accordion__item-header.active')
            if (openHeader && openHeader !== currentHeader) {
                openHeader.classList.toggle("active") //removes "active" class
                const openBody = openHeader.nextElementSibling;
                openBody.style.maxHeight = 0;
            }
            currentHeader.classList.toggle("active")
            const body = currentHeader.nextElementSibling;
            currentHeader.classList.contains("active")
                ? body.style.maxHeight = body.scrollHeight + "px"
                : body.style.maxHeight = 0;
        })
    })
}
// /For CTD -- temporary fix

// $(document).ready(function() {
//     $('.faq-accordion__header').click(function(e) {
//         console.log($(e.target).closest('.faq-accordion__content').hasClass('active'))
//         $(e.target).closest('.faq-accordion__content').toggleClass('active') ?
//         $(e.target).closest('.faq-accordion__content').removeClass('active') :
//         $(e.target).closest('.faq-accordion__content').addClass('active');
//     });
// })