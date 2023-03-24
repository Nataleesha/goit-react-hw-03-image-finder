import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import css from 'components/ImageGallery/ImageGallery.module.css';

export const ImageGallery = ({ gallery, onClick }) => {
  return (
    <ul className={css.gallery} >
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
