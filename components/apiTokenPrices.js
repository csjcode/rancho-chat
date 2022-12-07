import axios from 'axios'
export const getSolEcoPrices = async () => {
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/simple/price?ids=solana,chainlink,stepn,audius,msol&vs_currencies=usd&timestamp=${new Date().getTime()}`,
  )
  console.log(response.data)
  return response.data
}
