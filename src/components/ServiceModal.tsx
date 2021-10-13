import React from 'react'
import { IonModal, IonHeader, IonToolbar, IonTitle, IonButton, IonContent } from '@ionic/react'

import { service } from '../Types/Services'

const ServiceModal: React.FC<{
	myServices: service[]
	show: boolean
	showDetail: () => void
}> = (props) => {
	return (
		<IonModal isOpen={props.show}>
			<IonHeader>
				<IonToolbar color='primary'>
					<IonTitle>My Services</IonTitle>
					<IonButton slot='end' onClick={() => props.showDetail()}>
						Close
					</IonButton>
				</IonToolbar>
			</IonHeader>
			<IonContent className='ion-text-center'>
				{props.myServices.map((service) => (
					<div key={service.id}>
						<h5>{service.text}</h5>
					</div>
				))}
			</IonContent>
		</IonModal>
	)
}

export default ServiceModal
