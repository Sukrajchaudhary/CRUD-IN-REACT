import React from 'react'
import Video from './Video'
import PlayButton from './PlayButton'
const VideosList = ({ Videos,handleDelete,editVideos }) => {
    return (
        <>
            {Videos.map(video => (
                <Video
                    key={video.id}
                    title={video.title}
                    views={video.views}
                    time={video.time}
                    channel={video.channel}
                    verified={video.verified}
                    id={video.id}
                    handleDelete={handleDelete}
                    editVideos={editVideos}
                >
                    <PlayButton
                        onPlay={() => console.log("playing", video.title)}
                        onPause={() => console.log("paused", video.title)} >{video.title}
                    </PlayButton>
                </Video>
            ))}

        </>
    )
}

export default VideosList
