
/*
    Task 1:
    - Link the file `external.js` to this file.
    - To test if the linking works, open q5-output.html in the browser and it should show "Hello World!"
*/

// Task 1: Add code here
<!DOCTYPE html>
<html>
<head>
    <title>Test Page</title>
</head>
<body>
    <h1>Test</h1>
    <div id="test"></div>

    <!-- Link the external JavaScript file -->
    <script src="external.js"></script>
</body>
</html>


// Do not change the code below
function print() {
    return 'Hello World!';
}

document.querySelector("#test").innerHTML = print();
