import React, { useRef, useState } from 'react'

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);

  const [loading, setLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const nextVideoRef = useRef(null);

  
  const upcomingVideoInex = (currentIndex % totalVideos) + 1;

  const handleMinivideoplayerClick = () => {
    setHasClicked(true);
    setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
  };

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>
      <div id='video-frame' className='relative h-dvh w-screen rounded-lg bg-blue-75 z-10'>
        <div>
          <div className='mask-clip-path absolute-center absolute z-50 cursor-pointer overflow-hidden rounded-lg'>
            <div onClick={handleMinivideoplayerClick} className='origin-center scale-50 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100'>
              <video
                ref={nextVideoRef}
                src={getVideoSrc(currentIndex + 1)}
                type='video/mp4'
                loop
                muted
                id='current-video'
                className='size-64 origin-center scale-150 object-cover object-center'
                onLoadedData={handleVideoLoad}
              />
              <h1>Video</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero