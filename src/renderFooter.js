import gitIcon from './github.png';

export default function renderFooter(){
    const footer = document.getElementById('footer');
    const credit = document.createElement('a');
    const gitImg = document.createElement('img');
    gitImg.src = gitIcon;

    credit.textContent = 'Developed by Almeida-91';
    credit.href = 'https://github.com/almeida-91';

    footer.appendChild(credit);
    footer.appendChild(gitImg);
}