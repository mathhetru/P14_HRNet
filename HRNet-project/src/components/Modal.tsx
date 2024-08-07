function Modal() {
  return (
    <dialog aria-hidden="false" className="m-modal">
      <div className="m-modal-content">
        <header className="m-modal-header">
          <span role="button" className="m-modal-button-close">
            <img
              className="m-modal-button-close__img"
              src="assets/icons/close-red.svg"
            />
          </span>
        </header>
        <section className="m-modal-main">
          <p>Employee Created!</p>
        </section>
        <footer className="m-modal-footer">
          <p className="m-modal-footer-btn">BTN close footer</p>
        </footer>
      </div>
    </dialog>
  );
}

export default Modal;
