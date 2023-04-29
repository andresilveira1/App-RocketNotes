import { Container } from './styles'

export function Textarea({ value, ...reset }) {
  return <Container {...reset}>{value}</Container>
}
