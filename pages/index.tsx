import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className='min-h-screen'>
      <Header />
      <div className="mt-10">
        {/* trending */}
      </div>
      <div className='mt-20'>
        {/* table */}
      </div>
    </div>
  )
}

export default Home
