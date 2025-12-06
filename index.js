// Get elements
const input = document.getElementById('bandInput');
const button = document.getElementById('submitBtn');
const message = document.getElementById('message');

// Button click event
button.addEventListener('click', function() {
    const band = input.value.trim();

    if (band === '') {
        message.textContent = 'Please enter a band name!';
        message.style.color = 'red';
    } else {
        message.textContent = `Thanks! You suggested: ${band}`;
        message.style.color = 'green';
        input.value = ''; // clear input
        alert(`You suggested: ${band}`);
    }
});
