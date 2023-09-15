import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';
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
    return (
        <div>
            <video className={styles.video} src={SRC} ref={video} controls={false} />
            <button className={styles.player} onClick={handlePlay} />
        </div>
    )
}