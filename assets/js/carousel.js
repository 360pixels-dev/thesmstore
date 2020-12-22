$(document).ready(function() {
    

    // CAROUSEL - BANNER
    $('.pagination-dot__indicator').click(function() {
        var slideNum = $(this).attr('for');
        slideNum = slideNum.substr(slideNum.length - 1);
        
        $('.main-carousel').each(function() {
            $(this).removeClass('active');
        });
        $('.main-carousel').eq(slideNum - 1).addClass('active');
    });


    // CAROUSEL - EVENTS

    var eventsArr = [
        {
            isActive: true,
            url: './assets/images/banner-promo.png',
            month: 'January',
            day: '20',
            year: '2020',
            title: 'Billie Eilish Tour',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo.',
            branch: 'SM Makati',
            pageUrl: ''
        },
        {
            isActive: false,
            url: './assets/images/event_img2.jpg',
            month: 'January',
            day: '22',
            year: '2020',
            title: 'Title 2',
            desc: 'Description 2',
            branch: 'SM Mindanao',
            pageUrl: ''
        },
        {
            isActive: false,
            url: './assets/images/event_img3.jpg',
            month: 'January',
            day: '24',
            year: '2020',
            title: 'Title 3',
            desc: 'Description 3',
            branch: 'SM Tawi Tawi',
            pageUrl: ''
        },
        {
            isActive: false,
            url: './assets/images/event_img.jpg',
            month: 'January',
            day: '26',
            year: '2020',
            title: 'Title 4',
            desc: 'Description 4',
            branch: 'SM Sultan Kudarat',
            pageUrl: ''
        },
    ];

    // Init event page
    populateEventSlider();
    populateEventDetails();
    
    $('.featured-events__footer .controls__arrow').click(function() {
        var dir = $(this).attr('class').split('--')[1];

        // REARRANGE EVENT ARRAY
        eventsArr[0].isActive = false;
        if(dir == 'right') { //to the right
            eventsArr.push(eventsArr.shift());
        }
        else { //to the left
            eventsArr.unshift(eventsArr.pop());
        }
        eventsArr[0].isActive = true;
        
        populateEventDetails(); // CHANGE EVENT DETAILS
        populateEventSlider(); // REARRANGE EVENT SLIDER
    });

    // Populate events' slider
    function populateEventSlider(){
        $('.featured-events__slider').html('');
        for(x = 0; x < eventsArr.length; x++) {
            $('.featured-events__slider').append(
            `<div class="featured-events__slider-event ${eventsArr[x].isActive ? 'active' : ''}">
                <img src="${eventsArr[x].url}" alt="">
                <div class="gift-section__card-description">
                    <h3 class="featured-events__details-title">${eventsArr[0].title}</h3>
                    <p class="featured-events__details-description">${eventsArr[0].desc}</p>
                    <div class="featured-events__details-datetime">
                        <img src="./assets/images/icons/icon-clock.svg" alt="">
                        <span class="font-eyebrow">${eventsArr[0].month + eventsArr[0].day}</span>
                    </div>
            
                    <div class="featured-events__details-venue">
                        <img src="./assets/images/icons/icon-location.svg" alt="">
                        <p class="text-semibold">${eventsArr[0].branch}</p>
                    </div>
            
                    <a href="${eventsArr[0].pageUrl}" class="btn--text-link font-cta">Learn more</a>
                </div>
            </div>
            `);
        }
    }
    
    // Populate events' details
    function populateEventDetails() {
        $('.featured-events__details').html(`
            <h3 class="featured-events__details-title">${eventsArr[0].title}</h3>
            <p class="featured-events__details-description">${eventsArr[0].desc}</p>
            <div class="featured-events__details-datetime">
                <img src="./assets/images/icons/icon-clock.svg" alt="">
                <span class="font-eyebrow">${eventsArr[0].month + eventsArr[0].day}</span>
            </div>
    
            <div class="featured-events__details-venue">
                <img src="./assets/images/icons/icon-location.svg" alt="">
                <p class="text-semibold">${eventsArr[0].branch}</p>
            </div>
    
            <a href="${eventsArr[0].pageUrl}" class="btn--text-link font-cta">Learn more</a>
        `);
    }


    // CAROUSEL - CATALOG

    var catalogArr = [
        {
            isActive: true,
            category: 'Magazine',
            title1: 'Real',
            title2: 'Beauty',
            image: './assets/images/slideshow1.png',
            pageUrl: '', 
        },
        {
            isActive: false,
            category: 'Women\'s',
            title1: 'Women\'s',
            title2: 'Sale',
            image: './assets/images/omnibus-promo2.jpg',
            pageUrl: '', 
        },
        {
            isActive: false,
            category: 'Kids',
            title1: 'Toy',
            title2: 'Kingdom',
            image: './assets/images/omnibus-promo1.png',
            pageUrl: '', 
        },
    ];

    populateCatalogDetails();
    populateCatalogSlider();
    
    $('.featured-stories__controls .controls__arrow').click(function() {
        var dir = $(this).attr('class').split('--')[1];

        // REARRANGE EVENT ARRAY
        catalogArr[0].isActive = false;
        if(dir == 'right') { //to the right
            catalogArr.push(catalogArr.shift());
        }
        else { //to the left
            catalogArr.unshift(catalogArr.pop());
        }
        catalogArr[0].isActive = true;
        
    
        populateCatalogDetails(); // CHANGE EVENT DETAILS
        populateCatalogSlider(); // REARRANGE EVENT SLIDER
    });

    function populateCatalogDetails() {
        $('.featured-stories__details').html(`
            <span class="featured-stories__category font-eyebrow-semi">${catalogArr[0].category}</span>
            <h1 class="featured-stories__title font-hero">${catalogArr[0].title1}</h1>
            <h1 class="featured-stories__title font-hero">${catalogArr[0].title2}</h1>
            <a href="" class="featured-stories__btn btn--primary font-cta">Browse</a>
        `);
    }

    function populateCatalogSlider() {
        $('.featured-stories__images').html('');
        for(x = 0; x < catalogArr.length; x++) {
            $('.featured-stories__images').append(`
                <div class="featured-stories__image">
                    <img src="${catalogArr[x].image}" alt="">
                </div>
            `);
        }
    }

    
    // FASHION CAROUSEL - VIDEOS
    var fashionVideos = [
        {
            header: 'Featured Video',
            title1: 'Alex Gonzaga <br>For <span style="color: #0067b3">#SMCall<br><span style="visibility: hidden;">For </span>ToDeliver</span>',
            title2: '',
            content: 'Stay home, give us a call, and have your items delivered in as easy as 1-2-3!',
            videoUrl: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4',
        },
        {
            header: 'Another Fashion Video',
            title1: 'Test1',
            title2: 'Test1',
            content: 'From the latest KBeauty trends and products to the hottest styles in fashion—discover real beauty today.',
            videoUrl: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4'
        },
    ];

    populateFashionVideoDetails();
    // populateVideoSlider();
    // populateTemporaryVideoSlider()
    
    $('.featured-video__controls .controls__arrow').click(function() {
        var dir = $(this).attr('class').split('--')[1];
        
        // REARRANGE EVENT ARRAY
        fashionVideos[0].isActive = false;
        if(dir == 'right') { //to the right
            fashionVideos.push(fashionVideos.shift());
        }
        else { //to the left
            fashionVideos.unshift(fashionVideos.pop());
        }
        fashionVideos[0].isActive = true;
        
        populateFashionVideoDetails(); // CHANGE EVENT DETAILS
        // populateVideoSlider(); // REARRANGE EVENT SLIDER
        // populateTemporaryVideoSlider(); // TEMPORARY VIDEO SLIDER

    });
    
    function populateFashionVideoDetails() {
        
        $('.featured-video__text--fashion').html(`
            <span class="font-eyebrow">${fashionVideos[0].header}</span>
            <h1 class="font-hero">
                <span>${fashionVideos[0].title1}</span> 
                <span>${fashionVideos[0].title2}</span>
                ${fashionVideos[0].title3 ? `<span>${fashionVideos[0].title3}</span>` : ``}
            </h1>
            <p>${fashionVideos[0].content}</p>
        `);
    }
    function populateVideoSlider() {
        
        $('.featured-video__video').html(`
            <video class="featured-video__video-file" playsinline="" autoplay="" muted="" loop="" src="${fashionVideos[0].videoUrl}" class="ng-star-inserted"></video>
        `);
    }
    function populateTemporaryVideoSlider() {
        
        $('.featured-video__video').html(`
            <img src="./assets/images/featured-video-ctd.png" alt="">
        `);
    }


    // INDEX CAROUSEL - VIDEOS
    var indexVideos = [
        {
            header: 'Featured Video',
            title1: 'Alex Gonzaga <br> for <span style="color: #FFCD4E;">SM Call<br> to Deliver</span>',
            title2: '',
            content: 'Let Alex Gonzaga show you hot to complete your shopping list fom home via #SMCallToDeliver!',
            videoUrl: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4',
        },
        {
            header: 'Another Index Video 2',
            title1: 'Test1',
            title2: 'Test1',
            content: 'From the latest KBeauty trends and products to the hottest styles in fashion—discover real beauty today.',
            videoUrl: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4'
        },
        {
            header: 'Another Index Video 3',
            title1: 'Test1',
            title2: 'Test1',
            content: 'From the latest KBeauty trends and products to the hottest styles in fashion—discover real beauty today.',
            videoUrl: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4'
        },
    ];

    // populateIndexVideoDetails();
    // populateVideoSlider();
    // populateTemporaryVideoSlider()
    
    $('.featured-video__controls--index .controls__arrow').click(function() {
        var dir = $(this).attr('class').split('--')[1];
        var indexVids = $('.featured-video__content')
        var activeVid = $('.featured-video__content.active').attr('id')

        if(dir == 'right') { //to the right
            $('.featured-video__content').each(function() {
                $(this).removeClass('active');
            });
            $('.featured-video__content').eq(Number(activeVid) + 1).addClass('active');

            // if counter exceeds the number of videos, returns to first index
            if ((Number(activeVid) + 1) > indexVids.length - 1) {
                $('.featured-video__content').eq(0).addClass('active');
            }
        }
        else { //to the left
            $('.featured-video__content').each(function() {
                $(this).removeClass('active');
            });
            $('.featured-video__content').eq(Number(activeVid) - 1).addClass('active');
        }
        
        // // REARRANGE EVENT ARRAY
        // indexVideos[0].isActive = false;

        // if(dir == 'right') { //to the right
        //     indexVideos.push(indexVideos.shift());
        // }
        // else { //to the left
        //     indexVideos.unshift(indexVideos.pop());
        // }
        // indexVideos[0].isActive = true;

        // populateIndexVideoDetails(); // CHANGE EVENT DETAILS
        // populateVideoSlider(); // REARRANGE EVENT SLIDER
        // populateTemporaryVideoSlider(); // TEMPORARY VIDEO SLIDER

    });
    
    function populateIndexVideoDetails() {
        
        $('.featured-video__text--index').html(`
            <span class="font-eyebrow">${indexVideos[0].header}</span>
            <h1 class="font-hero">
                <span>${indexVideos[0].title1}</span> 
                <span>${indexVideos[0].title2}</span>
                ${indexVideos[0].title3 ? `<span>${indexVideos[0].title3}</span>` : ``}
            </h1>
            <p>${indexVideos[0].content}</p>
        `);
    }
    function populateVideoSlider() {
        
        $('.featured-video__video').html(`
            <video class="featured-video__video-file" playsinline="" autoplay="" muted="" loop="" src="${indexVideos[0].videoUrl}" class="ng-star-inserted"></video>
        `);
    }
    function populateTemporaryVideoSlider() {
        
        $('.featured-video__video').html(`
            <img src="./assets/images/featured-video-ctd.png" alt="">
        `);
    }

    // ABOUT US CAROUSEL - VIDEOS
    $('.about-carousel__controls .controls__arrow').click(function() {
        var dir = $(this).attr('class').split('--')[1];
        var indexVids = $('.about-carousel__content')
        var activeVid = $('.about-carousel__content.active').attr('id')

        if(dir == 'right') { //to the right
            $('.about-carousel__content').each(function() {
                $(this).removeClass('active');
            });
            $('.about-carousel__content').eq(Number(activeVid) + 1).addClass('active');

            // if counter exceeds the number of videos, returns to first index
            if ((Number(activeVid) + 1) > indexVids.length - 1) {
                $('.about-carousel__content').eq(0).addClass('active');
            }
        }
        else { //to the left
            $('.about-carousel__content').each(function() {
                $(this).removeClass('active');
            });
            $('.about-carousel__content').eq(Number(activeVid) - 1).addClass('active');
        }
        
        // // REARRANGE EVENT ARRAY
        // indexVideos[0].isActive = false;

        // if(dir == 'right') { //to the right
        //     indexVideos.push(indexVideos.shift());
        // }
        // else { //to the left
        //     indexVideos.unshift(indexVideos.pop());
        // }
        // indexVideos[0].isActive = true;

        // populateIndexVideoDetails(); // CHANGE EVENT DETAILS
        // populateVideoSlider(); // REARRANGE EVENT SLIDER
        // populateTemporaryVideoSlider(); // TEMPORARY VIDEO SLIDER

    });

    // ABOUT US CAROUSEL LG - IMAGES
    $('.about-carousel-lg__controls .controls__arrow').click(function() {
        var dir = $(this).attr('class').split('--')[1];
        var indexVids = $('.about-carousel-lg__content')
        var activeVid = $('.about-carousel-lg__content.active').attr('id')

        if(dir == 'right') { //to the right
            $('.about-carousel-lg__content').each(function() {
                $(this).removeClass('active');
            });
            $('.about-carousel-lg__content').eq(Number(activeVid) + 1).addClass('active');

            // if counter exceeds the number of videos, returns to first index
            if ((Number(activeVid) + 1) > indexVids.length - 1) {
                $('.about-carousel-lg__content').eq(0).addClass('active');
            }
        }
        else { //to the left
            $('.about-carousel-lg__content').each(function() {
                $(this).removeClass('active');
            });
            $('.about-carousel-lg__content').eq(Number(activeVid) - 1).addClass('active');
        }
        
        // // REARRANGE EVENT ARRAY
        // indexVideos[0].isActive = false;

        // if(dir == 'right') { //to the right
        //     indexVideos.push(indexVideos.shift());
        // }
        // else { //to the left
        //     indexVideos.unshift(indexVideos.pop());
        // }
        // indexVideos[0].isActive = true;

        // populateIndexVideoDetails(); // CHANGE EVENT DETAILS
        // populateVideoSlider(); // REARRANGE EVENT SLIDER
        // populateTemporaryVideoSlider(); // TEMPORARY VIDEO SLIDER

    });

    // CALLTODELIVER CAROUSEL - VIDEOS
    var ctdVideos = [
        {
            header: 'Featured Video',
            title1: 'Alex Gonzaga <br>For <span style="color: #0067b3">#SMCall<br><span style="visibility: hidden;">For </span>ToDeliver</span>',
            title2: '',
            content: 'Stay home, give us a call, and have your items delivered in as easy as 1-2-3!',
            videoUrl: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4',
        },
        {
            header: 'Another Call To Deliver Video',
            title1: 'Test1',
            title2: 'Test1',
            content: 'From the latest KBeauty trends and products to the hottest styles in fashion—discover real beauty today.',
            videoUrl: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4'
        },
    ];

    // populateCtdVideoDetails();
    // populateVideoSlider();
    // populateTemporaryVideoSlider()
    
    // $('.featured-video__controls--ctd .controls__arrow').click(function() {
    //     var dir = $(this).attr('class').split('--')[1];
        
    //     // REARRANGE EVENT ARRAY
    //     ctdVideos[0].isActive = false;
    //     if(dir == 'right') { //to the right
    //         ctdVideos.push(ctdVideos.shift());
    //     }
    //     else { //to the left
    //         ctdVideos.unshift(ctdVideos.pop());
    //     }
    //     ctdVideos[0].isActive = true;
        
    //     // populateCtdVideoDetails(); // CHANGE EVENT DETAILS
    //     // populateVideoSlider(); // REARRANGE EVENT SLIDER
    //     // populateTemporaryVideoSlider(); // TEMPORARY VIDEO SLIDER

    // });

    $('.featured-video__controls--ctd .controls__arrow').click(function() {
        var dir = $(this).attr('class').split('--')[1];
        var indexVids = $('.featured-video__content')
        var activeVid = $('.featured-video__content.active').attr('id')

        if(dir == 'right') { //to the right
            $('.featured-video__content').each(function() {
                $(this).removeClass('active');
            });
            $('.featured-video__content').eq(Number(activeVid) + 1).addClass('active');

            // if counter exceeds the number of videos, returns to first index
            if ((Number(activeVid) + 1) > indexVids.length - 1) {
                $('.featured-video__content').eq(0).addClass('active');
            }
        }
        else { //to the left
            $('.featured-video__content').each(function() {
                $(this).removeClass('active');
            });
            $('.featured-video__content').eq(Number(activeVid) - 1).addClass('active');
        }
        
        // // REARRANGE EVENT ARRAY
        // indexVideos[0].isActive = false;

        // if(dir == 'right') { //to the right
        //     indexVideos.push(indexVideos.shift());
        // }
        // else { //to the left
        //     indexVideos.unshift(indexVideos.pop());
        // }
        // indexVideos[0].isActive = true;

        // populateIndexVideoDetails(); // CHANGE EVENT DETAILS
        // populateVideoSlider(); // REARRANGE EVENT SLIDER
        // populateTemporaryVideoSlider(); // TEMPORARY VIDEO SLIDER

    });
    
    function populateCtdVideoDetails() {
        
        $('.featured-video__text--ctd').html(`
            <span class="font-eyebrow" style="color: #161720;">${ctdVideos[0].header}</span>
            <h1 class="font-hero">
                <span>${ctdVideos[0].title1}</span> 
                <span>${ctdVideos[0].title2}</span>
                ${ctdVideos[0].title3 ? `<span>${ctdVideos[0].title3}</span>` : ``}
            </h1>
            <p style="color: #161720;">${ctdVideos[0].content}</p>
        `);
    }
    function populateVideoSlider() {
        
        $('.featured-video__video--ctd').html(`
            <video class="featured-video__video-file" playsinline="" autoplay="" muted="" loop="" src="${ctdVideos[0].videoUrl}" class="ng-star-inserted"></video>
        `);
    }
    function populateTemporaryVideoSlider() {
        
        $('.featured-video__video--ctd').html(`
            <img src="./assets/images/featured-video-ctd.png" alt="">
        `);
    }
    

    // Events By Date
    const datedEventArr = [
        {
            imgUrl: './assets/images/cards/card-event.png',
            month: 'Jan',
            day: '13-14',
            event: 'Billie Eilish Tour'
        },
        {
            imgUrl: './assets/images/cards/card-event2.png',
            month: 'Jan',
            day: '20',
            event: 'Kids At Play'
        },
        {
            imgUrl: './assets/images/cards/card-event3.png',
            month: 'Jan',
            day: '23-25',
            event: 'Peppa Pig\'s Adventure'
        },
        {
            imgUrl: './assets/images/cards/card-event4.png',
            month: 'Jan',
            day: '13-14',
            event: 'Big Drag Energy: #Aquaria'
        },
    ]

    // Upcoming Events
    const upcomingEventArr = [
        {
            imgUrl: './assets/images/cards/card-event.png',
            month: 'Feb',
            day: '13-14',
            event: 'Billie Eilish Tour'
        },
        {
            imgUrl: './assets/images/cards/card-event5.png',
            month: 'Feb',
            day: '20',
            event: 'Women\'s Sale'
        },
        {
            imgUrl: './assets/images/cards/card-event6.png',
            month: 'Feb',
            day: '29',
            event: 'Makin\' It With Patrick Starrr'
        },
        {
            imgUrl: './assets/images/cards/card-event7.png',
            month: 'Feb',
            day: '30',
            event: 'Bags Sale'
        },
    ]


    // Landing Pages
    // Mens
    const mensEventArr = [
        {
            imgUrl: './assets/images/cards/men-card-event1.jpg',
            month: 'Jan',
            day: '13-14',
            event: 'Billie Eilish Tour'
        },
        {
            imgUrl: './assets/images/cards/men-card-event2.jpg',
            month: 'Jan',
            day: '15-16',
            event: 'Billie Eilish Tour'
        },
        {
            imgUrl: './assets/images/cards/men-card-event3.jpg',
            month: 'Jan',
            day: '19-20',
            event: 'Billie Eilish Tour'
        },
    ];
    
    // Womens
    const womensEventArr = [
        {
            imgUrl: './assets/images/cards/women-card-event1.jpg',
            month: 'Jan',
            day: '13-14',
            event: 'Billie Eilish Tour'
        },
        {
            imgUrl: './assets/images/cards/women-card-event2.jpg',
            month: 'Jan',
            day: '15-16',
            event: 'Billie Eilish Tour'
        },
        {
            imgUrl: './assets/images/cards/women-card-event3.jpg',
            month: 'Jan',
            day: '19-20',
            event: 'Billie Eilish Tour'
        },
        {
            imgUrl: './assets/images/cards/women-card-event1.jpg',
            month: 'Jan',
            day: '19-20',
            event: 'Billie Eilish Tour'
        },
    ];
    
    // Kids
    const kidsEventArr = [
        {
            imgUrl: './assets/images/cards/youth-card-event1.jpg',
            month: 'Jan',
            day: '13-14',
            event: 'Billie Eilish Tour'
        },
        {
            imgUrl: './assets/images/cards/youth-card-event2.jpg',
            month: 'Jan',
            day: '15-16',
            event: 'Billie Eilish Tour'
        },
        {
            imgUrl: './assets/images/cards/youth-card-event3.jpg',
            month: 'Jan',
            day: '19-20',
            event: 'Billie Eilish Tour'
        },
        {
            imgUrl: './assets/images/cards/youth-card-event1.jpg',
            month: 'Jan',
            day: '19-20',
            event: 'Billie Eilish Tour'
        },
    ];
    
    // Youth
    const youthEventArr = [
        {
            imgUrl: './assets/images/cards/youth-card-event1.jpg',
            month: 'Jan',
            day: '13-14',
            event: 'Billie Eilish Tour'
        },
        {
            imgUrl: './assets/images/cards/youth-card-event2.jpg',
            month: 'Jan',
            day: '15-16',
            event: 'Billie Eilish Tour'
        },
        {
            imgUrl: './assets/images/cards/youth-card-event3.jpg',
            month: 'Jan',
            day: '19-20',
            event: 'Billie Eilish Tour'
        },
        {
            imgUrl: './assets/images/cards/youth-card-event1.jpg',
            month: 'Jan',
            day: '19-20',
            event: 'Billie Eilish Tour'
        },
    ];
    
    // Home
    const homeEventArr = [
        {
            imgUrl: './assets/images/cards/youth-card-event1.jpg',
            month: 'Jan',
            day: '13-14',
            event: 'Billie Eilish Tour'
        },
        {
            imgUrl: './assets/images/cards/youth-card-event2.jpg',
            month: 'Jan',
            day: '15-16',
            event: 'Billie Eilish Tour'
        },
        {
            imgUrl: './assets/images/cards/youth-card-event3.jpg',
            month: 'Jan',
            day: '19-20',
            event: 'Billie Eilish Tour'
        },
        {
            imgUrl: './assets/images/cards/youth-card-event1.jpg',
            month: 'Jan',
            day: '19-20',
            event: 'Billie Eilish Tour'
        },
    ];
    
    // Beauty
    const beautyEventArr = [
        {
            imgUrl: './assets/images/cards/youth-card-event1.jpg',
            month: 'Jan',
            day: '13-14',
            event: 'Billie Eilish Tour'
        },
        {
            imgUrl: './assets/images/cards/youth-card-event2.jpg',
            month: 'Jan',
            day: '15-16',
            event: 'Billie Eilish Tour'
        },
        {
            imgUrl: './assets/images/cards/youth-card-event3.jpg',
            month: 'Jan',
            day: '19-20',
            event: 'Billie Eilish Tour'
        },
        {
            imgUrl: './assets/images/cards/youth-card-event1.jpg',
            month: 'Jan',
            day: '19-20',
            event: 'Billie Eilish Tour'
        },
    ];
    
    // Others
    const othersEventArr = [
        {
            imgUrl: './assets/images/cards/youth-card-event1.jpg',
            month: 'Jan',
            day: '13-14',
            event: 'Billie Eilish Tour'
        },
        {
            imgUrl: './assets/images/cards/youth-card-event2.jpg',
            month: 'Jan',
            day: '15-16',
            event: 'Billie Eilish Tour'
        },
        {
            imgUrl: './assets/images/cards/youth-card-event3.jpg',
            month: 'Jan',
            day: '19-20',
            event: 'Billie Eilish Tour'
        },
        {
            imgUrl: './assets/images/cards/youth-card-event1.jpg',
            month: 'Jan',
            day: '19-20',
            event: 'Billie Eilish Tour'
        },
    ];

    var category = $('.omnibus-slider__details-controls').attr('data-category');
    var category2 = $('.upcoming-slider__details-controls').attr('data-category');
    
        
    if(category == 'mens') {
        landingGenerateCarousel(mensEventArr);
    }
    else if (category == 'womens') {
        landingGenerateCarousel(womensEventArr);
    }
    else if (category == 'kids') {
        landingGenerateCarousel(kidsEventArr);
    }
    else if (category == 'youth') {
        landingGenerateCarousel(youthEventArr);
    }
    else if (category == 'home') {
        landingGenerateCarousel(homeEventArr);
    }
    else if (category == 'beauty') {
        landingGenerateCarousel(beautyEventArr);
    }
    else if (category == 'others') {
        landingGenerateCarousel(othersEventArr);
    }
    else if (category == 'dated') {
        landingGenerateCarousel(datedEventArr);
    }
    else if (category == 'upcoming') {
        landingGenerateCarousel(upcomingEventArr);
    }

    $('.omnibus-slider__details-controls .controls__arrow').click(function() {
        
        var dir = $(this).attr('class').split('--')[1];
        var array = $(this).parent().attr('data-category') + 'EventArr';
        var arr = new Array;
        
        if(array == 'mensEventArr') {
            arr = mensEventArr;
        }
        else if (array == 'womensEventArr') {
            arr = womensEventArr;
        }
        else if (array == 'kidsEventArr') {
            arr = kidsEventArr;
        }
        else if (array == 'youthEventArr') {
            arr = youthEventArr;
        }
        else if (array == 'homeEventArr') {
            arr = homeEventArr;
        }
        else if (array == 'beautyEventArr') {
            arr = beautyEventArr;
        }
        else if (array == 'othersEventArr') {
            arr = othersEventArr;
        }
        else if (array == 'datedEventArr') {
            arr = datedEventArr;
        }
        else if (array == 'upcomingEventArr') {
            arr = upcomingEventArr;
        }
        
        landingRearrangeCarousel(arr,dir);
    });

    if(category2 == 'mens') {
        landingGenerateCarousel2(mensEventArr);
    }
    else if (category2 == 'womens') {
        landingGenerateCarousel2(womensEventArr);
    }
    else if (category2 == 'kids') {
        landingGenerateCarousel2(kidsEventArr);
    }
    else if (category2 == 'youth') {
        landingGenerateCarousel2(youthEventArr);
    }
    else if (category2 == 'home') {
        landingGenerateCarousel2(homeEventArr);
    }
    else if (category2 == 'beauty') {
        landingGenerateCarousel2(beautyEventArr);
    }
    else if (category2 == 'others') {
        landingGenerateCarousel2(othersEventArr);
    }
    else if (category2 == 'dated') {
        landingGenerateCarousel2(datedEventArr);
    }
    else if (category2 == 'upcoming') {
        landingGenerateCarousel2(upcomingEventArr);
    }

    $('.upcoming-slider__details-controls .controls__arrow').click(function() {
        
        var dir = $(this).attr('class').split('--')[1];
        var array = $(this).parent().attr('data-category') + 'EventArr';
        var arr = new Array;
        
        if(array == 'mensEventArr') {
            arr = mensEventArr;
        }
        else if (array == 'womensEventArr') {
            arr = womensEventArr;
        }
        else if (array == 'kidsEventArr') {
            arr = kidsEventArr;
        }
        else if (array == 'youthEventArr') {
            arr = youthEventArr;
        }
        else if (array == 'homeEventArr') {
            arr = homeEventArr;
        }
        else if (array == 'beautyEventArr') {
            arr = beautyEventArr;
        }
        else if (array == 'othersEventArr') {
            arr = othersEventArr;
        }
        else if (array == 'datedEventArr') {
            arr = datedEventArr;
        }
        else if (array == 'upcomingEventArr') {
            arr = upcomingEventArr;
        }
        
        landingRearrangeCarousel2(arr,dir);
    });

    function landingGenerateCarousel(arr) {
        $('.omnibus-slider__slider').html('');
        for(var i = 0; i < arr.length; i++) {
            $('.omnibus-slider__slider').append(`<div class="card--event">
                <img class="card--event-poster" src="${arr[i].imgUrl}" alt="">
                <div class="card--event-details">
                    <p class="font-eyebrow card--event-details-month">${arr[i].month}</p>
                    <h1 class="font-h1 card--event-details-day">${arr[i].day}</h1>
                    <p class="font-eyebrow card--event-details-title">${arr[i].event}</p>
                </div>
            </div>`); 
        }
    }

    function landingRearrangeCarousel(arr, dir) {
        
        arr[0].isActive = false;
        if(dir == 'right') { //to the right
            arr.push(arr.shift());
        }
        else { //to the left
            arr.unshift(arr.pop());
        }
        arr[0].isActive = true;

        landingGenerateCarousel(arr);
    }

    function landingGenerateCarousel2(arr) {
        $('.upcoming-slider__slider').html('');
        for(var i = 0; i < arr.length; i++) {
            $('.upcoming-slider__slider').append(`<div class="card--event">
                <img class="card--event-poster" src="${arr[i].imgUrl}" alt="">
                <div class="card--event-details">
                    <p class="font-eyebrow card--event-details-month">${arr[i].month}</p>
                    <h1 class="font-h1 card--event-details-day">${arr[i].day}</h1>
                    <p class="font-eyebrow card--event-details-title">${arr[i].event}</p>
                </div>
            </div>`); 
        }
    }

    function landingRearrangeCarousel2(arr, dir) {
        
        arr[0].isActive = false;
        if(dir == 'right') { //to the right
            arr.push(arr.shift());
        }
        else { //to the left
            arr.unshift(arr.pop());
        }
        arr[0].isActive = true;

        landingGenerateCarousel2(arr);
    }




    // Carousel Gift Pages 
    // Gift Card Page
    $('.gift__controls button').click(function() {

        var slider = $('.gift-card__sleeves');
        var slider2 = $('.gift-card__cards');
        var sliderMargin = parseFloat(slider.css('margin-left').split('px')[0]);
        var sliderMargin2 = parseFloat(slider2.css('margin-left').split('px')[0]);
        var dir = $(this).attr('class').split('--')[1];
        
        if(dir == 'right') {
            if(isMarginValid(sliderMargin - 137.22)) {
                slider.css('margin-left', `${sliderMargin - 137.22}px`);
            }
            else {
                slider.css('margin-left', '0px');
            }
        }
        else {
            sliderMargin + 137.22;
            if(isMarginValid(sliderMargin + 137.22)) {
                slider.css('margin-left', `${sliderMargin + 137.22}px`);
            }
            else {
                slider.css('margin-left', '0px');
            }
        }

        function isMarginValid(val) {
            if(val < 0 && val >= -411.66) { 
                $('.gift__controls--left').css('visibility', 'visible');
                return true;
            }
            else {
                $('.gift__controls--left').css('visibility', 'hidden');
                return false;
            }
        }
    });



    var dragItem = $('.gift-card__cards div');
    var container = $('.gift-card__cards');

    var active = false;
    var currentX;
    var currentY;
    var initialX;
    var initialY;
    var xOffset = 0;
    var yOffset = 0;

    container.mousedown(dragStart);
    container.mousemove(drag);
    container.mouseup(dragEnd);

    function dragStart(e) {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
  
        if (e.target === dragItem) {
          active = true;
        }
    }

    function dragEnd(e) {
        initialX = currentX;
        initialY = currentY;
  
        active = false;
      }
  
      function drag(e) {
        if (active) {
        
            e.preventDefault();

            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;

            xOffset = currentX;
            yOffset = currentY;
            
            console.log(currentX);
  
            setTranslate(currentX, currentY, dragItem);
        }
      }
  
      function setTranslate(xPos, yPos, el) {
        el.style.marginLeft = xPos + 'px';
      }
    
});



// WHATS NEW CAROUSEL - PROMOS
var whatsNewPromos = [
    {
        title: 'SMAC Sale',
        content: 'Score up to 50% off on selected items, and enjoy discounts.',
        imageUrl: './assets/images/whatsnew-promo1.png',
    },
    {
        title: '0% Interest, Easy Payment Plan',
        content: 'Kick-off the new decade with an awesome start!',
        imageUrl: './assets/images/whatsnew-promo2.png',
    },
    {
        title: 'SMAC Sale 2',
        content: 'Score up to 50% off on selected items, and enjoy discounts.',
        imageUrl: './assets/images/whatsnew-promo1.png',
    },
    {
        title: '0% Interest, Easy Payment Plan 2',
        content: 'Kick-off the new decade with an awesome start!',
        imageUrl: './assets/images/whatsnew-promo2.png',
    },
];

populateWhatsNewPromosDetails();
// populateVideoSlider();
// populateTemporaryVideoSlider()

$('.whats-new__promos-controls .controls__arrow').click(function() {
    var dir = $(this).attr('class').split('--')[1];
    
    // REARRANGE EVENT ARRAY
    whatsNewPromos[0].isActive = false;
    if(dir == 'right') { //to the right
        whatsNewPromos.push(whatsNewPromos.shift());
    }
    else { //to the left
        whatsNewPromos.unshift(whatsNewPromos.pop());
    }
    whatsNewPromos[0].isActive = true;
    
    populateWhatsNewPromosDetails(); // CHANGE EVENT DETAILS
    // populateVideoSlider(); // REARRANGE EVENT SLIDER
    // populateTemporaryVideoSlider(); // TEMPORARY VIDEO SLIDER

});

function populateWhatsNewPromosDetails() {
    
    $('.whats-new__promos-cards').html(`
        <div class="card--promo">
            <img class="card--promo-image" src="${whatsNewPromos[0].imageUrl}" alt="">
            <h4 class="card--promo-title font-h4">${whatsNewPromos[0].title}</h4>
            <p class="card--promo-details">${whatsNewPromos[0].content}.</p>
            <a href="" class="btn--text-link font-cta">View</a>
        </div>
        <div class="card--promo">
            <img class="card--promo-image" src="${whatsNewPromos[1].imageUrl}" alt="">
            <h4 class="card--promo-title font-h4">${whatsNewPromos[1].title}</h4>
            <p class="card--promo-details">${whatsNewPromos[1].content}.</p>
            <a href="" class="btn--text-link font-cta">View</a>
        </div>
    `);
}

// BOX SIZES CAROUSEL
const boxSizesArr = [
    {
        imgUrl: './assets/images/box-size-s.jpg',
        size: 'Small',
        price: '₱29.00',
        dimensions: 'Dimensions: 5” (H) x 11”(W) x 6”(D)'
    },
    {
        imgUrl: './assets/images/box-size-m.jpg',
        size: 'Medium',
        price: '₱29.00',
        dimensions: 'Dimensions: 11.5” (H) x 15.5”(W) x 10”(D)'
    },
    {
        imgUrl: './assets/images/box-size-m.jpg',
        size: 'Large',
        price: '₱29.00',
        dimensions: 'Dimensions: 23” (H) x 15”(W) x 9”(D)'
    },
    {
        imgUrl: './assets/images/box-size-m.jpg',
        size: 'Extra Large',
        price: '₱29.00',
        dimensions: 'Dimensions: 32” (H) x 15”(W) x 9”(D)'
    },
];

populateBoxSizesDetails();
// populateVideoSlider();
// populateTemporaryVideoSlider()

$('.box-sizes__controls .controls__arrow').click(function() {
    var dir = $(this).attr('class').split('--')[1];
    
    // REARRANGE EVENT ARRAY
    boxSizesArr[0].isActive = false;
    if(dir == 'right') { //to the right
        boxSizesArr.push(boxSizesArr.shift());
    }
    else { //to the left
        boxSizesArr.unshift(boxSizesArr.pop());
    }
    boxSizesArr[0].isActive = true;
    
    populateBoxSizesDetails(); // CHANGE EVENT DETAILS
    // populateVideoSlider(); // REARRANGE EVENT SLIDER
    // populateTemporaryVideoSlider(); // TEMPORARY VIDEO SLIDER

});

function populateBoxSizesDetails() {
    
    $('.box-sizes__slider-slides').html(`
        <div class="box-sizes__slider-slide">
            <img src="${boxSizesArr[0].imgUrl}" alt="">
            <div>
                <h4 class="font-h4-caps">${boxSizesArr[0].size}</h4>
                <h4 class="font-h4 text-bold">${boxSizesArr[0].price}</h4>
            </div>
            <span class="font-caption">${boxSizesArr[0].dimensions}</span>
        </div>
        <div class="box-sizes__slider-slide">
            <img src="${boxSizesArr[1].imgUrl}" alt="">
            <div>
                <h4 class="font-h4-caps">${boxSizesArr[1].size}</h4>
                <h4 class="font-h4 text-bold">${boxSizesArr[1].price}</h4>
            </div>
            <span class="font-caption">${boxSizesArr[1].dimensions}</span>
        </div>
        <div class="box-sizes__slider-slide">
            <img src="${boxSizesArr[2].imgUrl}" alt="">
            <div>
                <h4 class="font-h4-caps">${boxSizesArr[2].size}</h4>
                <h4 class="font-h4 text-bold">${boxSizesArr[2].price}</h4>
            </div>
            <span class="font-caption">${boxSizesArr[2].dimensions}</span>
        </div>
    `);
}

const right = '<img src="./assets/images/icons/m-carousel-arrow-right.svg" alt="right">'
const left = '<img src="./assets/images/icons/m-carousel-arrow-left.svg" alt="left">'

// GIFT WRAPPING - OWL CAROUSEL
// Gift Wrappers
$(document).ready(function(){
    $('.gift-wrapping__slider-slides').owlCarousel({
        margin:16,
        loop:true,
        autoWidth:true,
        items:1,
        nav:true,
        navText: [
            left, right
        ]
    })
});

// Box Sizes
// Desktop
$(document).ready(function(){
    $('.box-sizes__slider-slides.desktop').owlCarousel({
        margin:16,
        loop:true,
        autoWidth:true,
        items:1,
        nav:true,
        navText: [
            left, right
        ]
    })
});


// Mobile
const mRight = '<img src="./assets/images/icons/control-right.svg" alt="mRight">'
const mLeft = '<img src="./assets/images/icons/control-left.svg" alt="mLeft">'

$(document).ready(function(){
    let customLeft = "";

    $('.box-sizes__slider-slides.mobile').owlCarousel({
        margin:16,
        loop:false,
        autoWidth:true,
        items:1,
        nav:true,
        navText: [
            mLeft, mRight
        ],
    })
});