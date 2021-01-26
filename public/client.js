

console.log('Client-side code running');

const button = document.getElementById('myButton');
button.addEventListener('click', function(e) {
  console.log('button was clicked');
  
  fetch('/clicked', {method: 'POST'})
    .then(function(response) {
      if(response.ok) {
        console.log('click was recorded');
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });
});





    const throttleupButton = document.getElementById('throttleUp');
throttleupButton.addEventListener('click', function(e) {
  console.log('throttle up');
  
  fetch('/press', {method: 'POST'})
    .then(function(response) {
      if(response.ok) {
        console.log('click was recorded');
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });
});


const trottleDownButton = document.getElementById('throttleDown');
trottleDownButton.addEventListener('click', function(e) {
  console.log('throttle down');
  
  fetch('/clicked', {method: 'POST'})
    .then(function(response) {
      if(response.ok) {
        console.log('click was recorded');
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });
});


const pitchTakeoffButton = document.getElementById('pitchTakeoff');
pitchTakeoffButton.addEventListener('click', function(e) {
  console.log('pitch takeoff');
  
  fetch('/clicked', {method: 'POST'})
    .then(function(response) {
      if(response.ok) {
        console.log('click was recorded');
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });
});



const pitchUpButton = document.getElementById('pitchUp');
pitchUpButton.addEventListener('click', function(e) {
  console.log('pitch up');
  
  fetch('/clicked', {method: 'POST'})
    .then(function(response) {
      if(response.ok) {
        console.log('click was recorded');
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });
});



const pitchDownButton = document.getElementById('pitchDown');
pitchDownButton.addEventListener('click', function(e) {
  console.log('pitch down');
  
  fetch('/clicked', {method: 'POST'})
    .then(function(response) {
      if(response.ok) {
        console.log('click was recorded');
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });
});



const rightRudderButton = document.getElementById('rightRudder');
rightRudderButton.addEventListener('click', function(e) {
  console.log('right rudder');
  
  fetch('/rightRudder', {method: 'POST'})
    .then(function(response) {
      if(response.ok) {
        console.log('click was recorded');
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });
});

const leftRudderButton = document.getElementById('leftRudder');
leftRudderButton.addEventListener('click', function(e) {
  console.log('left rudder');
  
  fetch('/leftRudder', {method: 'POST'})
    .then(function(response) {
      if(response.ok) {
        console.log('click was recorded');
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });
});

