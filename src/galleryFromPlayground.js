import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';

function getItems() {
	return [
		{ // Image item:
			itemId: 'sample-id',
			mediaUrl: 'https://i.picsum.photos/id/674/200/300.jpg?hmac=kS3VQkm7AuZdYJGUABZGmnNj_3KtZ6Twgb5Qb9ITssY',
			metaData: {
				type: 'image',
				height: 200,
				width: 100,
				title: 'sample-title',
				description: 'sample-description',
				focalPoint: [0, 0],
				link: {
					url: 'http://example.com',
					target: '_blank'
				},
			}
		},
		{ // Another Image item:
			itemId: 'differentItem',
			mediaUrl: 'https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk',
			metaData: {
				type: 'image',
				height: 200,
				width: 100,
				title: 'sample-title',
				description: 'sample-description',
				focalPoint: [0, 0],
				link: {
					url: 'http://example.com',
					target: '_blank'
				},
			}
		},
		{ // HTML item:
			itemId: 'htmlItem',
			html: "<div style='width: 300px; height: 200px; background:pink;'>I am a text block</div>",
			metadata: {
				type: "text",
				height: 200,
				width: 300,
				title: 'sample-title',
				description: 'sample-description',
				backgroundColor: 'pink'
			},

		},
	]
}

function getVideoItems() {
	return [
		{
			"id": "86da8f41-d5f1-41cd-8ea9-87b81eed316f",
			"width": 1920,
			"height": 1080,
			"itemId": "86da8f41-d5f1-41cd-8ea9-87b81eed316f",
			"isSecure": false,
			"orderIndex": 1624273580.378,
			"metaData": {
				"link": {
					"type": "none",
					"target": "_blank"
				},
				"type": "video",
				"customPoster": "",
				"isExternal": true,
				"height": 1080,
				"width": 1920,
				"name": "cvW-est579E",
				"posters": [
					{
						"height": 720,
						"width": 1280,
						"url": "497ebd_76c8a25031f9493b8f4ae33e66ed9127~mv2.jpg"
					}
				],
				"qualities": [],
				"duration": 0,
				"source": "youtube",
				"videoUrl": "https://www.youtube.com/watch?v=cvW-est579E",
				"videoId": "cvW-est579E"
			},
			"mediaUrl": "497ebd_76c8a25031f9493b8f4ae33e66ed9127~mv2.jpg",
			"directLink": {},
			"directShareLink": "https://nirna3.wixsite.com/strechedgallery?pgid=ko6zmnby-86da8f41-d5f1-41cd-8ea9-87b81eed316f",
			"isVisitedLoveData": true
		}
]
}

export default function Gallery() {

	// Add your images here...
	const items = getVideoItems()

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

