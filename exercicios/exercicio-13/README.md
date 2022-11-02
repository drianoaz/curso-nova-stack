# Refatore o código abaixo

O componente `RecipeList` dois loops aninhados.

Para simplificar nosso código, crie um componente chamado `Recipe`.

Esse componente irá aceitar `id`, `name` e `ingredients` como props.

Não se esqueça de verificar se está sendo exibido erros relacionado ao uso de `key`
console do browser.

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
      {recipes.map(recipe =>
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map(ingredient => {
              return (
                <li key={ingredient}>
                  {ingredient}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
```
