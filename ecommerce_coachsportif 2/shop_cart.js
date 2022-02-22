let panier = [];
let total = 0;

function ajouterArticle(prix) {
  //alert(total);
  total += prix;
  panier.push(prix);



  // condition singulier / pluriel de "article(s) selon la quantité"
  if (panier.length == 1) {
    document.getElementById('total-count').innerHTML = panier.length + ' article - ' +  total.toString() + '€';
    // badge count nbr d'articles //
    document.getElementById('badge').innerHTML = panier.length;
    // remplissage de la fenêtre modale //
    document.getElementById('texte_modale').innerHTML = 'Votre panier contient ' + panier.length + ' produit :';

      // fenêtre modale : lister les produits commandés //
    if (prix == 74) {
      document.getElementById('description').innerHTML += "Rééquilibrage alimentaire - " + prix + '€' + "<br />";
    }
    else if (prix == 57) {
      document.getElementById('description').innerHTML += "Sèche - " + prix + '€' + "<br />";
    }
    else if (prix == 69) {
      document.getElementById('description').innerHTML += "Prise de masse - " + prix + '€' + "<br />";
    }

  } else if (panier.length == 2 || panier.length <= 4) {
    document.getElementById('total-count').innerHTML = panier.length + ' articles - ' +  total.toString() + '€';
    // badge count nbr d'articles //
    document.getElementById('badge').innerHTML = panier.length;
    // remplissage de la fenêtre modale //
      document.getElementById('texte_modale').innerHTML = 'Votre panier contient ' + panier.length + ' produits :';

        // fenêtre modale : lister les produits commandés //
    if (prix == 74) {
      document.getElementById('description').innerHTML += "Rééquilibrage alimentaire - " + prix + '€' + "<br />";
    }
    else if (prix == 57) {
      document.getElementById('description').innerHTML += "Sèche - " + prix + '€' + "<br />";
    }
    else if (prix == 69) {
      document.getElementById('description').innerHTML += "Prise de masse - " + prix + '€' + "<br />";
    }
  }



  //total
  if (panier.length <= 4) {
  document.getElementById('total_span').innerHTML = total.toString() + '€';
  }
  // else if (panier.length == 0){

  // }


  document.getElementById('total-count').classList.add('panier_style');
  rafraichirPanier();
}

document.getElementById('vider_panier').addEventListener('click', () => {
    panier.length = 0;
    total = 0;
    document.getElementById('total-count').innerHTML = "";
    // badge count nbr d'articles //
    document.getElementById('badge').innerHTML = "";

    document.getElementById('texte_modale').innerHTML = "Votre panier est vide.";
    document.getElementById('description').innerHTML = " ";
    document.getElementById('total_span').innerHTML = 'Total';
})
