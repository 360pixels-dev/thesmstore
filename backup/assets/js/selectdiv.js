var sel = $('.sel'),
    txt = $('.txt'),
    options = $('.options');

sel.click(function (e) {
    e.stopPropagation();
    options.show();
});

$('body').click(function (e) {
    options.hide();
});

options.children('div').click(function (e) {
    e.stopPropagation();

    img = document.createElement("img");
    img.setAttribute("src", "./assets/images/icons/angle-down-black.svg");

    // console.log(img);
    txt.text($(this).text());

    txt.append(img);

    $(this).addClass('selected').siblings('div').removeClass('selected');
    options.hide();
});