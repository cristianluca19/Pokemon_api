import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

export default function Card({id, name, img, type, weight, onClose}) {
//
// Main Components
//
	return (
		<div className='card'>
			<div id='closeIcon' className='row'>
				<button onClick={()=>onClose(id)} className='btn btn-sm btn-danger'>
					X
				</button>
			</div>
				<Link to={`/pokemon/${id}`}>
					<h5 className='card-title'>{name.toUpperCase()}</h5>
				</Link>
			<div className='card-body'>
				<div className='row'>
					<div className='col-sm-4 col-md-4 col-lg-4'>
						<h6>Tipo</h6>
						<h6>{type}</h6>
					</div>
					<div className='col-sm-4 col-md-4 col-lg-4'>
						<h6>Peso</h6>
						<h6>{weight} Grs</h6>
					</div>
					<div className='col-sm-4 col-md-4 col-lg-4'>
						<img
							className='iconoClima'
							src={img}
							width='80'
							height='80'
							alt=''
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
