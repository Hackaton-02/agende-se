import { Col, Modal, Row } from "react-bootstrap";
import StyledButton from "../StyledButton";
import * as S from "./styles"

interface AdminDeleteModalProps {
  show: boolean;
  handleClose: (success?: boolean) => void;
  target: String;
  type: boolean
}

const AdminConfirmation: React.FC<AdminDeleteModalProps> = ({
  show,
  handleClose,
  target,
  type
}) => {

  return (
    <S.ModalWrapper>
    <Modal
      show={show}
      onHide={handleClose}
      className={"main-delete-modal"}
      animation={true}
    >
      <S.ModalBodyWrapper>
      <Modal.Body className={"main-body"}>
        Tem certeza que deseja {type ? "aceitar" : "recusar"} a proposta de {target}?
        <Row>
          <Col lg={6} xs>
            <div onClick={() => handleClose(true)}>
              <StyledButton
                icon={"fa fa-check"}
                action={"Aceitar"}
                type_button="red"
              />
            </div>
          </Col>

          <Col lg={6} xs>
            <div onClick={() => handleClose(true)}>
              <StyledButton
                icon={"fa fa-times"}
                action={"Cancelar"}
                type_button="blue"
              />
            </div>
          </Col>
        </Row>
      </Modal.Body>
      </S.ModalBodyWrapper>
    </Modal>
    </S.ModalWrapper>
  );
};

export default AdminConfirmation;
