import Modal from 'react-bootstrap/Modal';
import { uiCancel } from '../../assets/ui';
import { useDataNodes } from '../../context/DataNodesProvider';

function MyModal({ show, handleClose }) {
    const dataNodes = useDataNodes();
    // 雜項圖片資料第2筆，如有更換要修改
    const data = dataNodes["otherData"] ? dataNodes["otherData"][1] : null;

    if (!data || !data.Img || !data.Img.Src) return null;
    return (
        <Modal size="lg" show={show} onHide={handleClose} centered className="calendar">
            <Modal.Header>
                <button onClick={handleClose} className='btn-close'>
                    <img src={uiCancel} alt="Cancel" className="w-100" />
                </button>
                <Modal.Title>購物攻略</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <img src={data.Img.Src} className="d-block w-100" alt="攻略" />
            </Modal.Body>
        </Modal>
    );
}

export default MyModal;
