import React from 'react';

class Equipment extends React.Component {
  formHandler() {

  }

  render() {
    return (
      <div className="index">
        <h1 className="app-title">Комплектация</h1>
        <div className="equipment-form">
          <div className="equipment-form__tab">
            <div className="equipment-form__item">
              <h3 className="equipment-form__item-title">Интерьер</h3>
              <div className="equipment-form__item-child">
                <h3 className="equipment-form__item-child-title">Обивка салона</h3>
                <form>
                  <label className="equipment-form__label">
                    <input type="radio" name="upholstery" value="cloth" defaultChecked/>ткань
                  </label>
                  <label className="equipment-form__label">
                    <input type="radio" name="upholstery" value="velours"/>велюр
                  </label>
                  <label className="equipment-form__label">
                    <input type="radio" name="upholstery" value="leather"/>кожа
                  </label>
                  <label className="equipment-form__label">
                    <input type="radio" name="upholstery" value="combined"/>комбинированный
                  </label>
                </form>
              </div>
              <div className="equipment-form__item-child">
                <h3 className="equipment-form__item-child-title">Цвет салона</h3>
                <form>
                  <label className="equipment-form__label">
                    <input type="radio" name="color" value="dark" defaultChecked/>темный
                  </label>
                  <label className="equipment-form__label">
                    <input type="radio" name="color" value="light"/>светлый
                  </label>
                </form>
              </div>

              <div className="equipment-form__item">
                <h3 className="equipment-form__item-title">Экстерьер</h3>
                <form>
                  <label className="equipment-form__label">
                    <input type="checkbox" name="exterior" defaultChecked/>Люк на крыше
                  </label>
                  <label className="equipment-form__label">
                    <input type="checkbox" name="exterior"/>Тонированные стекла
                  </label>
                  <label className="equipment-form__label">
                    <input type="checkbox" name="exterior"/>Ксеноновые фары
                  </label>
                  <label className="equipment-form__label">
                    <input type="checkbox" name="exterior"/>Адаптивные фары
                  </label>
                  <div className="equipment-form__label-select">
                    <label className="equipment-form__label">
                      <input type="checkbox" name="exterior"/>Легкосплавные диски
                    </label>
                    <select>
                      <option>12"</option>
                      <option>13"</option>
                    </select>
                  </div>
                </form>
              </div>

              <div className="equipment-form__item">
                <h3 className="equipment-form__item-title">Сигнализация</h3>
                <label className="equipment-form__label">
                  <input type="checkbox" name="signaling" defaultChecked/>Иммобиллайзер
                </label>
                <label className="equipment-form__label">
                  <input type="checkbox" name="signaling"/>Штатная
                </label>
                <label className="equipment-form__label">
                  <input type="checkbox" name="signaling"/>Обратная связь
                </label>
                <label className="equipment-form__label">
                  <input type="checkbox" name="signaling"/>Дистанционный запуск двигателя
                </label>
              </div>

              <div className="equipment-form__item">
                <h3 className="equipment-form__item-title">Безопасность</h3>
                <label className="equipment-form__label">
                  <input type="checkbox" name="security" defaultChecked/>Антиблокировочная система (ABS)
                </label>
                <label className="equipment-form__label">
                  <input type="checkbox" name="security"/>Антиблокировочная система
                </label>
                <label className="equipment-form__label">
                  <input type="checkbox" name="security"/>Система курсовой устойчивости
                </label>
                <label className="equipment-form__label">
                  <input type="checkbox" name="security"/>Парктроник
                </label>
                <h3 className="equipment-form__item-child-title">Подушки безопасности</h3>
                <form>
                  <label className="equipment-form__label">
                    <input type="radio" name="airbags" defaultChecked/>отсутствуют
                  </label>
                  <label className="equipment-form__label">
                    <input type="radio" name="airbags"/>светлый
                  </label>
                  <label className="equipment-form__label">
                    <input type="radio" name="airbags"/>водителя и пассажира
                  </label>
                  <label className="equipment-form__label">
                    <input type="radio" name="airbags"/>передние и боковые
                  </label>
                </form>
              </div>
            </div>
          </div>
          <div className="equipment-form__tab">
            <div className="equipment-form__item">
              <h3 className="equipment-form__item-title">Функционально оборудование</h3>
              <label className="equipment-form__label">
                <input type="checkbox" name="equipment" defaultChecked/>Бортовой компьютер
              </label>
              <label className="equipment-form__label">
                <input type="checkbox" name="equipment"/>Газобалонное оборудование
              </label>
              <label className="equipment-form__label">
                <input type="checkbox" name="equipment"/>Датчик дождя
              </label>
              <label className="equipment-form__label">
                <input type="checkbox" name="equipment"/>Датчик света
              </label>
              <label className="equipment-form__label">
                <input type="checkbox" name="equipment"/>Круиз-контроль
              </label>
              <label className="equipment-form__label">
                <input type="checkbox" name="equipment"/>Навигационная система
              </label>
              <label className="equipment-form__label">
                <input type="checkbox" name="equipment"/>Обогрев зеркал
              </label>
              <label className="equipment-form__label">
                <input type="checkbox" name="equipment"/>Омыватель фар
              </label>
              <label className="equipment-form__label">
                <input type="checkbox" name="equipment"/>Усилитель руля
              </label>
              <label className="equipment-form__label">
                <input type="checkbox" name="equipment"/>Центральный замок
              </label>
              <label className="equipment-form__label">
                <input type="checkbox" name="equipment"/>Пневмоподвеска
              </label>
            </div>
            <div className="equipment-form__item">
              <h3 className="equipment-form__item-title">Комфорт</h3>
              <label className="equipment-form__label">
                <input type="checkbox" name="comfort" defaultChecked/>Подогрев руля
              </label>
              <label className="equipment-form__label">
                <input type="checkbox" name="comfort"/>Обогрев сидений
              </label>
              <div className="equipment-form__label-select">
                <label className="equipment-form__label">
                  <input type="checkbox" name="comfort"/>Количество мест
                </label>
                <select>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <h3 className="equipment-form__item-child-title">Климат</h3>
              <label className="equipment-form__label">
                <input type="radio" name="climate" defaultChecked/>отсутствует
              </label>
              <label className="equipment-form__label">
                <input type="radio" name="climate"/>кондиционер
              </label>
              <label className="equipment-form__label">
                <input type="radio" name="climate"/>климат-контроль 1-зонный
              </label>
              <label className="equipment-form__label">
                <input type="radio" name="climate"/>климат-контроль 2-зонный
              </label>
              <label className="equipment-form__label">
                <input type="radio" name="climate"/>климат-контроль 3-зонный
              </label>
            </div>

            <div className="equipment-form__item">
              <h3 className="equipment-form__item-title">Мультимедиа</h3>
              <label className="equipment-form__label">
                <input type="checkbox" name="multimedia" defaultChecked/>Кассетник
              </label>
              <label className="equipment-form__label">
                <input type="checkbox" name="multimedia"/>CD
              </label>
              <label className="equipment-form__label">
                <input type="checkbox" name="multimedia"/>TV
              </label>
            </div>
          </div>
          <div className="equipment-form__tab">
            <div className="equipment-form__item">
              <h3 className="equipment-form__item-title">Регулировки</h3>
              <label className="equipment-form__label">
                <input type="checkbox" name="power_mirrors" defaultChecked/>Электропривод зеркал
              </label>
              <h3 className="equipment-form__item-child-title">Стеклоподъемники</h3>
              <label className="equipment-form__label">
                <input type="radio" name="power_windows" defaultChecked/>ручные
              </label>
              <label className="equipment-form__label">
                <input type="radio" name="power_windows"/>электро передние
              </label>
              <label className="equipment-form__label">
                <input type="radio" name="power_windows"/>электро все
              </label>
              <h3 className="equipment-form__item-child-title">Сиденье водителя</h3>
              <label className="equipment-form__label">
                <input type="radio" name="driver_seat" defaultChecked/>ручная регулировка
              </label>
              <label className="equipment-form__label">
                <input type="radio" name="driver_seat"/>ручная регулировка по высоте
              </label>
              <label className="equipment-form__label">
                <input type="radio" name="driver_seat"/>электро регулировка
              </label>
              <label className="equipment-form__label">
                <input type="radio" name="driver_seat"/>с памятью положения
              </label>
              <h3 className="equipment-form__item-child-title">Сиденье пассажира</h3>
              <label className="equipment-form__label">
                <input type="radio" name="passenger_seat" defaultChecked/>ручная регулировка
              </label>
              <label className="equipment-form__label">
                <input type="radio" name="passenger_seat"/>ручная регулировка по высоте
              </label>
              <label className="equipment-form__label">
                <input type="radio" name="passenger_seat"/>электро регулировка
              </label>
              <label className="equipment-form__label">
                <input type="radio" name="passenger_seat"/>с памятью положения
              </label>
              <h3 className="equipment-form__item-child-title">Регулировка руля</h3>
              <label className="equipment-form__label">
                <input type="radio" name="adjustment" defaultChecked/>отсутствует
              </label>
              <label className="equipment-form__label">
                <input type="radio" name="adjustment"/>в одной плоскости
              </label>
              <label className="equipment-form__label">
                <input type="radio" name="adjustment"/>в двух плоскостях
              </label>
              <label className="equipment-form__label">
                <input type="radio" name="adjustment"/>электро регулировка
              </label>
            </div>
          </div>
          </div>
        </div>


          );
          }
          }

          export default Equipment;
