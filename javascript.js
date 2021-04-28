var kepek = ["kep1.jpg", "kep2.jpg", "kep3.jpg", "kep4.jpg", "kep5.jpg", "kep6.jpg", "kep7.jpg", "kep8.jpg", "kep9.jpg", "kep10.jpg", "kep1.jpg", "kep2.jpg", "kep3.jpg", "kep4.jpg", "kep5.jpg", "kep6.jpg", "kep7.jpg", "kep8.jpg", "kep9.jpg", "kep10.jpg"];
var kepekAlt = ["kep1", "kep2", "kep3", "kep4", "kep5", "kep6", "kep7", "kep8", "kep9", "kep10", "kep11", "kep12", "kep13", "kep14", "kep15", "kep16", "kep17", "kep18", "kep19", "kep20"];
var szamlalo = 0;
var kattintott = [];
var kattintottid = [];
$(function () {
    console.log("Hello world");
    for (var i = 0; i < kepek.length; i++) {
//        $("article").append('<img src="kepek/' + kepek[i] + '" alt=""/>');
        $("article").append('<img/>');
//        $("article img").eq(i).attr("src", "kepek/" + kepek[i]);
        $("article img").eq(i).attr("src", "kepek/hatter.jpg");
        $("article img").eq(i).attr("alt", "szornyhatter");
        $("article img").eq(i).attr("id", i);
    }
    $("article img").click(kattint);
});

function kattint() {
    var id = $(this).attr("id");
    $(this).attr("src", "kepek/" + kepek[id]);
    $(this).attr("alt", kepekAlt[id]);
    szamlalo++;
    kattintott[szamlalo] = $(this).attr("src");
    kattintottid[szamlalo] = id;

    if (szamlalo === 2) {
        if (kattintott[1] === kattintott[2]) {
            console.log("Találtál egy párt");
            $(this).unbind("click");
//            $("article img").eq([kattintottid[1]]).attr("src", "");
//            $("article img").eq([kattintottid[2]]).attr("src", "");
        } else {
            console.log("Nem pár");
            setTimeout(visszafordit, 1000);
        }
        szamlalo = 0;
    }
}

function visszafordit() {
    $("article img").eq([kattintottid[1]]).attr("src", "kepek/hatter.jpg");
    $("article img").eq([kattintottid[2]]).attr("src", "kepek/hatter.jpg");

}