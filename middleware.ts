export {default} from "next-auth/middleware";

export const config = {
  // *: 没有path参数或者多个path参数
  // +: 一个path参数或者多个path参数
  // ?: 没有path参数或者一个path参数
  matcher: [
    "/users/:id?"
  ]
}