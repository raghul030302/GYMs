import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <section className="sec1">
        <div className="container-fluid d-flex justify-content-center flex-column ">
          <div className="content text-light">
            <h1 className="heading">Build Your Shape</h1>
            <p className="w-50">Gym training is a structured and disciplined approach to physical exercise that focuses on strength, endurance and overall fitness improvement.</p>
            <button className="btn border-2 rounded-0 text-info fw-semibold border-info fs-5 py-2 px-3">
              Learn more
            </button>
          </div>
          <div className="btns d-flex mt-5 mb-3">
              <button className="btn btn-dark py-2 px-4 fs-4 me-5 ">
                Login
              </button>
              <button className="btn btn-dark py-2 px-4 fs-4 ">Register</button>
          </div>
          <div className="d-flex mt-3 text-info">
            <div className="pe-5 border-end border-light">
              <h2 className="mx-4 fw-bolder ">10+</h2>
              <p>Years of Experience</p>
            </div>
            <div className="px-5 border-end border-light">
              <h2 className="mx-2 fw-bolder">10K+</h2>
              <p>Members Join</p>
            </div>
            <div className="px-5">
              <h2 className="mx-4 fw-bolder ">8K+</h2>
              <p>Happy members</p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec2 text-light">
        <div className="mt-3">
          <h2 className="fw-semibold d-flex justify-content-center text-decoration-underline ">
            About<span className="text-info px-2">Us</span>
          </h2>
          <div className="mx-5 px-5 mt-5">
            Welcome to [Your Gym's Name], where fitness meets excellence! At
            [Your Gym's Name], we believe in more than just a workout; we
            believe in a transformative fitness experience that empowers
            individuals to reach their peak potential.<br/><br /> Founded on the principles
            of dedication, passion, and community, [Your Gym's Name] is not just
            a gym; it's a fitness haven where goals are achieved, limits are
            pushed, and lifestyles are transformed. Our mission is to inspire
            and support our members on their fitness journey, fostering a sense
            of belonging and accomplishment every step of the way.
            <br />
[Your Gym's Name] is more than a gym; it's a commitment to a healthier, stronger, and happier you. Join us on this journey, and let's achieve greatness together!
          </div>
        </div>
      </section>
      <section className="sec3 text-light ">
      <div className="mx-5 px-5 mt-5 ">
        <h2 className="d-flex justify-content-center mb-3 text-decoration-underline fw-semibold">Why <span className="text-info mx-2">Choose</span> Us</h2>
<div className="row">
  <div className="d-flex flex-column col border border-1 border-info m-2 points"><b>01</b><b className="text-info">Expert Guidance:</b> Our team of experienced and certified trainers is committed to guiding you through your fitness journey. Whether you're a beginner or an experienced fitness enthusiast, we are here to provide personalized support, expert advice, and motivation.</div>
  <div className="d-flex flex-column col border border-1 border-info m-2 points"><b>02</b><b className="text-info">Diverse Fitness Programs:</b> At [Your Gym's Name], we understand that everyone has unique fitness goals. That's why we offer a wide range of fitness programs, including strength training, cardio, group classes, and more. Whatever your fitness preference, we have a program that suits your needs.</div>
</div>
<div className="row">
  <div className="d-flex flex-column col border border-1 border-info m-2 points"><b>03</b><b className="text-info">Community Spirit:</b> Join a community of like-minded individuals who share a passion for fitness and well-being. Our gym isn't just a place to work out; it's a place to connect, make friends, and build a supportive network to help you stay motivated.</div>
  <div className="d-flex flex-column col border border-1 border-info m-2 points"><b>04</b><b className="text-info">Wellness Beyond the Gym:</b> We believe that true wellness goes beyond just physical fitness. That's why we offer wellness programs, nutritional guidance, and lifestyle advice to help you achieve a holistic approach to health.</div>
</div>
</div>
      </section>
      <section className="sec4">
        <div>
          <div><h2>Premium Plans</h2></div>
          <div className="row">
            <div className="col">

            </div>
            <div className="col"></div>
            <div className="col"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
