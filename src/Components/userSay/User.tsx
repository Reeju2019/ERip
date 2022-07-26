import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { userData } from "./userData";

const User = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <BsArrowLeftShort />,
    nextArrow: <BsArrowRightShort />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id="device_section">
      <Container>
        <div>
          <h4 style={{ color: "#333946", fontWeight: "bold" }}>
            {" "}
            What Our Users Say{" "}
          </h4>
          <Slider {...settings}>
            {userData.map((e: any) => {
              return (
                <div className="card">
                  <div className="img_card" style={{padding: "20px" }}>
                    <img
                      style={{ height: "15px", width: "20px"}}
                      src={e.image}
                      className="card-img-top"
                      alt="..."
                    />

                    <p
                      style={{
                        fontSize: "13px",
                        textAlign: "left",
                        paddingBottom: "40px",
                        paddingTop:"20px"
                      }}
                    >
                      {e.text}
                    </p>

                    <div className="d-flex">
                      <img
                        src={e.user}
                        alt=""
                        style={{ height: "20px", width: "20px" }}
                      />
                      <div>
                        <p className="card-text">{e.username}</p>
                        <p>
                          <i>-{e.company}</i>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default User;
