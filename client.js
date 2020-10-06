console.log('Here are all the available people:', people);

$(document).ready(onReady);

function onReady(){
    let random = randomNumber(0, people.length -1);

    console.log('hello from jquery');
    for(picture of people){
        $('#target').append(`
            <div data-name = "${picture.name}"class="picture">
                <img src="https://github.com/${picture.githubUsername}.png?size=250"
                alt="Profile image of Chris"></img>
            </div>
        `)
    }
    $('#randomName').append(people[random].name);
    $('.picture').on('click', function(){
        if($(this).data('name')===people[random].name){
            alert('yay! You are correct!')
        }else{
            alert('try again!')
        }
    })
}

//put this inside of a function and use string interpolation?

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}