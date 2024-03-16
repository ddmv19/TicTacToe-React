import { useEffect } from 'react'
import { useState } from 'react'

export const ChangeTheme = () => {
  const [isChecked, setIsCheckd] = useState(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return true
    }

    return false
  })

  const handleChange = () => {
    setIsCheckd(!isChecked)
  }

  useEffect(() => {
    if (isChecked === false) {
      document.querySelector('html').classList.remove('dark')
    } else {
      document.querySelector('html').classList.add('dark')
    }
  }, [isChecked])

  return (
    <section className="relative flex flex-row-reverse items-center justify-center rounded-xl ml-auto w-16 h-8 px-2 bg-blue-400 dark:bg-gray-200">
      <input
        type="checkbox"
        name="change-theme"
        id="change-theme"
        checked={isChecked}
        onChange={handleChange}
        hidden
      />
      <label
        className="absolute w-8 h-8 rounded-full p-1 left-2 cursor-pointer"
        id="checkbox-change-theme"
        htmlFor="change-theme"
      ></label>
    </section>
  )
}
