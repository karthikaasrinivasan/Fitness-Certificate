document.querySelector('.titlebar input[type="text"]').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase(); // Get the search term and convert to lowercase
    // Filter and display FC categories based on searchTerm
    console.log('Search term:', searchTerm);
});
