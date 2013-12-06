window.onload = function () {
    timer = setInterval(chatReader, 1000);
    nick = $("#txtNick").val();
    anagram = [{ 'word': 'naresh', 'meaning': 'awesome guy of BPHC :P' }];
    seconds = 20;
    score = 0;
    $("#score").html("Score : " + "<font color='red'>" + score + "</font>");
    chatReader();
    anagramizer();
}
window.onblur = function () {
    clearInterval(timer);
}
window.onfocus = function () {
    timer = setInterval(chatReader, 1000);
}
$("#submitBtn").click(chatWriter);
$("#chatData").keypress(enterTrigger);
$("#txtNick").keypress(enterTrigger);
$("#btnNick").click(nickCreator);
$("#startBtn").click(anagramizer);
$(".txtArea").on('focus', function () { $(this).off("focus"); $(this).val(''); });
$("#shareBtn").on('click', scoreSharer);
function chatWriter() {
    chatData = $("#chatData").val();
    $("#chatData").val("");
    if (nick == "") {
        alert("Please choose a nick name");
    }
    else if (chatData == "") {
        alert("Enter a message :P");
    }
    else {
        $.ajax({
            url: "chatWrite.php?chatData=" +chatData+"&nick="+nick,
            success: function () {
                $.each(anagram, function () {
                    if (this['word'] == chatData.toLowerCase()) {
                        score += 20 + parseInt(seconds);
                        $("#score").html("Score : " + "<font color='red'>" + score + "</font>");
                        $("#meaningMaker").html("<p><font color='green'>" + this['word'] + ": </font>" + this['meaning'] + "</p>");
                        seconds = 20;
                        anagramizer();
                    }
                });
                chatReader();
            }
        });
    }
}
function scoreSharer() {
    $("#chatData").val("<font color='green'>My current score is " + score+"</font>");
    $("#submitBtn").trigger("click");
}
function chatReader() {
    $("#timer").html("You have <font color='green'>" + seconds + "</font> seconds to guess..");
    oldContent = $("#content").html();
    $.ajax({
        url: "chatRead.php",
        success: function (data) {
            $("#content").html(data);
            newContent = $("#content").html();
            if (oldContent != newContent) {
                document.getElementById("content").scrollTop = document.getElementById("content").scrollHeight;
            }
        }
    });
    $.ajax({
        url: "timer.php",
        success: function (data) {
            seconds = data;
            if (seconds <= 0) {
                seconds = 20;
                anagramizer();
            }
        }
    });
}
function enterTrigger() {
    if (event.which == 13) {
        event.preventDefault();
        if($(this).attr('id')=='txtNick')
            $("#btnNick").trigger('click');
        if ($(this).attr('id') == 'chatData')
        $("#submitBtn").trigger('click');
    }
}
function nickCreator() {
    nick = $("#txtNick").val();
    $("#txtNick").val('');
}
function anagramizer() {
    $.ajax({ url: "timeHelper.php", 
        success:function(data){
            $.getJSON( "anagrams.php",function (json) {
                anagram=json['anagrams'];
                $.each(anagram, function () { $("#anagramizer").html("<p>Joker says <font color='green'>" + this['anag'] + "</font></p><p class='myMsg'>Guess, what he is saying...</p><p id='timer' class='myMsg'></p>"); });
            });
        }
});
}