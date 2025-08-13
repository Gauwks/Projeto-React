import React, { useEffect, useState } from 'react';
import styles from './LikesSection.module.css'; 
import corazon from '../../assets/corazon.png';

function LikesSection() {
  const [likes, setLikes] = useState(0);

  function darOLike() {
    setLikes(likes + 1);
    console.log(likes);
  }

  useEffect(() => {
    if (likes > 9) {
      alert(`Parabéns, você recebeu ${likes} likes`);
    }
  }, [likes]);

  return (
    <div className={styles.likesContainer}> {}
      <p>Quantidade de likes: {likes}</p>
      <button onClick={darOLike}> <img className ="Corazon" src= {corazon} alt="" /></button>
    </div>
  );
}

export default LikesSection;
