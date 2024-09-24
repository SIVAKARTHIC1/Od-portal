import { API_BASE } from "../../Config/config";

const AUTH_API = `${API_BASE}/auth/login`;

async function apiLogin(email) {
  try {
    console.log(email);
    const res = await fetch(AUTH_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    if (!res.ok) throw new Error("something went wrong");
    const { token, user } = await res.json();
    console.log(token, user);
    return { token, user };
  } catch (error) {
    console.log(error);
  }
}

export { apiLogin };
