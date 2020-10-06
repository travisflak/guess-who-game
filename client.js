console.log('Here are all the available people:', people);

$(document).ready(onReady);

function onReady(){
    console.log('hello from jquery');
    for(people of people){
        $('#target').append(`
            <div>
                <img src="https://github.com/${people.githubUsername}.png?size=250"alt="Profile image of Chris"></img>


        `)
    }

}

//put this inside of a function and use string interpolation?