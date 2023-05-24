import React from "react";
import "../footer/Footer.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  return (
    <div>
      <div>
        <div
          className="footer-top"
          style={{ marginTop: "3%", marginBottom: "2%" }}
        >
          <span>ПОДПИСКА НА РАССЫЛКУ</span>
          <span>ПОДАРОЧНЫЕ СЕРТИФИКАТЫ</span>
          <span>ПАРТНЕРАМ</span>
        </div>
        {/* ------------------------------ */}
        <hr />
        {/* ------------------------------- */}
        <div class="column-container" style={{ marginTop: "2%" }}>
          <div class="column1" style={{ lineHeight: "200%" }}>
            <h2>INCANTO</h2>
            <p>Italy</p>
            <p>8 800 77 500 77</p>
          </div>
          <div class="column2">
            <ul style={{ listStyle: "none", lineHeight: "170%" }}>
              <li>КАТАЛОГ</li>
              <li>Купальникки</li>
              <li>Бра и трусы</li>
              <li>Белье</li>
              <li>Одежда</li>
              <li>Мужчинам</li>
              <li>Детям</li>
              <li>Подарки</li>
            </ul>
          </div>
          <div
            style={{ marginBottom: "10px", lineHeight: "170%" }}
            class="column3"
          >
            <ul style={{ listStyle: "none" }}>
              <li>O КОМПАНИИ</li>
              <li>История</li>
              <li>Адреса магазинов</li>
              <li>Статьи</li>
              <li>Франчайзинг</li>
              <li>Политика</li>
              <li>конфиденциальности</li>
              <li>Контакты</li>
              <li>Карта сайта</li>
            </ul>
          </div>
          <div class="column4">
            <ul style={{ listStyle: "none", lineHeight: "170%" }}>
              <li>ПОКУПАТЕЛЯМ</li>
              <li>Частые вопросы</li>
              <li>Доставка и оплата</li>
              <li>Возврат</li>
              <li>Таблица размеров</li>
              <li>Условия обслуживания</li>
              <li>Отслеживание заказа</li>
            </ul>
          </div>
          <div style={{ lineHeight: "170%" }} class="column5">
            <YouTubeIcon /> <TelegramIcon /> <InstagramIcon />
            <p>© 2023 интернет-магазин</p>
            <span>INCANTO</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
