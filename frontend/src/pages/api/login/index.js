import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
      {
        email: req.body.email,
        password: req.body.password,
      },
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
  } catch (e) {
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
