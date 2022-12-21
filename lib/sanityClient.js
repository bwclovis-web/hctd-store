import { createClient } from "next-sanity"

const sanityClient = createClient({
  projectId: "8tdgylzd",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: true
})

export default sanityClient
