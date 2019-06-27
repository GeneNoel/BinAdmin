import React, { Component, Fragment } from 'react';
import { hot } from 'react-hot-loader';
import {
  SectionHeader,
  Searchbox,
  Modal,
  DashboardWrapper,
  BinCard,
  BinCollectorTableHeader,
} from '../../components/shared';
import { BinForm } from '../../components/forms';

class BinsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    const { openModal } = this.state;
    this.setState({
      openModal: !openModal,
    });
  }

  render() {
    const { openModal } = this.state;
    return (
      <DashboardWrapper>
        <Fragment>
          <div className="mb-20">
            <Searchbox placeholder="Search through bins ..." />
          </div>
          <div className="mb-20">
            <SectionHeader title="All Bins">
              <button
                className="font-maison bg-blue rounded p-2 px-3 text-white hover:bg-blue-700"
                onClick={this.toggleModal}
              >
                Add new Bin
              </button>
            </SectionHeader>
            <div className="flex flex-col">
              <BinCollectorTableHeader />
              <BinCard status={true} />
              <BinCard status={false} />
              <BinCard status={true} />
              <BinCard status={false} />
              <BinCard status={true} />
              <BinCard status={false} />
              <BinCard status={true} />
              <BinCard status={false} />
              <BinCard status={true} />
              <BinCard status={false} />
              <BinCard status={true} />
              <BinCard status={false} />
            </div>
          </div>

          {openModal ? (
            <Modal>
              <BinForm toggleModal={this.toggleModal} />
            </Modal>
          ) : null}
        </Fragment>
      </DashboardWrapper>
    );
  }
}

export default hot(module)(BinsPage);
