"use client";
import { Button } from "@/components/ui/button"
import {Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignUpPage (){
    return (
        <div>
                <Card>
                    <CardHeader>
                        <CardTitle>Create your account here</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div>
                                <div>
                                    <Label>First Name</Label>
                                    <Input id="firstName" type="firstName" />
                                </div>
                                <div>
                                    <Label>Last Name</Label>
                                    <Input id="lastName" type="lastName"/>
                                </div>
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
                        <Button>Save</Button>
                    </CardFooter>
                </Card>
        </div>
    )

}
