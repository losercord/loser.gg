// function search() {
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById("search");
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("list");
//     li = ul.getElementsByTagName("li");
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("header")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }
// function search() {
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById("search");
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("list");
//     li = ul.getElementsByTagName("li");
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("header")[0];
//         txtValue = a.textContent || a.innerText;
//         // Change the condition to check if the text starts with the filter
//         if (txtValue.toUpperCase().startsWith(filter)) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }
function search() {
    var input, filter, ul, li, header, aliases, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toLowerCase();
    ul = document.getElementById("list");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        header = li[i].getElementsByTagName("header")[0];
        aliases = getAliasesContent(li[i]);
        txtValue = (header.textContent || header.innerText) + "," + aliases;
        var valuesArray = txtValue.toLowerCase().split(',');
        var matchFound = valuesArray.some(function(value) {
            console.log(value.trim().startsWith(filter), value, filter)
            return value.trim().startsWith(filter);
        });

        if (matchFound) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function getAliasesContent(element) {
    var aliasesParagraph = element.querySelector("#aliases p");
    if (aliasesParagraph) {
        return aliasesParagraph.textContent || aliasesParagraph.innerText;
    }
    return "N/A";
}

window.onload = function() {
    var urlParams = new URLSearchParams(window.location.search);
    var searchParam = urlParams.get('search');
    if (searchParam !== null) {
        document.getElementById("owners").style.display = "none";
        document.getElementById("developers").style.display = "";
        document.getElementById("administrators").style.display = "none";
        document.getElementById("moderators").style.display = "none";

        const elements = document.querySelectorAll(".active");

        [].forEach.call(elements, function(el) {
            el.classList.remove("active");
        });

        // document.getElementById(param).style.display = "block";
        // e.classList.add("active");

        search();
    }
};


// function search() {
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById("search");
//     filter = input.value.toLowerCase();
//     ul = document.getElementById("list");
//     li = ul.getElementsByTagName("li");

//     // Update the URL with the search parameter
//     var searchParam = encodeURIComponent(filter);
//     var newUrl = window.location.origin + window.location.pathname + "?search=" + searchParam;
//     history.pushState(null, null, newUrl);

//     // Perform the search
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("header")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toLowerCase().startsWith(filter)) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }

// // Auto-search if the search parameter is present in the URL
// window.onload = function() {
//     var urlParams = new URLSearchParams(window.location.search);
//     var searchParam = urlParams.get('search');
//     if (searchParam !== null) {
//         // Set the search input value
//         document.getElementById("search").value = searchParam;
//         // Trigger the search function
//         search();
//     }
// };


function disableAll(param, e) {
    document.getElementById("owners").style.display = "none";
    document.getElementById("developers").style.display = "none";
    document.getElementById("administrators").style.display = "none";
    document.getElementById("moderators").style.display = "none";

    const elements = document.querySelectorAll(".active");

    [].forEach.call(elements, function(el) {
        el.classList.remove("active");
    });

    document.getElementById(param).style.display = "block";
    e.classList.add("active");
}