//This event is used so that the functions are loaded when the page is fully loaded.
window.onload = () => {
    //the fetch function is used to fetch data from the JSON file and then converts that data into a JavaScript object and passes it to a function called 'render'.
    fetch('data.json')
    .then(response => response.json())
    .then(data =>{
        render(data);
    })
}

const render = (data) =>{

    const aptList = document.querySelector('.apt-list');
    const score = document.getElementById('score');
    let cal = 100;

    const total = data.reduce((total, data) => total + data.score, 0) // method reduces on the array data to calculate the total sum of the scores present in the array objects.
    const totalScore = total / data.length;
    const fixed = Math.floor(totalScore); // rounds off the totalScore constant
    // CSS classes which will be assigned to the elements depending on the value of index
    const colorClasses = ['red-text', 'yellow-text', 'green-text', 'blue-text'];
    const colorBackground = ['bg-red', 'bg-yellow','bg-green','bg-blue'];
    
    data.forEach((element, index) => {
        
        //map function to create an array of newly created DOM elements, using HTML tag names and then assigning them to specific variables.
        const [aptContainer, aptitude, aptScore, icon, span] = ['li','div','div','img','span'].map(tag => document.createElement(tag));
        
        //This line of code calculates an index using the modulus operator (%) to select a value from an array of color classes (colorClasses).
        const colorIndex = index % colorClasses.length;

        
        icon.src = element.icon;
        span.innerText = element.category;
        aptScore.innerText = element.score + ' /' + cal; 
        
        aptContainer.classList.add('flex', 'apt-container');
        //adds a background class to a DOM element (aptContainer) using the variable colorIndex as index to select a background class from the array colorBackground
        aptContainer.classList.add(colorBackground[colorIndex]);
        aptitude.classList.add('flex','space');
        aptitude.classList.add(colorClasses[colorIndex]);

       

        aptList.appendChild(aptContainer);
        aptContainer.appendChild(aptitude);
        aptitude.appendChild(icon);
        aptitude.appendChild(span);
        aptContainer.appendChild(aptScore);
    });

    score.innerText = fixed
}
