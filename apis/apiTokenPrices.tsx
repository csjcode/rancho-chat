import axios from "axios";
export const getSolEcoPrices = async (coinsStored: string[]) => {
  const coinsStoredApiRequest = coinsStored.join(",");
  const timeEvery10Seconds = Math.round(new Date().getTime() / 10000);
  const requestString = `https://api.coingecko.com/api/v3/simple/price?ids=${coinsStoredApiRequest}&vs_currencies=usd&timestamp=${timeEvery10Seconds}`;
  console.log(`coinsStoredApiRequest ${coinsStoredApiRequest}`);
  console.log(`requestString ${requestString}`);

  const response = await axios.get(requestString);
  // console.log(response.data)
  return response.data;
};
