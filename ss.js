document.addEventListener('DOMContentLoaded', function () {
    const carouselElement = document.querySelector('#videoCarousel');
    const videos = carouselElement.querySelectorAll('video');
    const volumeControl = document.getElementById('volumeRange');
    let currentIndex = 0;

    function setVideoVolume(volume) {
        videos.forEach(video => {
            video.volume = volume;
        });
    }

    function playCurrentVideo() {
        videos.forEach((video, index) => {
            if (index === currentIndex) {
                video.play();
                video.muted = false;
            } else {
                video.pause();
                video.currentTime = 0;
            }
        });
    }

    function handleVideoEnd() {
        $(carouselElement).carousel('next');
    }

    function handleSlideChange() {
        currentIndex = Array.from(carouselElement.querySelectorAll('.carousel-item')).findIndex(item => item.classList.contains('active'));
        playCurrentVideo();
    }

    carouselElement.addEventListener('slid.bs.carousel', handleSlideChange);
    videos.forEach(video => {
        video.addEventListener('ended', handleVideoEnd);
    });

    volumeControl.addEventListener('input', function () {
        setVideoVolume(this.value);
    });

    setVideoVolume(volumeControl.value);
    playCurrentVideo();
});



document.addEventListener('DOMContentLoaded', function () {
    const carouselElement = document.querySelector('#videoCarousel');
    const videos = carouselElement.querySelectorAll('video');
    let currentIndex = 0;

    function playCurrentVideo() {
        videos.forEach((video, index) => {
            if (index === currentIndex) {
                video.play();
            } else {
                video.pause();
                video.currentTime = 0;
            }
        });
    }

    function handleVideoEnd() {
        $(carouselElement).carousel('next');
    }

    function handleSlideChange() {
        currentIndex = Array.from(carouselElement.querySelectorAll('.carousel-item')).findIndex(item => item.classList.contains('active'));
        playCurrentVideo();
    }

    carouselElement.addEventListener('slid.bs.carousel', handleSlideChange);
    videos.forEach(video => {
        video.addEventListener('ended', handleVideoEnd);
    });

    playCurrentVideo();
});


