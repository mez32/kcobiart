import {
	IonButton,
	IonContent,
	IonHeader,
	IonIcon,
	IonImg,
	IonTitle,
	IonToolbar,
} from '@ionic/react'
import React from 'react'

import headerImg from '../assets/images/MeliHeader.png'

import './Header.css'

const Header: React.FC = () => {
	return (
		<>
			<IonHeader className='ion-no-border'>
				<IonToolbar color='secondary'>
					<IonImg slot='start' src={headerImg} />
					<IonTitle>Kcobi Art</IonTitle>
				</IonToolbar>
			</IonHeader>
		</>
	)
}

export default Header
