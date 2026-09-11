export const LOGO = "https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAWiPHORowsUPy4Ef8HnCO9JXGoNeHRyWtWY4xZAfUtau5iCnG2Ko_-8QuKVa8P6wtpfnyGopi4LoAha-VghVRE_N6kRqhwpLQCpga5tzrlTEHRGHgzpa9PYmEEEgQyuEdhsyq9vmhmPR.svg";
export const USER = "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";
export const USER_AVATAR = "https://avatars.githubusercontent.com/u/130309461?v=4";
export const API_OPTIONS={
    method: "GET",
    headers:{
        accept: "application/json",
        Authorization: "Bearer" + process.env.REACT_APP_TMDB_KEY,
    },
};
export const IMG_CDN="https://image.tmdb.org/t/p/w500/";
export const BG_URL="https://assets.nflxext.com/ffe/siteui/vlv3/ae999ff9-5858-4638-b0f2-8abcf9fb6a08/web/IN-en-20260831-TRIFECTA-perspective_8fd44dcf-63ea-4547-8e1e-e5fc7e03883d_large.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];
//OpenAI Key
export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;

