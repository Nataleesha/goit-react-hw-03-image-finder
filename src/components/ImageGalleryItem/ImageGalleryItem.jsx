import css from "components/ImageGalleryItem/ImageGalleryItem.module.css";

export const ImageGalleryItem = ({ src, alt, bigImg, onClick }) => {
  return (
    <li
      className={css["gallery-item"]}
      onClick={() => onClick({ bigImg, alt })}
    >
      <img
        className={css["gallery-image"]}
        src={src}
        alt={alt}
        data-src={bigImg}
      />
    </li>
  );
};
