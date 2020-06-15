$(function(){
    $('#filterLevelForm').on('submit', function(e){
        var level = $("input[type=submit][clicked=true]").attr('id');
        e.preventDefault();
        $.ajax({
            url: $(this).attr('action'),
            method: $(this).attr('method'),
            data: {'level': level },
            success: function(data){ 
                $("#filteredSpellContainer").load(' #filteredSpellContainer', function(){
                    $.getScript('../../static/js/collapsible.js');
                    $.getScript('../../static/js/buttonHandling.js');
                });
                $("#filteredKnownSpells").load(' #filteredKnownSpells', function() {
                    $.getScript('../../static/js/collapsible.js');
                    $.getScript('../../static/js/buttonHandling.js');
                });
            }
        });
    });
    $("form input[type=submit]").click(function() {
        $("input[type=submit]", $(this).parents("form")).removeAttr("clicked");
        $(this).attr("clicked", "true");
    });
});

$(function() {
    $('.learnButton').click(function() {
        var spellNum = 10000;
        var action = '';
        if ($(this).attr('value') == 'Learn') {
            spellNum = $(this).attr('id');
            action = 'remove';
        } else if ($(this).attr('value') == 'Remove') {
            spellNum = $(this).attr('id');
            action = 'learn';
        } 

        $.ajax({
            url: $(this).attr('action'),
            method: "POST",
            data: {
                'spellNum': spellNum, 
                'action': action
            },
            success: function(data){ 
                $("#filteredSpellContainer").load(' #filteredSpellContainer', function() {
                    $.getScript('../../static/js/collapsible.js');
                    $.getScript('../../static/js/buttonHandling.js');
                });
                $("#filteredKnownSpells").load(' #filteredKnownSpells', function() {
                    $.getScript('../../static/js/collapsible.js');
                    $.getScript('../../static/js/buttonHandling.js');
                });
            }
        });
    });
});

function changeLearnButton(button) {
    if (button.value == 'Learn') {
        var remove = "remove";
        button.value = 'Remove';
    } else {
        button.value = 'Learn';
    }
}

function spellSearch(searchInput) {
    var searchTerm = searchInput.value;
    
    $.ajax({
        url: 'http://localhost:8000/character/spellSearch',
        method: "POST",
        data: {
            'spellSearch': searchTerm
        },
        success: function(data){ 
            $("#filteredSpellContainer").load(' #filteredSpellContainer', function(){
                $.getScript('../../static/js/collapsible.js');
                $.getScript('../../static/js/buttonHandling.js');
            });
            $("#filteredKnownSpells").load(' #filteredKnownSpells', function() {
                $.getScript('../../static/js/collapsible.js');
                $.getScript('../../static/js/buttonHandling.js');
            });
        }
    });
};

$(function() {
    var learnButtons = document.getElementsByClassName('learnButton');
    var i;
    for(i = 0; i < learnButtons.length; i++) {
        if(learnButtons[i].value == 'Remove') {
            learnButtons[i].classList.add("remove");
        } else {
            learnButtons[i].classList.remove("remove");
        }
    }
});