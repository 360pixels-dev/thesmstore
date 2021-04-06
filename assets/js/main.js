$(document).ready(function () {

    if ($('.form').length !== 0) {
        // if ($('#btnSubmit').text().toLowerCase() === 'sent') {
            // $('.form').find('input').each(function(event) {
            //     $(this).val('')
            //     $(this).text('')
            // })

            // $('.form').find('textarea').val('')
            // $('.form').find('textarea').text('')
        // }

        $('.form').find('textarea')
    }

    if ($('.mobile-search-button').css('display') === 'flex') {
        $('.mobile-search-button').click(function() {
            $('.mobile-search-open').css('display', 'block')
        })

        $('.mobile-search-open__search-button').click(function() {
            $('.mobile-search-open').css('display', 'none')
        })
    }


    if ($('.selected-store.active').length !== 0) {

        $('.selected-store.active').ready(function() {
            $('#selected-store').text($('.selected-store.active').parent().parent().find('.store-title').text())
        })

        $('.make-store').click(function() {
            $('.selected-store.active').toggleClass('active')
            $('.make-store.disabled').toggleClass('disabled')

            $(this).parent().parent().find('.selected-store').toggleClass('active')
            $(this).parent().find('.make-store').toggleClass('disabled')

            $('#selected-store').text($(this).parent().parent().find('.store-title').text())

        })
    }

    if ($('.forex-tooltip').length !== 0) {
        $('.forex-tooltip').click(function() {
            // if ($(window).width() > 360) {
                if ($('.font-fineprint.tooltip').css('display') === 'none') {
                    $('.font-fineprint.tooltip').css('display','block')
                } else {
                    $('.font-fineprint.tooltip').css('display','none')
                }
            // } else {
            //     if ($('.font-fineprint.mobile-tooltip').css('display') === 'none') {
            //         $('.font-fineprint.mobile-tooltip').css('display','block')
            //     } else {
            //         $('.font-fineprint.mobile-tooltip').css('display','none')
            //     }
            // }
        })
        // $('.mobile-tooltip').click(function() {
        //     if ($('.font-fineprint.mobile-tooltip').css('display') === 'none') {
        //         $('.font-fineprint.mobile-tooltip').css('display','block')
        //     } else {
        //         $('.font-fineprint.mobile-tooltip').css('display','none')
        //     }
        // })
    }

    if ($('.billpay__content-search').length !== 0) {
        var billpayInput = document.querySelector('.billpay__content-search').querySelector('input')
        var billpayText = document.querySelectorAll('.billpay__category-content ul li')

        function highlight(e) {
            var regex = new RegExp(e.target.value, 'gi')
            
            for (let i = 0; i < billpayText.length; i++) {
                var response = billpayText[i].innerText.replace(regex, function(str) {
                    return "<span style='background-color: #FFCD4E;'>" + str + "</span>"
                })
                billpayText[i].innerHTML = response
            }
        }

        billpayInput.addEventListener('change', highlight)
        billpayInput.addEventListener('keyup', highlight)
    }

    if ($('.banner-inner--search__input-group').length !== 0 && $('.banner-inner--search__input-group').find('input').val()) {
        console.log($('.banner-inner--search__input-group').find('input').val())
        
        var helpSupportInput = document.querySelector('.banner-inner--search__input-group').querySelector('input')
        var helpSupportHeaderText = document.querySelectorAll('.accordion__item-header span')
        var helpSupportBodyText = document.querySelectorAll('.accordion__item-body-content p')

        function highlight() {
            var regex = new RegExp(helpSupportInput.value, 'gi')
            
            for (let i = 0; i < helpSupportHeaderText.length; i++) {
                var response = helpSupportHeaderText[i].innerText.replace(regex, function(str) {
                    return "<span style='background-color: #FFCD4E;'>" + str + "</span>"
                })
                helpSupportHeaderText[i].innerHTML = response
            }

            for (let i = 0; i < helpSupportBodyText.length; i++) {
                var response = helpSupportBodyText[i].innerText.replace(regex, function(str) {
                    return "<span style='background-color: #FFCD4E;'>" + str + "</span>"
                })
                helpSupportBodyText[i].innerHTML = response
            }
        }

        highlight()
    }

    // if ($('.banner-inner--search__input-group').length !== 0) {
    //     var helpSupportInput = document.querySelector('.banner-inner--search__input-group').querySelector('input')
    //     var helpSupportHeaderText = document.querySelectorAll('.accordion__item-header span')
    //     var helpSupportBodyText = document.querySelectorAll('.accordion__item-body-content p')

    //     function highlight(e) {
    //         var regex = new RegExp(e.target.value, 'gi')
            
    //         for (let i = 0; i < helpSupportHeaderText.length; i++) {
    //             var response = helpSupportHeaderText[i].innerText.replace(regex, function(str) {
    //                 return "<span style='background-color: #FFCD4E;'>" + str + "</span>"
    //             })
    //             helpSupportHeaderText[i].innerHTML = response
    //         }

    //         for (let i = 0; i < helpSupportBodyText.length; i++) {
    //             var response = helpSupportBodyText[i].innerText.replace(regex, function(str) {
    //                 return "<span style='background-color: #FFCD4E;'>" + str + "</span>"
    //             })
    //             helpSupportBodyText[i].innerHTML = response
    //         }
    //     }

    //     helpSupportInput.addEventListener('change', highlight)
    //     helpSupportInput.addEventListener('keyup', highlight)
    // }

    // $('.billpay__content-search').find('input').on('keyup', function(event) {
    //     var keyword = event.currentTarget.value;
    //     highlight('.billpay__category-content', keyword);
    // });

    // $('.banner-inner--search__input-group').find('input').val()
    //     ? highlight('.accordion__item-header', )

    // $('.banner-inner--search__input-group').find('input').ready(function(event) {
    //     var keyword = $('.banner-inner--search__input-group').find('input').val()
    //     // keyword ? highlight('.accordion__item-header', keyword) : null

    //     $('.accordion__item-header').each(function(index, element) {
    //         console.log($(element))
    //         if (keyword === $(element).data('originalText').toLowerCase()) {
    //             console.log('found')
    //         }
    //     })
    // })
      
    // function highlight(selector, keyword) {
    //     $(selector).each(function(index, element) {
    //         var $element = $(element);

    //         var original = $element.data('originalText');

    //         if (original == undefined) {
    //             original = $element.html();
    //             $element.data('originalText', original);
    //         }

    //         $element.html(original.replace(keyword, '<span class="highlight">' + keyword + '</span>'));
    //     });
    // }
    
    // Input for numbers 
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();

        if (count > 1)
            $(this).attr("src", "./assets/images/icons/subtract.svg");
        else
            $(this).attr("src", "./assets/images/icons/subtract-disabled.svg");


        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();

        $('.minus').attr("src", "./assets/images/icons/subtract.svg");
        return false;
    });

    // OPEN CART MODAL
    $('#cartModal').click(function () {
        $('.modal').addClass('active');
    });

    // OPEN EXPORT CSV MODAL
    $('#openExportModal').click(function () {
        $('.modal').addClass('active');
    })

    // WIDGET ANIMATION
    $(window).scroll(() => {
        // console.log($(this).scrollTop());
        var fromTop = $(this).scrollTop();
        var widgetHeight = $('.widgets').height();
        $('.widgets').css('margin-bottom', '-' + fromTop + 'px');
    });


    // BURGER MENU
    // onclick outside mobile menu
    const $menu = $('.burger-menu, .nav__mobile, .nav__mobile-sub, .nav__mobile *, .nav__mobile-sub *');
    $(document).mouseup(function (e) {
        var win = $(window);
        if (!$menu.is(e.target)) {
            $('.burger-menu-default').prop('hidden', false);
            $('.burger-menu-close').prop('hidden', true);
            $('.nav__mobile').css('display', 'none');
            $('.nav__mobile-sub').css('display', 'none');
            $('.nav__mobile').css('left', '12px');
            refreshBurgerMenu();
        }
    });
    // on window resize
    $(window).on('resize', function () {
        var win = $(this);
        $('.burger-menu-default').prop('hidden', false);
        $('.burger-menu-close').prop('hidden', true);
        $('.nav__mobile').css('display', 'none');
        $('.nav__mobile-sub').css('display', 'none');
        $('.nav__mobile').css('left', '12px');
        refreshBurgerMenu();
    });
    $('.burger-menu').click(function () {
        if ($('.nav__mobile').css('display') == 'none') {
            $('.nav__mobile').css('display', 'flex');
            $('.burger-menu-default').prop('hidden', true);
            $('.burger-menu-close').prop('hidden', false);
        }
        else {
            $('.nav__mobile').css('display', 'none');
            $('.nav__mobile-sub').css('display', 'none');
            $('.burger-menu-default').prop('hidden', false);
            $('.burger-menu-close').prop('hidden', true);
            $('.nav__mobile').css('left', '12px');
            refreshBurgerMenu();
        }
    });

    // CHANGE BURGER MENU CONTENT
    $('.nav__mobile-upper-item').click(function () {
        var submenu = $(this).data('item');
        $('.nav__mobile').css('left', '-360px');
        $('.nav__mobile-sub').css('display', 'flex');
        $('.nav__mobile--' + submenu).css('display', 'flex');
        $('.nav__mobile-control-back').data('item', submenu);
    });
    $('.nav__mobile-control-back').click(function () {
        $('.nav__mobile').css('left', '12px');
        $('.nav__mobile-sub').css('display', 'none');
        refreshBurgerMenu();
    });

    function refreshBurgerMenu() {
        // var submenu = $('.nav__mobile-control-back').data('item');
        $('.nav__mobile-container').css('display', 'none');
    }


    // TOGGLE PASSWORD VISIBILITY
    // $('.signup__form-group .toggle-password, .login__form-group .toggle-password').click(function () {
    //     let pass = $('.signup__form-group #password, .login__form-group #password');
    //     if (pass.attr('type') == 'password') {
    //         pass.attr('type', 'text');
    //         $('.toggle-password').attr('src', './assets/images/icons/password-eye-enable.svg');
    //     }
    //     else {
    //         pass.attr('type', 'password');
    //         $('.toggle-password').attr('src', './assets/images/icons/password-eye.svg');
    //     }
    // });

    $('#currPass .toggle-password').click(function () {
        let pass = $('#currPass #password');
        if (pass.attr('type') == 'password') {
            pass.attr('type', 'text');
            $('#currPass .toggle-password').attr('src', './assets/images/icons/password-eye-enable.svg');
        }
        else {
            pass.attr('type', 'password');
            $('#currPass .toggle-password').attr('src', './assets/images/icons/password-eye.svg');
        }
    });

    $('#newPass .toggle-password').click(function () {
        let pass = $('#newPass #password');
        if (pass.attr('type') == 'password') {
            pass.attr('type', 'text');
            $('#newPass .toggle-password').attr('src', './assets/images/icons/password-eye-enable.svg');
        }
        else {
            pass.attr('type', 'password');
            $('#newPass .toggle-password').attr('src', './assets/images/icons/password-eye.svg');
        }
    });

    $('#confirmPass .toggle-password').click(function () {
        let pass = $('#confirmPass #password');
        if (pass.attr('type') == 'password') {
            pass.attr('type', 'text');
            $('#confirmPass .toggle-password').attr('src', './assets/images/icons/password-eye-enable.svg');
        }
        else {
            pass.attr('type', 'password');
            $('#confirmPass .toggle-password').attr('src', './assets/images/icons/password-eye.svg');
        }
    });


    // OPEN TERMS AND CONDITION MODAL
    $('#openTermsModal').click(function () {
        $('.modal--terms').parent().addClass('active');
        let cb = $('.checkbox-container input');
        if (cb.prop('checked')) {
            cb.prop("checked", false).change();
        }
        else {
            cb.prop("checked", true).change();
        }
    });


    // TOGGLE MODAL
    $('.modal .modal__close').click(function () {
        $(this).parent().parent().removeClass('active');
    });
    $('.modal--item .modal__close').click(function () {
        $(this).parent().parent().parent().removeClass('active');
        $('body').css('overflow', 'auto');
    });

    $('.modal--terms .modal__close').click(function () {
        $('.modal--terms').parent().removeClass('active');
    });

    $('.modal--services .modal__close').click(function () {
        $('.modal--services').parent().removeClass('active');
    });

    $('.modal--tos .modal__close').click(function () {
        $('.modal--tos').parent().removeClass('active');
    });

    $('.modal--export_csv .close').click(function () {
        $('.modal--export_csv').parent().removeClass('active');
    });

    $('.catalog-items .carousel__item').click(function (e) {
        if ($(e.target).hasClass('color-picker-item') || $(e.target).attr('type') == 'checkbox') {
            return false;
        }
        $('.modal').addClass('active');
        $('body').css('overflow', 'hidden');
    });

    $('.card--service-btn').click(function () {
        $('.modal').addClass('active');
    });



    // CATEGORIES MENU CONTROLS
    $('.nav__dropdown-controls--right').click(function () {
        $(this).css('opacity', '0');
        $('.nav__dropdown-controls--left').css('opacity', '1');
        $('.card--menu-categories:nth-of-type(1), .card--menu-categories:nth-of-type(2), .card--menu-categories:nth-of-type(3)').css('display', 'none');
        $('.card--menu-categories:nth-of-type(5), .card--menu-categories:nth-of-type(6), .card--menu-categories:nth-of-type(7)').css('display', 'block');
    });
    $('.nav__dropdown-controls--left').click(function () {
        $(this).css('opacity', '0');
        $('.nav__dropdown-controls--right').css('opacity', '1');
        $('.card--menu-categories:nth-of-type(1), .card--menu-categories:nth-of-type(2), .card--menu-categories:nth-of-type(3)').css('display', 'block');
        $('.card--menu-categories:nth-of-type(5), .card--menu-categories:nth-of-type(6), .card--menu-categories:nth-of-type(7)').css('display', 'none');
    });



    // LOCATION ACCORDION
    $('.viber-main__location-header').click(function () {
        if ($(window).width() <= 600) {
            if ($(this).parent().hasClass('active')) {
                $(this).parent().removeClass('active');
            }
            else {
                $(this).parent().addClass('active');
            }
        }
    });

    // LOCATION ACCORDION
    $('.billpay__category-header').click(function () {
        if ($(window).width() <= 600) {
            if ($(this).parent().hasClass('active')) {
                $(this).parent().removeClass('active');
            }
            else {
                $(this).parent().addClass('active');
            }
        }
    });


    // ACCORDION
    $('.accordion__header').click(function () {
        $(this).parent().toggleClass('active');
    });

    // ACCORDION WHEN MENU CLICK
    var $root = $('html, body');

    $('.link-delivery__item, .nav__mobile-upper-item').click(function () {
        if (!($('.accordion' + $.attr(this, 'href')).hasClass('active'))) {
            $('.accordion' + $.attr(this, 'href')).addClass('active');
        }

        $root.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);

        return false;
    });


    // CLOSE COOKIE MODAL
    $('.cookie__btn .btn--primary:nth-child(1)').click(function () {
        $('.cookie__container').css('display', 'none');
    });


    // CLOSE WELCOME MODAL
    $('.modal--welcome .modal-content button').click(function () {
        $('.modal').removeClass('active');
    });

    // CLOSE CART MODAL
    $('.modal--cart .modal-content button').click(function () {
        $('.modal').removeClass('active');
    });

    // FEATURED PRODUCT CAROUSEL
    if ($('.delivery__featured-slider').length !== 0) {
        $('.delivery__featured-slider').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 3,
            variableWidth: true,
            responsive: [
                {
                    breakpoint: 1279,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        infinite: true,
                        variableWidth: true,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        centerMode: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        variableWidth: true,
                    }
                },
            ]
        });
    
        $('.delivery__featured-controls--left').click(function () {
            $('.slick-prev').click();
        });
    
        $('.delivery__featured-controls--right').click(function () {
            $('.slick-next').click();
        });
    }


    // TOGGLE FILTER ACCORDION
    $('.delivery-catalog__accordion-item div:nth-child(1)').click(function () {
        $(this).parent().toggleClass('active');
    });


    // TOGGLE FILTER ESSENTIAL IN MOBILE
    $(window).on('resize', function () {
        if ($(window).width() <= 1024) {
            $('body').css('overflow', 'auto');
            $('.delivery-catalog__filter').css('display', 'none');
        }
        else {
            $('body').css('overflow', 'auto');
            $('.delivery-catalog__filter').css('display', 'flex');
        }
    });
    $('.catalog-sorter div:nth-of-type(1) button').click(function () {
        if ($(window).width() <= 1024) {
            $('.delivery-catalog__filter').css('display', 'flex');
            $('body').css('overflow', 'hidden');
        }
    });

    $('.delivery-catalog__filter > img, .catalog-done-btn').click(function () {
        $('.delivery-catalog__accordion-item').each(function () {
            $(this).removeClass('active');
        });
        $('body').css('overflow', 'auto');
        $('.delivery-catalog__filter').css('display', 'none');
    });


    // TOGGLE USER MENU
    $('.nav-user .nav-user__hello').click(function () {
        if ($('.nav-user__menu').css('display') == 'none') {
            $('.nav-user__menu').css('display', 'flex');
        }
        else {
            $('.nav-user__menu').css('display', 'none');
        }
    });


    // COLOR PICKER ON CATALOG
    $('.color-picker-item').click(function () {
        $(this).parent().children().each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');
    });



    // AUTO SUGGESTION SEARCH BRANCH

    $('.search-branch-input').keyup(() => {
        var list = [];
        if ($('.search-branch-input').val()) {
            var key = $('.search-branch-input').val();
            $('.branch-suggestion-box').css('display', 'block');
            for (i = 0; i < branch.length; i++) {
                if (branch[i].name.toLowerCase().includes(key.toLowerCase())) {
                    if (list.indexOf(branch[i]) == -1) {
                        list.push(branch[i]);
                        populateSuggestionBox(list);
                    }
                }
            }
        }
        else {
            $('.branch-suggestion-box').css('display', 'none');
        }
    });

    $('body').click(function (e) {

        if ($(e.target).hasClass('search-branch-input') || $(e.target).hasClass('branch-suggestion-box') || $(e.target).parent().hasClass('slimScrollDiv')) {
            return false;
        }
        else {
            if ($('.branch-suggestion-box').css('display') == 'block') {
                $('.branch-suggestion-box').css('display', 'none');
            }
        }
    });


    $('.branch-suggestion-box').on('click', '.store-name', function () {
        $('.search-branch-input').val('The SM Store ' + $(this).data('name'));
        $('.branch-suggestion-box').css('display', 'none');
        populateBranchDetails($(this).data('name'));
        $('.branch-details').css('display', 'flex');
    });

    function populateSuggestionBox(arr) {
        var list = '';
        var metro = '';
        var northl = '';
        var southl = '';
        var vis = '';
        var minda = '';
        for (i = 0; i < arr.length; i++) {
            switch (arr[i].group) {
                case 1:
                    metro += `<span class="font-caption store-name" data-name="${arr[i].name}">The SM Store ${arr[i].name}</span>`;
                    break;
                case 2:
                    northl += `<span class="font-caption store-name" data-name="${arr[i].name}">The SM Store ${arr[i].name}</span>`;
                    break;
                case 3:
                    southl += `<span class="font-caption store-name" data-name="${arr[i].name}">The SM Store ${arr[i].name}</span>`;
                    break;
                case 4:
                    vis += `<span class="font-caption store-name" data-name="${arr[i].name}">The SM Store ${arr[i].name}</span>`;
                    break;
                case 5:
                    minda += `<span class="font-caption store-name" data-name="${arr[i].name}">The SM Store ${arr[i].name}</span>`;
                    break;
            }
        }

        if (metro !== '') {
            list += `<b>Metro Manila</b><br>${metro}<br>`;
        }
        if (northl !== '') {
            list += `<b>North Luzon</b><br>${northl}<br>`;
        }
        if (southl !== '') {
            list += `<b>South Luzon</b><br>${southl}<br>`;
        }
        if (vis !== '') {
            list += `<b>Visayas</b><br>${vis}<br>`;
        }
        if (minda !== '') {
            list += `<b>Mindanao</b><br>${minda}`;
        }

        $('.branch-suggestion-box div').html(list);
    }

    function populateBranchDetails(name) {
        var i = branch.findIndex(x => x.name === name);

        $('.branch-details').html(
            `<div class="header">
            <div>
                <img src="./assets/images/icons/Navigationbranded.svg" alt="">
                <span class="font-headline">The SM Store ${branch[i].name}</span>
            </div>
            <div>
                <img src="./assets/images/icons/icon-clock.svg" alt="">
                <span class="font-eyebrow-medium">Operating hours: Mon - Sun 9:00AM to 4:00PM</span>
            </div>
        </div>
        <div class="contacts">
            <div class="number">
                <h2>
                    <span class="font-fineprint">Contact</span>
                </h2>
                <div>
                    <span class="contact-number">0917 861 5396</span>
                    <div>
                        <img src="./assets/images/icons/btn_Call.svg" alt="">
                        <img src="./assets/images/icons/btn_Message.svg" alt="">
                        <img src="./assets/images/icons/btn_Viber.svg" alt="">
                    </div>
                </div>
                <div>
                    <span class="contact-number">0917 861 5396</span>
                    <div>
                        <img src="./assets/images/icons/btn_Call.svg" alt="">
                        <img src="./assets/images/icons/btn_Message.svg" alt="">
                        <img src="./assets/images/icons/btn_Viber.svg" alt="">
                    </div>
                </div>
            </div>
            <div class="email">
                <h2>
                    <span class="font-fineprint">Email</span>
                </h2>
                <div class="container-email-branch">
                    <div class="icon-email-branch">
                        <img src="./assets/images/icons/btn_Email.svg" alt="">
                    </div>
                    <span class="email-address">megamall@smmalls.com</span>
                </div>
            </div>
        </div>`
        );
    }

    
});

function showCampaignVideoModal() {
    const modal = document.getElementById('campaign-video-modal')
    const overlay = document.getElementById('campaign-video-overlay')

    modal.style.display = 'block'
    overlay.style.display = 'block'
}

function closeCampaignVideoModal() {
    const modal = document.getElementById('campaign-video-modal')
    const overlay = document.getElementById('campaign-video-overlay')

    modal.style.display = 'none'
    overlay.style.display = 'none'
}