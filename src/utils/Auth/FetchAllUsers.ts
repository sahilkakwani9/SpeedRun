import {gameShiftApiToken} from '../Secret';
import {gameShiftApi} from '../constants';

async function FetchAllUsers() {
  try {
    const response = await fetch(`${gameShiftApi}users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': gameShiftApiToken,
      },
    });

    // Check if the response status is OK (status code 200-299)
    if (!response.ok) {
      throw new Error(
        `Cant fetch users, HTTP error! Status: ${response.status}`,
      );
    }

    // Parse the JSON response and return it
    const data = await response.json();

    return data;
  } catch (error) {
    // Handle errors
    console.error('Error:', error);
    throw error; // Rethrow the error to propagate it to the caller
  }
}

export default FetchAllUsers;
