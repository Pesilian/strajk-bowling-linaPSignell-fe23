import axios from 'axios';

const API_URL = 'https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com';
const API_KEY = '738c6b9d-24cf-47c3-b688-f4f4c5747662';

export const makeBooking = async (bookingData: any) => {
  const headers = { 'x-api-key': API_KEY, 'Content-Type': 'text/plain' };
  const response = await axios.post(API_URL, bookingData, { headers });
  return response.data;
};
