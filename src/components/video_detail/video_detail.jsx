import React from "react";
import styles from "./video_detail.module.css";

const VideoDetail = ({ video }) => (
  <section className={styles.detail}>
    <iframe
    className={styles.video}
      type="text/html"
      width="100%"
      height="500px"
      src={`http://www.youtube.com/embed/${video.id}`}
      frameborder="0"
    ></iframe>
    <h2>{video.snippet.title}</h2>
    <h3>{video.snippet.channelTitle}</h3>
    <pre>{video.snippet.description}</pre>
  </section>
);

export default VideoDetail;