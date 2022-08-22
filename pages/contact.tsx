import {
  Container,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Textarea
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { useForm, SubmitHandler } from 'react-hook-form'
import emailjs from 'emailjs-com'

type FormValues = {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>()

  const service_id = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const template_id = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
  const public_key = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

  const onSubmit: SubmitHandler<FormValues> = data => {
    if (service_id && template_id && public_key) {
      emailjs.send(service_id, template_id, data, public_key).then(
        function (response) {
          alert('Your message was successfully sent.')
          reset()
          console.log('SUCCESS!', response.status, response.text)
        },
        function (error) {
          console.log('FAILED...', error)
        }
      )
    }
  }
  return (
    <Layout title="Contact">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Contact
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={errors.name ? true : false}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              id="name"
              placeholder="name"
              {...register('name', {
                required: 'This is required',
                minLength: { value: 4, message: 'Minimum length should be 4' }
              })}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.email ? true : false}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              placeholder="email"
              {...register('email', {
                required: 'This is required',
                minLength: { value: 4, message: 'Minimum length should be 4' }
              })}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.message ? true : false}>
            <FormLabel htmlFor="message">Message</FormLabel>
            <Textarea
              id="message"
              placeholder="message"
              rows={8}
              {...register('message', {
                required: 'This is required',
                minLength: { value: 4, message: 'Minimum length should be 4' }
              })}
            />
            <FormErrorMessage>
              {errors.message && errors.message.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={isSubmitting}
            type="submit"
          >
            Send
          </Button>
        </form>
      </Container>
    </Layout>
  )
}
