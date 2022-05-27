export async function getRandomCard(query) {
  const response = await fetch(
    `/.netlify/functions/mtg-endpoint?cards&pageSize=5&contains=imageUrl&colorIdentity=${query}&random=true`
  );
  const data = await response.json();
  console.log('fetch', data); //eslint-disable-line
  return data.cards;
}

