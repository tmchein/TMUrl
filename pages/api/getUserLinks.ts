import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../utils/db";

export default async function getUserLinks(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.body;
  try {
    const data = await db.link.findMany({
      where: { creator: email },
    });
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send({ error });
  }
}
