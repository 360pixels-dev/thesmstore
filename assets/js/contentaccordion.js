const accordionHeaders = document.querySelectorAll('.ctd-accordion__item-header')

accordionHeaders.forEach(currentHeader => {
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

$(document).ready(function() {
    $('.faq-accordion__header').click(function(e) {
        $(e.target).closest('.faq-accordion').hasClass('active') ? $(e.target).closest('.faq-accordion').removeClass('active') : $(e.target).closest('.faq-accordion').addClass('active');
    });
})