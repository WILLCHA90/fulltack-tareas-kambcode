import React from "react";
import styles from "./style.module.css"

function App() {
  return (
    <>
    <div className={styles.contenedor}>
      <h1>Charles Puth</h1>
      <img
        src="data:image/jpeg;base64,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"
        alt="Charlie Puth"
      />
      <p>
        Charles Otto Puth (Rumson, Nueva Jersey; 2 de diciembre de 1991), conocido como Charlie Puth, es un cantante, compositor y productor musical estadounidense. Es conocido por producir e interpretar «See You Again» junto a Wiz Khalifa, en honor a la muerte de su actor favorito Paul Walker. Fue nominado 4 veces a los premios Grammys.

        En 2016 lanzó los primeros sencillos de su álbum debut Nine Track Mind, Marvin Gaye en 2015 con la colaboración de Meghan Trainor que trepó al primer puesto en su país natal y en otros tres países, y las canciones One Call Away y Dangerously. También lanzó We Don't Talk Anymore con Selena Gomez.

        En 2017 publicó su segundo álbum llamado Voicenotes, que incluiría sencillos como Attention que llegó el 26 de agosto de 2017 a la quinta posición del Billboard Hot 100, en la que permaneció 40 semanas, escrito, producido e interpretado por él mismo. El segundo sencillo del álbum se tituló How Long y se publicó el día 19 de octubre de 2017, este sencillo estuvo en el Hot 100 durante 24 semanas y alcanzó la posición n.º21.
      </p>
    </div>
    </>
  );
}

export default App;