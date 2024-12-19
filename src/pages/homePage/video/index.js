import { useState, useRef, useEffect } from 'react';
import PlayIcon from '@/assets/images/svg/playIcon';
import styles from './video.module.scss';
import CloseIcon from '@/assets/images/svg/closeIcon';

export default function Video() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const videoFrameRef = useRef(null);

    const handleOpenVideo = () => {
        setIsVideoOpen(true);
    };

    const handleCloseVideo = () => {
        setIsVideoOpen(false);
    };

    const handleClickOutside = (event) => {
        if (videoFrameRef.current && !videoFrameRef.current.contains(event.target)) {
            setIsVideoOpen(false);
        }
    };

    useEffect(() => {
        if (isVideoOpen) {
            document.body.classList.add('no-scroll');
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.body.classList.remove('no-scroll');
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.body.classList.remove('no-scroll');
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isVideoOpen]);

    return (
        <section>
            <div className={styles.video}>
                <div className={styles.topRefBtn} onClick={handleOpenVideo}>
                    <PlayIcon />
                </div>
                <span>Watch Now</span>
            </div>
            {isVideoOpen && (
                <div className={styles.videoFrame}>
                    <div className={styles.close} onClick={handleCloseVideo}>
                        <CloseIcon />
                    </div>
                    <iframe ref={videoFrameRef} src="https://www.youtube.com/embed/3FBp_Tlgefk?si=xVf3rHyvz_sehdt5" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            )}
        </section>
    );
}
