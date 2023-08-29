import "./History.css"

function History() {
  return (
    <section className='history__container'>
      <aside className='history__aside'>
        <img
          src='/img/character-one.jpg'
          alt='character-one'
          className='history__aside--img'
        />
      </aside>
      <div className='history__parraf'>
        <p >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed iusto
          voluptatem maiores sint aliquam totam cupiditate porro ipsa minima
          voluptates?
        </p>
        <button className='history_button'>Ver manga <span className="history__arrow"><img src="/svg/arrow_right_color.svg" alt="arrow right" /></span></button>
      </div>
    </section>
  )
}

export {History}