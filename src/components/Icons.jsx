/* eslint-disable react/prop-types */
export const LogoGame = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.01em"
      height="1em"
      viewBox="0 0 1025 1024"
      className={className}
    >
      <path
        fill="currentColor"
        d="m1015.56 55l-138 138l137 136q9 9 9 22.5t-9.5 23t-23 9.5t-22.5-10l-136-136l-136 136q-10 10-23.5 10t-23-9.5t-9.5-23t10-22.5l136-136l-137-138q-10-9-10-22.5t9.5-23t23-9.5t23.5 10l137 137l137-137q9-10 22.5-10t23 9.5t9.5 23t-9 22.5m-55 393q26 0 45 19t19 45.5t-19 45t-45 18.5h-384v384q0 27-19 45.5t-45 18.5t-45-18.5t-19-45.5V576h-384q-26 0-45-18.5t-19-45t19-45.5t45-19h384V65q0-27 19-45.5t45-18.5t45 18.5t19 45.5v383zm-767.5-64q-79.5 0-136-56T.56 192.5T57.06 57t136-56t135.5 56t56 135.5t-56 135.5t-135.5 56m-.5-319q-53 0-90.5 37.5T64.56 193t37.5 90.5t90.5 37.5t90.5-37.5t37.5-90.5t-37.5-90.5t-90.5-37.5M10.06 649.5q9.5-9.5 23-9.5t22.5 9l137 138l137-138q10-9 23.5-9t22.5 9.5t9 22.5t-9 23l-137 137l136 136q9 10 9 23.5t-9 22.5t-22.5 9t-23.5-9l-136-136l-136 136q-9 9-22.5 9t-23-9t-9.5-22.5t9-23.5l137-136l-138-137q-9-10-9-23t9.5-22.5m822-9.5q79.5 0 136 56.5t56.5 136t-56.5 135.5t-136 56t-135.5-56t-56-135.5t56-136t135.5-56.5m.5 320q53 0 90.5-37.5t37.5-90.5t-37.5-90.5t-90.5-37.5t-90.5 37.5t-37.5 90.5t37.5 90.5t90.5 37.5"
      />
    </svg>
  )
}

export const CrossIcon = ({ className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 64 64"
      className={className}
      style={style}
    >
      <path
        fill="currentColor"
        d="M62 10.571L53.429 2L32 23.429L10.571 2L2 10.571L23.429 32L2 53.429L10.571 62L32 40.571L53.429 62L62 53.429L40.571 32z"
      />
    </svg>
  )
}

export const CircleIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 11 11"
      className={className}
    >
      <path
        d="M5.5 0a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11zm0 1.222a4.278 4.278 0 1 0 0 8.556a4.278 4.278 0 0 0 0-8.556z"
        fill="currentColor"
      />
    </svg>
  )
}

export const ResetIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        d="M20 8c-1.403-2.96-4.463-5-8-5a9 9 0 1 0 0 18a9 9 0 0 0 9-9m0-9v6h-6"
      />
    </svg>
  )
}
