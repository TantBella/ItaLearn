// här kan man radera ord

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface Word {
  swedish: string;
  italian: string;
  italearnid: number;
}

const DeleteWord = () => {
  const navigate = useNavigate();
  const [words, setWords] = useState<Word[]>([]);
  const [selectedWord, setSelectedWord] = useState<Word | null>(null);

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const response = await fetch("/deleteword");
        const data = await response.json();
        setWords(data);
      } catch (error) {
        console.error("Error fetching word: ", error);
      }
    };

    fetchWords();
  }, []);

  const handleDeleteClick = (word: Word) => {
    setSelectedWord(word);
  };

  const confirmDelete = async () => {
    if (selectedWord) {
      const response = await fetch("/deleteword", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ italearnid: selectedWord.italearnid }),
      });

      if (response.ok) {
        alert(`Ordet är raderat`);
        setSelectedWord(null);
        navigate("/adminwords");
      } else {
        console.error("Error deleting word");
        alert("Kunde inte radera ordet. Försök igen senare.");
      }
    }
  };

  return (
    <>
      <div className="container">
        <div>
          <button className="yellowButton">
            <Link to="/adminwords"> Tillbaka till adminsidan </Link>
          </button>
        </div>
        <div>
          <h1>Välj vilken word du vill radera:</h1>
          <div>
            <ul>
              {words.map((word) => (
                <li key={word.italearnid}>
                  {word.swedish}
                  <button onClick={() => handleDeleteClick(word)}>
                    Radera glosa
                  </button>
                </li>
              ))}
              {words.length === 0 && <p> Alla kategorier är raderade. </p>}
            </ul>

            {selectedWord && (
              <div>
                <p>Vill du radera {selectedWord.swedish}?</p>
                <button onClick={confirmDelete}>Ja</button>
                <button onClick={() => setSelectedWord(null)}>Avbryt</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteWord;
