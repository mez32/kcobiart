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
import image4 from '../assets/images/image4.jpeg'
import image5 from '../assets/images/image5.jpeg'
import image6 from '../assets/images/image6.jpeg'

import ImageCard from './ImageCard'
import MobileCard from './MobileCard'

import { Image } from '../Types/ImageType'

import {
	aboutMe,
	myServices,
	loveStory6,
	loveStory5,
	epic,
	endless,
	lily,
	capture,
} from '../assets/words/descriptions'
import AboutMeModal from './AboutMeModal'

const images1: Image[] = [
	{ src: image1, title: 'Capture', text: capture, id: 'm1' },
	{ src: image2, title: 'Lily', text: lily, id: 'm2' },
	{ src: image3, title: 'Endless', text: endless, id: 'm3' },
]

const images2: Image[] = [
	{ src: image4, title: 'Epic', text: epic, id: 'm4' },
	{ src: image5, title: 'Love Story', text: loveStory5, id: 'm5' },
	{ src: image6, title: 'Love Story ', text: loveStory6, id: 'm6' },
]

const Body: React.FC = () => {
	const [showAbout, setShowAbout] = useState<boolean>(false)

	// show detail toggle function
	const showDetail = (det: string) => {
		switch (det) {
			case 'about':
				return setShowAbout(!showAbout)
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
						<IonCard>
							<IonCardHeader>
								<IonCardTitle className='ion-text-center'>
									<IonItem detail button onClick={() => showDetail('about')}>
										<h3>A Little Bit More About Me...</h3>
										{showAbout && (
											<AboutMeModal
												show={showAbout}
												aboutMe={aboutMe}
												showDetail={() => showDetail('about')}
											/>
										)}
									</IonItem>
								</IonCardTitle>
							</IonCardHeader>
						</IonCard>
					</IonCol>
				</IonRow>
				<IonRow>
					<IonCol className='ion-text-center'>
						<IonCard>
							<IonCardHeader>
								<IonCardTitle>
									<h3>Available Services</h3>
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
				{isPlatform('desktop') && <ImageCard images={images2} />}
				{isPlatform('mobileweb') && <MobileCard images={images2} />}
				{isPlatform('desktop') && <ImageCard images={images1} />}
				{isPlatform('mobileweb') && <MobileCard images={images1} />}
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
													<IonButton onClick={instaLink}>Instagram</IonButton>
												</IonCardContent>
											</IonCard>
										</IonCol>
										<IonCol md-size='4' md-offset='2'>
											<IonCard>
												<IonCardContent>
													<p>maminimeli@gmail.com</p>
													<IonButton onClick={emailButtonLink}>Email Me</IonButton>
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
