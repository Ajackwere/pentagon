import React from "react";
import "./Faq.css";
import { Accordion } from "react-bootstrap";

export default function Faq() {
  return (
    <div className="faq-section">
      <div className="container d-flex flex-column align-items-center">
        <h2 className="text-center text-capitalize mb-5">
          Frequently Asked Questions{" "}
        </h2>
        <p className="text-center mb-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
          earum optio rerum autem reprehenderit fugit perspiciatis? Illum iusto
          rerum ipsam illo dolorum, eveniet dolores perspiciatis ad alias quasi,
          ratione fuga!
        </p>
        <Accordion defaultActiveKey="" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>First question?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur tempore rerum natus ad quaerat minus, saepe tempora
              similique illum odio sunt perspiciatis voluptate officia sequi
              consequuntur aperiam provident labore soluta in vitae blanditiis
              mollitia? Accusantium hic cupiditate ab laborum soluta.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Second question?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur tempore rerum natus ad quaerat minus, saepe tempora
              similique illum odio sunt perspiciatis voluptate officia sequi
              consequuntur aperiam provident labore soluta in vitae blanditiis
              mollitia? Accusantium hic cupiditate ab laborum soluta.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Third question?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur tempore rerum natus ad quaerat minus, saepe tempora
              similique illum odio sunt perspiciatis voluptate officia sequi
              consequuntur aperiam provident labore soluta in vitae blanditiis
              mollitia? Accusantium hic cupiditate ab laborum soluta.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Fourth question?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur tempore rerum natus ad quaerat minus, saepe tempora
              similique illum odio sunt perspiciatis voluptate officia sequi
              consequuntur aperiam provident labore soluta in vitae blanditiis
              mollitia? Accusantium hic cupiditate ab laborum soluta.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}
