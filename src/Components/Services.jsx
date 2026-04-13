import React from "react";
import "./Services.scss";
import servicesData from "./servicesData";
import bgImage from "../assets/bg.jpg";

const Services = () => {
  const phone = servicesData.contact.phone;

  return (
    <section
      className="services"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay">
        <div className="services-container">

          {/* Header */}
          <div className="services-header">
            <h2>{servicesData.header.title}</h2>
            <p>{servicesData.header.description}</p>
          </div>

          {/* Services List */}
          <div className="services-list">
            {servicesData.services.map((service) => (
              <div className="service-card" key={service.id}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                {service.menu && (
                  <ul className="food-menu">
                    {service.menu.map((food) => (
                      <li key={food.id}>
                        <span>{food.item}</span>
                        <span>₹{food.price}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <a
                  href={`https://wa.me/${phone}?text=Hello, I am interested in ${service.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="book-btn"
                >
                  Contact Us
                </a>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;