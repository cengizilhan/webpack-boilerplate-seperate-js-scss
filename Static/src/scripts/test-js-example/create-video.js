export function createVideoPlayer(id, src) {
    const videoElement = document.createElement('video');
    videoElement.id = id;
    videoElement.src = src;
    videoElement.controls = true;
    return videoElement;
}
