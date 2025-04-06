import React from "react";
import styles from"@/styles/Gallery.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import { faHeart, faShare, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const events = [
  {
    img: "https://rollingstoneindia.com/wp-content/uploads/2024/08/Yo-Yo-Honey-Singh-960x720.jpg",
    title: "Best Events",
  },
  {
    img: "https://www.voxspace.in/wp-content/uploads/2019/10/Agam-Band-1067x600.jpg",
    title: "Best Events",
  },
  {
    img: "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*l2qqCC4r6v3n_X-Y4JgxCw.jpeg",
    title: "Best Events",
  },
  {
    img: "https://cms-article.forbesindia.com/media/digital-stars/Aakash_Gupta_H.webp",
    title: "Best Events",
  },
  {
    img: "https://learn.humsa.com/wp-content/uploads/2023/11/Bharatanatyam-identification-features.jpg.webp",
    title: "Best Events",
  },
  {
    img: "https://www.hindustantimes.com/ht-img/img/2023/07/30/550x309/Sonu-Nigam_1690701842697.jpg",
    title: "Best Events",
  },
  {
    img: "https://dnwp63qf32y8i.cloudfront.net/14a95280f829e38ff41a8c4fde234c8b5ef38f83",
    title: "Best Events",
  },
  {
    img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202410/shraddha-kapoor-141825285-16x9_0.jpg?VersionId=APQQ9boRsLXjCFHLSUPkaAfN72Bdw5So&size=690:388",
    title: "Best Events",
  }
];

const Gallery = () => {
  return (
    <div className={styles.gallery_page}>
      
        <h1 className={styles.heading}>
          Gallery
        </h1>
    

      {/* Gallery Section */}
      <section className={styles.gallery} id="gallery">
        <div className={styles.box_container}>
          {events.map((event, index) => (
            <div className={styles.box} key={index}>
              <img src={event.img} alt={`Event ${index + 1}`} />
              <h3 className={styles.title}>{event.title}</h3>
              <div className={styles.icons}>
                <a href="#"><FontAwesomeIcon icon={faHeart} /></a>
                <a href="#"><FontAwesomeIcon icon={faShare} /></a>
                <a href="#"><FontAwesomeIcon icon={faEye} /></a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
