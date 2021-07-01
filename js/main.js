// onmousemove
function HoverBotton()
{
    document.getElementById("butt").style.backgroundColor = "#080"
}
// onmouseout
function hoverout()
{
    document.getElementById("butt").style.backgroundColor = "#00bcba"
}
// section 2 show right part 
function show()
{
    document.getElementById("click").style.visibility = "visible"
}
// section 2 hide right part
function hide()
{
    document.getElementById("click").style.visibility = "hidden"
}

// onmousout
var n = 0;
function hoverd()
{
    n = n + 1 ;
    document.getElementById("img1").innerHTML = n;
}

// onclick
var s = 0;
function test()
{
    s = s + 1 ;
    document.getElementById("img2").innerHTML = s;
}

//onmousmove
var m = 0;
function last()
{
    m = m + 1 ;
    document.getElementById("img3").innerHTML = m;
}


function anthorcolor()
{
    document.getElementById("clickshere").style.color =  "#fff";
}