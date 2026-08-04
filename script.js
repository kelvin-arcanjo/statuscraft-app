const form = document.querySelector('form')
const inputVideo = document.querySelector('#video')
const select = document.querySelector('#format')
const preview = document.querySelector('#preview')

form.addEventListener('submit' , (event) => {
    event.preventDefault()

    if (select.value === 'whatsapp') {
        preview.textContent = 'Vídeo cortado para 30 segundos (Whatsapp Status).'

    } else if (select.value === 'instagram') {
        preview.textContent = 'Vídeo ajustado para o formato 9:16 (Instagram Reels).'

    } else if (select.value === 'facebook') {
        preview.textContent = 'Vídeo otimizado para o feed do Facebook.'

    } else {
        preview.textContent = 'Seleciona um destino válido...';
    }
})

form.addEventListener('reset' , () => {
    preview.textContent = 'A pré-visualização aparecerá aqui.'

    inputVideo.classList.remove('invalido')
})

inputVideo.addEventListener('input' , () => {
    const isValid = inputVideo.checkValidity()

    inputVideo.classList.toggle('valido' , isValid)
    inputVideo.classList.toggle('invalido' , !isValid)
})

select.addEventListener('change', () => {
    const isValid2 = select.checkValidity();

    select.classList.toggle('valido', isValid2);
    select.classList.toggle('invalido', !isValid2);
});







