import ReviewCard from './ReviewCard'

export default function ReviewList(){
    const reviewsList =  reviews.map(review => <ReviewCard key={review.key} review={review} />)
    return (
        <div>
            <ul>{reviewsList}</ul>
        </div>
    )
}