# Criando listas

Faça uma lista de receitas a partir do array abaixo.

Para cada receita nesse array, exiba seu título como um `<h2>` e liste
seus ingredientes utilizando uma lista `<ul>..<li>`

```jsx
const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
}];

function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
    </div>
  );
}
```
