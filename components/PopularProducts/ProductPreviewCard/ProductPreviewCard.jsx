import React from "react";
import Link from "next/link";
import Image from "next/image";

import { urlFor } from "../../../lib/client";

import styles from "./ProductPreviewCard.module.scss";
import { MdShoppingCart } from "react-icons/md";
import previewImg1 from "../../../assets/img/product-preview/preview-1.jpg";

const ProductPreviewCard = ({ product }) => {
  const { thumbImage, salePrice, name, slug } = product;

  // const thumbImg = urlFor(thumbimage && thumbimage[0]);
  // console.log(urlFor(thumbimage && thumbimage[0]).url());
  return (
    <>
      <Link href={`/product/${slug.current}`}>
        <div className={styles.PreviewCard}>
          <div className={styles.PreviewCard__image}>
            <Image
              src={urlFor(thumbImage && thumbImage[0]).url()}
              alt={name}
              height={250}
              width={250}
              objectFit="cover"
            />

            <span className={styles.PreviewCard__viewmore}>View more</span>
          </div>
          <h4 className={styles.PreviewCard__name}>{name}</h4>
          <div className={styles.PreviewCard__shopping}>
            <div className={styles.PreviewCard__icon_box}>
              <MdShoppingCart className={styles.PreviewCard__icon} />
            </div>
            <span className={styles.PreviewCard__price}>HKD$ {salePrice}</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductPreviewCard;
