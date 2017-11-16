function genCards() {
    if ($('#comb').is(':checked')) {
        var type = true;
        $('#count').attr('max', 10000);
        $('.result').html('Result:');
    } else {
        var type = false;
        $('#count').attr('max', 45);
    }
    var count = parseInt($("#count").val());
    if (type == false && count > 45) {
        count = 45;
        $("#count").val(45);
    } else if (count < 1) {
        count = 1;
        $("#count").val(1);
    } else if (count > 20000) {
        count = 20000;
        $("#count").val(20000);
    }
    // console.log('type', type);

    var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    var suits = ['diams', 'hearts', 'spades', 'clubs'];
    var hand = '';
    var repeats = 0;
    for (var i = 0; i < count; i++) {
        if (type == true) {
            var rank = ranks[Math.floor(Math.random() * ranks.length)];
            var suit = suits[Math.floor(Math.random() * suits.length)];

            var t = rank + ',' + suit + '\n';
            // console.log(t);

            var card = '<li><span class="card rank-' + rank.toString().toLowerCase() + ' ' + suit + '"><span class="rank">' + rank + '</span><span class="suit">&' + suit + ';</span></span></li>\n';
            // console.log(card);
        } else {
            var card;
            card = genCard();
            while (hand.indexOf(card) >= 0) {
                card = genCard();
                repeats += 1;
            }
        }
        // console.log(card);
        hand += card;
        $(".table").html(hand);
        if (type == false) {
            $('.result').html('Result: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Repeats: ' + repeats + ')');
            console.log(repeats);
        }
    }
    return repeats;
}

function genCard() {
    var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    var suits = ['diams', 'hearts', 'spades', 'clubs'];

    var rank = ranks[Math.floor(Math.random() * ranks.length)];
    var suit = suits[Math.floor(Math.random() * suits.length)];

    var t = rank + ',' + suit + '\n';
    // console.log(t);

    card = '<li><span class="card rank-' + rank.toString().toLowerCase() + ' ' + suit + '"><span class="rank">' + rank + '</span><span class="suit">&' + suit + ';</span></span></li>\n';
    return card;
}
