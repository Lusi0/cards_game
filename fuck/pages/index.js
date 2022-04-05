import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
//import card component
import Card from '../components/card'
import CardCreature from '../components/cardCreature'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <Card title="" cost=""
          image="https://i.imgur.com/6LMrIqk.png" 
          content=""></Card>
          
          <CardCreature title="" cost=""
          image="https://i.imgur.com/6LMrIqk.png" 
          content=" " attack="" defense=""></CardCreature>


          <Card title="Mind Melt" cost="5"
          image="https://i.imgur.com/6LMrIqk.png" 
          content="Target Player Discards Their Hand and Draws cards equal to the largest handsize"></Card>

          <Card title="Blood Reading" cost="2"
          image="https://i.imgur.com/6LMrIqk.png" 
          content="Lose 3 health: draw three cards"></Card>
          
          <CardCreature title="" cost="3"
          image="https://i.imgur.com/6LMrIqk.png" 
          content="When [CardName] dies Summon a creature that died this game" attack="1" defense="4"></CardCreature>

          <CardCreature title="" cost="2"
          image="https://i.imgur.com/6LMrIqk.png"
          content="When you play me add 2 (1 mana 1/1s) to your hand" attack="1" defense="1"></CardCreature>

          <CardCreature title="" cost="1"
          image="https://i.imgur.com/6LMrIqk.png"
          content="" attack="1" defense="1"></CardCreature>
          
          <CardCreature title="" cost="1"
          image="https://i.imgur.com/6LMrIqk.png"
          content="" attack="1" defense="2"></CardCreature>

          <Card title="" cost=""
          image="https://i.imgur.com/6LMrIqk.png" 
          content=""></Card>


      </main>
    </div>

  )
}



