import React from 'react'
import {
	IonModal,
	IonItem,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonButton,
	IonContent,
} from '@ionic/react'

const AboutMeModal: React.FC<{ show: boolean; aboutMe: string; showDetail: () => void }> = (
	props
) => {
	return (
		<IonModal isOpen={props.show}>
			<IonHeader>
				<IonToolbar color='primary'>
					<IonTitle>A little about me...</IonTitle>
					<IonButton slot='end' onClick={() => props.showDetail()}>
						Close
					</IonButton>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonItem>
					<h5>{props.aboutMe}</h5>
				</IonItem>
			</IonContent>
		</IonModal>
	)
}

export default AboutMeModal
