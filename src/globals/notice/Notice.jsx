import ReactDOM from "react-dom";
import { BiX } from "react-icons/bi";
import { useNotice } from "../../store/notice";
import { useEffect, useRef, useState } from "react";
import { NOTICE_TYPE, NOTICE_INTERVAL } from "../../utilities/enums";

import "./Notice.scss";

const NoticeCard = ({ id, type, message }) => {
  const [count, setCount] = useState(NOTICE_INTERVAL);
  const removeNotice = useNotice((state) => state.removeNotice);
  const timerRef = useRef();

  const handleRemove = () => {
    removeNotice(id);
  };

  const closeNotice = () => {
    handleRemove();
    setCount(0);
    clearInterval(timerRef.current);
  };

  useEffect(() => {
    if (!count) {
      closeNotice();
    }

    if (count === NOTICE_INTERVAL) {
      timerRef.current = setInterval(() => {
        setCount((prev) => prev - 1);
      }, 1000);
    }
  }, [count]);

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  if (!count) return null;

  return (
    <>
      <div
        className={`${
          type === NOTICE_TYPE.SUCCESS
            ? "success"
            : type === NOTICE_TYPE.ERROR
            ? "error"
            : "warning"
        }`}
      >
        <button type="button" onClick={closeNotice} aria-label="Close notice">
          <BiX />
        </button>
        <p>{message}</p>
      </div>
    </>
  );
};

const NoticeModal = () => {
  const notices = useNotice((state) => state.notices);

  if (notices.length < 1) return null;

  return ReactDOM.createPortal(
    <>
      <div
        id="notice-wrap"
        className="w-full mx-auto flex flex-col items-end gap-[0.5rem] bg-transparent pointer-events-auto"
      >
        {notices.map((not) => (
          <NoticeCard
            key={not.id}
            id={not.id}
            type={not.type}
            message={not.message}
          />
        ))}
      </div>
    </>,
    document.getElementById("notice")
  );
};

export default NoticeModal;
