import { Heart } from "../Icons/Heart";
import { Comments } from "../Icons/Comments";
import { Share } from "../Icons/Share";
import { More } from "../Icons/More";
import styles from './styles.module.css';

export default function VideoPlayerActions() {
    return (
        <aside className={styles.actions}>
            <div className={styles.action}>
                <Heart fillColor="#2154a6"/>
            </div>
            <div className={styles.action}>
                <Comments fillColor="#2154a6"/>
            </div>
            <div className={styles.action}>
                <Share fillColor="#2154a6"/>
            </div>
            <div className={styles.action}>
                <More fillColor="#2154a6"/>
            </div>
        </aside>
    )
}