import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/GetCatCss.css";

interface ItaCategories {
  id: number;
  category: string;
}

const GetCat = () => {
  const [categories, setCategories] = useState<ItaCategories[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api");
        const result: ItaCategories[] = await response.json();
        setCategories(result);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="getcatContainer">
          <h2>Välj kategori:</h2>
          <div className="getcatDiv">
            {categories.map((category: ItaCategories, index: number) => (
              <Link
                key={category.id ?? index}
                to={`/category/${category.category}`}
              >
                {category.category}
              </Link>
            ))}

            {categories.length === 0 && <p> Inga kategorier finns</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default GetCat;
