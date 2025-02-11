import axios from "axios";

const api = axios.create({
  baseURL: "https://api.stripe.com",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
  },
});

export default api;
