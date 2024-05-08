import styles from  "../Video_Player/VideoPlayer.module.css";
const Menu = ({onSelectVideo, videoValues}) => {
    return(
        <form onClick={(event) => onSelectVideo(event.target.value)}>
            {videoValues.map((value, index)=> (
                <div className={styles.videoInputs}>
                    <input key={index} type="radio" name="src" value={value} />
                    {value}
                </div>
            ))}
        </form>
    )
}

export default Menu;