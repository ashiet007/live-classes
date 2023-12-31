import axios from "axios";

/* eslint-disable import/no-anonymous-default-export */
export default async (req, res) => {
  const data = req.body;
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
      data,
      {
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
        },
      }
    );
    const returnProps = {
      error: [],
      data: response?.data,
    };
    res.statusCode = 200;
    return res.json(returnProps);
  } catch (error) {
    let statusCode =
      error.response && error.response.status ? error.response.status : 400;
    const returnProps = {
      error: error?.message || "",
      data: error?.response?.data,
    };
    res.statusCode = statusCode;
    return res.json(returnProps);
  }
};
