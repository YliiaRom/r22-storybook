import { useRef, useState } from "react";
import CypressCodeDescription from "../../components/codeDescription/CypressCodeDescription.js";
function CypressTestComponents() {
  const [nameUser, setNameUser] = useState<string>("");
  const [passwordUser, setPasswordUser] = useState<string>("");

  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    const nameVal = nameRef.current?.value || "";
    const passwordVal = passwordRef.current?.value || "";

    setNameUser(nameVal);
    setPasswordUser(passwordVal);

    console.log(nameVal);
    console.log(passwordVal);
  };
  return (
    <>
      <h2>Cypress</h2>
      {/* --link */}
      <div>
        <a
          href="https://docs.cypress.io/app/get-started/install-cypress"
          target="_blank"
        >
          <button className="btnLink"> Cypress Install</button>
        </a>
        <a
          href="https://docs.cypress.io/app/get-started/open-the-app"
          target="_blank"
        >
          <button className="btnLink"> Cypress + package.json</button>
        </a>
        <a
          href="https://docs.cypress.io/app/get-started/open-the-app"
          target="_blank"
        >
          <button className="btnLink"> Cypress + Configuration</button>
        </a>
        <a
          href="https://docs.cypress.io/app/references/configuration"
          target="_blank"
        >
          <button className="btnLink"> Cypress + Main Configuration</button>
        </a>
        <a
          href="https://github.com/cypress-io/eslint-plugin-cypress"
          target="_blank"
        >
          <button className="btnLink"> Cypress + eslint-plugin-cypress</button>
        </a>
        <a
          href="https://docs.cypress.io/app/plugins/plugins-list"
          target="_blank"
        >
          <button className="btnLink"> Cypress + plugins-list</button>
        </a>
      </div>
      <p>
        Syntax <br /> describe(name, config, fn)
        <br />
        context(name, config, fn)
        <br />
        it(name, config,fn)
        <br />
        specify(name, config, fn)
        <br />
      </p>
      <h3>npx cypress open / npm run cypress:open</h3>

      <div>Name User: {nameUser}</div>
      <div>Password :{passwordUser}</div>
      <form className="form">
        <label>
          Name
          <input type="text" ref={nameRef} name="nameC" />
        </label>
        <label>
          Password
          <input type="text" ref={passwordRef} name="passwordC" />
        </label>
        <button type="button" onClick={handleClick}>
          OnClick
        </button>
      </form>
      <CypressCodeDescription />
    </>
  );
}

export default CypressTestComponents;
