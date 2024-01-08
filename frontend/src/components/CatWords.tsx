import "../css/CatWordsCss.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PinkArrow from "../assets/pinkArrow.png";

interface Word {
  swedish: string;
  italian: string;
  italearnid: number;
}

const CatWords = () => {
  const { glosor } = useParams();
  const [words, setWords] = useState<Word[]>([]);
  const [selectedCategory, setSelectedCategory] =
    useState<string>("Välj en kategori");

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Kategori: " + glosor);
        const response = await fetch(`/glosor/${glosor}`);
        const result: Word[] = await response.json();
        setWords(result);
        setSelectedCategory(glosor);
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
          <div className="headContainer">
            <Link to="/choosecategory">
              <img className="pinkarrow" src={PinkArrow} />
            </Link>
            <h2>{selectedCategory}:</h2>
          </div>
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
