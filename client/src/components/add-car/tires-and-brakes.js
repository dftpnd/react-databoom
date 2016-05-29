import React from 'react';

class TiresAndBrakes extends React.Component {
  render() {
    return (
      <div className="index">
        <h1 className="app-title">Шины и тормоза</h1>

        <div className="appearance-form__item">
          <label htmlFor="car-description-field">Описание автомобиля</label>
          <textarea id="car-description-field" placeholder="Текст описания"
                    className="custom-field custom-field__textarea">
            а
          </textarea>
        </div>
        <div className="appearance-form__item field-error">
          <label htmlFor="car-mark-field">Марка</label>
          <select id="car-mark-field" className="custom-field custom-field__select ">
            <option value="0" selected="selected">Выберите марку</option>
            <option>BMW</option>
            <option>BMW</option>
          </select>
        </div>
        <div className="appearance-form__item">
          <label htmlFor="car-model-field">Модель</label>
          <select id="car-model-field" className="custom-field custom-field__select">
            <option value="0" selected="selected">Выберите модель</option>
            <option>1er</option>
            <option>1er</option>
          </select>
        </div>
        <div className="appearance-form__item">
          <label htmlFor="car-modification-field">Модификация</label>
          <select id="car-modification-field" className="custom-field custom-field__select">
            <option value="0" selected="selected">Выберите модификацию</option>
            <option>01</option>
            <option>02</option>
          </select>
        </div>
        <div className="appearance-form__item">
          <label htmlFor="car-release-field">Год выпуска</label>
          <select id="car-release-field" className="custom-field custom-field__select">
            <option value="0" selected="selected">Выберите год выпуска</option>
            <option>2000</option>
            <option>2001</option>
          </select>
        </div>
        <div className="appearance-form__item">
          <label htmlFor="car-engine-volume-field">Двигатель, объем</label>
          <select id="car-engine-volume-field" className="custom-field custom-field__select">
            <option value="0" selected="selected">Выберите двигатель и объем</option>
            <option>type1</option>
            <option>type2</option>
          </select>
        </div>
        <div className="appearance-form__item">
          <label htmlFor="car-engine-force-field">Двигатель, л.с.</label>
          <select id="car-engine-force-field" className="custom-field custom-field__select">
            <option value="0" selected="selected">Выберите кол-во л.с.</option>
            <option>200</option>
            <option>210</option>
          </select>
        </div>
        <div className="appearance-form__item">
          <label for="car-engine-type-field">Двигатель, тип</label>
          <select id="car-engine-type-field" className="custom-field custom-field__select">
            <option value="0" selected="selected">-</option>
            <option>type1</option>
            <option>type2</option>
          </select>
        </div>
        <div className="appearance-form__item">
          <label htmlFor="car-drive-unit-field">Привод</label>
          <select id="car-drive-unit-field" className="custom-field custom-field__select">
            <option value="0" selected="selected">-</option>
            <option>type1</option>
            <option>type2</option>
          </select>
        </div>
        <div className="appearance-form__item">
          <label htmlFor="car-transmission-field">Коробка передач</label>
          <select id="car-transmission-field" className="custom-field custom-field__select">
            <option value="0" selected="selected">-</option>
            <option>type1</option>
            <option>type2</option>
          </select>
        </div>
        <div className="appearance-form__item">
          <label htmlFor="car-wheel-field">Руль</label>
          <select id="car-wheel-field" className="custom-field custom-field__select">
            <option value="0" selected="selected">-</option>
            <option>type1</option>
            <option>type2</option>
          </select>
        </div>
        <div className="appearance-form__item">
          <label htmlFor="car-condition-field">Состояние</label>
          <select id="car-condition-field" className="custom-field custom-field__select">
            <option value="0" selected="selected">-</option>
            <option>type1</option>
            <option>type2</option>
          </select>
        </div>
        <div className="appearance-form__item">
          <label htmlFor="car-broken-field">Битый</label>
          <select id="car-broken-field" className="custom-field custom-field__select">
            <option value="0" selected="selected">-</option>
            <option>type1</option>
            <option>type2</option>
          </select>
        </div>
        <div className="appearance-form__item">
          <label htmlFor="car-color-field">Цвет</label>
          <select id="car-color-field" className="custom-field custom-field__select">
            <option value="0" selected="selected">-</option>
            <option>type1</option>
            <option>type2</option>
          </select>
        </div>
        <div className="appearance-form__item">
          <label htmlFor="car-mileage-field">Пробег</label>
          <select id="car-mileage-field" className="custom-field custom-field__select">
            <option value="0" selected="selected">-</option>
            <option>type1</option>
            <option>type2</option>
          </select>
        </div>
        <div className="appearance-form__item">
          <label htmlFor="car-pts-field">ПТС</label>
          <select id="car-pts-field" className="custom-field custom-field__select">
            <option value="0" selected="selected">-</option>
            <option>type1</option>
            <option>type2</option>
          </select>
        </div>
        <div className="appearance-form__item">
          <label htmlFor="car-cause-field">Причина выдачи дубликата ПТС</label>
          <select id="car-cause-field" className="custom-field custom-field__select">
            <option value="0" selected="selected">-</option>
            <option>type1</option>
            <option>type2</option>
          </select>
        </div>
        <div className="appearance-form__item">
          <label htmlFor="car-free-places-field">Свободных мест в ПТС</label>
          <select id="car-free-places-field" className="custom-field custom-field__select">
            <option value="0" selected="selected">-</option>
            <option>type1</option>
            <option>type2</option>
          </select>
        </div>
        <div className="appearance-form__item">
          <label htmlFor="car-issue-date-field">Дата выдачи ПТС</label>
          <select id="car-issue-date-field" className="custom-field custom-field__select">
            <option value="0" selected="selected">-</option>
            <option>type1</option>
            <option>type2</option>
          </select>
        </div>
        <div className="appearance-form__item">
          <label htmlFor="car-master-count-field">Кол-во хозяев по ПТС</label>
          <select id="car-master-count-field" className="custom-field custom-field__select">
            <option value="0" selected="selected">-</option>
            <option>type1</option>
            <option>type2</option>
          </select>
        </div>
        <div className="appearance-form__item">
          <label htmlFor="car-service-book-field">Сервисная книжка</label>
          <select id="car-service-book-field" className="custom-field custom-field__select">
            <option value="0" selected="selected">-</option>
            <option>type1</option>
            <option>type2</option>
          </select>
        </div>
        <div className="appearance-form__item">
          <label htmlFor="car-guarantee-field">Авто на гарантии</label>
          <select id="car-guarantee-field" className="custom-field custom-field__select">
            <option value="0" selected="selected">-</option>
            <option>type1</option>
            <option>type2</option>
          </select>
        </div>
        <div className="appearance-form__item">
          <label htmlFor="car-buyRussia-field">Куплен в России</label>
          <select id="car-buyRussia-field" className="custom-field custom-field__select">
            <option value="0" selected="selected">-</option>
            <option>type1</option>
            <option>type2</option>
          </select>
        </div>
        <div className="appearance-form__item">
          <label htmlFor="car-key-count-field">Ключ(и) количество</label>
          <select id="car-key-count-field" className="custom-field custom-field__select">
            <option value="0" selected="selected">-</option>
            <option>type1</option>
            <option>type2</option>
          </select>
        </div>
        <div className="appearance-form__item">
          <label htmlFor="car-bus-field">Шины</label>
          <select id="car-bus-field" className="custom-field custom-field__select">
            <option value="0" selected="selected">-</option>
            <option>type1</option>
            <option>type2</option>
          </select>
        </div>
        <div className="appearance-form__item">
          <label htmlFor="car-speedometer-field">Спидометр</label>
          <select id="car-speedometer-field" className="custom-field custom-field__select">
            <option value="0" selected="selected">-</option>
            <option>type1</option>
            <option>type2</option>
          </select>
        </div>
        <div className="appearance-form__item">
          <label htmlFor="car-tyre-size-field">Размер покрышки</label>
          <select id="car-tyre-size-field" className="custom-field custom-field__select">
            <option value="0" selected="selected">-</option>
            <option>type1</option>
            <option>type2</option>
          </select>
        </div>
        <button className="custom-btn" type="button">Заполнить чеклист</button>


      </div>
    );
  }
}

export default TiresAndBrakes;
