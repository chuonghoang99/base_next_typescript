import { Box } from '@mui/material'
import { LoginPanel } from './components/LoginPanel'
import { LoginForm } from './components/LoginForm'

export default function Login() {
  return (
    <Box className='flex h-screen w-screen items-center justify-center'>
      <Box
        className='flex flex-row items-stretch flex-1'
        style={{ maxWidth: 1000, height: 600 }}
      >
        <LoginPanel />
        <LoginForm />
      </Box>
    </Box>
  )
}
