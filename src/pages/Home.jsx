import React from "react";

const Home = () => {
  return (
    <div>
      <img src="/background.jpg" className="img-fluid w-100 pt-1" alt="Background" />
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 m-2">
        <div className="col">
          <div className="card">
            <img src="/food3.jpg" className="card-img-top" alt="Misal Pav" />
            <div className="card-body">
              <h5 className="card-title">veg mix </h5>
              <p className="card-text">
                A spicy and savory Maharashtrian dish served with Roti  and a delicious vegetables
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="/food2.jpg" className="card-img-top" alt="Misal Pav" />
            <div className="card-body">
              <h5 className="card-title">Misal Pav</h5>
              <p className="card-text">
                A spicy and savory Maharashtrian dish served with pav (bread) and a delicious blend of chutneys and farsan.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="/puri.jpg" className="card-img-top" alt="Puri Bhaji" />
            <div className="card-body">
              <h5 className="card-title">Puri Bhaji</h5>
              <p className="card-text">
                A popular Indian dish with fluffy puris served with a flavorful and spicy potato curry (bhaji).
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="/food4.jpg" className="card-img-top" alt="Pizza" />
            <div className="card-body">
              <h5 className="card-title">Pizza</h5>
              <p className="card-text">
                A popular dish with a cheesy crust, topped with tomato sauce, cheese, and various toppings like pepperoni or vegetables.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
