import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { sub } from 'date-fns';

const USERNAME = process.env.UMAMI_USERNAME;
const PASSWORD = process.env.UMAMI_PASSWORD;
const UMAMI_URL = process.env.UMAMI_URL;

// axios instance, pre-configured headers and base URL
const umami = axios.create({
  baseURL: UMAMI_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// get token from umami `/api/auth/login`
const getTokenFromUmami = async (username: string, password: string) => {
  const body = { username, password };
  try {
    const response = await umami.post<{ token: string }>(
      '/api/auth/login',
      body
    );
    // return null if the status not 200
    if (response.status !== 200) {
      return null;
    }
    // return the token
    return response.data.token;
  } catch (error) {
    return null;
  }
};

const umamiAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  const { mode } = req.query;
  let startDate = 0;
  const currentDate = Date.now();

  if (mode === 'last30Days')
    startDate = sub(currentDate, { days: 30 }).getTime();

  // get token from umami, with given username and password from .env file
  const token = await getTokenFromUmami(USERNAME as string, PASSWORD as string);

  // if token is null, return 500
  if (!token) {
    return res.status(500).send({
      message: 'Error when trying to get token from umami',
    });
  }

  // get pageviews from umami `/api/website/1/pageviews`
  const pageviews = await umami.get(
    `/api/website/1/stats?start_at=${startDate}&end_at=${currentDate}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return res.status(200).send(pageviews.data);
};

export default umamiAPI;
