import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../utils/db";

async function shortenUrl(req: NextApiRequest, res: NextApiResponse) {
  const { url, user } = req.body;
  let email;
  if (user == null) {
    email = null;
  } else {
    email = user.email;
  }

  const shortenedUrl = Math.random().toString(36).substring(2, 6);

  try {
    const data = await db.link.create({
      data: {
        url,
        short: shortenedUrl,
        creator: email,
      },
    });

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error });
  }
}

export default shortenUrl;
