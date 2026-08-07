//Seleção de elementos do DOM...

const form = document.querySelector('form')
const btnSubmit = document.querySelector('input[type="submit"]')
const inputVideo = document.querySelector('#video')
const select = document.querySelector('#format')
const preview = document.querySelector('#preview')


//Evento de submissão com função async;

form.addEventListener('submit' , async (event) => {
    event.preventDefault() // Evita o recarregamento padrão da página;

    // Capturar o destino selecionado;
    const destinoSelecionado = select.value

    //Guardar o texto original pra repor mais tarde;
    const textoOriginal = btnSubmit.value

    //Estado de Loading (Desativar botão e alterar texto);
    btnSubmit.disabled = true
    btnSubmit.value = 'A processar...'

    try {
        //Enviar requisição com await fetch...
        const resposta = await fetch ('/processar' , {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },

            body: JSON.stringify({destino: destinoSelecionado})
        })

        //Ler o texto da resposta do servidor...
        const textoServidor = await resposta.text()

        //Atualizar a interface com a resposta do servidor...
        preview.textContent = textoServidor

    } catch (erro) {
        console.log('Erro ao comunicar com o servidor:' , erro)
        preview.textContent = 'Erro ao processar o vídeo. Tente novamente!'

    } finally {
        //Reativar o botão e repor o texto original;
        //O bloco 'finally' garante que o botão volta ao normal mesmo se ocorrer algum erro;

        btnSubmit.disabled = false
        btnSubmit.value = textoOriginal
    }
})

form.addEventListener('reset' , () => {
    preview.textContent = 'A pré-visualização aparecerá aqui.'

    inputVideo.classList.remove('invalido' , 'valido')
    select.classList.remove('invalido', 'valido')
})

inputVideo.addEventListener('input' , () => {
    const isValid = inputVideo.checkValidity() //Validação nativa do browser...

    inputVideo.classList.toggle('valido' , isValid)
    inputVideo.classList.toggle('invalido' , !isValid)
})

select.addEventListener('change', () => {
    const isValid2 = select.checkValidity();

    select.classList.toggle('valido', isValid2);
    select.classList.toggle('invalido', !isValid2);
});







