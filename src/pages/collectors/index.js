import React, { Component, Fragment } from 'react';
import { hot } from 'react-hot-loader';
import {
  SectionHeader,
  Searchbox,
  Modal,
  DashboardWrapper,
  CollectorCard,
  CollectorTableHeader,
} from '../../components/shared';
import { CollectorForm } from '../../components/forms';

class CollectorsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    console.log('toggled');
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
            <Searchbox placeholder="Search through collectors ..." />
          </div>

          <div className="mb-20">
            <SectionHeader title="All Collectors">
              <button
                className="font-maison bg-blue rounded p-2 px-3 text-white hover:bg-blue-700"
                onClick={this.toggleModal}
              >
                Add new Collector
              </button>
            </SectionHeader>
            <div className="flex flex-col">
              <CollectorTableHeader />
              <CollectorCard />
              <CollectorCard />
              <CollectorCard />
              <CollectorCard />
              <CollectorCard />
              <CollectorCard />
              <CollectorCard />
              <CollectorCard />
              <CollectorCard />
              <CollectorCard />
            </div>
          </div>

          {openModal ? (
            <Modal>
              <CollectorForm toggleModal={this.toggleModal} />
            </Modal>
          ) : null}
        </Fragment>
      </DashboardWrapper>
    );
  }
}

export default hot(module)(CollectorsPage);
