import { Dialog } from "@headlessui/react";
import { useRef, useState } from "react";

export default function Modal() {
  const [visible, setVisible] = useState(false);
  const closeButtonRef = useRef(null)
  const handleShow = () => setVisible(true);
  const handleHide = () => setVisible(false);
  return (
    <>
      <button onClick={handleShow} type="button" className='px-4 py-2 border rounded'>Click to Show Modal</button>
      <Dialog
        as='div'
        initialFocus={closeButtonRef}
        open={visible}
        onClose={handleHide}
        className="fixed z-50 inset-0 overflow-y-auto"
      >
        <Dialog.Overlay
          className="fixed inset-0 backdrop-filter backdrop-blur-sm bg-black bg-opacity-30"
        />
        <div className='fixed inset-0 overflow-y-auto flex'>
          <div className='p-3 m-auto w-full' style={{ maxWidth: 500 }}>
            <div className='p-3 rounded border bg-white'>
              <Dialog.Title as='div' className='font-semibold text-xl'>Dialog</Dialog.Title>
              <Dialog.Description as='div' className='mb-4'>
                This is dialog
              </Dialog.Description>
              <button className='px-4 py-2 border rounded' onClick={handleHide} ref={closeButtonRef}>Close This Dialog</button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
