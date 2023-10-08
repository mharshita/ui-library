import CustomModal from "../lib/CustomModal.js";

export default {
  title: "Components/Modal",
  component: CustomModal,
  argTypes: { handleClose: { action: "handleClose" } },
};

const Template = (args) => <CustomModal {...args} />;

export const Modal = Template.bind({});
Modal.args = {
  open: true,
  header: "Modal Header",
  content:
    "This is a draggable modal. The content of the modal will appear here.",
  buttonText: "Cancel",
};
