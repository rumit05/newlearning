import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/EventsDetail.css";

import slide1 from "../assets/italy-book.png";
import slide2 from "../assets/italy-book-two.png";



export default function EventsDetail() {

 const [passes, setPasses] = useState("");
  const [members, setMembers] = useState([]);
  const [mobile, setMobile] = useState("");
  const [yourName, setYourName] = useState("");
  const [errors, setErrors] = useState({});

  const validateField = (fieldName, value, index = null) => {
    let newErrors = { ...errors };

    switch (fieldName) {
      case "passes":
        if (!value || value < 1) {
          newErrors.passes = "Please enter at least 1 pass.";
        } else {
          delete newErrors.passes;
        }
        break;
      case "mobile":
        if (!/^\d{10}$/.test(value)) {
          newErrors.mobile = "Please enter a valid 10-digit mobile number.";
        } else {
          delete newErrors.mobile;
        }
        break;
      case "yourName":
        if (!value.trim()) {
          newErrors.yourName = "Your name is required.";
        } else {
          delete newErrors.yourName;
        }
        break;
      case "member":
        if (!value.trim()) {
          newErrors[`member_${index}`] = `Member ${index + 1} name is required.`;
        } else {
          delete newErrors[`member_${index}`];
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const handlePassChange = (e) => {
    const numPasses = parseInt(e.target.value) || 0;
    setPasses(numPasses);
    validateField("passes", numPasses);

    const memberCount = Math.max(numPasses - 1, 0);
    const updatedMembers = [...members];

    if (memberCount > updatedMembers.length) {
      updatedMembers.push(...Array(memberCount - updatedMembers.length).fill(""));
    } else {
      updatedMembers.length = memberCount;
    }
    setMembers(updatedMembers);
  };

  const handleMobileChange = (e) => {
    const numericValue = e.target.value.replace(/\D/g, ""); // allow only digits
    setMobile(numericValue);
    validateField("mobile", numericValue);
  };

  const handleNameChange = (e) => {
    setYourName(e.target.value);
    validateField("yourName", e.target.value);
  };

  const handleMemberChange = (index, value) => {
    const updatedMembers = [...members];
    updatedMembers[index] = value;
    setMembers(updatedMembers);
    validateField("member", value, index);
  };

const validateForm = () => {
  let newErrors = {};

  // Passes
  if (!passes || passes < 1) {
    newErrors.passes = "Please enter at least 1 pass.";
  }

  // Mobile number
  if (!/^\d{10}$/.test(mobile)) {
    newErrors.mobile = "Please enter a valid 10-digit mobile number.";
  }

  // Your name
  if (!yourName.trim()) {
    newErrors.yourName = "Your name is required.";
  }

  // Member names
  members.forEach((member, index) => {
    if (!member.trim()) {
      newErrors[`member_${index}`] = `Member ${index + 1} name is required.`;
    }
  });

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};


 const handleSubmit = (e) => {
  e.preventDefault();
  if (validateForm()) {
    alert("Form submitted successfully!");
  }
};

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="event-page">
      <div className="event-page__header">
      {/* Left Side - Slider */}
      <div className="slider-section">
        <Slider {...settings}>
          <div>
            <img src={slide1} alt="Event visual 1" />
          </div>
          <div>
            <img src={slide2} alt="Event visual 2" />
          </div>
        </Slider>
      </div>

      {/* Right Side - Form */}
      <div className="form-section">
        <form className="event-form" onSubmit={handleSubmit}>
      <h2>Event Registration</h2>

      <label>Event Name</label>
      <input type="text" value="Navratri" readOnly />

      <label>How many passes you collect?</label>
      <input
        type="number"
        min="1"
        placeholder="Enter number of passes"
        value={passes}
        onChange={handlePassChange}
      />
      {errors.passes && <p className="error">{errors.passes}</p>}

      <label>Mobile Number</label>
      <input  
        type="tel"
        placeholder="Enter mobile number"
        value={mobile}
        onChange={handleMobileChange}
      />
      {errors.mobile && <p className="error">{errors.mobile}</p>}

      <label>Your Name</label>
      <input
        type="text"
        placeholder="Enter your name"
        value={yourName}
        onChange={handleNameChange}
      />
      {errors.yourName && <p className="error">{errors.yourName}</p>}

      {members.length > 0 && (
        <div className="member-fields">
          <h4>Member Details</h4>
          {members.map((member, index) => (
            <div key={index} className="member-input">
              <label>Member {index + 1} Name</label>
              <input
                type="text"
                placeholder="Enter member name"
                value={member}
                onChange={(e) => handleMemberChange(index, e.target.value)}
              />
              {errors[`member_${index}`] && (
                <p className="error">{errors[`member_${index}`]}</p>
              )}
            </div>
          ))}
        </div>
      )}

      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
      </div>
      </div>
    </div>
  );
}
