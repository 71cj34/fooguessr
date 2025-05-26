  const langPopup = document.getElementById('lang-popup');
  const modal = document.getElementById('modal');
  const modalClose = document.getElementById('modal-close');

  langPopup.addEventListener('click', () => {
    // Show modal
    modal.classList.remove('modal-hidden');
    modal.classList.add('modal-visible');
    // Prevent body scrolling
    document.body.classList.add('modal-open');
  });

  modalClose.addEventListener('click', () => {
    // Hide modal
    modal.classList.remove('modal-visible');
    modal.classList.add('modal-hidden');
    // Restore body scroll
    document.body.classList.remove('modal-open');
  });

  // Optional: Clicking outside modal-content closes the modal
  modal.querySelector('.modal-overlay').addEventListener('click', () => {
    modalClose.click();
  });

  // Optional: Close modal on ESC key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('modal-visible')) {
      modalClose.click();
    }
  });


let style = document.createElement('style');
    style.textContent = `

    table {
  border-collapse: collapse; /* Ensures borders are not doubled */
  width: 100%; /* Optional, adjust as needed */
}

table, th, td {
  border: 1px solid black;
}
  .modal-hidden {
    display: none;
  }
  
  /* Modal visible */
  .modal-visible {
    display: block;
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    z-index: 1000;
  }
  
  .modal-overlay {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.5);
  }
  
  .modal-content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    max-height: 80vh;
    width: 60vw;
    max-width: 80vw;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.3);
    display: flex;
    flex-direction: column;
  }
  
  #modal-close {
    align-self: flex-end;
    font-size: 1.5rem;
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 0.5rem 1rem;
    line-height: 1;
  }
  
  .modal-body {
    overflow-y: auto;
    padding: 1rem 1.5rem 1.5rem;
    flex-grow: 1;
  }

  /* Prevent body scroll when modal is open */
  body.modal-open {
    overflow: hidden;
  }
    `
    document.head.appendChild(style);