import { createVideoPlayer } from './create-video';

describe('createVideoPlayer', () => {
  test('should create a video element with the given id and src', () => {
    const id = 'video1';
    const src = 'video.mp4';
    const videoElement = createVideoPlayer(id, src);

    // Check that the returned element is a video element
    expect(videoElement.tagName).toBe('VIDEO');

    // Check the ID
    expect(videoElement.id).toBe(id);

    // Check the src attribute
    expect(videoElement.src).toContain(src);

    // Check that controls are enabled
    expect(videoElement.controls).toBe(true);
  });

  test('should return a video element with default properties', () => {
    const videoElement = createVideoPlayer('defaultVideo', '');

    expect(videoElement.autoplay).toBe(false);
    expect(videoElement.controls).toBe(true);
  });
});
