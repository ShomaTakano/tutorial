import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';
import { v4 as uuidv4 } from 'uuid';

import { parseAuthorization } from 'lib/apollo/parse';
import { RECAPTCHA_URL } from 'constants/parameters';

type Data = {
  message?: string;
  name?: string;
  email?: string;
  kind?: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const method = req.method;
  const url = `https://management.rakuweb.jp/api/ntu-contacts`;
  // const url = `${API_URL}/contacts`;

  switch (method) {
    case 'POST': {
      try {
        const { recaptcha, ...data } = req.body;

        // const recaptchaRes = await fetch(RECAPTCHA_URL, {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded',
        //   },
        //   body: `secret=${process.env.GOOGLE_RECAPTCHA_SECRET}&response=${recaptcha}`,
        // });
        // const recaptchaResult = await recaptchaRes.json();
        //
        // if (!recaptchaResult.success || recaptchaResult < 0.5) {
        //   console.log(`ng`);
        //   res.status(403).end();
        //   return;
        // }

        const body = { data: { ...data, contact_id: uuidv4() } };
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'Content-type': 'application/json',
            Authorization: parseAuthorization(
              process?.env?.API_TOKEN_CONTACT ?? ``
            ),
          },
        });
        const result = await response.json();

        if (result?.error?.status === 403) {
          res.status(403).end();
          return;
        } else if (result?.error?.status === 500) {
          res.status(500).end();
          return;
        } else if (result?.data === null) {
          res.status(result?.error?.status ?? 403).end();
          return;
        }

        res.status(200).json({ message: 'POST' });
      } catch (err) {
        console.error(err);
        res.status(403).end();
      }
      break;
    }
  }
};

export default handler;
