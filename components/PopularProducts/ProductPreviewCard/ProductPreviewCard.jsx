import React from "react";
import Link from "next/link";
import Image from "next/image";

import { urlFor } from "../../../lib/client";

import { MdShoppingCart } from "../../ReactIcons/index";
import { CardContainer } from "./ProductPreviewCard.styles";

const ProductPreviewCard = ({ product }) => {
  const { thumbImage, salePrice, name, slug } = product;

  return (
    <CardContainer>
      <Link href={`/product/${slug.current}`}>
        <div className="PreviewCard">
          <div className="PreviewCard__image">
            <Image
              src={urlFor(thumbImage && thumbImage[0])}
              alt={name}
              height={250}
              width={250}
              objectFit="cover"
            />

            <span className="PreviewCard__viewmore">View more</span>
          </div>
          <h4 className="PreviewCard__name">{name}</h4>
          <div className="PreviewCard__shopping">
            <div className="PreviewCard__icon_box">
              <MdShoppingCart className="PreviewCard__icon" />
            </div>
            <span className="PreviewCard__price">HKD$ {salePrice}</span>
          </div>
        </div>
      </Link>
    </CardContainer>
  );
};

export default ProductPreviewCard;
