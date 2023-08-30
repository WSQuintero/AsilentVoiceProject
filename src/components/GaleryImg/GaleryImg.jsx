import { useRef } from "react"
import { useObserver } from "../../customHooks/useOberver"
import "./GaleryImg.css"

function GaleryImg({setOpenMenu}) {
    const galeryImg = useRef(null)

    useObserver(galeryImg,setOpenMenu)

  return (
    <section className='galery-img__container' id='galery-img__container' ref={galeryImg}>
      <div className='galery-img__one'>
        <div className='galery-img__one--element'></div>
        <div className='galery-img__one--element'></div>
        <div className='galery-img__one--element'></div>
        <div className='galery-img__one--element'></div>
        <div className='galery-img__one--element'></div>
        <div className='galery-img__one--element'></div>
      </div>
      <div className='galery-img__two'></div>
      <div className='galery-img__three'>
        <div className='galery-img__three--element'></div>
        <div className='galery-img__three--element'></div>
      </div>
    </section>
  )
}

export { GaleryImg }
