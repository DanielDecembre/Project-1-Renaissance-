alert("javascript is linked");
// VARIABLES//
const URL = 'https://api.artic.edu/api/v1/artworks/129884';
console.log(URL);


//ELEMENTS//
// const $title = $('#title')
// const $year = $('#Year')
// const $mediums = $('#Mediums')
// const form = 
// const $input = $('input[type="text"]');


//EVENT LISTENERS//
// $form.on('submit',handleGetData)


//FUNCTIONS//

function handleGetData(){

// Event.preventDefault()
// const userInput = $input.val();


$.ajax(URL).then(function(data) {
    console.log('Art data ready')
    console.log(data)
    // $name.text(data.title)
    // $year.text(data.Year)
    // $mediums.text(data.Mediums)
}, function(error) {
    console.log('something is wrong')
    console.log(error)
})

}// }$getArtworkBtn.on('click', getArtwork)