// OrdIKategori.tsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface Word {
  swedish: string;
  italian: string;
  italearnid: number;
}

const CatWords = () => {
  const { categoryId } = useParams();
  const [words, setWords] = useState<Word[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/category/${categoryId}`);
        const result: Word[] = await response.json();
        setWords(result);
      } catch (error) {
        console.error("Error fetching words in category:", error);
      }
    };

    fetchData();
  }, [categoryId]);

  return (
    <>
      <div className="container">
        <div className="ordIKategoriContainer">
          <h2>Orden i vald kategori:</h2>
          <ul>
            {words.map((word: Word) => (
              <li key={word.italearnid}>
                {word.swedish} - {word.italian}
              </li>
            ))}
            {words.length === 0 && <p> Inga ord finns i denna kategori. </p>}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CatWords;
