import { ReactNode } from 'react'

const GradientText = ({
  children,
  style,
  from,
  to
}: {
  children: ReactNode,
  style?: string,
  from: string,
  to: string
}) => {
  return (
    <h1 className={`bg-gradient-to-br ${from} ${to} bg-clip-text text-transparent ${style}`}>
      {children}
    </h1>
  )
}

export default GradientText
