import styles from ".//VideoPlayer.module.css";
const Video = ({videoSrc}) => {

    return(
        <div>
            <video loop controls autostart="true" autoPlay muted src={videoSrc} />
        </div>
    )
}

export default Video;