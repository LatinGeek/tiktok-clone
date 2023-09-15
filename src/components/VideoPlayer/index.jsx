import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';

export default function VideoPlayer({ src }) {

    const [playing, setPlaying] = useState(false);
    const video = useRef();
    const handlePlay = () => {
        if (playing) {
            video.current.pause();
        } else {
            video.current.play();
        }
        setPlaying(!playing);
    }

    useEffect(() => {

    }, [])

    const playerClassName = clsx(styles.player, {
        [styles.hidden]: playing
    })

    return (
        <div className={styles.wrapper} onClick={handlePlay}>
            <video loop className={styles.video} src={src} ref={video} controls={false} />
            <i className={playerClassName} />
        </div>
    )
}