import s3 from 's3'
import { awsClient } from '../config'

export default (req, res) => {
  const params = {
    s3Params: {
      'Bucket': 'dank-memes',
      'Prefix': 'dank-memes/'
    },
    recursive: true
  }

  let keys = []

  const eventEmitter = awsClient.listObjects(params)
  eventEmitter.on('data', ({ Contents }) => {
    const contentKeys = Contents.map((content) => content.Key)
    keys = [...keys, ...contentKeys]
  })

  eventEmitter.on('end', () => {
    const sanitizedKeys = keys.filter((key) => key.lastIndexOf("/") !== key.length-1)
    const urlLinks = sanitizedKeys.map((key) => s3.getPublicUrl("dank-memes", key, "us-west-1"))
    res.send(urlLinks)
  })
}
