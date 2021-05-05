import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';


function item(itemId) {
  return { // Image item:
    itemId: 'nir',
    mediaUrl: 'https://media.gettyimages.com/photos/lebron-james-of-the-los-angeles-lakers-dunks-against-the-atlanta-in-picture-id1194180180?s=612x612',
    metaData: {
      type: 'image',
      height: 200,
      width: 100,
      title: 'sample-title',
      description: 'sample-description',
      // focalPoint: [0, 0],
      link: {
        url: 'http://example.com',
        target: '_blank'
      },
    }
  }
}

export default function Gallery() {

  // Add your images here...
  const items = []
  for(let i = 0; i < 10; i++) items.push(item(`sample-${i}`))


  // The options of the gallery (from the playground current state)
  const options = {
    galleryLayout: -1,
  };

  // The size of the gallery container. The images will fit themselves in it
  const container = {
    width: window.innerWidth,
    height: window.innerHeight
  };

  // The eventsListener will notify you anytime something has happened in the gallery.
  const eventsListener = (eventName, eventData) => console.log({eventName, eventData}); 

  // The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
  const scrollingElement = window;

  return (
    <ProGallery
      items={items}
      options={options}
      container={container}
      eventsListener={eventsListener}
      scrollingElement={scrollingElement}
    />
  );
}

// Enjoy using your new gallery!
// For more options, visit https://github.com/wix/pro-gallery

