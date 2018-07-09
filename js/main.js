var collectionDiv = document.getElementById('collection');
var label = document.createElement('label');
var input = document.createElement('input');

label.textContent = "Let's explore in our solar system";
collectionDiv.appendChild(label);
collectionDiv.appendChild(input);

//contructor function
function Planet(name, distanceFrSun, lengthOfYear, description, image) {

}
//array
new Planet('Marcury', '41,741.157 miles', '88 Earth Days', 'The sun-scorched innermost planet is an intriguing world of extremes.', 'https://solarsystem.nasa.gov/system/stellar_items/list_view_images/2_mercury_480x320_new.jpg')
new Planet('Venus', '67,214.416 miles', '225 Earth Days', 'Venus is the second planet from the sun and our closest planetary neighbor.', 'https://solarsystem.nasa.gov/system/stellar_items/list_view_images/3_480x320_venus.png')
new Planet('Earth', '94,504,813 miles', '365 Earth Days', 'Earth is the third panet from the sun and the fifth largest in the solar system.', 'https://solarsystem.nasa.gov/system/stellar_items/list_view_images/4_earth_480x320.jpg')
new Planet('Mars', '131,457,782 miles', '687 Earth Days', 'Mars may have once been a wet world like Earth.Where did the water go?', 'https://solarsystem.nasa.gov/system/stellar_items/list_view_images/6_mars_480x320.jpg')
new Planet('Jupiter', '501,593,494 miles', '4,333 Earth Days', 'Jupiter is the fifth planet from our sun and the largest planet in the solar system.', 'https://solarsystem.nasa.gov/system/stellar_items/list_view_images/9_jupiter_480x320_new.jpg')
new Planet('Saturn', '935,608,937 miles', '10,759 Earth Days', 'The second Largest planet in our solar system, adorned with thousands of beautiful ringlets, Saturn is unique among the planets.', 'https://solarsystem.nasa.gov/system/stellar_items/list_view_images/38_saturn_480x320.jpg')
new Planet('Uranus', '1,870,910,791 miles', '30,687 Earth Days', 'The seventh planet from the sun with the third largest diameter in our solar system, Uranus is very cold and windy', 'https://solarsystem.nasa.gov/system/stellar_items/list_view_images/69_uranus_480x320.jpg')
new Planet('Neptune', '2,783,236,969 miles', '60,190 Earth Days', 'Dark, cold and whipped by supersonic winds, Neptune is the last of the hydrogen and helium gas giants in our solar system.', 'https://solarsystem.nasa.gov/system/stellar_items/list_view_images/90_neptune_480x320.jpg')
