import {Star} from "lucide-react";

export default function StarRating(){
    return (
        <div className="flex gap-1">
            <Star className="fill-yellow-500 text-yellow-500"/>
            <Star className="fill-yellow-500 text-yellow-500"/>
            <Star className="fill-yellow-500 text-yellow-500"/>
            <Star className="text-grey-500"/>
            <Star className="text-grey-500"/>
        </div>
    );
}