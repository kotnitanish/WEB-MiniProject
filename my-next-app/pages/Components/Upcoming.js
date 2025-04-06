import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
import styles from "@/styles/Upcoming.module.css"; 

const events = [
  {
    img: "https://www.thestatesman.com/wp-content/uploads/2018/03/19985032_1628342673842740_6221667355580170240_n.jpg",
    title: "Shreya Ghoshal Concert",
    date: "March 15, 2025",
    venue: "Mumbai Arena",
  },
  {
    img: "https://www.tribuneindia.com/sortd-service/imaginary/v22-01/jpg/large/high?url=dGhldHJpYnVuZS1zb3J0ZC1wcm8tcHJvZC1zb3J0ZC9tZWRpYTcwMzM1NjgwLWUzNTYtMTFlZi04ZGU2LTkzNGIzY2M4YTM2NC5qcGc=",
    title: "Jonita Gandhi Concert",
    date: "April 10, 2025",
    venue: "Delhi Music Hall",
  },
  {
    img: "https://media.assettype.com/gulfnews%2Fimport%2F2022%2F10%2F04%2FIndian-comedian-Anubhav-Singh-Bassi_183a2a4cc6b_large.jpg?w=1200&auto=format%2Ccompress&fit=max",
    title: "Bassi Standup Comedy",
    date: "May 5, 2025",
    venue: "Bangalore Stadium",
  },
  {
    img: "https://images.indianexpress.com/2024/01/Ritviz_Zomaland_PR.jpg?w=640",
    title: "Ritviz Concert",
    date: "June 20, 2025",
    venue: "Pune Grounds",
  },
  {
    img: "https://storeysofbombay.wordpress.com/wp-content/uploads/2019/08/samay-raina.jpg",
    title: "Samay Raina Standup Comedy",
    date: "July 8, 2025",
    venue: "Chennai Convention Center",
  },
  {
    img: "https://res.cloudinary.com/https-highape-com/image/upload/q_auto:low,f_auto/v1524823603/xnplksompb8ksfefesgb.jpg",
    title: "DJ Chetas",
    date: "August 12, 2025",
    venue: "Hyderabad Grand Hall",
  },
];

const UpcomingEvents = () => {
  return (
    <section className={styles.events_mcontainer} id="events">
      
      <h1 className={styles.heading}>
        Upcoming Events
      </h1>

      <div className={styles.events_container}>
        {events.map((event, index) => (
          <div className={styles.event_card} key={index}>
            <img src={event.img} alt={event.title} />
            <div className={styles.event_info}>
              <h2>{event.title}</h2>
              <p>Date: {event.date}</p>
              <p>Venue: {event.venue}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingEvents;
