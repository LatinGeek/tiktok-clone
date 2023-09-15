import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';
const SRC = '/src/assets/production_id_4434242.mp4';

export default function VideoPlayer() {

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
        <div onClick={handlePlay}>
            <video loop className={styles.video} src={SRC} ref={video} controls={false} />
            <i className={playerClassName} />
        </div>
    )
}