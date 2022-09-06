import React from "react";

const Hero = () => {
  return (
    <section class="hero">
      <div class="hero-contents">
        <h1>Start your Journey as Influencer</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem
          vestibulum sed scelerisque eros. Lectus faucibus.
        </p>
        <button>
          Preebook now{" "}
          <span>
            <i class="fa-solid fa-arrow-right"></i>
          </span>
        </button>
      </div>

      <div class="hero-img">
        <img src="./images/main-camera.png" alt="" />
      </div>
    </section>
  );
};

export default Hero;
