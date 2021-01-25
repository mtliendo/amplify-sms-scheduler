/* Amplify Params - DO NOT EDIT
	API_SMSREMINDER_GRAPHQLAPIIDOUTPUT
	API_SMSREMINDER_TEXTTABLE_ARN
	API_SMSREMINDER_TEXTTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()

const params = {
  TableName: process.env.API_SMSREMINDER_TEXTTABLE_NAME,
  FilterExpression: 'deliveryTime = :typename',
}

async function scanItemsByISO(currentISO) {
  try {
    const data = await docClient
      .scan({
        ...params,
        ExpressionAttributeValues: { ':typename': currentISO },
      })
      .promise()
    return data
  } catch (err) {
    return err
  }
}

const publishMessage = async (messageParams) => {
  const publishTextPromise = new AWS.SNS({ apiVersion: '2010-03-31' })
    .publish(messageParams)
    .promise()

  publishTextPromise
    .then(function (data) {
      console.log(`Message successfully sent to ${messageParams.PhoneNumber}`)
    })
    .catch(function (err) {
      console.error(err)
    })
}

//🚨 this isin't tested but may be all i need 🤞🏽
//next step would be to build the frontend so that a user can do it themseleves after authenticating
exports.handler = async () => {
  const [ISO_DATE, ISO_TIME] = new Date().toISOString().split(':')
  const CURR_ISO_NO_SECONDS = `${ISO_DATE}:${ISO_TIME}:00.000Z`
  console.log('the created iso: ', CURR_ISO_NO_SECONDS)
  try {
    const data = await scanItemsByISO(CURR_ISO_NO_SECONDS)
    console.log('the data', data)
    data.Items.forEach((item) => {
      const messageParams = {
        Message: item.message,
        PhoneNumber: item.phoneNumber,
      }

      publishMessage(messageParams)
    })
    return { body: JSON.stringify(data) }
  } catch (err) {
    console.log('uh oh', err)
    return { error: err }
  }
}
