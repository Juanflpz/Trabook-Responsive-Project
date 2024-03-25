import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function DateModal() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [modalHeight, setModalHeight] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleAddDate = () => {
        console.log("Selected Date:", selectedDate);
    };

    const handleCalendarOpen = () => {        
        setModalHeight('auto');
    };

    return (
        <div className="modal show" style={{ display: 'block', position: 'initial', width: '260px', height: modalHeight }}>
            <Modal.Dialog>
                <Modal.Body className="d-flex justify-content-center align-items-center">
                    <DatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                        onCalendarOpen={handleCalendarOpen}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Select date"
                        inline 
                    />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <Button className='m-2 btn-get-started-date' onClick={handleAddDate}>Add Date</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}






