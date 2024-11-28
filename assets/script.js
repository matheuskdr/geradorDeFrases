const button = document.querySelector('button');
const result = document.querySelector('p');

let frases = [
    '"O sucesso começa com a decisão de tentar."',
    '"Você é capaz de mais do que imagina."',
    '"Ação é o primeiro passo para a transformação."',
    '"Faça da superação o seu hábito."',
    '"Cada desafio é uma oportunidade disfarçada."',
    '"Acredite no seu potencial e vá além."',
    '"Você é a sua única limitação."',
    '"Pequenos passos também te levam longe."',
    '"Persista, insista e conquiste."',
    '"O caminho é mais curto quando se tem foco."'
];

button.addEventListener('click', () => {
    result.innerHTML = frases[Math.floor(Math.random() * frases.length)];
})


