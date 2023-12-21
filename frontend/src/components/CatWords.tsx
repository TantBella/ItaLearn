import "../css/CatWordsCss.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface Word {
  swedish: string;
  italian: string;
  italearnid: number;
}

const CatWords = () => {
  const { glosor } = useParams();
  const [words, setWords] = useState<Word[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Kategori: " + glosor);
        const response = await fetch(`/glosor/${glosor}`);
        const result: Word[] = await response.json();
        setWords(result);
      } catch (error) {
        console.error("Error fetching words in category:", error);
      }
    };

    fetchData();
  }, [glosor]);

  return (
    <>
      <div className="container">
        <div className="wordContainer">
          <h2>Orden i vald kategori:</h2>
          <div className="glosList">
            <ul>
              {words.map((word: Word) => (
                <li id="glosor" key={word.italearnid}>
                  {word.swedish} - {word.italian}
                </li>
              ))}
              {words.length === 0 && <p> Inga ord finns i denna kategori. </p>}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CatWords;
