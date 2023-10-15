const categoryList = document.getElementById('results')
const totalContainer = document.getElementById('total')
const resultsContainer = document.getElementById('res');
const total = 100

const dataHandler = (data) =>{
    data.forEach(category => {
       renderCategory(category)
    });
}

const renderCategory= (category) =>{
    const liELement = document.createElement('li')
    const article = document.createElement('article')
    const h4 =  document.createElement('h4')
    const p = document.createElement('p')
    const img = document.createElement('img')
    const span = document.createElement('span')
    
    h4.innerText = category.category
    p.innerText = category.score
    span.innerText = '/' + total
    article.setAttribute('category', category.category)
    img.setAttribute('src', category.icon)

    h4.prepend(img)
    liELement.appendChild(article)
    article.appendChild(h4)
    article.appendChild(p)
    p.appendChild(span)
    categoryList.appendChild(liELement)

}

const setResults = (category) =>{
    const totalSummary = category.reduce((sum, data) => sum + data.score, 0)
    const totalScore = totalSummary / category.length;
    const totalScoreFixed = Math.floor(totalScore)

    resultsContainer.innerText = totalScoreFixed
    totalContainer.innerText = total
}

window.onload = () =>{
    fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        dataHandler(data)
        setResults(data)
    })
}