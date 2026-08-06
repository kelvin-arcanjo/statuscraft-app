const { exec } = require('child_process');

exec('ffmpeg -i videos/teste.mp4 -t 5 videos/saida.mp4', (err, stdout, stderr) => {
    if (err) {
        console.error('Erro:', err);
        return;
    }
    console.log('Processado com sucesso!');
});