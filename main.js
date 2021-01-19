var excuse = {
    subject: ["My mom ", "My dog ", "My cat ", "My brother ", "His turtle "],
    verb: ["ate ", "threw ", "broke ", "crushed ", "pooped "],
    object: ["my homework ", "the keys ", "the car ", "my backpack ", "my notebook "],
    time: ["yesterday ", "an hour ago ", "last night ", "before arriving ", "last week "],
    }
    

function newExcuse(){
    let selector = [];
    for (var i = 0; i < 4; i++){
        var randomNumber = Math.floor((Math.random()*5));
        selector.push(randomNumber);
    }
    let text = "";
    text = text + excuse.subject[selector[0]];
    text = text + excuse.verb[selector[1]];
    text = text + excuse.object[selector[2]];
    text = text + excuse.time[selector[3]];
    document.getElementById("excuse").innerHTML = text;
    }

