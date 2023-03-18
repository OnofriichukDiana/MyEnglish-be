const { google } = require('googleapis')

const { CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN, REDIRECT_URL } = process.env

const getLesson = async (id) => {
  const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL)
  oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN})
  const drive = google.drive({version: "v3", auth: oAuth2Client})
  try {
    await drive.permissions.create({fileId: id, requestBody: {role: 'reader', type:'anyone'}}) 
  } catch (error) {
    error.status = 404
    throw error
  }

 const url = await drive.files.get({fileId: id, fields: 'webContentLink'})
 
 if (!url) {
  const error = new Error(`Lesson with id ${id} not found`)
  error.status = 404
  throw error
 }

 return url.data
}

module.exports = getLesson