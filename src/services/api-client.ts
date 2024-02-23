import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "29380f3380d24a98823c311e6a21d8e4",
  },
});
