import { useGoogleLogin } from "@react-oauth/google";
import { useAuthContext } from "../../context/authProvider";
import { useNavigate } from "react-router-dom";

function useLogin() {
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();
  // const login = useGoogleLogin({
  //   onSuccess: async (tokenResponse) => {
  //     dispatch({ type: "user/loading" });
  //     const accessToken = tokenResponse.access_token;
  //     try {
  //       const response = await fetch(
  //         "https://www.googleapis.com/oauth2/v3/userinfo",
  //         {
  //           headers: {
  //             Authorization: `Bearer ${accessToken}`,
  //           },
  //         }
  //       );

  //       if (!response.ok) {
  //         throw new Error("Failed to fetch user info");
  //       }

  //       const userInfo = await response.json();
  //       console.log(userInfo);
  //       dispatch({
  //         type: "user/Login",
  //         payload: {
  //           name: userInfo.name,
  //           img: userInfo.picture,
  //           role: "faculty",
  //         },
  //       });
  //       navigate("/");
  //       console.log("navigating")
  //     } catch (err) {
  //       console.error("Error fetching user info: ", err);
  //     }
  //   },
  //   onError: (err) => console.log(err),
  // });
const login=()=>{
    navigate("/")
}

  return { login };
}

export default useLogin;
