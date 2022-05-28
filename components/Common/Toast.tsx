import { ReactNode, useRef, useState } from 'react'

export const ToastWrapper = ({
  active,
  children,
}: {
  active: boolean
  children: ReactNode
}) => {
  return (
    <div
      id="toast-simple"
      className={`fixed bottom-4 left-4 right-4 z-50 flex items-center space-x-4 divide-x divide-gray-200 rounded-lg bg-white p-4 text-white opacity-100 shadow transition-all duration-500 ease-in-out dark:divide-gray-700 dark:bg-green-500 dark:text-white ${
        !active ? '-bottom-20' : ''
      }`}
      role="alert"
    >
      {children}
    </div>
  )
}

export const useToast = (timeDuration: number) => {
  const [isActive, setIsActive] = useState(false)
  const timeout = useRef<null | NodeJS.Timeout>(null)
  const activate = () => {
    setIsActive(true)
    // Clear timeout if it exists
    if (timeout.current) clearTimeout(timeout.current)
    // Set new timeout
    timeout.current = setTimeout(() => {
      setIsActive(false)
    }, timeDuration)
  }

  return {
    isActive,
    activate,
  }
}
