import jwtDecode, { JwtPayload } from "jwt-decode"
import { GetServerSideProps } from "next"

export const jwtDecoder = (token: string) => {
  if (token) {
    try {
      return jwtDecode<JwtPayload>(token)
    } catch(err) {
      throw new Error("Error JWT Decode");
      
    }
  }
  return null
}

export const isJwtExpired = (token: string) => {
  let isJwtExpired = false
  if (token) {
    try {
      const { exp } = jwtDecode<JwtPayload>(token)
      const currentTime = new Date().getTime() / 1000
      isJwtExpired = currentTime > (exp || 0)
    } catch {
      isJwtExpired = true
    }
  } else {
    isJwtExpired = true
  }

  return isJwtExpired
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = context.req.cookies["accessToken"]
  const isAuthenticated = !isJwtExpired(token || "")


  if (isAuthenticated) {
    return {
      props: {
        isAuthenticated,
      }
    }
  } else {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false
      }
    }
  }
}

export const getServerSidePropsRedirect: GetServerSideProps = async context => {
  const token = context.req.cookies["accessToken"]
  const isAuthenticated = !isJwtExpired(token || "")

  if (isAuthenticated) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}
