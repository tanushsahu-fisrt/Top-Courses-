import React from 'react';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { useCart } from './CartContext.js';
import { useNavigate } from 'react-router-dom';


const Card = (props) => {

    
    const { addToCart } = useCart();
    
    const navigate = useNavigate();
        
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler() {
        
        if (likedCourses.includes(props.course.id)) {
             
            setLikedCourses((prev) => prev.filter((cid) => cid !== props.course.id));
            toast.warning("Liked Removed");
        }
        else {
             
            if (likedCourses.length === 0) {
                setLikedCourses([props.course.id]);
            }
            else {
                setLikedCourses((prev) => [...prev, props.course.id]);
            }
            toast.success("Liked Successfully");
        }
    }

    function handleAddToCart() {
        addToCart(props.course);
        toast.success("Added to cart successfully");
    }

    return (
        <div className='bg-bgDark bg-opacity-80 w-[300px] rounded-md overflow-hidden shadow-xl'>
            <button
            className='cursor-pointer'
            onClick={() => navigate('/courseDetail' , { state : { course : props.course }})}
            >
            <div className='relative '>
                <img src={props.course.image.url} alt="Course_Image" className='' />

                <div className='rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center'>
                    <button onClick={clickHandler}>
                        {
                            !likedCourses.includes(props.course.id) ? <FcLikePlaceholder fontSize="1.75rem" /> : <FcLike fontSize="1.75rem" />
                        }
                    </button>
                </div>
            </div>
            <div className='p-4'>
                <p className='text-white text-lg font-semibold leading-6'>{props.course.title}</p>
                <p className='mt-2 text-white'>
                    {
                        props.course.description.length > 100 ? (props.course.description.substring(0, 70) + "...") : (props.course.description)
                    }
                </p>
                <button className="bg-white text-bgDark font-semibold px-4 py-2 rounded-md mt-4
                                 hover:bg-gray-200
                                 hover:text-white transition duration-300 ease-in"
                                //  onClick={handleAddToCart}
                                 >
                        Show More...
                </button>
            </div>
            </button>
        </div>
    )
}

export default Card