var x, i, j, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");

for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];

    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");

    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    // a2 = document.createElement("SPAN");
    // a2.setAttribute("class", "square-box");
    // a2.setAttribute("style", "background-color: " + selElmnt.options[selElmnt.selectedIndex].getAttribute("COLOR"));
    // a.appendChild(a2);
    x[i].appendChild(a);
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 0; j < selElmnt.length; j++) {

        if (selElmnt.options[j].value == "default") {
            continue;
        }

        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        // d = document.createElement("SPAN");
        // d.setAttribute("class", "square-box");
        // d.setAttribute("style", "background-color: " + selElmnt.options[j].getAttribute("COLOR"));
        // c.appendChild(d);

        // console.log(selElmnt.options[j].value);



        c.addEventListener("click", function (e) {
            var y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;

            console.log(h.innerHTML);
            for (i = 0; i < s.length; i++) {
                if (s.options[i].innerText == this.innerText) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;

                    if(this.innerHTML == "Select"){
                        console.log("SELECT ASD")
                    }
                    
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    for (k = 0; k < y.length; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
        e.stopPropagation();
        closeAllSelect(this);


        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });

    // console.log(a.innerHTML)
    // if (a.innerHTML == "Select") {
    //     a.classList.add('XASJD')
    // }
    // else {
    //     a.classList.remove('XASJD')
    // }
}

function closeAllSelect(elmnt) {
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}
document.addEventListener("click", closeAllSelect);