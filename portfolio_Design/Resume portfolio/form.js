function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}


function myFunction1()
{
 alert("Kodomomuke is famous among children.");
}

function myFunction2()
{
 alert("Shojo is known for young girls.");
}

function myFunction3()
{
 alert("Shonen is known for young boys.");
}

function myFunction4()
{
 alert("Seinen refers to young men between ages of 15-24.");
}

function myFunction5()
{
 alert("Chibi are the cute Mangas.");
}

function myFunction0()
{
alert("Josie is known for romantic tales");
}
