var planets = [
  {
    name: 'Marcury',
    distanceFrSun: '41,741.157 miles',
    lengthOfYear: '88 Earth Days',
    description: 'The sun-scorched innermost planet is an intriguing world of extremes.',
    image: 'https://solarsystem.nasa.gov/system/stellar_items/list_view_images/2_mercury_480x320_new.jpg'
  },
  {
    name: 'Venus',
    distanceFrSun: '67,214.416 miles',
    lengthOfYear: '225 Earth Days',
    description: 'Venus is the second planet from the sun and our closest planetary neighbor.',
    image: 'https://solarsystem.nasa.gov/system/stellar_items/list_view_images/3_480x320_venus.png'
  },
  {
    name: 'Earth',
    distanceFrSun: '94,504,813 miles',
    lengthOfYear: '225 Earth Days',
    description: 'Venus is the second planet from the sun and our closest planetary neighbor.',
    image: 'https://solarsystem.nasa.gov/system/stellar_items/list_view_images/4_earth_480x320.jpg'
  },
  {
    name: 'Mars',
    distanceFrSun: '131,457,782 miles',
    lengthOfYear: '687 Earth Days',
    description: 'Mars may have once been a wet world like Earth.Where did the water go?',
    image: 'https://solarsystem.nasa.gov/system/stellar_items/list_view_images/6_mars_480x320.jpg'
  },
  {
    name: 'Jupiter',
    distanceFrSun: '501,593,494 miles',
    lengthOfYear: '4,333 Earth Days',
    description: 'Jupiter is the fifth planet from our sun and the largest planet in the solar system.',
    image: 'https://solarsystem.nasa.gov/system/stellar_items/list_view_images/9_jupiter_480x320_new.jpg'
  },
  {
    name: 'Saturn',
    distanceFrSun: '935,608,937 miles',
    lengthOfYear: '10,759 Earth Days',
    description: 'The second Largest planet in our solar system, adorned with thousands of beautiful ringlets, Saturn is unique among the planets.',
    image: 'https://solarsystem.nasa.gov/system/stellar_items/list_view_images/38_saturn_480x320.jpg'
  },
  {
    name: 'Uranus',
    distanceFrSun: '1,870,910,791 miles',
    lengthOfYear: '30,687 Earth Days',
    description: 'The seventh planet from the sun with the third largest diameter in our solar system, Uranus is very cold and windy',
    image: 'https://solarsystem.nasa.gov/system/stellar_items/list_view_images/69_uranus_480x320.jpg'
  },
  {
    name: 'Neptune',
    distanceFrSun: '2,783,236,969 miles',
    lengthOfYear: '60,190 Earth Days',
    description: 'Dark, cold and whipped by supersonic winds, Neptune is the last of the hydrogen and helium gas giants in our solar system.',
    image: 'https://solarsystem.nasa.gov/system/stellar_items/list_view_images/90_neptune_480x320.jpg'
  },
]

//loop option element to select
for (var i = 0; i < planets.length; i++) {
  var dropdown = document.createElement('option')
  dropdown.value = planets[i].name
  dropdown.textContent = planets[i].name

  $('#selectPlanet').append(dropdown)
}

  //change when user select option element
  //result displays in modal
  $('#selectPlanet').change(function () {
    //modal display time - also add animation
    setTimeout(function(){
     $('#myModal').css('display', 'block').addClass('animated fadeIn')
   },300)
    //get element for modal and store in a variable
    var modalCon = document.getElementsByClassName('modal-content')[0]
    var nameH1 = document.getElementById('nameH1')
    var distanceH4 = document.getElementById('distanceH4')
    var lengthH4 = document.getElementById('lengthH4')
    var description = document.getElementById('description')
    var image = document.getElementsByClassName('image')[0]

    //apply each planets content to the elements
    for (var i = 0; i < planets.length; i++) {
      if(this.value == planets[i].name) {

        $(nameH1).text(planets[i].name).css({'color': 'rgb(246, 203, 50)', 'font-weight': '600'})
        $(distanceH4).text("Distance from Sun:  " + planets[i].distanceFrSun)
        $(lengthH4).text("Length of Year:  " + planets[i].lengthOfYear)
        $(description).text(planets[i].description).css({
            'font-size': '1.2rem',
            'margin-top': '1rem'
         })
        image.src = planets[i].image
        image.alt = planets[i].name
      }

    } //the end of loop
  }) // the end of onchange function


//close modal
$('.close').click(function(){
  $('#myModal').css('display', 'none')
  // display first value "select" when user closed the modal
  $('#selectPlanet').val('select')

})
