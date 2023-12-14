// Här kan man lägga till nya kategorier

import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FormValues {
  category: string;
}

const PostCat = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState<string>("");

  const handleCategory = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formvalues: FormValues = {
      category: category,
    };
    console.log("Info som ska sparas: ", { formvalues });

    fetch("/addcategory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formvalues),
    })
      .then((apiResponse) => {
        if (apiResponse.status === 201) {
          console.log("Category created successfully");
          navigate("/");
        } else {
          console.error("Error creating cat:", apiResponse);
        }
      })
      .catch((error) => {
        console.error("Error creating cat", error);
      });
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
          <h1>Lägg till ny kategori</h1>
          <form onSubmit={handleCategory}>
            <input
              placeholder={"Kategorinamn"}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <div>
              <button type="submit" className="pinkButton">
                Lägg till
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PostCat;
