window.onload = () => {
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

    const total = data.reduce((total, data) => total + data.score, 0)
    const totalScore = total / data.length;
    const fixed = Math.floor(totalScore);
    const colorClasses = ['red-text', 'yellow-text', 'green-text', 'blue-text'];
    const colorBackground = ['bg-red', 'bg-yellow','bg-green','bg-blue'];
    
    data.forEach((element, index) => {
        const [aptContainer, aptitude, aptScore, icon, span] = ['li','div','div','img','span'].map(tag => document.createElement(tag));
        const colorIndex = index % colorClasses.length;

        
        icon.src = element.icon;
        span.innerText = element.category;
        aptScore.innerText = element.score + ' /' + cal;

        
        aptContainer.classList.add('flex', 'apt-container');
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