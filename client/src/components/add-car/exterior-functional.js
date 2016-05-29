import React from 'react';

class ExteriorFunctional extends React.Component {
  render() {
    return (
      <div className="index">
        <h1 className="app-title">Внешний функционал</h1>

        <div className="exterior-functional__item">
          <label className="exterior-functional__label">Механизм сложения зеркал заднего вида работает исправно</label>
          <div className="exterior-functional__btns">
            <button className="exterior-functional__btn-dft exterior-functional__btn-yes active" type="button">Да</button>
            <button className="exterior-functional__btn-dft exterior-functional__btn-no" type="button">Нет</button>
          </div>
        </div>
        <div className="exterior-functional__item">
          <label className="exterior-functional__label">Дверные ручки работают исправно</label>
          <div className="exterior-functional__btns">
            <button className="exterior-functional__btn-dft exterior-functional__btn-yes" type="button">Да</button>
            <button className="exterior-functional__btn-dft exterior-functional__btn-no active" type="button">Нет</button>
          </div>
        </div>

        <div className="nav-buttons">
          <button className="custom-btn" type="button">Назад</button>
          <button className="custom-btn" type="button">Далее</button>
        </div>
      </div>
    );
  }
}

export default ExteriorFunctional;
