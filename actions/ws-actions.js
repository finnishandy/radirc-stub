export const CONNECTED = 'CONNECTED'
export const REGISTER = 'REGISTER'

export function connected(ws) {
  return {
    type: CONNECTED,
    payload: ws
  }
}

export function register() {
  return {
    type: REGISTER
  }
}