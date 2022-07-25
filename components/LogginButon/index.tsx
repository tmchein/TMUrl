import UserContext from "../../context/UserContext";
import { useEffect, useContext } from "react";
import { supabase } from "../../utils/supabase";

type ExtractedUserInfo = {
  avatar: string;
  name: string;
  email: string;
};

function extractUserInfo(rawUser: any): ExtractedUserInfo | null {
  const userData = rawUser?.identities?.[0]?.identity_data;
  if (!userData) {
    return null;
  }
  const { name, email, avatar_url: avatar } = userData;

  return { avatar, name, email };
}

type User = {
  [key: string]: any;
};

export default function LogginButton() {
  const { user, setUser }: User = useContext(UserContext);

  useEffect(() => {
    const rawUser = supabase.auth.user();
    const newUser = extractUserInfo(rawUser);
    setUser(newUser);

    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        const newUser = extractUserInfo(session?.user);
        setUser(newUser);
      }
    );

    return () => listener?.unsubscribe();
  }, [setUser]);

  const login = async () => {
    const { error } = await supabase.auth.signIn(
      {
        provider: "google",
      },
      {
        scopes: "profile",
      }
    );

    if (error) console.log(error);
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
  };

  if (user === undefined) return <div />;
  if (user !== null) {
    return (
      <button
        className="text-gray-800 font-bold flex p-2 rounded-xl bg-gray-200 gap-2"
        onClick={logout}
      >
        <picture>
          <img
            className="w-6 h-6 rounded-full"
            src={user.avatar}
            alt={user.name}
          />
        </picture>
        <span className="hidden sm:block">{user.name}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
      </button>
    );
  }

  return (
    <button
      className="text-gray-600 font-bold flex p-2 rounded-xl bg-gray-200
       hover:text-gray-900 hover:bg-gray-300 gap-1"
      onClick={login}
    >
      <svg
        className="w-6 h-6"
        viewBox="0 0 256 262"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid"
      >
        <g>
          <path
            d="M255.878,133.451 C255.878,122.717 255.007,114.884 253.122,106.761 L130.55,106.761 L130.55,155.209 L202.497,155.209 C201.047,167.249 193.214,185.381 175.807,197.565 L175.563,199.187 L214.318,229.21 L217.003,229.478 C241.662,206.704 255.878,173.196 255.878,133.451"
            fill="#4285F4"
          ></path>
          <path
            d="M130.55,261.1 C165.798,261.1 195.389,249.495 217.003,229.478 L175.807,197.565 C164.783,205.253 149.987,210.62 130.55,210.62 C96.027,210.62 66.726,187.847 56.281,156.37 L54.75,156.5 L14.452,187.687 L13.925,189.152 C35.393,231.798 79.49,261.1 130.55,261.1"
            fill="#34A853"
          ></path>
          <path
            d="M56.281,156.37 C53.525,148.247 51.93,139.543 51.93,130.55 C51.93,121.556 53.525,112.853 56.136,104.73 L56.063,103 L15.26,71.312 L13.925,71.947 C5.077,89.644 0,109.517 0,130.55 C0,151.583 5.077,171.455 13.925,189.152 L56.281,156.37"
            fill="#FBBC05"
          ></path>
          <path
            d="M130.55,50.479 C155.064,50.479 171.6,61.068 181.029,69.917 L217.873,33.943 C195.245,12.91 165.798,0 130.55,0 C79.49,0 35.393,29.301 13.925,71.947 L56.136,104.73 C66.726,73.253 96.027,50.479 130.55,50.479"
            fill="#EB4335"
          ></path>
        </g>
      </svg>
      <span className="hidden sm:block">Sign In with Google</span>
    </button>
  );
}
