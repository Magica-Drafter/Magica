export async function getRandomCard(color) {
  const response = await fetch(
    `/.netlify/functions/mtg-endpoint?cards&pageSize=15&contains=imageUrl&colors=${color}&random=true`
  );
  const data = await response.json();
  console.log('fetch', data); //eslint-disable-line
  return data.cards;
}
