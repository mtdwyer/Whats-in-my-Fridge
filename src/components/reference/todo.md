Ingredients Search

- Search disabled unless text in search box
  - Try finding the object/array that holds the input data, and test if its empty to enable/disable the search box
- Click ingredient to add to fridge, and remove from search results box

Get Recipes Button

- Click button to ping api for recipes
- Display the results in the Results Box as Cards

Recipes Page

- Click recipe to open page to view recipe details, or a modal

To test:

- make common ingredients button disabled by searching the array before returning, toggle isbuttondisabled

Fix Chrome Nameless Buttons:
onClick={(e) => {
this.handleButtonClick(e, item.name)
}}
instead of event, pass the name directly, then change the function to
handleButtonClick = (e, name) => {
console.log("Click: " + name);
let updated = Object.assign({}, this.state.fridge);

if (!this.props.fridge.ingredients.includes(name)) {
//console.log('**_JJ_**');
this.props.addItem(name);
}
};
