import "./Home.css";

const Home = () => {
  return (
    <div className="home-header">
      {/* banner section added */}
      <section className="home-banner">
        <img src="../../public/Assets/Group 22.png" alt="" />
      </section>
      <section className="workout">
        <img src="../../public/Assets/undraw_workout_gcgu.png" alt="" />
        <h1>
          Let's do your diet <span className="color-green">katy</span>{" "}
        </h1>
      </section>

      <p className="weight-height">What is your current weight?</p>
      <p className="weight-height">What is your current height?</p>
      <div className="next">
        <p className="steps-para">1/4 steps</p>
        <div>
          <img
            className="arrow"
            src="../../public/Assets/Group 549.svg"
            alt=""
          />
          <p className="steps-para">Next</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
