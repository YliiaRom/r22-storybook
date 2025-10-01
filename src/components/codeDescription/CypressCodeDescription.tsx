function CypressCodeDescription() {
  return (
    <>
      <div className="storybookRule">
        <div>
          <p>npm install cypress --save-dev</p>
          <p>npm install eslint eslint-plugin-cypress --save-dev</p>
        </div>
        {/* ------package.json */}
        <div>
          <h3>📄package.json</h3>
          <p>
            &#123;
            <br />
            <mark> "scripts":</mark> &#123;
            <br />
            "cypress:open": "cypress open"
            <br />
            "cy:run": "cypress run"
            <br />
            &#125;
            <br />
            &#125;
          </p>
        </div>
        {/* -----cypress.config.js */}
        <div>
          <h3> 📄cypress.config.js</h3>
          <p>
            import &#123; defineConfig &#125; from 'cypress'
            <br />
            <br />
            export default<mark> defineConfig(&#123;</mark>
            <br />
            <br />
            <mark> e2e:</mark> &#123;
            <br />
            <br />
            <mark>baseUrl:</mark> 'http://localhost:5173',
            <br />
            <mark> supportFile: </mark>false,
            <br />
            <mark>specPattern:</mark>{" "}
            'cypress/e2e/**/*.cy.&#123;js,jsx,ts,tsx&#125;',
            <br />
            <mark> video:</mark> false,
            <br />
            &#125;,
            <br />
            &#125;) <br />{" "}
            <a
              href="https://docs.cypress.io/app/get-started/open-the-app"
              target="_blank"
            >
              Configuration
            </a>
            <a
              href="https://docs.cypress.io/app/references/configuration"
              target="_blank"
            >
              Main Configuration
            </a>
          </p>
        </div>
        {/* ------📁cypress/📄tsconfig.json */}
        <div>
          <h3> 📁cypress/📄tsconfig.json</h3>
          <p>
            &#123; <br /> "compilerOptions": &#123;
            <br />
            "target": "esnext",
            <br />
            "lib": ["esnext", "dom"],
            <br />
            "types": ["cypress", "node"],
            <br />
            "isolatedModules": true,
            <br />
            "allowJs": true &#125;
            <br />
            <br />
            "include": [<br />
            "e2e/**/*.&#123;(js, jsx, ts, tsx)&#125;",
            <br /> "support/**/*.&#123;(js, jsx, ts, tsx)&#125; ", <br />{" "}
            "fixtures/**/*.&#123;(js, jsx, ts, tsx)&#125;"
            <br />
            ]<br />
            &#125;{" "}
          </p>
          <h3>в кореневому tsconfig.json</h3>
          <p>
            &#123;
            <br />
            "files": [],
            <br />
            "references": [<br />
            &#123; "path": "./tsconfig.app.json" &#125;,
            <br />
            &#123; "path": "./tsconfig.node.json" &#125;,
            <br />
            &#123; "path": "./cypress/tsconfig.json" &#125;
            <br />
            ]<br />
            &#125;
          </p>
          <h4>
            Швидка альтернатива: у кожному .cy.ts файлі першим рядком можна
            додати <br />
            &lt;reference types="cypress" /&gt;
          </h4>
        </div>
        {/* ------.eslint.config.js */}
        <div>
          <h3>📄.eslint.config.js</h3>
          <p>
            import js from '@eslint/js'
            <br />
            import globals from 'globals'
            <br />
            import reactHooks from 'eslint-plugin-react-hooks'
            <br />
            import reactRefresh from 'eslint-plugin-react-refresh'
            <br />
            import tseslint from 'typescript-eslint'
            <br />
            import &#123; globalIgnores &#125; from 'eslint/config'
            <br />
            <br />
            export default<mark> tseslint.config</mark>([
            <br />
            globalIgnores(['dist']),
            <br />
            &#123; <br />
            files: ["**/*.&#123;(js, jsx)&#125", "cypress/**/*&#123;(ts, tsx,
            js, jsx)&#125;"],
            <br />
            extends: [<br />
            js.configs.recommended,
            <br />
            tseslint.configs.recommended,
            <br />
            reactHooks.configs['recommended-latest'],
            <br />
            reactRefresh.configs.vite,
            <br />
            ],
            <br />
            languageOptions: &#123;
            <br />
            ecmaVersion: 2020,
            <br />
            globals: globals.browser,
            <br />
            &#125;,
            <br />
            &#125;,
            <br />
            ])
          </p>
          <h4>Для форматування додати:</h4>
          <p>
            &#123; <br />
            <mark> files: </mark>['cypress/**/*.&#123;ts,tsx,js,jsx&#125;'],
            <br />
            <mark> extends:</mark> ['plugin:cypress/recommended'],
            <br />
            languageOptions: &#123;
            <br />
            <mark>globals:</mark> &#123;
            <br />
            ...globals.browser,
            <br />
            cy: true, <br /> Cypress: true,
            <br />
            describe: true,
            <br /> it: true,
            <br />
            before: true,
            <br /> beforeEach: true,
            <br />
            after: true, <br />
            afterEach: true,
            <br />
            &#125;,
            <br />
            &#125;,
            <br />
            &#125;
            <br />
          </p>
        </div>
        {/* --------test */}
        <div>
          <div>
            <p> 📄 XComponent.tsx </p>
            <br />
            <p>
              &lt;form&gt;
              <br /> <br />
              &lt;label&gt;
              <br /> Name
              <br />
              &lt;<mark>input </mark>type="text" ref=&#123;nameRef&#125; name="
              <mark>nameC</mark>" /&gt;
              <br />
              &lt;/label&gt;
              <br />
              <br />
              &lt;label&gt;
              <br />
              Password
              <br />
              &lt;<mark>input</mark> type="text" ref=&#123;passwordRef&#125;
              name="<mark>passwordC</mark>" /&gt;
              <br />
              &lt;/label&gt;
              <br />
              <br />
              &lt;<mark>button </mark>type="button"
              onClick=&#123;handleClick&#125;&gt;
              <br />
              OnClick
              <br />
              &lt;/button&gt;
              <br />
              <br />
              &lt;/form&gt;
              <br />
            </p>
          </div>
          <div>
            <h3>📁cypress / 📁xxxx / 📄yyyTest.cy.js</h3>
            <br />
            <p>
              <mark>describe</mark>("CypressTestComponents", () =&gt; &#123;
              <br />
              <br />
              <mark> beforeEach(() =&gt;</mark> &#123;
              <br />
              <mark>cy.visit("/");</mark> // використовується baseUrl з конфігу
              <br />
              &#125;);
              <br />
              <br />
              <mark>it(</mark>"should type name and password and display them",
              () =&gt; &#123;
              <br />
              <mark>cy.get</mark>(<mark>'input[name="nameC"]'</mark>)
              <mark>.type</mark>("Roman");
              <br />
              cy.get('input[name="passwordC"]').type("12345");
              <br />
              <mark>cy.contains(</mark> <mark>"button", "OnClick"</mark>)
              <mark>.click()</mark>;
              <br />
              <mark>cy.contains</mark>("Name User: Roman");
              <br />
              cy.contains("Password :12345");
              <br />
              &#125;);
              <br />
              &#125;);
              <br />
            </p>
          </div>
        </div>
      </div>
      <h2>
        cypress / e2e / xxxTest<mark>.cy.js</mark>{" "}
      </h2>
      <a
        href="https://docs.cypress.io/app/end-to-end-testing/writing-your-first-end-to-end-test"
        target="_blank"
      >
        <button className="btnLink"> написання 1 тестa</button>
      </a>

      <div className="storybookRule">
        <div>
          <p>
            <mark>describe</mark>(name, config, fn) <br /> <mark>context</mark>
            (name, config, fn) <br />
            <mark> it</mark>(name, config,fn) <br />
            <mark> specify</mark>(name, config, fn)
          </p>
          {/* --link */}
          <p>
            <a
              href="https://docs.cypress.io/app/get-started/open-the-app"
              target="_blank"
            >
              Doc: open-the-app
            </a>
            <a
              href="https://docs.cypress.io/app/references/configuration"
              target="_blank"
            >
              шаблон
            </a>
            <a href="https://example.cypress.io/cypress-api" target="_blank">
              cypress-api
            </a>
          </p>
        </div>
        <div>
          <p> 📄 XComponent.tsx </p>
          <br />
          <p>
            &lt;form&gt;
            <br /> <br />
            &lt;label&gt;
            <br /> Name
            <br />
            &lt;<mark>input </mark>type="text" ref=&#123;nameRef&#125; name="
            <mark>nameC</mark>" /&gt;
            <br />
            &lt;/label&gt;
            <br />
            <br />
            &lt;label&gt;
            <br />
            Password
            <br />
            &lt;<mark>input</mark> type="text" ref=&#123;passwordRef&#125;
            name="<mark>passwordC</mark>" /&gt;
            <br />
            &lt;/label&gt;
            <br />
            <br />
            &lt;<mark>button </mark>type="button"
            onClick=&#123;handleClick&#125;&gt;
            <br />
            OnClick
            <br />
            &lt;/button&gt;
            <br />
            <br />
            &lt;/form&gt;
            <br />
          </p>
        </div>
        <div>
          <h3>
            📁cypress / 📁xxxx / 📄yyyTest.<mark>cy.js</mark>
          </h3>
          <br />
          <p>
            <mark>describe</mark>("CypressTestComponents", () =&gt; &#123;
            <br />
            <br />
            <mark> beforeEach(() =&gt;</mark> &#123;
            <br />
            <mark>cy.visit("/");</mark> // використовується baseUrl з конфігу
            <br />
            &#125;);
            <br />
            <br />
            <mark>it(</mark>"should type name and password and display them", ()
            =&gt; &#123;
            <br />
            <mark>cy.get</mark>(<mark>'input[name="nameC"]'</mark>)
            <mark>.type</mark>("Roman");
            <br />
            cy.get('input[name="passwordC"]').type("12345");
            <br />
            <mark>cy.contains(</mark> <mark>"button", "OnClick"</mark>)
            <mark>.click()</mark>;
            <br />
            <mark>cy.contains</mark>("Name User: Roman");
            <br />
            cy.contains("Password :12345");
            <br />
            &#125;);
            <br />
            &#125;);
            <br />
          </p>
        </div>
        <div>
          <p>
            <a
              href="https://docs.cypress.io/api/table-of-contents"
              target="_blank"
            >
              commands
            </a>
            <a
              href="https://docs.cypress.io/app/core-concepts/open-mode"
              target="_blank"
            >
              open-mode
            </a>
            <a
              href="https://docs.cypress.io/app/core-concepts/best-practices"
              target="_blank"
            >
              best-practices
            </a>
            <a
              href="https://docs.cypress.io/api/commands/visitk"
              target="_blank"
            >
              visit / beforeEach(() =&gt; &#123;...&#125;
            </a>
            <a
              href="https://docs.cypress.io/api/commands/click"
              target="_blank"
            >
              click
            </a>
            <a href="https://docs.cypress.io/api/commands/type" target="_blank">
              get / type / should
            </a>
            <a
              href="https://docs.cypress.io/api/commands/should"
              target="_blank"
            >
              should/ стан
            </a>
            <a
              href="https://docs.cypress.io/api/commands/clear"
              target="_blank"
            >
              clear
            </a>
            <a
              href="https://docs.cypress.io/api/commands/submit"
              target="_blank"
            >
              submit
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default CypressCodeDescription;
