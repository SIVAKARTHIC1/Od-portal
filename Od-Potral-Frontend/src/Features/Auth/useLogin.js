import { useGoogleLogin } from "@react-oauth/google";
import { useAuthContext } from "../../context/authProvider";
import { useNavigate } from "react-router-dom";
import { apiLogin } from "../../Services/apiAuth";

function useLogin() {
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      dispatch({ type: "user/loading" });
      const accessToken = tokenResponse.access_token;
      try {
        const response = await fetch(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch user info");
        }

        const userInfo = await response.json();

        const { user, token } = await apiLogin(userInfo.email);
        console.log(userInfo.email, user, token);
        localStorage.setItem("user", JSON.stringify({
          id: user?._id,
          name: user?.name,
          img: userInfo?.picture,
          role: user?.role,
        }));
        localStorage.setItem("token", token);
        dispatch({
          type: "user/Login",
          payload: {
            id: user?._id,
            name: user?.name,
            img: userInfo?.picture,
            role: user?.role,
          },
        });
        navigate("/");
        console.log("navigating");
      } catch (err) {
        console.error("Error fetching user info: ", err);
      }
    },
    onError: (err) => console.log(err),
  });
  // const login=()=>{
  //     navigate("/")
  // }

  return { login };
}

export default useLogin;
