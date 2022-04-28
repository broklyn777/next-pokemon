import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from "react";


export default function Home() {
  const [pokemon, setPokemon] = useState([]);


  useEffect(() => {
    async function getPokemon() {
      const resp = await fetch("https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json")
      setPokemon(await resp.json());
    }
    getPokemon();
  }, [])


  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon</title>

      </Head>
      <div>
        {JSON.stringify(pokemon)}
      </div>
    </div>
  );
}
