import React from "react";
import { Link } from "react-router-dom";
import "./projects.scss";
export const Projects = () => {
  return (
    <div className="descr">
      <div className="descr-text">
        <div>
          <a
            href={"https://luminous-cuchufli-914d57.netlify.app/"}
            target="_blank"
            className="link"
          >
            Блог
          </a>{" "}
          сделан на React в котором активны все елементы сайта , можно переходить как на все
          категории статей , так и на каждую статью отдельно и оставлять комментарии
        </div>
        <div>
          <a
            href={"https://vladislavfuklev.github.io/SliderNativeJs/"}
            target="_blank"
            className="link"
          >
            Слайдер
          </a>{" "}
          сделаный на чистом JavaScript
        </div>

        <div>
          <a
            href={"https://vladislavfuklev.github.io/Grid-Template/"}
            target="_blank"
            className="link"
          >
            Шаблон
          </a>{" "}
          сделан с помощью технологии Grid , полностью адаптивный
        </div>
        <div>
          <a
            href={"https://vladislavfuklev.github.io/ProjectForScss/"}
            target="_blank"
            className="link"
          >
            Шаблон
          </a>{" "}
          также сделан с помощью Grid , с небольшой анимацией
        </div>
        <div>
          <a
            href={"https://vladislavfuklev.github.io/ModestNew/"}
            target="_blank"
            className="link"
          >
            Шаблон
          </a>{" "}
          один из первых моих проектов , сделан с помощью технологии Flex-Box ,
          полностью адаптивный , при скролле страницы выпадаем модальное окно
        </div>
        <div>
          <a
            href={"https://vladislavfuklev.github.io/TestJun/"}
            target="_blank"
            className="link"
          >
            Шаблон
          </a>{" "}
          сделан по макету терминала самообслуживания ПриватБанка , по клику на
          стрелку можно попасть на второй экран
        </div>
      </div>
    </div>
  );
};
