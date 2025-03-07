import React from 'react';
import { useState } from "react";


const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) =>{
        e.prevent.Default();
        props.SubmitForm(e)
    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }
    return (
       <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset className="formField">
                        {/* Booking Date */}
                        <div>
                            <label htmlFor='book-date'>Choose Date:</label>
                            <input id='book-date' value= {date} onChange ={(e) => handleChange(e.target.value)} type='date' required/>
                        </div>
                            {/* Time Selection */}
                        <div>
                        <label htmlFor='book-time'>Choose Time:</label>
                            <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)} required>
                                <option value="">Select A Time</option>
                                {props.availableTimes.availableTimes.map(availableTimes => {return <option key=
                                    {availableTimes}>{availableTimes}</option>})}
                            </select>
                        </div>

                        {/* Guest Selection*/}
                        <div>
                            <label htmlFor='book-guests'>Number of Guests:</label>
                            <input id="book-guests" min ='1' value={guests} onChange={(e) => {setGuests(e.target.value)}} type={"number"} placeholder={0} max={10} required></input>
                        </div>

                        {/*Occasion Field*/}
                        <div>
                            <label htmlFor='book-occasion'>Occasion</label>
                            <select id="book-occasion" key= {occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                                <option value={""}>Select an option</option>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                        </div>
                        {/*Submit Button*/}
                        <div className='btnReceive'>
                            <input aria-label= 'On Click' type={'submit'} value={"Make Your Reservation"}></input>
                        </div>
                    </fieldset>
                </form>
            </section>
       </header>
    );
};

export default BookingForm;