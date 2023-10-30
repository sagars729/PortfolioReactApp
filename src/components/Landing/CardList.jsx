/* eslint-disable react/prop-types */
import React, { Component } from "react";
import Card from "./Card";

function CardList(props) {
  return (
    <div id={props.id} className={props.theme}>
      <h4 className={`header_text ${props.header_theme}`}>{props.header}</h4>

      {props.data.map((el) => (
        <Card
          key={el.id}
          small={false}
          right={false}
          theme_text={props.text_theme}
          elid={el.id}
          position={el.position}
          company={el.company}
          duration={el.duration}
          location={el.location}
          card_img={el.icon}
          description={el.description}
          skills={el.skills}
          card_link={el.link}
          external_links={el.external_links}
          lists={el.lists}
        />
      ))}
    </div>
  );
}

export default CardList;
