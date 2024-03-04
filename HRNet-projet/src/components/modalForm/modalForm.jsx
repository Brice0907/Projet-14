/* eslint-disable react/prop-types */
import './style/modalForm.css'
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: '#97ceff',
        border: '1px solid black',
        boxShadow: '0px 0px 20px -5px black',
    },
};

export default function ModalForm({ isOpen, onRequestClose }) {

    return <>
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles} ariaHideApp={false}>
            <div className='modal_text'>Employee Created !</div>
        </Modal>
    </>
}