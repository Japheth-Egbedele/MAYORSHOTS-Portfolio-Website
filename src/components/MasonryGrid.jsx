import PhotoAlbum from "react-photo-album";

export default function MasonryGrid({ photos }) {
  // Map Sanity images to the format the library needs
  const formattedPhotos = photos.map(photo => ({
    src: urlFor(photo).url(),
    width: 800, // Sanity will auto-calculate aspect ratio
    height: 600,
  }));

  return (
    <div className="p-4 md:p-8">
      <PhotoAlbum layout="masonry" photos={formattedPhotos} columns={(containerWidth) => {
        if (containerWidth < 400) return 1;
        if (containerWidth < 800) return 2;
        return 3;
      }} />
    </div>
  );
}