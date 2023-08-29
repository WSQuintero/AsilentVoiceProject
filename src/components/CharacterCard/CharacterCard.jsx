import "./CharacterCard.css"

function CharacterCard({ galery, img }) {
  return (
    <article className='character-card__container' ref={galery}>
      <div className='character-card__img'>
        <img src={"/img/characters/character-03.png"} alt='character' />
      </div>
      <h2 className="character-card__title">Hola</h2>
      <p className="character-card__parraf">hola soy santiago quintero</p>
    </article>
  )
}

export { CharacterCard }
