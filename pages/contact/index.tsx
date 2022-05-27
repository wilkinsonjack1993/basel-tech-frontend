import { useForm } from 'react-hook-form'
import { BUTTON_CLASSES } from '../../components/Common/Button'

const INPUT_CLASSES = 'mt-6 mb-2 rounded border p-2'

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data: any) => console.log(data)
  console.log(errors)

  return (
    <form
      className="mx-8 flex w-full max-w-3xl flex-col rounded-2xl bg-white px-4 py-8 shadow-lg lg:p-12"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h4 className="mb-3 text-left">Contact us</h4>
      <input
        className={INPUT_CLASSES}
        type="text"
        placeholder="Name"
        {...register('name', { required: 'Name is required', maxLength: 80 })}
      />
      {errors?.name && (
        <p className="text-left text-sm italic text-red-500">
          {errors.name.message}
        </p>
      )}
      <input
        className={INPUT_CLASSES}
        type="text"
        autoComplete="email"
        placeholder="Email"
        {...register('email', {
          required: 'Email is required',
          pattern: /^\S+@\S+$/i,
        })}
      />
      {errors?.email && (
        <p className="text-left text-sm italic text-red-500">
          {errors.email.message}
        </p>
      )}
      <input
        className={INPUT_CLASSES}
        type="text"
        placeholder="Description"
        {...register('description', {
          required: 'Description is required',
          maxLength: 120,
        })}
      />
      {errors?.description && (
        <p className="text-left text-sm italic text-red-500">
          {errors.description.message}
        </p>
      )}
      <textarea
        placeholder="Message"
        className={INPUT_CLASSES}
        rows={8}
        {...register('message', { required: 'Message is required' })}
      />
      {errors?.message && (
        <p className="text-left text-sm italic text-red-500">
          {errors.message.message}
        </p>
      )}

      <input
        className={`${BUTTON_CLASSES} mt-8 cursor-pointer rounded py-2 capitalize`}
        type="submit"
      />
    </form>
  )
}

export default Contact
