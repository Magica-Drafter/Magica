export async function getRandomCard(query) {
  const response = await fetch(`/.netlify/functions/mtg-endpoint?cards&pageSize=1&random=true&colorIdentity=${query}`);
  const data = await response.json();
    console.log(data); //eslint-disable-line
  return data.cards[0];
}