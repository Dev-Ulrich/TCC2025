let trilho =  document.getElementById('trilho');

trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('move');
});

let darkMode = localStorage.getItem('darkMode');
const themeSwitch = document.getElementById('trilho');
const enabledarkMode = ()=>{
    document.body.classList.add('dark-mode');
    localStorage.setItem('dark-mode', 'active');
}
const disabledarkMode =()=>{
    document.body.classList.remove('dark-mode');
    localStorage.setItem('dark-mode', 'inactive');
}
if(darkMode === 'active') enabledarkMode();
themeSwitch.addEventListener('click', () =>{
    darkMode = localStorage.getItem('dark-mode');
    darkMode !== 'active'? enabledarkMode() : disabledarkMode();
})