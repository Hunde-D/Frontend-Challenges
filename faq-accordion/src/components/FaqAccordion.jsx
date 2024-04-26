import { useState } from "react";
import accordionData from "../data.js";
import star from "../assets/images/icon-star.svg";
import minus from "../assets/images/icon-minus.svg";
import plus from "../assets/images/icon-plus.svg";
import "./faq-styles.css";

export default function FaqAccordion() {
  const [selected, setSelected] = useState([null]);
  const [multiSelect, setMultiSelect] = useState(false);

  const handleAccordionClick = (id) => {
    if (multiSelect) {
      setSelected((prev) => {
        if (prev.includes(id)) {
          return prev.filter((item) => item !== id);
        }
        return [...prev, id];
      });
    } else {
      setSelected((prev) => (prev[0] === id ? [null] : [id]));
    }
  };
  const handleSelection = () => {
    if (multiSelect) setSelected((prev) => [prev[prev.length - 1]]);
    setMultiSelect((prev) => !prev);
  };
  const accordionElements = accordionData.map((data) => {
    return (
      <div
        key={data.id}
        className="accordion-content"
        onClick={() => handleAccordionClick(data.id)}
      >
        <div className="accordion-question">
          <p>{data.question}</p>
          <span>
            <img src={selected.includes(data.id) ? minus : plus} />
          </span>
        </div>
        {selected.map((id, index) => {
          return id === data.id ? (
            <div key={index} className="accordion-answer">
              {data.answer}
            </div>
          ) : null;
        })}
        <hr />
      </div>
    );
  });
  return (
    <div className="faq-wrapper">
      <div className="accordion-wrapper">
        <div className="accordion-title">
          <img src={star}></img>
          <h1>FAQs</h1>
          <div
            className={multiSelect ? "toggle multi" : "toggle single"}
            onClick={handleSelection}
          >
            <div className="ball"></div>
          </div>
        </div>
        <div className="accordions">{accordionElements}</div>
        <p className="selection-state">
          Multiple Selection is {multiSelect ? "Enabled" : "Disabled"}
        </p>
      </div>
    </div>
  );
}
