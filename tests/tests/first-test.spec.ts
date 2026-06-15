/*

import { test, expect } from '@playwright/test';

test('create post', async ({ request }) => {

    const response = await request.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
            data: {
                title: 'Playwright',
                body: 'API Testing',
                userId: 1
            }
        }
    );

    expect(response.status()).toBe(201);

    console.log("Post Created");

});

*/

import { test, expect } from '@playwright/test';

test('update post', async ({ request }) => {

    const response = await request.put(
        'https://jsonplaceholder.typicode.com/posts/1',
        {
            data: {
                id: 1,
                title: 'Playwright Updated',
                body: 'API Testing Updated',
                userId: 1
            }
        }
    );

    expect(response.status()).toBe(200);

    console.log("Post Updated");

});













   
   
        













