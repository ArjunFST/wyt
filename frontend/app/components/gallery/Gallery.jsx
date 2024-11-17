// Import the necessary modules and images
//  Map method

import Image from 'next/image';
import GalleryImg from '../../../public/gallery.svg';
import img1 from '../../assets/waty-Gallery-1-bright.svg';
import img3 from '../../assets/waty-Gallery-3-bright.svg';
import img4 from '../../assets/waty-Gallery-4-bright.svg';
import img5 from '../../assets/waty-Gallery-5-bright.svg';
import img6 from '../../assets/waty-Gallery-6-bright.svg';
import img7 from '../../assets/waty-Gallery-4-bright.svg';
import img8 from '../../assets/waty-Gallery-6-bright.svg';
import GlowingButton from '../GlowingButton/GlowingButton';


const Gallery = () => {
  const images = [
    img1, img5, img3, img4, img5, img6, img7,
    img8
  ];

  return (
    <section
      id="gallery"
      className="relative bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${GalleryImg.src})` }}
    >
      <div className="flex justify-center items-center pt-20 pb-14">
        <GlowingButton className="border-2 border-white/10 px-8 py-2 text-xl font-semibold tracking-widest rounded-3xl mb-4">
          GALLERY
        </GlowingButton>
      </div>

      {/* Card Container */}
      <div className="relative rounded-lg shadow-lg">
        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-2 gap-2">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative h-[500px] max-sm:h-[200px] md:h-[300px] w-full"
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-md w-full h-auto overflow-hidden hover:brightness-200 transition duration-100"
              />
            </div>
          ))}
        </div>

        {/* Centered Gallery Name Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-gallery max-sm:text-5xl bg-opacity-60 px-4 py-1 text-2xl font-bold rounded">
            Gallery
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
