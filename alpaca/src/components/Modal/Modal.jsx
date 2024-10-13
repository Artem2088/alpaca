import { MobileNav } from "../index";

const Modal = ({modalOpen}) => {
  return (
    <>
      <MobileNav />
      <div className="modal-overlay" onClick={modalOpen}></div>
    </>
  );
};

export default Modal;
