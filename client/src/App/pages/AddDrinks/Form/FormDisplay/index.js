import React from "react";
import { Button } from "semantic-ui-react";

function FormDisplay(props) {
  const { handleChange, handleSubmit, inputs } = props;
  const { name, img, glass, ingredients, directions } = inputs;
  return <form className="input" onSubmit={handleSubmit}>
      <input onChange={handleChange} type="text" name="name" value={name} placeholder="Drink name" />
      <input onChange={handleChange} type="text" name="img" value={img} placeholder="Add Image Url" />
      <input onChange={handleChange} type="text" name="glass" value={glass} placeholder="Type of glass" />
      <textarea onChange={handleChange} type="text" name="ingredients" value={ingredients} placeholder="Ingredients" />
      <textarea onChange={handleChange} type="text" name="directions" value={directions} placeholder="Directions" />
      <Button>Submit</Button>
    </form>
}

export default FormDisplay;