import React from 'react';
import { storiesOf } from '@storybook/react';
import ModalComponent from '../../src/ModalComponent';
import Button from '../../src/Button';

const CenterDecorator = storyFn => <div className="container">{storyFn()}</div>;

export default class ModalComponentStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.handleShowModal = this.handleShowModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleShowModal() {
    this.setState({
      show: !this.state.show,
    });
  }

  closeModal() {
    this.setState({
      show: false,
    });
  }

  render() {
    return (
      <div className="container">
        <Button
          btnClassName="primary"
          btnName="Modal"
          onClick={this.handleShowModal}
        />
        <ModalComponent
          closeModal={this.closeModal}
          showModal={this.state.show}
          modalBody="This is the body"
          modalFooter="This is Footer"
          modalSize="large"
          modalTitle="Modal"
        />
      </div>
    );
  }
}

const ModalComponentStoryRender = () => <ModalComponentStory />;

storiesOf('Components', module)
  .addDecorator(CenterDecorator)
  .add('ModalComponent', ModalComponentStoryRender);
