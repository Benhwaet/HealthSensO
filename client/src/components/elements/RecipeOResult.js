import React from 'react'

export const RecipeOResult = ({results}) => {
	return (
		<div>
			{
				results.map((result, id) =>{
					return (
					<div key={id}>
						<img src={result.recipe.image}></img>
						<a href={result.recipe.url}>{result.recipe.label}</a>
					</div>
					);
				})
			}
		</div>
	);
};

