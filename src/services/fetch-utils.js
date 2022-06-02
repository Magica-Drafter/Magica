export async function getRandomCards(colorIdentity, types, sets) {
  const response = await fetch(
    `/.netlify/functions/mtg-endpoint?cards&pageSize=15&contains=imageUrl&types=${types}&setName=${sets}&colorIdentity=${colorIdentity}&random=true`
  );
  const data = await response.json();
  console.log('fetch', data); //eslint-disable-line
  return data.cards;
}
