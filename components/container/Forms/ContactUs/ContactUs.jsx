import { useEffect, useState } from "react"
import useFormHook from "lib/useForm"
import { useForm } from '@formspree/react'
import Button from "components/atoms/Button/Button"
import Input from "components/atoms/Inputs/Input"

const ContactUsForm = () => {
  const { inputs, handleChange, resetForm } = useFormHook({
    name: '',
    email: '',
    message: ''
  })

  const [ state, handleSubmit ] = useForm("mwkagjzb")
  const [ formErrors, setFormErrors ] = useState([])

  useEffect(() => {
    console.log('state', state)
    if (state.succeeded) {
      resetForm()
    } else {
      setFormErrors(state.errors)
    }
  }, [state.succeeded])
    
  return (
    <form onSubmit={handleSubmit}>
      <fieldset aria-busy={state.submitting}>
        <Input type="text" 
          label="name" 
          id="name"
          name="name"
          autoComplete="name" 
          value={inputs.name}
          required
          onChange={handleChange}
        />
        <Input type="email" 
          label="e-mail" 
          id="email"
          name="email"
          autoComplete="email" 
          value={inputs.email}
          required
          onChange={handleChange}
        />
        <Input type="textArea" 
          label="message" 
          id="message"
          name="message"
          rows="5"
          required
          value={inputs.message} 
          onChange={handleChange}
        />
      </fieldset>
      <Button
        type="submit"
        disabled={state.submitting}
        submitStatus={state}
        config={!state.succeeded ? "default" : "success"}
        size="large"
      >
        {state.succeeded ? `MESSAGE RECEIVED` : 'SAY HELLO'}
      </Button>
    </form>
  )
}

export default ContactUsForm
