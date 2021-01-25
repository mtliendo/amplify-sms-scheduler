import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle'
import 'react-datetime-picker/dist/DateTimePicker.css'
import 'react-calendar/dist/Calendar.css'
import 'react-clock/dist/Clock.css'
import { Textarea } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { API } from 'aws-amplify'
import { createText } from '../graphql/mutations'
import { add } from 'date-fns'

export default function Home({ userPhoneNumber }) {
  const [dateValue, onDateChange] = useState(new Date())
  const [textValue, setTextValue] = useState('')

  const handleInputChange = (e) => {
    const inputValue = e.target.value
    setTextValue(inputValue)
  }

  const handleClick = async () => {
    const input = {
      phoneNumber: userPhoneNumber,
      message: textValue,
      deliveryTime: dateValue.toISOString(),
      ttl: Math.floor(
        add(dateValue.getTime(), {
          minutes: 5,
        }).getTime() / 1000
      ),
    }
    const data = await API.graphql({
      query: createText,
      variables: { input },
    }).catch((e) => console.log(e))

    console.log(data)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Future Text</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <DateTimePicker onChange={onDateChange} value={dateValue} />
        <Textarea
          value={textValue}
          onChange={handleInputChange}
          placeholder="Speak to future you!"
          size="lg"
        />

        <Button colorScheme="blue" onClick={handleClick}>
          Send
        </Button>
      </main>
    </div>
  )
}
