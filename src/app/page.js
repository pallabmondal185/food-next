import Image from 'next/image'
import styles from './page.module.css'
import HomePage from './Home/HomePage'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <main>
        <HomePage />
      </main>
    </>
  )
}
