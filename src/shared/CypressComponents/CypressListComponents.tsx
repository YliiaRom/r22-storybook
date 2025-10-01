import { useState } from "react";
import { fakeUser } from "../../utils/user/fakeUser";
interface User {
  userId: string;
  username: string;
  email: string;
  avatar: string;
  password: string;
  birthdate: Date;
  registeredAt: Date;
}
function CypressListComponents() {
  const [usersList, setUsersList] = useState<User[]>([]);
  const [nameVal, setNameVal] = useState<string>("");
  const [userVal, setUserVal] = useState<User[]>([]);

  const handlerCreatorUser = () => {
    setUsersList((prev) => [...prev, fakeUser()]);
  };

  const handlerSearchUser = () => {
    const userData = [...usersList].filter((item) =>
      item.username.toLowerCase().includes(nameVal.trim().toLocaleLowerCase())
    );
    setUserVal(userData);
  };

  return (
    <div className="sectionWrapper">
      <h2>
        Test #2 <br />
        Компонент для теста з Cypress <br />
        тестується Стан: .should()
      </h2>
      <a
        href="https://docs.cypress.io/api/commands/should"
        target="_blank"
        className="btnLink"
      >
        should/ стан
      </a>
      <h3>використовується біблиотека faker-js</h3>
      <a
        href="https://www.npmjs.com/package/@faker-js/faker"
        target="_blank"
        className="btnLink"
      >
        npm install --save-dev @faker-js/faker
      </a>
      <h3>Знайти name можно після того як відобразили у списку</h3>
      <label>
        Name:
        <input
          id="search-name"
          type="text"
          name="search-fake-user-name"
          placeholder="xxxx"
          onChange={(e) => setNameVal(e.target.value)}
        />
      </label>
      <button
        onClick={handlerSearchUser}
        className="btnClick"
        data-cy="search-name"
      >
        Search Name
      </button>
      <button
        onClick={handlerCreatorUser}
        className="btnClick"
        data-cy="create-user"
      >
        Create new User
      </button>
      <div className="dataUser">
        <p>
          Введіть ім'я у пошуку — і тут побачите картку з даними цього
          користувача.
        </p>
        {userVal.length === 0 && (
          <p>Поки немає ім'я (зі списку) яке треба знайти!</p>
        )}
        {userVal && (
          <div>
            {
              <ul className="userFakerList">
                {userVal.map((el, id) => (
                  <li key={el.userId}>
                    <div className="userCard">
                      <h3>user: #{el.username}</h3>
                      <p>userId: {el.userId}</p>
                      <p>username: {el.username}</p>
                      <p>email: {el.email}</p>
                      <p> avatar: {el.avatar}</p>
                      <p>password: {el.password}</p>
                      <p>birthdate: {el.birthdate.toLocaleDateString()}</p>
                      <p>
                        registeredAt: {el.registeredAt.toLocaleDateString()}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            }
          </div>
        )}
      </div>
      <ul className="userFakerList" id="list-with-faker">
        <li key="001">
          <div className="userCard">
            <h3>user: Xxxx</h3>
            <p>userId: xxx-xxx-xxx-xxx-xxx-xxx</p>
            <p>username: -</p>
            <p>email: -</p>
            <p> avatar: https://avatars.githubusercontent.com/u/67818951</p>
            <p>password: xxxx</p>
            <p>birthdate: Date</p>
            <p>registeredAt: Date</p>
          </div>
        </li>
        {usersList.map((el, id) => (
          <li key={el.userId}>
            <div className="userCard">
              <h3>user: #{el.username}</h3>
              <p>userId: {el.userId}</p>
              <p>username: {el.username}</p>
              <p>email: {el.email}</p>
              <p> avatar: {el.avatar}</p>
              <p>password: {el.password}</p>
              <p>birthdate: {el.birthdate.toLocaleDateString()}</p>
              <p>registeredAt: {el.registeredAt.toLocaleDateString()}</p>
            </div>
          </li>
        ))}
      </ul>
      <p>
        {" "}
        знайтиshould("exist") перевіряє лише, що хоча б один елемент існує.
      </p>
      <h4>
        should(($cards) =&gt; ...) дозволяє робити будь-які перевірки на масив
        елементів.
      </h4>
      <h5>
        .to.be.greaterThan(1) <br />
        Це частина Chai assertion (бібліотека для перевірок), яку використовує
        Cypress для тестів. expect(value).to.be.greaterThan(number) перевіряє,
        що значення більше за вказане число.
      </h5>

      <p>
        Тест якщо асинхронний вивод item: <br />
        <mark> cy.get</mark>("#list-with-faker .userCard", &#123;{" "}
        <mark>timeout:</mark> 5000 &#125;)
        <br />
        <mark>.should(</mark>(<mark>$cards</mark>) =&gt; &#123; <br />
        <mark> expect</mark>($cards.length)<mark>.to.be.greaterThan(1)</mark>;
        &#125;);
      </p>
    </div>
  );
}

export default CypressListComponents;
