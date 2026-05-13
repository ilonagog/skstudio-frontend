import { Button } from "@/components/ui/button"
import {Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
                    <form>
                        <div>
                            <div>
                                <Label>Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    required
                                />
                            </div>
                            <div>
                                <div>
                                    <Label>Password</Label>
                                </div>
                                <Input id="password" type="password" required/>
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter>
                    <Button>LogIn</Button>
                </CardFooter>
            </Card>
        </div>
    )
}