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
    test('Verify single user line by line', async ({ request }) => {
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

    // 3) Test POST request
    test.only('Verify POST request', async ({ request }) => {

        const newUser = {
            name: "Sam",
            job: "QA Engineer"
        }

        // Create request & save response
        const response = await request.post('https://reqres.in/api/users', { 
            data: newUser,
            headers: {'x-api-key': 'reqres_f477729486b947269579c7b1c056f338'}
        });

        const responseBody = await response.json();

        // console.log(responseBody);

        // Verify response
        expect(response.status()).toBe(201);
        expect(responseBody.name).toBe(newUser.name);
        expect(responseBody.job).toBe(newUser.job);
    });

    // 4) Verify PUT request
    test('Verify PUT request', async ({ request }) => {

        const updateUser = {
            name: "Mr Scott",
            job: "USA President"
        }

        // Create put request & save response
        const response = await request.put('https://reqres.in/api/users/1', { 
            data: updateUser,
            headers: {'x-api-key': 'reqres_f477729486b947269579c7b1c056f338'}
        });

        const responseBody = await response.json();

        console.log(responseBody);

    });
});