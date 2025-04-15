const cities = ['karachi' , 'larkana' , 'sukkhar' , 'mirpurkhas' , 'nawabshah' , 'jamshoro' , 'hyderabad'];
const input = document.querySelector('#city-input');
const p = document.querySelector('#para');

function checkMe () {
    console.log(input.value);
    console.log(cities.includes(input.value.toLowerCase()));
    if (cities.includes(input.value.toLowerCase())) {
        p.innerHTML = 'You live in the cleanest and safest city of sindh'
    } else {
        p.innerHTML = 'Zindagi barbaad hai tumhari'
    }
        
}