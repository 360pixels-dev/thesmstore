const accordionHeaders = document.querySelectorAll('.ctd-accordion__item-header')

accordionHeaders.forEach(currentHeader => {
    currentHeader.addEventListener("click", event => {

        // to close any open accordions
        const openHeader = document.querySelector('.ctd-accordion__item-header.active')
        console.log("OPEN", openHeader)
        if (openHeader && openHeader !== currentHeader) {
            openHeader.classList.toggle("active") //removes "active" class
            openHeader.style.maxHeight = 0;
        }
            

        currentHeader.classList.toggle("active")
        const body = currentHeader.nextElementSibling;
        currentHeader.classList.contains("active")
            ? body.style.maxHeight = body.scrollHeight + "px"
            : body.style.maxHeight = 0;
    })
})