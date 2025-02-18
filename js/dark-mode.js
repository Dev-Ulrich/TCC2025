let darkMode = localStorage.getItem('darkMode');
const themeSwitch = document.getElementById('trilho');
const enabledarkMode = ()=>{
    document.body.classList.add('dark-mode');
    localStorage.setItem('dark-mode', null);
}
const disabledarkMode =()=>{
    document.body.classList.remove('dark-mode');
    localStorage.setItem('dark-mode', null);
}
if(darkMode === 'active') enabledarkMode();
themeSwitch.addEventListener('click', () =>{
    darkMode = localStorage.getItem('dark-mode');
    darkMode !== 'active'? enabledarkMode() : disabledarkMode();
})