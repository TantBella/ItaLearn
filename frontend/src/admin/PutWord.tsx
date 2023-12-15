import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface Word {
  swedish: string;
  italian: string;
  italearnid: number;
}

const PutWord = () => {
  const navigate = useNavigate();
  const [words, setWords] = useState<Word[]>([]);
  const [selectedWord, setSelectedWord] = useState<Word | null>(null);
  const [newSwedish, setNewSwedish] = useState<string>("");
  const [newItalian, setNewItalian] = useState<string>("");

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const response = await fetch("/wordchange");
        if (response.ok) {
          const data = await response.json();
          setWords(data);
        } else {
          console.error("Error fetching words:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching words:", error);
      }
    };

    fetchWords();
  }, []);

  const handleWordChange = (word: Word) => {
    setSelectedWord(word);
    setNewSwedish(word.swedish);
    setNewItalian(word.italian);
  };

  const handleSaveChange = async () => {
    if (selectedWord && newSwedish && newItalian) {
      try {
        const response = await fetch(`/wordchange/${selectedWord.italearnid}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            swedish: newSwedish,
            italian: newItalian,
          }),
        });

        if (response.ok) {
          const updatedWords = words.map((w) =>
            w.italearnid === selectedWord.italearnid
              ? { ...w, swedish: newSwedish, italian: newItalian }
              : w
          );
          setWords(updatedWords);
          setSelectedWord(null);
          setNewSwedish("");
          setNewItalian("");
          navigate("/adminwords");
        } else {
          console.error("Error saving changes:", response.statusText);
        }
      } catch (error) {
        console.error("Error saving changes:", error);
      }
    }
  };

  return (
    <>
      <div className="container">
        <div>
          <button className="yellowButton">
            <Link to="/adminwords">Tillbaka till adminsidan</Link>
          </button>
        </div>
        <div>
          <h1>Ändra glosa</h1>
          <ul>
            {words.map((word) => (
              <li key={word.italearnid}>
                {word.swedish}
                <button onClick={() => handleWordChange(word)}>Ändra</button>
              </li>
            ))}
            {words.length === 0 && <p> Det finns inga glosor. </p>}
          </ul>
          {selectedWord && (
            <div>
              <input
                type="text"
                value={newSwedish}
                onChange={(e) => setNewSwedish(e.target.value)}
              />
              <input
                type="text"
                value={newItalian}
                onChange={(e) => setNewItalian(e.target.value)}
              />
              <button onClick={handleSaveChange}>Spara</button>
              <button onClick={() => setSelectedWord(null)}>Avbryt</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PutWord;
