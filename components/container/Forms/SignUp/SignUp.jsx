import Button from "components/atoms/Button/Button"
import Input from "components/atoms/Inputs/Input"
import useFormHook from "hooks/useForm"

const SignUpForm = () => {
  const { inputs, handleChange, resetForm } = useFormHook({
    name: '',
    email: '',
    password: ''
  })

  const handleSubmit = evt => {
    evt.preventDefault()
  }


  return (
    <div className="bg-white/25 py-4 px-6 rounded">
      <form id="form" onSubmit={handleSubmit}>
        <fieldset>
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
          <Input type="password" 
            label="password" 
            id="password"
            name="password" 
            value={inputs.password}
            required
            onChange={handleChange}
          />
        </fieldset>
        <Button type="submit" config="default">OH HAI</Button>
      </form>
    </div>
  )
}

export default SignUpForm
