import "./CharacterCard.css"

function CharacterCard({  image,name,description}) {
  return (
    <article className='character-card__container'>
      <div className='character-card__img'>
        <img src={image} alt='character'  />
      </div>
      <h2 className='character-card__title'>{name}</h2>
      <p className='character-card__parraf'>{description}</p>
    </article>
  )
}

export { CharacterCard }
