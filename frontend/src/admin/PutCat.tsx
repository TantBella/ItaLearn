// här ska man kunna ändra kategorier
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Kategori {
  categoryid: number;
  category: string;
}

const PutCat = () => {
  const [categories, setCategory] = useState<Kategori[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Kategori | null>(
    null
  );
  const [newCategoryName, setNewCategoryName] = useState("");

  useEffect(() => {
    const getCat = async () => {
      try {
        const response = await fetch("/categorychange");
        const data = await response.json();
        setCategory(data);
      } catch (error) {
        console.error("Error fetching categories: ", error);
      }
    };

    getCat();
  }, []);

  const handleCategoryChange = (Kategori) => {
    setSelectedCategory(Kategori);
    setNewCategoryName(Kategori.category);
  };

  const handleSaveChange = async () => {
    if (selectedCategory && newCategoryName) {
      try {
        const response = await fetch(
          `/categorychange/${selectedCategory.categoryid}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ category: newCategoryName }),
          }
        );

        if (response.ok) {
          const updatedCategories = categories.map((cat) =>
            cat.categoryid === selectedCategory.categoryid
              ? { ...cat, category: newCategoryName }
              : cat
          );

          setCategory(updatedCategories);
          setSelectedCategory(null);
          setNewCategoryName("");
        } else {
          console.error("Error saving changes");
        }
      } catch (error) {
        console.error("Error saving changes: ", error);
      }
    }
  };

  return (
    <>
      <div className="container">
        <div>
          <button className="yellowButton">
            <Link to="/admincategory">Tillbaka till adminsidan</Link>
          </button>
        </div>
        <div>
          <h1>Ändra kategori</h1>
          <ul>
            {categories.map((category) => (
              <li key={category.categoryid}>
                {category.category}
                <button onClick={() => handleCategoryChange(category)}>
                  Ändra
                </button>
              </li>
            ))}
            {categories.length === 0 && <p> Det finns inga kategorier. </p>}
          </ul>
          {selectedCategory && (
            <div>
              <input
                type="text"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
              />
              <button onClick={handleSaveChange}>Spara</button>
              <button onClick={() => setSelectedCategory(null)}>Avbryt</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PutCat;
