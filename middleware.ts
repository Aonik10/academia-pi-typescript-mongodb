export { default } from "next-auth/middleware";

export const config = {
    matcher: ["/dashboard", "/checkout"],
    //matcher: ["/((?!register|api|login).*)"],
};
