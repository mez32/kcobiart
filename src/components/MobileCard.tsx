import React from 'react'
import { IonRow, IonCol, IonCardTitle, IonCard, IonCardHeader, IonCardContent } from '@ionic/react'

import './ImageCard.css'

import { Image } from '../Types/ImageType'

const ImageCard: React.FC<{ images: Image[] }> = (props) => {
	return (
		<>
			{props.images.map((image) => (
				<IonRow key={image.id}>
					<IonCol size='12'>
						<IonCard className='ion-text-center'>
							<div>
								<img className='image-container' src={image.src} />
							</div>
							<IonCardHeader>
								<IonCardTitle>{image.title}</IonCardTitle>
							</IonCardHeader>
							<IonCardContent>{image.text}</IonCardContent>
						</IonCard>
					</IonCol>
				</IonRow>
			))}
		</>
	)
}

export default ImageCard
