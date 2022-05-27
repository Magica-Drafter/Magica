export async function getRandomCard(query) {
  const response = await fetch(
    `/.netlify/functions/mtg-endpoint?cards&pageSize=15&contains=imageUrl&colors=${query}&random=true`
  );
  const data = await response.json();
  console.log('fetch', data); //eslint-disable-line
  return data.cards;
}

