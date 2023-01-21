import "../styles/cards.css";

const Cards = () => {
  const monsteraPrice = 8;
  const ivyPrice = 10;
  const flowerPrice = 15;

  return (
    <div className="card">
      <h2>Panier</h2>

      <ul>
        <li>Monstero : {monsteraPrice}€</li>
        <li>Lierre : {ivyPrice}€</li>
        <li>Fleurs : {flowerPrice}€</li>
      </ul>
      <p>Total : {monsteraPrice + ivyPrice + flowerPrice}€</p>
    </div>
  );
};

export default Cards;
