import React from 'react'
import { IonRow, IonCol, IonCardTitle, IonCard, IonCardHeader, IonCardContent } from '@ionic/react'

import './ImageCard.css'

import { Image } from '../Types/ImageType'

const ImageCard: React.FC<{ images: Image[] }> = (props) => {
	return (
		<IonRow>
			{props.images.map((image) => (
				<IonCol key={image.id} size='4'>
					<IonCard className='ion-text-center'>
						<div>
							<img className='image-container' src={image.src} />
						</div>
						<IonCardHeader>
							<IonCardTitle>test {image.id}</IonCardTitle>
						</IonCardHeader>
						<IonCardContent>{image.text}</IonCardContent>
					</IonCard>
				</IonCol>
			))}
		</IonRow>
	)
}

export default ImageCard
