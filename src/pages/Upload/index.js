import { useState, useEffect } from "react";

// Components
import Modal from "../../components/Modal/Modal";
import styls from "../../../styles/Home.module.scss";
import Auth from "../../components/Auth/Auth";
import AuthItem from "../../data/auth";

const Upload = () => {
  const [showModal, setShowModal] = useState(false);
  const [showItem, setShowItem] = useState(0);
  const [showBackIcon, setShowBackIcon] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [leftLabel, setLeftlabel] = useState("");
  const [rightLabel, setRightLabel] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [forgotAction, setForgotAction] = useState(false);

  useEffect(() => {
    setShowModal(true);
    setModalTitle("Login To TikTok");
  }, []);

  const authHandler = (item) => {
    setShowItem(item.id);
    setShowBackIcon(true);
    if (item.id === 1) {
      setModalTitle("Log in with QR code");
    } else if (item.id === 2) {
      setModalTitle("Log in");
      setLeftlabel("Phone");
      setRightLabel("Log in with email or username");
      setShowPassword(false);
      setForgotAction(false);
    } else if (item.id === 3) {
      setModalTitle("Facebook");
    } else if (item.id === 4) {
      setModalTitle("Google");
    } else if (item.id === 5) {
      setModalTitle("Twitter");
    } else if (item.id === 6) {
      setModalTitle("Apple");
    } else {
      setModalTitle("Instagram");
    }
  };

  const backHandlerAction = () => {
    setShowItem(0);
    setShowBackIcon(false);
    setModalTitle("Login To TikTok");
  };

  const forgotPwdHandler = () => {
    setModalTitle("Reset Password");
    setLeftlabel("Enter phone number");
    setRightLabel("Reset with email");
    setForgotAction(true);
  };

  const loginPwdHander = () => {
    setShowPassword(true);
  };

  const loginCodeHander = () => {
    setShowPassword(false);
  };

  return (
    <div className={styls.container}>
      <h3>Upload Page</h3>

      <Modal
        show={showModal}
        closeModal={() => setShowModal(false)}
        Title={modalTitle} // 'Login To TikTok'
        backHandler={backHandlerAction}
        showBackIcon={showBackIcon}
      >
        <Auth
          data={AuthItem}
          authItemHandler={authHandler}
          showItem={showItem}
          forgotPwdHandler={forgotPwdHandler}
          leftLabel={leftLabel}
          rightLable={rightLabel}
          showPassword={showPassword}
          loginPwdHander={loginPwdHander}
          loginCodeHander={loginCodeHander}
          forgotAction={forgotAction}
        />
      </Modal>
    </div>
  );
};

export default Upload;
