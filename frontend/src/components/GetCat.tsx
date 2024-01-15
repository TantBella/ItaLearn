import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/GetCatCss.css";
import PinkArrow from "../assets/pinkArrow.png";

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
          <div className="headContainer">
            <Link to="/benvenuto">
              <img className="pinkarrow" src={PinkArrow} />
            </Link>
            <h2>Välj kategori:</h2>
          </div>
          <div className="getcatDiv">
            {categories.map(
              (
                category: // har lagt in denna koden för att: Each child in a list should have a unique "key" prop
                ItaCategories,
                index: number
              ) => (
                <Link
                  key={category.id ?? index}
                  to={`/glosor/${category.category}`}
                >
                  {category.category}
                </Link>
              )
            )}

            {categories.length === 0 && <p> Inga kategorier finns</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default GetCat;
