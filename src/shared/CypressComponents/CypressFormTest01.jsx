import { useState } from "react";

function CypressFormTest01() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const handlerSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div>
        <form id="cypress-form01" onSubmit={handlerSubmit} className="form">
          <label>
            <input
              id="nameTest01"
              type="text"
              name="nameTest01"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <input
              id="ageTest01"
              type="number"
              name="ageTest01"
              onChange={(e) => setAge(e.target.value)}
            />
          </label>
          <button type="submit" data-cy="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default CypressFormTest01;
