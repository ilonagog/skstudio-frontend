import { UserContext } from "@/app/context/UserContext"
import { useContext } from "react"
export default function ReviewCard ({review}){
    console.log(review)
    // const {user} =useContext(UserContext)
    return (
        <div>
            {/* <h3>{user.name}</h3> */}
            <h3>Review: {review.review}</h3>
            <h3>Rating: {review.rating}/5</h3>
        </div>
    )

}