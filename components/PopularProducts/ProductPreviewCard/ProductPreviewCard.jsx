import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./ProductPreviewCard.module.scss";
import { MdShoppingCart } from "react-icons/md";
import previewImg1 from "../../../assets/img/product-preview/preview-1.jpg";

const ProductPreviewCard = () => {
  return (
    <>
      <Link href="/">
        <div className={styles.PreviewCard}>
          <div className={styles.PreviewCard__image}>
            <Image src={previewImg1} alt="product photo" objectFit="cover" />
            <span className={styles.PreviewCard__viewmore}>View more</span>
          </div>
          <h4 className={styles.PreviewCard__name}>Happy Children House</h4>
          <div className={styles.PreviewCard__shopping}>
            <div className={styles.PreviewCard__icon_box}>
              <MdShoppingCart className={styles.PreviewCard__icon} />
            </div>
            <span className={styles.PreviewCard__price}>HKD$ 89</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductPreviewCard;
