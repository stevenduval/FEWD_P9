// get all section elements
document.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON' && event.target.className !== 'theme') {
        let innerText = event.target.innerText.toLowerCase();
        // if home link hide nav
        document.querySelector('header').style.height = (innerText === 'home') ? '0' : 'auto';
        document.querySelector('header h2').innerText = innerText;
        // otherwise hide all sections
        document.querySelectorAll('main > div').forEach(section => {
            section.style.height = 0;
            section.style.overflow = 'hidden';
        });
        // only show section of anchor that was clicked on
        document.querySelector(`#${innerText}`).style.height = (innerText === 'home') ? '100%' : 'unset';
        document.querySelector(`#${innerText}`).style.overflow = 'unset';
    }
})


// toggle theme
document.querySelector('.theme').addEventListener('click', () => { 
    let body = document.querySelector('body');
    body.className = (body.className === 'dark') ? 'light' : 'dark';
    body.querySelector('button').innerText = `< ${body.className} theme />`;
})