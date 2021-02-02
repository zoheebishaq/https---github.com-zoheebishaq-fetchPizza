async function uneFunctionFetch() {
  console.log("uneFunctionFetch : Récupération d'une citation");
  let response = await fetch("http://localhost/fetchPizza/pizza.json");
  console.log("uneFunctionFetch : Réponse de l'appel", response);
  let objetJS = await response.json(); //Transformation du JSON en objet js
  console.log("uneFunctionFetch : Résultat json en objet J", objetJS);
  let divMain = document.querySelector("#main");

  let chaine = "<ul >";
  for (const unePizza of objetJS) {
    chaine += `<li>${unePizza.nomPizza}</li>`;
    chaine += `<li>${unePizza.nomGenre}</li>`;
    chaine += `<li>${unePizza.nomIngredient}</li>`;

    for (const ingredient of unePizza.ingredients) {
      chaine += `<li>${ingredient.nomIngredient}</li>`;
    }
  }
  chaine += "</ul >";

  divMain.innerHTML = chaine;
  return objetJS;
}

uneFunctionFetch();
