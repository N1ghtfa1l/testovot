document.getElementById('play-video').addEventListener('click', function() {
    const videoUrl = 'https://www.youtube.com/embed/VIDEO_ID'; // Замените VIDEO_ID на ID вашего видео
    document.getElementById('video-iframe').src = videoUrl;
    document.getElementById('video-container').style.display = 'block'; // Показываем видео
});
