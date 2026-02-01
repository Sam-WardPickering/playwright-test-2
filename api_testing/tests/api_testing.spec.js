import { test, expect } from '@playwright/test';

test.describe('API verification examples', () => {

    // Test to verify users endpoint is returning expected user data
    test('Verify multi records against stored static response', async ({ request }) => {
        // Save raw response into a variable
        const response = await request.get('https://reqres.in/api/users');

        // Parse the response body into JS object with access to the actual data within the response body
        const responseBody = await response.json();

        // Inspect contents of response body
        console.log(responseBody);
    })
});