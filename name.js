
// Add event listener to the submit button
document.getElementById('submitBtn').addEventListener('click', function() {
    // Get the input value
    const name = document.getElementById('nameInput').value;
   
    console.log(name)
    // Check if the name is not empty
    if (name.trim() !== '') {
        // Save the name in local storage
        localStorage.setItem('user_name', name);
        
        // Redirect to the next page
        window.location.href = './game.html';
    }
});

