var pageActive = 'Page1';

function showPage(show) {
   console.log(pageActive, show);
   highlightPage(show, pageActive);
   document.getElementById(pageActive).style.display = "none";
   document.getElementById(show).style.display = "block";
   pageActive = show;
}

function highlightPage(page, hide) {
   console.log(page+"Button");
   document.getElementById(page+"Button").style.backgroundColor = "cyan";
   document.getElementById(hide+"Button").style.backgroundColor = "white";
}
