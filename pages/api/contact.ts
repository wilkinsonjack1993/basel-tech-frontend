import type { NextApiRequest, NextApiResponse } from 'next'
import SibApiV3Sdk from 'sib-api-v3-sdk'
const defaultClient = SibApiV3Sdk.ApiClient.instance

// Configure API key authorization: api-key
const apiKey = defaultClient.authentications['api-key']
apiKey.apiKey = process.env.SEND_BLUE_API_KEY || ''

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi()

const sendinblue = (sendSmtpEmail: any) => {
  return apiInstance.sendTransacEmail(sendSmtpEmail).then(
    function (data: any) {
      return true
    },
    function (error: Error) {
      console.error(error)
      return false
    }
  )
}
type Data = {
  name: string
  message: string
  subject: string
  email: string
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const body = JSON.parse(req.body) as Data

  let sendSmtpEmail = {
    to: [
      {
        email: 'wilkinsonjack1993@gmail.com',
      },
    ],
    templateId: 1,
    params: {
      name: body.name,
      subject: body.subject,
      email: body.email,
      message: body.message,
    },
  }

  if (process.env.NODE_ENV === 'production') {
    await sendinblue(sendSmtpEmail)
  }

  res.status(200).send('success')
}
