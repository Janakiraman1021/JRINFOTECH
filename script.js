// Function to add a course to the cart
function addToCart(courseName) {
    // Retrieve selected courses from localStorage
    let selectedCourses = JSON.parse(localStorage.getItem('selectedCourses')) || [];

    // Add the course to the selected courses
    selectedCourses.push(courseName);

    // Store the updated selected courses in localStorage
    localStorage.setItem('selectedCourses', JSON.stringify(selectedCourses));
}

// Function to handle the cart
function handleCart() {
    // Retrieve selected courses from localStorage
    const selectedCourses = JSON.parse(localStorage.getItem('selectedCourses'));

    // If there are selected courses, display them in the cart
    if (selectedCourses && selectedCourses.length > 0) {
        // Prepare the cart data to send to the cart.html page
        const cartData = encodeURIComponent(JSON.stringify(selectedCourses));
        
        // Redirect to the cart.html page with cart data as a query parameter
        window.location.href = `cart.html?cartData=${cartData}`;
    }
}
