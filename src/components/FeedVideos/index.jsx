import VideoPlayer from "../VideoPlayer";

const VIDEOS = [
    {
        id: 1,
        author: 'Pedro',
        description: 'Video de prueba #TikTokClone',
        likes: 123,
        shares: 234,
        comments: 333,
        songTitle: 'sonido original - Pedro',
        albumCover: '',
        src: '/src/assets/production_id_4434242.mp4'
    },
    {
        id: 2,
        author: 'Pedro2',
        description: 'Video de prueba #TikTokClone2',
        likes: 123,
        shares: 234,
        comments: 333,
        songTitle: 'sonido original - Pedro',
        albumCover: '',
        src: '/src/assets/pexels-cottonbro-6853337.mp4'
    }
]

export default function FeedVideos() {
    return (
        VIDEOS.map(video => (
            <VideoPlayer key={video.id} {...video} />
        ))
    )
}