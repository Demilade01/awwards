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
    setCurrentIndex(upcomingVideoInex);
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
                src={getVideoSrc(upcomingVideoInex)}
                type='video/mp4'
                loop
                muted
                id='current-video'
                className='size-64 origin-center scale-150 object-cover object-center invisible'
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>

          <video
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            id='next-video'
            className='absolute-center absolute z-20 size-64 object-cover object-center invisible'
            onLoadedData={handleVideoLoad}
          />

          <video
            src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
            autoPlay
            loop
            muted
            className='absolute left-0 top-0 size-full object-cover object-center'
          />
        </div>

        <h1 className='special-font hero-heading absolute bottom-5 z-40 text-blue-100'>
          G<b>a</b>ming
        </h1>
      </div>
    </div>
  )
}

export default Hero