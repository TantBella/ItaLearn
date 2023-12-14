// här kan man lägga till nya ord

// Här kan man lägga till nya kategorier

import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FormValues {
  swedish: string;
  italian: string;
  category_id: number;
}

const PostWord = () => {
  const navigate = useNavigate();
  const [swedish, setSwedish] = useState<string>("");
  const [italian, setItalian] = useState<string>("");
  const [category_id, setCategoryid] = useState<number>();

  const handleCategory = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formvalues: FormValues = {
      swedish: swedish,
      italian: italian,
      category_id: category_id,
    };
    console.log("Info som ska sparas: ", { formvalues });

    fetch("/addword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formvalues),
    })
      .then((apiResponse) => {
        if (apiResponse.status === 201) {
          console.log("Word created successfully");
          navigate("/admin");
        } else {
          console.error("Error creating word:", apiResponse);
        }
      })
      .catch((error) => {
        console.error("Error creating word", error);
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
              placeholder={"Svenska"}
              value={swedish}
              onChange={(e) => setSwedish(e.target.value)}
            />
            <input
              placeholder={"Italienska"}
              value={italian}
              onChange={(e) => setItalian(e.target.value)}
            />
            <input
              placeholder={"Kategorinummer"}
              value={category_id}
              onChange={(e) => setCategoryid(e.target.value)}
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

export default PostWord;
