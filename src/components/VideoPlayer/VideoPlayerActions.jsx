import { Heart } from "../Icons/Heart";
import { Comments } from "../Icons/Comments";
import { Share } from "../Icons/Share";
import { More } from "../Icons/More";
import styles from './styles.module.css';

export default function VideoPlayerActions({ likes = 124, comments = 25, shares = 6, hearted = false }) {
    return (
        <aside className={styles.actions}>
            <div className={styles.action}>
                <Heart fillColor={hearted ? "#FF0000" : "#FFFFFF"} />
                <strong title="likes">{likes}</strong>
            </div>
            <div className={styles.action}>
                <Comments fillColor="#FFFFFF" />
                <strong title="comments">{comments}</strong>
            </div>
            <div className={styles.action}>
                <Share fillColor="#FFFFFF" />
                <strong title="shares">{shares}</strong>
            </div>
            <div className={styles.action}>
                <More fillColor="#FFFFFF" />
            </div>
        </aside>
    )
}