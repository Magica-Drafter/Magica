import { client } from './client';

export function getUser() {
  return client.auth.session() && client.auth.session().user;
}

export async function signupUser(email, password) {
  const response = await client.auth.signUp({ email, password });

  return response.user;
}

export async function signInUser(email, password) {
  const response = await client.auth.signIn({ email, password });

  return response.user;
}

export async function logout() {
  await client.auth.signOut();

  return (window.location.href = '../');
}

export async function createDeck(deck_name) {
  const response = await client.from('Decks').insert({ deck_name });

  return response;
}

export async function getAllDecksByUser(userId) {
  const { data } = await client.from('Decks').select('*').match({ user_id: userId });
  return data;
}

export async function createCard(card) {
  const response = await client.from('Cards').insert(card);

  return response;
}

export async function getDraftedCards(localDeck) {
  const { data } = await client.from('Cards').select('*').match({ deck_id: localDeck });
  return data;
}

export async function getAllCardsByDeckId(deckId) {
  const { data } = await client.from('Cards').select('*').match({ deck_id: deckId });
  return data;
}

export async function getDeckName(id) {
  const { data } = await client
    .from('Decks')
    .select('deck_name')
    .match({ id })
    .single();
  return data.deck_name;
}
 

export async function deleteDraftedCard(card) {
  const response = await client.from('Cards').delete().match({ id: card });
  return response;
}

export async function deleteDeck(id) {
  const response = await client.from('Decks').delete().match({ id: id });
  return response;
}
