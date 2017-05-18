
message = document.getElementById("fly").innerHTML; // $ = taking a new line
console.log(message);
distance = 50; // pixel(s)
speed = 125; // milliseconds

var txt="",
    num=0,
    num4=0,
    flyofle="",
    flyofwi="",
    flyofto="",
    fly=document.getElementById("fly");


function stfly() {
    for(i=0;i != message.length;i++) {
        if(message.charAt(i) != "$")
            txt += "<span style='position:relative;visibility:hidden;' id='n"+i+"'>"+message.charAt(i)+"<\/span>";
        else
            txt += "<br>";
    }
    fly.innerHTML = txt;
    txt = "";
    flyofle = fly.offsetLeft;
    flyofwi = fly.offsetWidth;
    flyofto = fly.offsetTop;
    fly2b();
}

function fly2b() {
    if(num4 != message.length) {
        if(message.charAt(num4) != "$") {
            var then = document.getElementById("n" + num4);
            then.style.left = flyofle - then.offsetLeft + flyofwi / 2 + 'px';
            then.style.top = flyofto - then.offsetTop + distance + 'px';
            fly3(then.id, parseInt(then.style.left), parseInt(then.style.left) / 5, parseInt(then.style.top), parseInt(then.style.top) / 5);
        }
        num4++;
        setTimeout("fly2b()", speed);
    }
}

function fly3(target,lef2,num2,top2,num3) {
    if((Math.floor(top2) != 0 && Math.floor(top2) != -1) || (Math.floor(lef2) != 0 && Math.floor(lef2) != -1)) {
        if(lef2 >= 0)
            lef2 -= num2;
        else
            lef2 += num2 * -1;
        if(Math.floor(lef2) != -1) {
            document.getElementById(target).style.visibility = "visible";
            document.getElementById(target).style.left = Math.floor(lef2) + 'px';
        } else {
            document.getElementById(target).style.visibility = "visible";
            document.getElementById(target).style.left = Math.floor(lef2 + 1) + 'px';
        }
        if(lef2 >= 0)
            top2 -= num3
        else
            top2 += num3 * -1;
        if(Math.floor(top2) != -1)
            document.getElementById(target).style.top = Math.floor(top2) + 'px';
        else
            document.getElementById(target).style.top = Math.floor(top2 + 1) + 'px';
        setTimeout("fly3('"+target+"',"+lef2+","+num2+","+top2+","+num3+")",50)
    }
}

stfly()