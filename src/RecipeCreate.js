import React, { useState } from "react";

function RecipeCreate( {createRecipe} ) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngred] = useState("");
  const [preparation, setPrep] = useState("");

  const handleNameChange = (event) => setName(event.target.value);
  const handleCuisChange = (event) => setCuisine(event.target.value);
  const handlePhotoChange = (event) => setPhoto(event.target.value);
  const handleIngredChange = (event) => setIngred(event.target.value);
  const handlePrepChange = (event) => setPrep(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe({name, cuisine, photo, ingredients, preparation});
    setName("");
    setCuisine("");
    setPhoto("");
    setIngred("");
    setPrep("");
  }
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                name="name"
                type="text"
                required={true}
                onChange={handleNameChange}
                value={name}
              />
            </td>
            <td>
              <input
                id="cuisine"
                name="cuisine"
                type="text"
                required={true}
                onChange={handleCuisChange}
                value={cuisine}
              />
            </td>
            <td>
              <input
                id="photo"
                name="photo"
                type="url"
                required={true}
                onChange={handlePhotoChange}
                value={photo}
              />
            </td>
            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                required={true}
                rows={3} 
                onChange={handleIngredChange}
                value={ingredients}
              />
            </td>
            <td>
              <textarea
                id="preparation"
                name="preparation"
                required={true}
                rows={3} 
                onChange={handlePrepChange}
                value={preparation}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
