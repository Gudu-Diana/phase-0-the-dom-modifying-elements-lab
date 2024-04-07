// Write your code here!

    // Removing the main#main element
    const main = document.querySelector('main#main');
    main.remove();

    // Create a new <h1> element
    const newHeader = document.createElement('h1');

    // Setting the id of the new <h1> element to 'victory'
    newHeader.id = 'victory';

    // Set the text content of the new <h1> element
    const yourName = 'YOUR-NAME'; // Replace 'YOUR-NAME' with your actual name
    newHeader.textContent = `${yourName} is the champion`;

    // Append the new <h1> element to the body
    document.body.appendChild(newHeader);