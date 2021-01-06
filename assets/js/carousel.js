$(document).ready(function() {

    const right = '<img src="./assets/images/icons/m-carousel-arrow-right.svg" alt="right">'
    const left = '<img src="./assets/images/icons/m-carousel-arrow-left.svg" alt="left">'
    const mRight = '<img src="./assets/images/icons/control-right.svg" alt="mRight">'
    const mLeft = '<img src="./assets/images/icons/control-left.svg" alt="mLeft">'

    var allData = [];
    var filterData = [];

    function filterCarousel(container) {

        var parent = document.getElementsByClassName(container)

        for (let pi = 0; pi < parent.length; pi++) {
            var children = parent[pi].childNodes;

            console.log('children', children)

            for (var i = 0; i < children.length; i++) { 

                var child = children[i];

                // select only <img>
                if (child.nodeType == 1) { 
                    allData.push(child)       
                    filterData.push(child)       
                }
            }

            function removeAllChild() {
                while (parent[pi].firstChild) {
                    parent[pi].removeChild(parent[pi].firstChild);
                }
            }

            function addDivByTwos() {
                let div;

                function splitter(arr, chunkNum) {
                    var twos = [];


                    while(filterData.length > 0) {
                        let currentChunk;
                        currentChunk = arr.splice(0, chunkNum);
                        twos.push(currentChunk);
                    }

                    var fragment = document.createDocumentFragment(); 
                    for (let i = 0; i < twos.length; i++) {
                        div = document.createElement("div");

                        for (let j = 0; j < twos[i].length; j++) {
                            div.appendChild(twos[i][j]);
                        }

                        div.appendChild(fragment); 
                        parent[pi].appendChild(div);

                        console.log(parent[pi])
                    }
                    
                }

                splitter(filterData, 2);
            }

            removeAllChild();

            addDivByTwos();

            
        }

        $(`.${container}.desktop`).owlCarousel({
            margin:0,
            loop:false,
            autoWidth:true,
            items:1,
            nav:true,
            navText: [
                left, right
            ],
            dots:false,
            rewind:true,

        });

        $(`.${container}.mobile`).owlCarousel({
            margin:0,
            loop:false,
            autoWidth:true,
            items:1,
            nav:true,
            navText: [
                mLeft, mRight
            ],
            dots:false,
            rewind:true,
        });
    }

    filterCarousel('gift-card__buy-cards')
    filterCarousel('gift-card__use-cards')


    // GIFT REGISTRY - OWL CAROUSEL
    $('.gift-available__registry.mobile').owlCarousel({
        margin:16,
        loop:true,
        autoWidth:true,
        items:1,
        nav:true,
        navText: [
            left, right
        ]
    })

    // GIFT CARDS - OWL CAROUSEL
    // Card Denominations
    $('.gift-card__cards.mobile').owlCarousel({
        margin:16,
        loop:true,
        autoWidth:true,
        items:1,
        nav:false,
        dots:false
    })

    // Sleeves
    $('.gift-card__sleeves.mobile').owlCarousel({
        margin:0,
        loop:false,
        autoWidth:true,
        items:1,
        nav:true,
        navText: [
            mLeft, mRight
        ],
        urlhashListener:true,
        startPosition: 'first'

        // margin:0,
        // loop:false,
        // autoWidth:true,
        // items:1,
        // nav:true,
        // navText: [
        //     mLeft, mRight
        // ],
        // urlhashListener:true,
        // startPosition: 'URLHash'
    })

    // Where to Use
    // $('.gift-card__use-cards').owlCarousel({
    //     margin:16,
    //     loop:true,
    //     autoWidth:true,
    //     items:1,
    //     nav:true,
    //     navText: [
    //         left, right
    //     ],
    //     dots:false
    // })

    // $('.gift-card__buy-cards').owlCarousel({
    //     margin:0,
    //     loop:true,
    //     autoWidth:true,
    //     items:1,
    //     nav:true,
    //     navText: [
    //         left, right
    //     ],
    //     dots:false
    // })

    // GIFT WRAPPING - OWL CAROUSEL
    // Gift Wrappers
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

    // Box Sizes
    // Desktop
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

    // Mobile
    $('.box-sizes__slider-slides.mobile').owlCarousel({
        margin:16,
        loop:false,
        autoWidth:true,
        items:1,
        nav:true,
        navText: [
            mLeft, mRight
        ],
        urlhashListener:true,
        startPosition: 'URLHash'
    })
})




