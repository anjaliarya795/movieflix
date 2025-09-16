
import React from 'react';
import MovieCard from "@/app/components/MovieCard";
import styles from "@/app/styles/common.module.css";

const Movie = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));

  const url = "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit=10&country=us";

  const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_KEY,
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    }; 

  const res = await fetch(url, options);
  const data = await res.json();
const main_data = data?.titles || [];

  main_data.forEach(item => {
    console.log(item.jawSummary);
  });

  return (
    <section className={styles.movieSection}>
      <div className={styles.container}>
        <h1>Series & Movie</h1>
        <div className={styles.card_section}>
          {
            main_data.map((curElem) => (
              <MovieCard key={curElem.id} {...curElem} />
            ))
          }

        </div>
      </div>
    </section>
  );
};

export default Movie;
