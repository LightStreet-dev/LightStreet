type ConsentToastProps = {
  closeToast: () => void;
  sendEmail?: () => void;
  onDecline?: () => void;}

const ConsentToast = ({ closeToast, sendEmail,onDecline }: ConsentToastProps) => {
  const handleAccept = () => {
    console.log('Користувач погодився');
    sendEmail?.()
    closeToast();
  };

  const handleDecline = () => {
    console.log('Користувач відмовився');
    closeToast();
    onDecline?.();
  };

  return (
    <div>
      <p>Чи погоджуєтесь на обробку даних?</p>

      <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
        <button onClick={handleAccept}>Так</button>
        <button onClick={handleDecline}>Ні</button>
      </div>
    </div>
  );
};

export default ConsentToast;