import React from "react";
import { Item } from "../../types";

interface ListingProps {
  items: Item[];
}

export default function Listing({items = []}: ListingProps): JSX.Element {
  const getItemTitle = (title: string): string => {
    if (title.length > 50) {
      return title.substring(0, 50) + "...";
    } else {
      return title;
    }
  }

  const getCurrencyCode = (code: string): string => {
    if (code === "USD") {
      return "$";
    } else if (code === "EUR") {
      return "€";
    } else {
      return code + " ";
    }
  }

  const getLevelClassName = (quantity: number): string => {
    if (quantity <= 10) {
      return "low";
    } else if (quantity <= 20) {
      return "medium";
    } else {
      return "high";
    }
  }

  return (
    <div className="item-list">
      {items.map((item: Item) => {
        return (
          item.state === "active" ? 
          <div className="item" key={item.listing_id}>
            <div className="item-image">
              <a href={item.url}>
                <img src={item.MainImage.url_570xN} alt={item.title}/>
              </a>
            </div>
            <div className="item-details">
              <p className="item-title">{getItemTitle(item.title)}</p>
              <p className="item-price">{getCurrencyCode(item.currency_code)}{item.price}</p>
              <p className={`item-quantity level-${getLevelClassName(item.quantity)}`}>{item.quantity}</p>
            </div>
          </div>
          : ""
        )
      })}
    </div>
  )
}