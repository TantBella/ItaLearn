// här finns det tre val man kan göra som leder till varsin komponent. Man väljer om man vill öva på glosor träna på ord eller gör ett test

// Denna filen görs efter test

// import { Link } from "react-router-dom";

const ChosePractise = () => {
  return (
    <div className="container">
      <div>
        <h1>Välj hur du vill träna på glosorna</h1>
      </div>
      <div>
        <button>Öva på glosor</button>
        <button>Quiz a Italiano</button>
        <button>Quiz da Italiano</button>
      </div>
    </div>
  );
};
export default ChosePractise;
