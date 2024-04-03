export const Commentaire = ({ auteur, contenu, date }) => {
  return (
    <div className="commentaire">
      <div className="info-com">
        <h4>{auteur}</h4>
        <p className="date-com">{date}</p>
      </div>
      <p className="contenu-com">{contenu}</p>
    </div>
  )
}
 