import axios from 'axios'
import { getSolPrice } from '../api'

jest.mock('axios')

describe('getSolPrice', () => {
  it('should make an API call to CoinGecko and return the USD price of Solana', async () => {
    // Set the mock response for the axios.get call
    axios.get.mockResolvedValue({
      data: {
        solana: {
          usd: 10.23,
        },
      },
    })

    // Call the function and assert that it returns the expected value
    const result = await getSolPrice()
    expect(result).toBe(10.23)
  })
})

// Call the function and assert that it returns the expected value
const result = await getSolPrice()
expect(result).toMatchSnapshot()

/*
In this example, we are using jest.mock to mock the axios module so that we can control the response of the axios.get call made by the getSolPrice function. This allows us to test the behavior of the function without actually making a real API call.

We are also using the async/await syntax to make the test more readable and to avoid using .then chains.

Snapshot testing is a technique that allows you to capture the current state of your component or application and save it as a reference. Then, when you run your tests again in the future, you can compare the current state to the saved reference to ensure that it has not changed unexpectedly.

Here is an example of how you could write a snapshot test for the getSolPrice function using the jest testing framework:
*/
