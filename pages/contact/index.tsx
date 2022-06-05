import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button, BUTTON_CLASSES } from '../../components/Common/Button'
import { ToastWrapper, useToast } from '../../components/Common/Toast'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const INPUT_CLASSES = 'mt-6 mb-2 rounded border p-2'

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const { t } = useTranslation('contact')
  const { t: tCommon } = useTranslation('common')

  const [loading, setLoading] = useState(false)
  const { isActive, activate } = useToast(3000)

  const onSubmit = (data: any) => {
    setLoading(true)
    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        message: data.message,
        subject: data.description,
      }),
    }).then(() => {
      reset()
      activate()
      setLoading(false)
    })
  }

  return (
    <>
      <form
        className="relative mx-8 flex w-full max-w-3xl flex-col rounded-2xl bg-white px-4 py-8 shadow-lg lg:p-12"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h4 className="mb-3 text-left">{t('title')}</h4>
        <input
          className={INPUT_CLASSES}
          type="text"
          placeholder={t('name')}
          disabled={loading}
          {...register('name', {
            required: t('name-required'),
            maxLength: 80,
          })}
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
          placeholder={t('email')}
          disabled={loading}
          {...register('email', {
            required: t('email-required'),
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
          placeholder={t('description')}
          disabled={loading}
          {...register('description', {
            required: t('description-required'),
            maxLength: 120,
          })}
        />
        {errors?.description && (
          <p className="text-left text-sm italic text-red-500">
            {errors.description.message}
          </p>
        )}
        <textarea
          placeholder={t('message')}
          className={INPUT_CLASSES}
          disabled={loading}
          rows={8}
          {...register('message', { required: t('message-required') })}
        />
        {errors?.message && (
          <p className="text-left text-sm italic text-red-500">
            {errors.message.message}
          </p>
        )}

        <Button
          className={`${BUTTON_CLASSES} mt-8 cursor-pointer rounded py-2 capitalize`}
          type="submit"
          loading={loading}
        >
          {tCommon('submit')}
        </Button>
        <ToastWrapper active={isActive}>
          <svg
            className="h-5 w-5 text-blue-600 dark:text-blue-500"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="paper-plane"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"
            ></path>
          </svg>
          <div className="pl-4 text-sm font-normal">{t('success')} </div>
        </ToastWrapper>
      </form>
    </>
  )
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'contact'])),
    },
  }
}

export default Contact
