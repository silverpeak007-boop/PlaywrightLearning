/*

import { test, expect } from '@playwright/test';

test('GET API response validation', async ({ request }) => {

    const response = await request.get(
        'https://jsonplaceholder.typicode.com/users/1'
    );

    expect(response.status()).toBe(200);

    const data: any = await response.json();

    expect(data.id).toBe(1);

    expect(data.name).toBe('Leanne Graham');

    expect(data.username).toBe('Bret');

    console.log('GET API Response Validated Successfully');

});

*/

import { test, expect } from '@playwright/test';

test('POST API Test', async ({ request }) => {

    const response = await request.post(
        'https://jsonplaceholder.typicode.com/users',
        {
            data: {
                name: 'Karthick',
                username: 'RK'
            }
        }
    );

    expect(response.status()).toBe(201);

    const data: any = await response.json();

    expect(data.name).toBe('Karthick');

    expect(data.username).toBe('RK');


    console.log('POST API Successful');

    console.log("webhook Demo2");

});