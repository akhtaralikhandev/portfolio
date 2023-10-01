import Hero from '../components/hero/hero'
import { Suspense } from 'react'
// import Slider from '../components/slider/slider'
export default function Home() {
  return (
    <div>
      <Suspense fallback={<p>loading... </p>}>


        <Hero /></Suspense>
    </div>


  )
}
