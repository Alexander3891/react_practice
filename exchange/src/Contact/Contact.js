import React from 'react';
import './Contact.css';


class Contact extends React.Component {
   
    render() {
        return (
            
   <div className="nesolestag-enadenud">
        <h3 className="nesolestag-enadenud-title">Контакты</h3>

        <div className="ico-wrap"> <i className="fa fa-map-marker ico-contact"></i>
       </div>
  <div className="meanous-andscoev">
  <h4 className="aio-icon-title">Юридический адрес:</h4>
  <div className="aio-icon-description">
  3486452, г. Тюмень, ул. Ленина,
  <br/>дом 14, литер D, Кабинет # 31</div>
  </div>

  <span className="kesednsoled"></span>

  <div className="ico-wrap"> <i className="fa fa-clock-o ico-contact"></i>
  </div>
  <div className="meanous-andscoev">
  <h4 className="aio-icon-title">График работы складов и офисов компании:</h4>
  <div className="aio-icon-description">
  пн.-сб. с 10:00 до 21:00, с перерывом на обед
  <br/>Без выходных</div>
  </div>

  <span className="kesednsoled"></span>

  <div className="ico-wrap">
  <i className="fa fa-envelope ico-contact"></i>
  </div>
  <div className="meanous-andscoev">
  <h4 className="aio-icon-title">Электронная почта:</h4>
  <div className="aio-icon-description">
  zprmet_ru.@mail.ru
  <br/>desantura.@mail.ru</div>
  </div>

  <span className="kesednsoled"></span>

  <div className="ico-wrap">
  <i className="fa fa-phone ico-contact"></i>
  </div>
  <div className="meanous-andscoev">
  <h4 className="aio-icon-title">Связь по телефону:</h4>
  <div className="aio-icon-description">
  8 (423) 031-53-78
  <br/>8 (723) 904-52-72</div>
  </div>

  <span className="kesednsoled"></span>

</div>

        )
    }
}


export default Contact;
