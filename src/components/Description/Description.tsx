import React from 'react'
import { IDescription } from './descriptionObj'
import { IComponents } from '../../models'

export default function Description(props:IComponents) {
	let description:JSX.Element[] = props.info.map((el:IDescription, index:number)=>(
	<div key={index} className="description-item">
	 	<h3 className="desritpion-title">{el.title}</h3>
	 	<span className="desritpion-text">
	 		{
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet suscipit cupiditate exercitationem blanditiis. Commodi, impedit sint eaque quibusdam quis debitis consectetur nostrum soluta sequi odit. Quas dicta vero dignissimos quo!"
			}
		</span>
		<br />
		<span className="desritpion-text">
			{
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet suscipit cupiditate exercitationem blanditiis. Commodi, impedit sint eaque quibusdam quis debitis consectetur nostrum soluta sequi odit. Quas dicta vero dignissimos quo!"
			}
		</span>
	</div>
	))
	return (
		<div className="description"> 
			{description}
		</div>
	)
}
