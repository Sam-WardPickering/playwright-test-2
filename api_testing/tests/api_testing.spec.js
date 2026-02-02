import { test, expect } from '@playwright/test';
import users from '../test-data/usersResponse.json'

test.describe('API verification examples', () => {

    // 1) Test to verify users endpoint is returning expected user data
    test('Verify multi records against stored static response', async ({ request }) => {
        // Save raw response into a variable
        const response = await request.get('https://reqres.in/api/users', { headers: {'x-api-key': 'reqres_f477729486b947269579c7b1c056f338'}});

        // Parse the response body into JS object with access to the actual data within the response body
        const responseBody = await response.json();

        // Inspect contents of response body
        //console.log(responseBody);

        expect(response.status()).toBe(200);
        expect(responseBody).toEqual(users);
    })

    // 2) Test daya for a single user line by line
    test.only('Verify single user line by line', async ({ request }) => {
        const response = await request.get('https://reqres.in/api/users/1', { headers: {'x-api-key': 'reqres_f477729486b947269579c7b1c056f338'}});

        const responseBody = await response.json();

        // console.log(responseBody);

        expect(response.status()).toBe(200);
        expect(responseBody.data.id).toBe(1);
        expect(responseBody.data.email).toBe('george.bluth@reqres.in');
        expect(responseBody.data.first_name).toBe('George');
        expect(responseBody.data.last_name).toBe('Bluth');
        expect(responseBody.data.avatar).toBe('https://reqres.in/img/faces/1-image.jpg');
    });
});