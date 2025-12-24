import React, { useRef } from "react";
import styles from "./styles.module.css";

type Props = { name: string };

export default function DocVideo(props: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <div
      className={styles.wrapper}
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => videoRef.current?.pause()}
      onClick={() => videoRef.current?.play()}
    >
      <video loop={true} ref={videoRef} width="100%">
        <source src={`/videos/${props.name}.webm`} type="video/webm" />
      </video>
    </div>
  );
}
