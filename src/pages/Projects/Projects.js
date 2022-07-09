import React from "react";
import "./projects.scss";
export const Projects = () => {
  return (
    <div className="descr">
      <div>
        <a
          href={"https://fyklev-blog.netlify.app/"}
          target="_blank"
          className="link"
          rel="noreferrer"
        >
          Блог
        </a>{" "}
        зроблений на React, у якому активні всі елементи сайту, можна переходити
        як на всі категорії статей, так і на кожну статтю окремо, та залишати
        коментарі
      </div>
      <div>
        <a
          href={"https://fyklev-fake-shop.netlify.app/"}
          target="_blank"
          className="link"
          rel="noreferrer"
        >
          Інтернет-магазин
        </a>{" "}
        зроблений на React, товари на сторінках виведені за допомогою{" "}
        <a
          href={"https://axios-http.com/docs/intro"}
          target="_blank"
          className="link"
          rel="noreferrer"
        >
          axios
        </a>{" "}
        в якому можна з головної сторінки додавати товари в кошик, змінювати
        кількість товарів, ставити лайк, також йде підрахунок суми товарів, зі
        сторінки кошика товари можна видаляти, змінювати кількість,
        ставити/прибирати лайк , також можна перейти на сторінку реєстрації та
        зареєструватись
      </div>
      <div>
        <a
          href={"https://vladislavfuklev.github.io/SliderNativeJs/"}
          target="_blank"
          className="link"
          rel="noreferrer"
        >
          Слайдер
        </a>{" "}
        зроблений на чистому JavaScript
      </div>

      <div>
        <a
          href={"https://vladislavfuklev.github.io/Grid-Template/"}
          target="_blank"
          className="link"
          rel="noreferrer"
        >
          Шаблон
        </a>{" "}
        зроблений за допомогою технології Grid, повністю адаптивний
      </div>
      <div>
        <a
          href={"https://vladislavfuklev.github.io/ProjectForScss/"}
          target="_blank"
          className="link"
          rel="noreferrer"
        >
          Шаблон
        </a>{" "}
        також зроблений за допомогою Grid, з невеликою анімацією
      </div>
      <div>
        <a
          href={"https://vladislavfuklev.github.io/ModestNew/"}
          target="_blank"
          className="link"
          rel="noreferrer"
        >
          Шаблон
        </a>{" "}
        один з перших моїх проектів, зроблений за допомогою технології Flex-Box,
        повністю адаптивний, при скролі сторінки випадає модальне вікно
      </div>
      <div>
        <a
          href={"https://vladislavfuklev.github.io/TestJun/"}
          target="_blank"
          className="link"
          rel="noreferrer"
        >
          Шаблон
        </a>{" "}
        зроблено за макетом терміналу самообслуговування ПриватБанку, при кліку
        на стрілку можна потрапити на другий екран
      </div>
    </div>
  );
};
