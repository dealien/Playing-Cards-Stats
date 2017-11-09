function genCards() {
    var count = parseInt($("#count").val());
    if ($('#perm').is(':checked')) { var type = true; } else { var type = false; }
    console.log(type);

    var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    var suits = ['diams', 'hearts', 'spades', 'clubs'];
    var card;
    var hand = '';
    var test = '';

    for (var i = 0; i < count; i++) {
        var rank = ranks[Math.floor(Math.random() * ranks.length)];
        var suit = suits[Math.floor(Math.random() * suits.length)];

        var t = rank + ',' + suit + '\n';
        test += t;

        card = '<li><span class="card rank-' + rank.toString().toLowerCase() + ' ' + suit + '"><span class="rank">' + rank + '</span><span class="suit">&' + suit + ';</span></span></li>\n';
        // console.log(card);
        hand += card;
    }

    $(".table").html(hand);
    console.log(test);
}
