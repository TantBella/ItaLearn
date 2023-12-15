// här kan man radera kategorier
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface Kategori {
  categoryid: number;
  category: string;
}

const DeleteCat = () => {
  const navigate = useNavigate();
  const [categories, setCategory] = useState<Kategori[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Kategori | null>(
    null
  );

  useEffect(() => {
    const getCat = async () => {
      try {
        const response = await fetch("/deletecat");
        const data = await response.json();
        setCategory(data);
      } catch (error) {
        console.error("Error fetching categories: ", error);
      }
    };

    getCat();
  }, []);

  const handleDeleteClick = (categories: Kategori) => {
    setSelectedCategory(categories.categoryid);
  };

  const confirmDelete = async () => {
    if (selectedCategory) {
      const response = await fetch("/deletecat", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ categoryid: selectedCategory }),
      });

      if (response.ok) {
        alert(`Kategorin är raderad`);
        setSelectedCategory(null);
        navigate("/admincategory");
      } else {
        console.error("Error deleting category");
      }
    }
  };

  return (
    <>
      <div className="container">
        <div>
          <button className="yellowButton">
            <Link to="/admin"> Tillbaka till adminsidan </Link>
          </button>
        </div>
        <div>
          <h1>Välj vilken kategori du vill radera:</h1>
          <div>
            <ul>
              {categories.map((kategori) => (
                <li key={kategori.categoryid}>
                  {kategori.category}
                  <button onClick={() => handleDeleteClick(kategori)}>
                    Radera kategori
                  </button>
                </li>
              ))}
              {categories.length === 0 && <p> Alla kategorier är raderade. </p>}
            </ul>

            {selectedCategory && (
              <div>
                <p>Vill du radera {selectedCategory.category}?</p>
                <button onClick={confirmDelete}>Ja</button>
                <button onClick={() => setSelectedCategory(null)}>
                  Avbryt
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteCat;
