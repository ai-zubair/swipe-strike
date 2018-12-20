$(function () {
    var x = 1365, y = 637, count = 0;
    var intid,num;
    var score = 0, prevX = -1, prevY = -1, time = 60;
    var name, age, mail;
    var idx = 1;
    var pid = Math.floor((Math.random() * 99999999) + 10000000);
    var facts = ["Boom!","Bang On!","Whoa!","Another one!","Playing Pro!","Amazing!","Fantastic!","Awesome!","Way to go!","Super Strike","Bulls' Eye!","Fabulous"];
    $('body').on("mouseover","button", function effect1() {
        $(this).css({
            "box-shadow": "1px 2px 12px 0px #c4c4c4",
            "background-color": "rgb(58, 230, 236)",
            "cursor":"pointer"
        });
    })
    $('body').on("mouseout","button", function effect2() {
        $(this).css({
            "box-shadow": "4px 4px 12px 1px #c4c4c4",
            "background-color": "rgb(0, 247, 255)",
            "cursor": "default"
        });
    })
    $('#pname').on("change", function () {
        name = $(this).val();
    })
    $('#page').on("change", function () {
        age = $(this).val();
    })
    $('#pmail').on("change", function () {
        mail = $(this).val();
    })
    $('body').on("click","button", function play() {
        if (name !== undefined && age!==undefined && mail !== undefined) {
            score=0;
            time=60;
            count=0;
            num = Math.floor((Math.random() * 1900));
            for (var i = 0; i < x; i++) {
                for (var j = 0; j < y; j++) {
                    if (i + j === num) {
                        count += 1;
                        // $('#possib').append("<p>( "+i+","+j+" )</p>");
                    }
                }
            }
            $(this).css("box-shadow", "4px 4px 12px 1px #c4c4c4");
            $('#combo').html("<div id='game'><div id='data1'><p id='greet' class='font-effect-destruction'>GAME ON!</p><p id = 'name' class='font-effect-3d'></p><p id='pid' class='font-effect-destruction'></p><p id='score' class='font-effect-destruction'></p></div><div id='cord'><p>LOCATE ALL THE CORDINATES WITH SUM <span id='sum'></span> TO BE THE CHAMP!</p><p> X - Cordinate - <span id='xcord'></span><p>Y-Cordinate-<span id='ycord'></span><div id='fact'><p id='fac'></p></div ></div><div id='timer'><p class='timd'>Clock's Tickin Mate!</p><p id = 'tim' >60</p><p class='timd'>SEC</p></div ></div><div id='possib'><p>Pairs Found</p><p class='found'></p></div>");
            $('#sum').text(num);
            $('#pid').text("Player ID-" + pid);
            $('#name').text(name.toUpperCase());
            $('#score').text("Found-" + score + " outta " + count);
            intid = setInterval(function () {
                var r = Math.floor((Math.random() * 250));
                var g = Math.floor((Math.random() * 250));
                var b = Math.floor((Math.random() * 250));
                var color
                $('#timer').css("background-color", "rgb(" + r + "," + g + "," + b + ")");
                time -= 1;
                $('#tim').text(time);
                if (time === 0) {
                    clearInterval(intid);
                    setTimeout(function () {
                        $('#timer').html("<p class='up'>TIME'S</p><p class='up'>UP</p>");
                        setTimeout(function () {
                            $('#cord').html("<div ><p id='over' class='font-effect-destruction'>GAME OVER</p ><p id='res'></p><button id='play'>Play Again</button></div >");
                            $('#res').text("You found " + score + " pairs only!");
                        }, 1500);
                    }, 500);
                }
            }, 1000);

        } else {
            $('#pname').attr("placeholder", "*Required");
            $('#page').attr("placeholder", "*Required");
            $('#pmail').attr("placeholder", "*Required");
        }
    })
    $(document).on("mousemove", function (evt) {
        if (time === 0) {
            return false;
        }
        $('#xcord').text(evt.pageX);
        $('#ycord').text(evt.pageY);
        if (((evt.pageX + evt.pageY) === num) && ((evt.pageX !== prevX) && (evt.pageY !== prevY))) {
            prevX = evt.pageX;
            prevY = evt.pageY;
            $('#possib p.found').text($('#possib p.found').text() + " ( " + evt.pageX + "," + evt.pageY + " ) ");
            idx = Math.floor((Math.random() * 13));
            $('#fac').text(facts[idx]);
            score += 1;
            $('#score').text("Found-" + score + " outta " + count).css({
                "background-color": "tomato",
                "color": "white"
            });
            setTimeout(function () {
                $('#score').css({
                    "background-color": "white",
                    "color": "black"
                });
            }, 800);
        }
        // else {
        //     $('#fact').text(" ");
        // }

    })
})