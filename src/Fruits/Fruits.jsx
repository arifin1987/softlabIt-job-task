import "./Fruits.css";
const Fruits = () => {
  return (
    <div className="header">
      <section className="banner">
        <img src="../../public/Assets/Mask Group 4.png" alt="" />
      </section>
      <section className="about">
        <h1>Yogurt with fruits</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
          assumenda tempore consequuntur repellat a in alias
        </p>
      </section>
      <section className="nutrational-info">
        <h3>Nutritional information</h3>
        <div className="amount">
          <p>
            <span className="amount-red">243</span>
            <br /> <span className="amount-light">calories</span>
          </p>
          <p>
            2,8g <br />
            <span className="amount-light">grasas</span>
          </p>
          <p>
            45,7g <br /> <span className="amount-light">carbohid</span>
          </p>
          <p>
            9,8g <br /> <span className="amount-light">proteinas</span>
          </p>
        </div>
      </section>
      <section className="ingredients">
        <h1>Ingredients</h1>
        <div className="ingredients-info">
          <div>
            <img
              src="../../public/Assets/sara-cervera-WJb6U3NdD54-unsplash.png"
              alt=""
            />
            <p>Kiwi</p>
          </div>
          <div>
            <img
              src="../../public/Assets/sara-cervera-4caIPcmVDII-unsplash.png"
              alt=""
            />
            <p>yougurt</p>
          </div>
          <div>
            <img
              src="../../public/Assets/nicholas-barbaros-Oqrx1ZxBYtc-unsplash.png"
              alt=""
            />
            <p>cherry</p>
          </div>
          <div>
            <img
              src="../../public/Assets/joanna-kosinska-4qujjbj3srs-unsplash.png"
              alt=""
            />
            <p>blueberry</p>
          </div>
        </div>
      </section>
      <section className="preparation">
        <h1>Preparation</h1>
        <div className="preparation-items">
          <div className="house">
            <img src="../../public/Assets/social-media.svg" alt="" />
            <p>Home</p>
          </div>

          <img src="../../public/Assets/interface (2).svg" alt="" />

          <img src="../../public/Assets/sports-and-competition.svg" alt="" />

          <img src="../../public/Assets/symbol.svg" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Fruits;
