import { PropTypes } from "prop-types";

const MouseHover = ({
  mouseEvent,
  cursorPosition,
  hoverCustomerName,
  hoverCustomerNumber,
  hoverWorkerName,
  hoverNotes,
  hoverPrice,
  hoverPayedStatus
}) => {
  return (
    <div className="align-items flex flex-col justify-center">
      {mouseEvent && (
        <div
          style={{
            top: cursorPosition.y + 10,
            left: cursorPosition.x + 10,
            position: "fixed",
          }}
          className="flex flex-col rounded-lg border-2 border-yellow-500 bg-zinc-700 p-2 text-white"
        >
          <p>
            <span className="font-bold text-yellow-500">Kunde: </span>
            {hoverCustomerName}
          </p>
          <p>
            <span className="font-bold text-yellow-500">Tel: </span>
            {hoverCustomerNumber}
          </p>
          <p>
            <span className="font-bold text-yellow-500">Von: </span>
            {hoverWorkerName}
          </p>
          <p>
            <span className="font-bold text-yellow-500">Notiz: </span>
            {hoverNotes}
          </p>
          <p className="text-green-500">
            <span className="font-bold text-yellow-500">Preis: </span>
            {hoverPrice + ",00 €" } 
          </p>
            {hoverPayedStatus ? <p className="text-green-500">Bezahlt</p> : <p className="text-red-500">Offene Rechnung</p>}
        </div>
      )}
    </div>
  );
};

MouseHover.propTypes = {
  mouseEvent: PropTypes.func,
  cursorPosition: PropTypes.func,
  hoverCustomerName: PropTypes.string,
  hoverCustomerNumber:PropTypes.string,
  hoverWorkerName:PropTypes.string,
  hoverNotes:PropTypes.string,
  hoverPrice:PropTypes.number,
  hoverPayedStatus: PropTypes.bool,
}

export default MouseHover;
