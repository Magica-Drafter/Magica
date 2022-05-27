export async function getRandomCard(query) {
  const response = await fetch(`/.netlify/functions/mtg-endpoint?cards&pageSize=5&colorIdentity=${query}&random=true`);
  const data = await response.json();
    console.log(data); //eslint-disable-line
  return data.cards[0], [1], [2];
}