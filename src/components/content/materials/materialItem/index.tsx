import React from "react";
import { Link } from "react-router-dom";
import { Embed, Text, Button } from "sancho";

interface IProps {
  img: string;
  title: string;
  date: string;
  description: string;
}

export const MaterialItem = ({ img, title, date, description }: IProps) => (
  <div className="material-item">
    <Embed width={707} height={448}>
      <img src={img} alt={title} />
    </Embed>
    <div className="material-item-info">
      <div className="material-item-title">
        <Text variant="h3">{title}</Text>
        <Text variant="subtitle">{date}</Text>
      </div>

      <Text variant="paragraph">{description}</Text>
      <Link to="/materials/id" className="material-item-btn">
        <Button size="xs" variant="outline">
          More info
        </Button>
      </Link>
    </div>
  </div>
);
