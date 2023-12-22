import {gameShiftApiToken} from '../Secret';
import {gameShiftApi} from '../constants';
import uuid from 'react-native-uuid';

const generateRefId = (email: String) => {
  const uniqueId = uuid.v4();
  const sanitizedEmail = email.replace(/[^a-zA-Z0-9]/g, ''); // Remove special characters
  const refId = `${sanitizedEmail}-${uniqueId}`;

  return refId;
};

async function CreateUser(email: String) {
  try {
    const body = {
      referenceId: generateRefId(email),
      email: email,
    };
    const strBody = JSON.stringify(body);
    const response = await fetch(`${gameShiftApi}users`, {
      method: 'POST', // or 'POST' or any other HTTP method
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': gameShiftApiToken,
      },
      body: strBody,
    });

    // Check if the response status is OK (status code 200-299)
    if (!response.ok) {
      throw new Error(
        `User not created, HTTP error! Status: ${response.status}`,
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

export default CreateUser;
