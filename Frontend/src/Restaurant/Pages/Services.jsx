import React from "react";

import Footer from "../components/footer/Footer";

const Services = () => {
  return (
    <React.Fragment>
      <div className="text-center mt-8 w-[80%] m-auto">
        <p className="text-center text-_112D4E text-xl font-bold">
          Welcome to SpiceNest Services
        </p>
        <br />
        <span>
          At <span className="font-bold text-xl">SpiceNest</span>, we pride
          ourselves on providing exceptional services to make your stay
          unforgettable. Our dedicated team is committed to ensuring your
          comfort and convenience throughout your visit. Explore the range of
          services we offer to make your stay with us truly remarkable:
        </span>
        <br />
        <br />
        <ul className="text-left">
          <li className="align-middle">
            <span className="font-extrabold">Buffet Dining: </span>
            <span>
              Join us at our expansive buffet dining area, where you can savor
              an array of dishes from different cuisines. Our buffet features a
              wide variety of options, ensuring there's something for every
              palate.
            </span>
          </li>
          <br />
          <li className="align-middle">
            <span className="font-extrabold">In Room Dining: </span>
            <span>
              Enjoy the convenience of in-room dining with our extensive room
              service menu. Whether you're craving a late-night snack or a
              gourmet meal, our chefs are ready to satisfy your culinary
              desires.
            </span>
          </li>
          <br />
          <li className="align-middle">
            <span className="font-extrabold">Special Dietary Needs: </span>
            <span>
              We understand that dietary restrictions and preferences vary, and
              our chefs are more than happy to accommodate special requests.
              Whether you're vegan, vegetarian, gluten-free, or have specific
              allergies, we'll ensure your dining experience is both safe and
              enjoyable.
            </span>
          </li>
          <br />
          <li className="align-middle">
            <span className="font-extrabold">Private Dining: </span>
            <span>
              For intimate gatherings or special celebrations, we offer private
              dining options where you can enjoy a personalized dining
              experience in an exclusive setting
            </span>
          </li>
        </ul>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Services;
