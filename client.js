console.log('Here are all the available people:', people);

$(document).ready(onReady); //this what pulls in the jquery

function onReady(){ //this was appears upon page load
    let random = randomNumber(0, people.length -1); //defined a variable that's calling in a function and setting the parameters of randomNumber

    console.log('hello from jquery');
    for(picture of people){ //this is a for of loop

        //appending target and using string interpolation
        $('#target').append(`
            <div data-name = "${picture.name}"class="picture">
                <img src="https://github.com/${picture.githubUsername}.png?size=250"
                alt="Profile image of Chris"></img>
            </div>
        `)
    }
    $('#randomName').append(people[random].name);//pulling in the random images id and appending the person's random name to the DOM
    $('.picture').on('click', function(){ //event listener on click it runs the function with a conditional
        if($(this).data('name')===people[random].name){
            alert('yay! You are correct!')
        }else{
            alert('try again!')
        }
    })
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}