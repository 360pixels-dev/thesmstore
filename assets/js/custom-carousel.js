const right = '<img src="/assets/images/icons/m-carousel-arrow-right.svg" alt="right">'
const left = '<img src="/assets/images/icons/m-carousel-arrow-left.svg" alt="left">'
const mRight = '<img src="/assets/images/icons/control-right.svg" alt="mRight">'
const mLeft = '<img src="/assets/images/icons/control-left.svg" alt="mLeft">'

var allGiftWrap = [];
var filterGiftWrap = [];
var useCardsAllData = [];
var filterData = [];
var filteredImages = [];
let activeFilter = $('.blog-filter-m').css("display") === "flex" ? $('.blog-filter-m.blog-filter-dropdown').children('select').val().toLowerCase() : $('.activeFilter').text().toLowerCase();

// For Gift Wrapping
if ($('.gift-wrapping__slider-slides').length !== 0) {

    function storeAllGiftWrap(container) {
        var parent = document.getElementsByClassName(container)
        var children = parent[0].childNodes !== undefined ? parent[0].childNodes : null;

        for (var i = 0; i < children.length; i++) { 

            var child = children[i];

            // select only <img>
            if (child.nodeType == 1) { 
                allGiftWrap.push(child) 
            }
        }

    }

    storeAllGiftWrap('gift-wrapping__slider-slides')
}

function filterGiftWrap(container) {

    var parent = document.getElementsByClassName(container)

    for (let pi = 0; pi < parent.length; pi++) {
        var children = parent[pi].childNodes;

        for (var i = 0; i < children.length; i++) { 

            var child = children[i];

            if (activeFilter) {
                if (activeFilter === 'all') {
                    // select only <img>
                    if (child.nodeType === 1) {     
                        filterGiftWrap.push(child)
                    }
                } else {
                    if (child.nodeType === 1 && child.className.toLowerCase() === activeFilter) {     
                        filterGiftWrap.push(child)
                    }
                }
            } else {
                // select only <img>
                if (child.nodeType === 1) {     
                    filterGiftWrap.push(child)
                }
            }
        }

        function removeAllChild() {
            while (parent[pi].firstChild) {
                parent[pi].removeChild(parent[pi].firstChild);
            }
        }

        function addDivByOnes() {
            let div;

            function splitter(arr, chunkNum) {
                var ones = [];

                while(filterGiftWrap.length > 0) {
                    let currentChunk;
                    currentChunk = arr.splice(0, chunkNum);
                    ones.push(currentChunk);
                }

                var fragment = document.createDocumentFragment(); 
                for (let i = 0; i < ones.length; i++) {
                    div = document.createElement("div");

                    for (let j = 0; j < ones[i].length; j++) {
                        div.appendChild(ones[i][j]);
                    }

                    div.appendChild(fragment); 
                    parent[pi].appendChild(div);
                }
                
            }

            splitter(filterGiftWrap, 1);
        }

        removeAllChild();

        addDivByOnes();
        
    }

    $(`.${container}`).owlCarousel({
        margin:16,
        loop:true,
        autoWidth:true,
        items:1,
        nav:true,
        navText: [
            left, right
        ],
        dots:false,
    });
}

if ($('.gift-wrapping__slider-slides').length !== 0) {
    filterGiftWrap('gift-wrapping__slider-slides')
}

if ($('.carousel-2row-filtering-cards').length !== 0 || $('.gift-card__buy-cards').length !== 0) {
    function storeAllImageData(container) {
        var parent = document.getElementsByClassName(container)
        var children = parent[0].childNodes;
    
        for (var i = 0; i < children.length; i++) { 
    
            var child = children[i];
    
            // select only <img>
            if (child.nodeType == 1) { 
                useCardsAllData.push(child) 
            }
        }
    
    }
    
    storeAllImageData('carousel-2row-filtering-cards')
    
    function filterCarousel(container) {
    
        var parent = document.getElementsByClassName(container)
    
        for (let pi = 0; pi < parent.length; pi++) {
            var children = parent[pi].childNodes;
    
            for (var i = 0; i < children.length; i++) { 
    
                var child = children[i];
    
                if (activeFilter) {
                    if (activeFilter === 'all') {
                        // select only <img>
                        if (child.nodeType === 1) {     
                            filterData.push(child)
                        }
                    } else {
                        if (child.nodeType === 1 && child.className.toLowerCase() === activeFilter) {     
                            filterData.push(child)
                        }
                    }
                } else {
                    // select only <img>
                    if (child.nodeType === 1) {     
                        filterData.push(child)
                    }
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
    filterCarousel('carousel-2row-filtering-cards')
    
    
    // Main Filtering
    function executeDesktopFiltering() {
    
        var parent = $('.carousel-2row-filtering-cards.desktop')
    
        $('.carousel-2row-filtering-cards.desktop').owlCarousel('destroy')
    
        function removeAllChild() {
            while (parent[0].firstChild) {
                parent[0].removeChild(parent[0].firstChild);
            }
        }
    
        removeAllChild()
    
    
        for (let i = 0; i < useCardsAllData.length; i++) { 
    
            // select only <img>
            if (useCardsAllData[i].nodeType == 1 && useCardsAllData[i].attributes[0].value.toLowerCase() === activeFilter) { 
                filteredImages.push(useCardsAllData[i])         
            }
    
            if (useCardsAllData[i].nodeType == 1 && activeFilter === 'all') { 
                filteredImages.push(useCardsAllData[i])         
            }
        }
    
        for (let i = 0; i < filteredImages.length; i++) {
            parent[0].appendChild(filteredImages[i])
        }
    
        filterCarousel('carousel-2row-filtering-cards')
    
        filteredImages = []
    
    }
    
    function executeMobileFiltering() {
    
        var parent = $('.carousel-2row-filtering-cards.mobile')
    
        $('.carousel-2row-filtering-cards.mobile').owlCarousel('destroy')
    
        function removeAllChild() {
            while (parent[0].firstChild) {
                parent[0].removeChild(parent[0].firstChild);
            }
        }
    
        removeAllChild()
        
    
        for (let i = 0; i < useCardsAllData.length; i++) { 
    
            // select only <img>
            if (useCardsAllData[i].nodeType === 1 && useCardsAllData[i].attributes[0].value.toLowerCase() === activeFilter) { 
                filteredImages.push(useCardsAllData[i])
            }
    
            if (useCardsAllData[i].nodeType == 1 && activeFilter === 'all') { 
                filteredImages.push(useCardsAllData[i])         
            }
        }
    
        for (let i = 0; i < filteredImages.length; i++) {
            parent[0].appendChild(filteredImages[i])
        }
    
        filterCarousel('carousel-2row-filtering-cards')
    
        filteredImages = []
    
    }
}

// change activeFilter

if ($('.carousel-2row-filtering-cards').length !== 0 || $('.gift-card__buy-cards').length !== 0) {
    $(document).click(function(event) {
        // event.preventDefault()
        var selection = $(event.target);
        var currentActiveFilter = $('.activeFilter')
        switch(selection[0].tagName) {
            case "SPAN":
                currentActiveFilter.removeClass('activeFilter')
                selection.addClass('activeFilter')
                activeFilter = selection[0].attributes[0].value.toLowerCase()
        
                executeDesktopFiltering()
                break;
        
            case "SELECT":
                activeFilter = selection[0].value.length !== undefined ? selection[0].value.toLowerCase() : 'all'
                
                executeMobileFiltering()
                break;
        
            default:
                break;
        }
    });
}
