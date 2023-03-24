import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import css from "components/ImageGallery/ImageGallery.module.css";
import PropTypes from "prop-types";

export const ImageGallery = ({ gallery, onClick }) => {
  return (
    <ul className={css.gallery}>
      {gallery.map((image) => (
        <ImageGalleryItem
          key={image.id}
          src={image.webformatURL}
          alt={image.tags}
          bigImg={image.largeImageURL}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  gallery: PropTypes.objectOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};
