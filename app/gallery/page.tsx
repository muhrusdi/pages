// import { google } from "googleapis"

// const oauthClient = new google.auth.OAuth2(
//   process.env.GOOGLE_CLIENT_ID,
//   process.env.GOOGLE_CLIENT_SECRET,
//   "urn:ietf:wg:oauth:2.0:oob",
// )

// const scopes = ["https://www.googleapis.com/auth/photoslibrary.readonly"]
export const runtime = "edge"

const Gallery = () => {
  // const authUrl = oauthClient.generateAuthUrl({
  //   scope: scopes,
  // })

  // console.log("Authorize this app by visiting this url:", authUrl)
  return <div>test</div>
}

export default Gallery
