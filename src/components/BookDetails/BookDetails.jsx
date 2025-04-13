import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookDetails.css";
import { FaArrowLeft, FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const URL = "https://openlibrary.org/works/";

const BookDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const [rating, setRating] = useState(0); // Store rating state
  const navigate = useNavigate();

  // Load rating from localStorage
  useEffect(() => {
    const savedRating = localStorage.getItem(`book-rating-${id}`);
    if (savedRating) {
      setRating(parseInt(savedRating));
    }
  }, [id]);

  useEffect(() => {
    setLoading(true);
    async function getBookDetails() {
      try {
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();

        if (data) {
          const { description, title, covers, subject_places, subject_times, subjects } = data;
          const newBook = {
            description: description ? description.value : "No description found",
            title: title,
            cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImg,
            subject_places: subject_places ? subject_places.join(", ") : "No subject places found",
            subject_times: subject_times ? subject_times.join(", ") : "No subject times found",
            subjects: subjects ? subjects.join(", ") : "No subjects found",
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getBookDetails();
  }, [id]);

  // Handle Star Click
  const handleRating = (starValue) => {
    setRating(starValue);
    localStorage.setItem(`book-rating-${id}`, starValue); // Save rating to localStorage
  };

  if (loading) return <Loading />;

  return (
    <section className='book-details'>
      <div className='container'>
        <div className='back-button-container'>
          <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/book")}>
            <FaArrowLeft size={22} />
            <span className='fs-18 fw-6'>Go Back</span>
          </button>
        </div>

        <div className='book-details-content grid'>
          <div className='book-details-img no-hover'>
            <img src={book?.cover_img} alt="cover img" />
          </div>

          <div className='book-details-info'>
            <div className='book-details-item title'>
              <span className='fw-6 fs-24'>{book?.title}</span>
            </div>

            <div className='book-details-item description'>
              <span>{book?.description}</span>
            </div>

            <div className='book-details-item'>
              <span className='fw-6'>Subject Places: </span>
              <span className='text-italic'>{book?.subject_places}</span>
            </div>

            <div className='book-details-item'>
              <span className='fw-6'>Subject Times: </span>
              <span className='text-italic'>{book?.subject_times}</span>
            </div>

            <div className='book-details-item'>
              <span className='fw-6'>Subjects: </span>
              <span>{book?.subjects}</span>
            </div>

            {/* Star Rating Section */}
            <div className='book-details-item rating-section'>
              <span className='fw-6'>Your Rating: </span>
              <div className='rating-stars'>
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={`rating-star ${star <= rating ? 'active' : ''}`}
                    onClick={() => handleRating(star)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookDetails;