import React, { useState } from "react";
import "./Gallery.css";
import { images } from "./Images";

const Gallery = () => {
	const [selectedImage, setSelectedImage] = useState(null);

	const handleImageClick = (image) => {
		setSelectedImage(image);
	};

	return (
		<>
			<h4 className="head-1">
				Here's a glimpse of the work we've been doing over 20 years.
			</h4>
			<div className="image-gallery">
				{images.map((image) => (
					<div
						key={image.id}
						className="image-gallery__image"
						onClick={() => handleImageClick(image)}
					>
						<img src={image.src} alt={image.alt} />
					</div>
				))}
				{selectedImage && (
					<div
						className="image-gallery__selected-image"
						onClick={() => setSelectedImage(null)}
					>
						<img src={selectedImage.src} alt={selectedImage.alt} />
					</div>
				)}
			</div>
		</>
	);
};

export default Gallery;
