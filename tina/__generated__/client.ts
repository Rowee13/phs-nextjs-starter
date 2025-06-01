import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '779b7c3fedbdb3cac535c0b330cf2a60542be546', queries,  });
export default client;
  