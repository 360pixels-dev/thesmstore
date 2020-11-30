const branchList = [
    'Megamall',
    'Delgado',
    'Grand Central'
]

branchList.sort()

const container = $('#store-branches-list')
const containerDiv = document.getElementById('store-branches-list')

$(document).ready(() => {
    container.html('');

    $.breakpoint({
		condition: function () {
			return window.matchMedia('only screen and (max-width:820px)').matches;
		},
		first_enter: function () {
			// Code will run the first time condition() is true.
			// Here, you might create elements to use in
            // your enter and exit methods.

            if (container.html('')) {
                branchList.forEach(populateStoreBranches);
            }
		},
		enter: function () {
			if (branchList.length <= 2) {
                console.log(true)
                console.log(containerDiv.getElementsByTagName('span').length)

                for (let i = 0; i < branchList.length; i++) {
                    containerDiv.getElementsByTagName('span')[i].style.width = 'inherit'
                    containerDiv.getElementsByTagName('span')[i].style.textAlign = 'center'
                }

                

                console.log(containerDiv.getElementsByTagName('span')[0].style.marginBottom)
                console.log(containerDiv.getElementsByTagName('span')[0].style.textAlign)
            }
            
		},
		exit: function () {
		}
    });
    
    $.breakpoint({
		condition: function () {
			return window.matchMedia('only screen and (min-width:821px)').matches;
		},
		first_enter: function () {
			// Code will run the first time condition() is true.
			// Here, you might create elements to use in
            // your enter and exit methods.

            if (container.html('')) {
                branchList.forEach(populateStoreBranches);
            }
		},
		enter: function () {
			if (container.html('')) {
                branchList.forEach(populateStoreBranches);
            }
		},
		exit: function () {
		}
	});

    

    function populateStoreBranches(store) {
        container.append(`
            <span class="font-caption">${store}</span>
        `);
    }
})