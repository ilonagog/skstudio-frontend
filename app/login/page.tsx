import { Button } from "@/components/ui/button"
import {Card, CardAction, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
export default function  LoginPage (){
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Login to your account</CardTitle>
                    <CardAction>
                        <Button>Sign Up</Button>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    
                </CardContent>
            </Card>
        </div>
    )
}