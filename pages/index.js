import Image from 'next/image'
import Link from "next/link"
import styles from '../styles/Home.module.css'
import PageLayout from '../components/PageLayout.jsx'
import { useEffect, useState } from 'react'

export default function Home({articles}) {

  useEffect(() => {

  }, [])

  return (
    <PageLayout title="News App - Home">
      <div className={styles.container}>
        {articles.length === 0 && <p>No tenemos articulos</p>}
        {articles.length > 0 && articles.map((article, index) => (
          <div key={index}>
            <img alt={`Image for the article ${article.title}`} src={article.urlToImage} ></img>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  )
}

export async function getServerSideProps() {
  const response = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2022-07-16&sortBy=publishedAt&apiKey=932d43f29a45486bb63bed63436ac39c")
  const { articles } = await response.json()
  return {
    props: {
      articles
    }
  }
}
