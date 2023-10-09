import React from 'react'
import './RecipeOResult.css'

export const RecipeOResult = ({results}) => {
	return (
		<div className='listArrange'>
			{
				results.map((result, id) =>{
					return (
					<div key={id}>
						<a href={result.recipe.url}><img src={result.recipe.image}></img></a>
					</div>
					);
				})
			}
		</div>
	);
};

