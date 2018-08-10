    /*function llenarRueda(rueda, inicio, limite)
    {
        var RuedaReloj = document.getElementById(rueda);
        cadena = "";
        for(i = inicio; i<10; i++){
            cadena += ("<div class='card c"+ i +"'>");
            cadena += (i <= limite)? i + "</div>" : "</div>";
        }
        for(j = 0; j<inicio;j++){
            cadena += ("<div class='card c"+ j +"'>");
            cadena += (j <= limite)? j + "</div>" : "</div>";
        }
        //alert(cadena);
        RuedaReloj.innerHTML = cadena;
    }
    var time = new Date();
    var horas1 = time.getHours();
    while(horas1 % 10 != 0) horas1--;
    horas1 = horas1/10;
    llenarRueda("hours1", horas1, 2);

    var horas2 = time.getHours();
    horas2 = horas2 - (horas1*10);
    llenarRueda("hours2", horas2, 9);

    var min1 = time.getMinutes();
    while(min1 % 10 != 0) min1--;
    min1 = min1/10;
    llenarRueda("minutes1", min1, 5);

    var min2 = time.getMinutes();
    min2 = min2 - (min1*10);
    llenarRueda("minutes2", min2, 9);

    var sec1 = time.getSeconds();
    while(sec1 % 10 != 0) sec1--;
    sec1 = sec1/10;
    llenarRueda("seconds1", sec1, 5);

    var sec2 = time.getSeconds();
    sec2 = sec2 - (sec1*10);
    llenarRueda("seconds2", sec2, 9);*/

    function setRotation(elem, ang){
        var webkitTransform = document.getElementById(elem).style.webkitTransform;
        var current_angle  = parseInt(webkitTransform.match(/\d+/));
        webkitTransform ? current_angle = parseInt(webkitTransform.match(/\d+/)) : current_angle = 0;
        var rotations = Math.floor(current_angle/360);
        if ((current_angle + 360 * rotations) != ang){
            var new_angle;
            ang == 0 ? new_angle = 360 * (rotations + 1) : new_angle = 360 * rotations + ang;
        }

        document.getElementById(elem).style.webkitTransform = "rotateX(-" + new_angle + "deg)";
    } 

    function ticToc(){
        var today = new Date();
        var sec1 = Math.floor(today.getSeconds()/10);
        var sec2 = today.getSeconds()%10;
        var min1 = Math.floor(today.getMinutes()/10);
        var min2 = today.getMinutes()%10;
        var hours1 = Math.floor(today.getHours()/10);
        var hours2 = today.getHours()%10;

        setRotation("hours1", (hours1 * 36));
        setRotation("hours2", (hours2 * 36));
        setRotation("minutes1", (min1 * 36));
        setRotation("minutes2", (min2 * 36));
        setRotation("seconds1", (sec1 * 36));
        setRotation("seconds2", (sec2 * 36));
        setTimeout("ticToc()", 1000);
    }
    ticToc();