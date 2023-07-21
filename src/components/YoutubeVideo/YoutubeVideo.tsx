import React from 'react'
import styles from "./YoutubeVideo.module.css"

const YoutubeVideo = () => {
    return (
        <div className={styles.container}>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/-49T3-3reIY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    )
}

export default YoutubeVideo
