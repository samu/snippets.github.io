import clsx from "clsx";
import { useRef, useState } from "react";
import styles from "./styles.module.css";

type Props = {
  src: string;
};

export default function DocVideo(props: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function toggle() {
    if (!videoRef.current) {
      return;
    }

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }

  return (
    <div
      className={clsx(styles.wrapper, isPlaying && styles.playing)}
      onClick={toggle}
    >
      <video ref={videoRef} loop width="100%">
        <source src={props.src} type="video/webm" />
      </video>

      <div className={styles.overlay} />

      {!isPlaying && (
        <div className={styles.playOverlay}>
          <div className={styles.playButton} />
        </div>
      )}
    </div>
  );
}
