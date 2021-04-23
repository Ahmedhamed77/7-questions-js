//using selectors inside the element
// traversing the dom


const questionButton = document.querySelectorAll('.question-btn');


questionButton.forEach(btn => btn.addEventListener('click', (e) =>{
    const question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle('show-text');
}))