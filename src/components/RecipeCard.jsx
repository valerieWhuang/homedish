import React from 'react';
import TextField from '@material-ui/core/TextField';

const RecipeCard = () => {
    // search by zip code 
    // query db and find all users that are cooks with zip code = query zip
    // return kitchen_name, cook_id, recipes that match cook_id, url, 
    return (
        <>
            <form>
                <p>
                    <TextField id="outlined-basic" label="Name" variant="outlined" />
                </p>
                <p>
                    <TextField id="outlined-basic" label="Meal Type" variant="outlined" />
                </p>
                <p>
                    <TextField id="outlined-basic" label="Country of Origin" variant="outlined" />
                </p>
                <p>
                    <TextField id="outlined-basic" label="Allergies" variant="outlined" />
                </p>
                <p>
                    <TextField id="outlined-basic" label="Diets" variant="outlined" />
                </p>
                <p>
                    <TextField id="outlined-basic" label="Servings Available" variant="outlined" />
                </p>
                <p>
                    <TextField id="outlined-basic" label="Price per Serving" variant="outlined" />
                </p>
                <p>
                    <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                        // defaultValue="Default Value"
                        variant="outlined"
                        />
                </p>
                <button>Sign Up</button>
            </form>
        </>
    )
}

export default RecipeCard;