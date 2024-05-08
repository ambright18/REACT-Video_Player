import React, {useState} from "react";
import Menu from "./Menu";
import Video from "./Video";
import styles from "../Video_Player/VideoPlayer.module.css";

const videos = { //stock videos courtesy of Code Academy
    deer:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
    cat:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
    spider:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4",
    snail:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4"
};

const videoNames = Object.keys(videos);

const VideoPlayer = () => {
    const [videoSrc, setVideoSrc] = useState(videos.snail);

    const onSelectVideo = (video) => {
        const videoSrc = videos[video];
        setVideoSrc(videoSrc);
    }

    return (
        <div>
            <h1>Alex's Video Player</h1>
            <Menu onSelectVideo={onSelectVideo} videoValues={videoNames} />
            <Video videoSrc={videoSrc} />
        </div>
    );
}


export default VideoPlayer;