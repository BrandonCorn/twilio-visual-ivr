import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'wouter';
import { Box, DatePicker, Label, Card, Stack, HelpText, Input, Modal, ModalHeader, ModalHeading, ModalBody, ModalFooter, ModalFooterActions } from '@twilio-paste/core';
import constants from '../constants';
import { updateIvr } from '../hooks/api';
import { updateAirTable } from '../hooks/api';
import { setUserEmail } from '../hooks/store/actions';

const Appointment = (props) => {
    const [location, setLocation] = useLocation();
    const [existingAppointments, setExistingAppointments] = useState([]);
    const [ivrState, setIvrState] = useState(constants.state.SCHEDULE_COMPUTER_REPAIR); 
    const conference = useSelector(state => state.conference);
    const email = useSelector(state => state.user.email);
    const userState = useSelector(state => state.user);
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch(); 

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    const makeAnnouncement = (conferenceObject) => {
        updateIvr(ivrState, conferenceObject)
        .then(response => {
            console.log('make announcement select computer issue');
        })
        .catch(err => {
            console.log('could not make announcement select computer type');
        })
    }

    const getPrice = () => {
        return "$150.00";
    }

    const redirectHome = () => {
        handleClose();
        setLocation('/');
    }
    

    //If necessary, fetch existing appointments to eliminate conflicts here
    const fetchExistingAppointments = () => {

    }

    useEffect(() => {
        if (isOpen){
            //add additional logic if form submission failed
            setIvrState(constants.state.COMPLETED_SCHEDULE_COMPUTER_REPAIR);

            //send appointment to airtable
            updateAirTable(userState);
        }
    }, [isOpen])

    useEffect(() => {
        if (conference.conference.length > 0) makeAnnouncement(conference);
    },[ivrState]);


    return (
        <div className = 'page'>
            <div className = 'content'> 
                <h2 className = 'title'> Schedule your appointment </h2>
                <Card padding='space120'> 
                    <Stack orientation='vertical' spacing='space60'>
                        <Label> Choose a date to schedule your appointment </Label>
                        <DatePicker defaultValue={'mm/dd/yyyy'} /> 
                        <Box> 
                            <Label>Email Address </Label>
                            <Input 
                                name='email'
                                placeholder=''
                                defaultValue={email ? email : ''}
                                type='text'
                                onChange={(e) => {
                                    console.log('changes: ', e)
                                    // update store with email
                                    const emailUpdate = { email: e.target.value };
                                    dispatch(setUserEmail(emailUpdate));
                                }}
                            /> 
                            <HelpText>Your email address will allow us to send your a confirmation about your appointment. </HelpText>
                        </Box>
                    </Stack>
                </Card>
                <Stack orientation='horizontal' spacing='space60'> 
                    <Link href = {`/tech/repair-fulfillment`}>
                        <button className = 'fill button' style={{width: '120px', height: '60px'}} >Back</button>
                    </Link>
                    <button className = 'fill button' style={{width: '120px', height: '60px'}} onClick={handleOpen}>Submit</button>
                </Stack>
                <Modal isOpen={isOpen} onDismiss={redirectHome} size = 'default' ariaLabelledby={'124'}>
                    <ModalHeader> 
                        <ModalHeading as='h3' >
                            Your appointment has been scheduled!
                        </ModalHeading>
                    </ModalHeader>
                        <ModalBody>
                            You'll receive a confirmation email shortly at {email} for your scheduled appointment.
                        </ModalBody>
                        <ModalFooter>
                            <ModalFooterActions>
                                <button className = 'fill button' style={{width: '120px', height: '60px'}} onClick = {redirectHome}>Close</button>
                            </ModalFooterActions>
                        </ModalFooter>
                </Modal>
            </div>
        </div>
    )
}

export default Appointment;