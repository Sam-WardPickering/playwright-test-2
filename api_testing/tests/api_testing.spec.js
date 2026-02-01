import { test, expect } from '@playwright/test';

test.describe('API verification examples', () => {

    // Test to verify users endpoint is returning expected user data
    test('Verify multi records against stored static response', async ({ request }) => {
        // Save raw response into a variable
        const response = await request.get('https://reqres.in/api/users', { headers: {'x-api-key': 'reqres_f477729486b947269579c7b1c056f338'}});

        // Parse the response body into JS object with access to the actual data within the response body
        const responseBody = await response.json();

        // Inspect contents of response body
        console.log(responseBody);
    })
});