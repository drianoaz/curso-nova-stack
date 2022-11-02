# Ajuste o tamanho da imagem baseado em uma prop

Neste exemplo, o componente `Avatar` recebe uma prop numérica chamada `size` 
que determina a largura e a altura da tag `<img>`, mas o tamanho real da imagem, 
as vezes acaba sendo maior do que o necessário.


Altere o componente `Avatar` para ele solicitar o tamanho de imagem mais próximo 
com base na prop `size`.

Se `size` for menor do que `90` passe  passe `'s'` (“pequeno”) em vez de `'b'` (“grande”)
para a função `getImageUrl`

Verifique se suas alterações funcionam renderizando avatares com valores diferentes 
do size prop e abrindo imagens em uma nova guia.

```jsx
function getImageUrl(imageId, size = 's') {
  return (
    'https://i.imgur.com/' +
    imageId +
    size +
    '.jpg'
  );
}

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person, 'b')}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function Profile() {
  return (
    <Avatar
      size={40}
      person={{ 
        name: 'Gregorio Y. Zara', 
        imageId: '7vQD0fP'
      }}
    />
  );
}
```