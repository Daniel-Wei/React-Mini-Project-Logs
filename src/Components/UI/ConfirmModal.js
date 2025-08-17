import Backdrop from './Backdrop';
import Card from './Card';
import './ConfirmModal.css';

const ConfirmModal = ({confirmText, onConfirmDelete, onCancelDelete}) => {
    return <Backdrop>
        <Card className="confirmModal">
            <div className='confirmText'>
                {confirmText}
            </div>
        
            <div className='confirmModelButtonContainer'>
                <button className='confirmModelButton' onClick={onConfirmDelete}>Yes</button>
                <button className='confirmModelButton' onClick={onCancelDelete}>No</button>
            </div>
        </Card>
    </Backdrop>
}

export default ConfirmModal;