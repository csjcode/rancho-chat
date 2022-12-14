import axios from 'axios'
export const getSolEcoPrices = async (coinsStored) => {
  const coinsStoredApiRequest = coinsStored.join(',')
  console.log(coinsStoredApiRequest)
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/simple/price?ids=${coinsStoredApiRequest}&vs_currencies=usd&timestamp=${new Date().getTime()}`,
  )
  // console.log(response.data)
  return response.data
}
