import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const AuthChecker = async ({ children }: any) => {
    
    const session = await getServerSession(authOptions);

    if (session) {
        return (
            <>
                {children}
            </>
        )
    }
    else {
        return (
            <>
                <h1>Adicionar sigin no auth checker</h1>
            </>
        )
    }

}

export default AuthChecker;