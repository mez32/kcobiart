import {
	IonButton,
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardTitle,
	IonCol,
	IonContent,
	IonGrid,
	IonItem,
	IonRow,
	isPlatform,
} from '@ionic/react'
import React, { useState } from 'react'

import image1 from '../assets/images/image1.jpeg'
import image2 from '../assets/images/image2.jpeg'
import image3 from '../assets/images/image3.jpeg'

import ImageCard from './ImageCard'
import MobileCard from './MobileCard'

import { Image } from '../Types/ImageType'

import { aboutMe, myServices } from '../assets/words/descriptions'
import ServiceModal from './ServiceModal'
import AboutMeModal from './AboutMeModal'

const images1: Image[] = [
	{ src: image1, text: 'test image 1', id: 'm1' },
	{ src: image2, text: 'test image 2', id: 'm2' },
	{ src: image3, text: 'test image 3', id: 'm3' },
]

const Body: React.FC = () => {
	const [showAbout, setShowAbout] = useState<boolean>(false)
	const [showServices, setShowServices] = useState<boolean>(false)

	// show detail toggle function
	const showDetail = (det: string) => {
		switch (det) {
			case 'about':
				return setShowAbout(!showAbout)
			case 'service':
				return setShowServices(!showServices)
		}
	}

	// Function to open instagram link at bottom of page
	const instaLink = () => {
		window.open('https://www.instagram.com/artbykcobi/')
	}

	// TODO Email Function to device email
	const emailButtonLink = () => {
		window.open('mailto:maminimeli@gmail.com?subject=Kcobi%20Inquiry&body=Body%20goes%20here')
	}

	return (
		<IonContent>
			<IonGrid fixed>
				<IonRow>
					<IonCol>
						<IonCard className='ion-text-center'>
							<IonCardHeader>
								<IonCardTitle>
									<IonItem detail button onClick={() => showDetail('about')}>
										<h4>A Little About Me...</h4>
									</IonItem>
								</IonCardTitle>
							</IonCardHeader>
							<IonCardContent>
								{showAbout && (
									<AboutMeModal
										show={showAbout}
										aboutMe={aboutMe}
										showDetail={() => showDetail('about')}
									/>
								)}
							</IonCardContent>
						</IonCard>
					</IonCol>
				</IonRow>
				<IonRow>
					<IonCol>
						<IonCard>
							<IonCardHeader>
								<IonCardTitle>
									<h4>Available Services</h4>
								</IonCardTitle>
							</IonCardHeader>
							<IonCardContent>
								{myServices.map((service) => (
									<div key={service.id}>
										<h5>{service.text}</h5>
									</div>
								))}
							</IonCardContent>
						</IonCard>
					</IonCol>
				</IonRow>
				{isPlatform('desktop') && <ImageCard images={images1} />}
				{isPlatform('mobileweb') && <MobileCard images={images1} />}
				<IonRow></IonRow>
				<IonRow>
					<IonCol>
						<IonCard className='ion-text-center'>
							<IonCardHeader>
								<IonCardTitle>Contact Me!</IonCardTitle>
							</IonCardHeader>
							<IonCardContent className='ion-text-center'>
								<IonGrid>
									<IonRow>
										<IonCol md-size='4' md-offset='2'>
											<IonCard>
												<IonCardContent>
													<p>instagram.com/artbykcobi</p>
													<IonButton onClick={instaLink}>My Instagram</IonButton>
												</IonCardContent>
											</IonCard>
										</IonCol>
										<IonCol md-size='4' md-offset='2'>
											<IonCard>
												<IonCardContent>
													<p>maminimeli@gmail.com</p>
													<IonButton onClick={emailButtonLink}>Email Me </IonButton>
												</IonCardContent>
											</IonCard>
										</IonCol>
									</IonRow>
								</IonGrid>
							</IonCardContent>
						</IonCard>
					</IonCol>
				</IonRow>
			</IonGrid>
		</IonContent>
	)
}

export default Body
