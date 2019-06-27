import React, { Component, Fragment } from 'react';
import { hot } from 'react-hot-loader';
import { Link } from 'react-router-dom';
import { StatsCard } from '../../components/overview';
import {
  SectionHeader,
  DashboardWrapper,
  CollectorCard,
  CollectorTableHeader,
} from '../../components/shared';

const SeeMoreLink = () => {
  return (
    <Fragment>
      <Link to="/collectors">
        <span className="font-medium text-blue text-base pr-1">See More</span>
      </Link>
    </Fragment>
  );
};

class Home extends Component {
  render() {
    return (
      <DashboardWrapper>
        <Fragment>
          <div className="mb-20">
            <SectionHeader title="Weekly Insight" />
            <div className="flex lg:flex-row sm:flex-col">
              <StatsCard title="Total Collectors" count="20">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    className="text-blue-900 fill-current"
                    d="M256 256c52.805 0 96-43.201 96-96s-43.195-96-96-96-96 43.201-96 96 43.195 96 96 96zm0 48c-63.598 0-192 32.402-192 96v48h384v-48c0-63.598-128.402-96-192-96z"
                  />
                </svg>
              </StatsCard>

              <StatsCard title="Total Bins" count="52">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    className="text-blue-900 fill-current"
                    d="M128 405.429C128 428.846 147.198 448 170.667 448h170.667C364.802 448 384 428.846 384 405.429V160H128v245.429zM416 96h-80l-26.785-32H202.786L176 96H96v32h320V96z"
                  />
                </svg>
              </StatsCard>
              <StatsCard title="Sales" count="$200">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    className="text-blue-900 fill-current"
                    d="M480 128c0-17.6-14.4-32-32-32H64c-17.6 0-32 14.4-32 32v48h448v-48zM32 384c0 17.6 14.4 32 32 32h384c17.6 0 32-14.4 32-32V224H32v160zm142-48h164c7.7 0 14 6.3 14 14s-6.3 14-14 14H174c-7.7 0-14-6.3-14-14s6.3-14 14-14zm-72 0h12c7.7 0 14 6.3 14 14s-6.3 14-14 14h-12c-7.7 0-14-6.3-14-14s6.3-14 14-14z"
                  />
                </svg>
              </StatsCard>
            </div>
          </div>

          <div className="mb-20">
            <SectionHeader title="Recently Added Collectors">
              <SeeMoreLink />
            </SectionHeader>
            <div className="flex flex-col">
              <CollectorTableHeader />
              <CollectorCard />
              <CollectorCard />
              <CollectorCard />
            </div>
          </div>
        </Fragment>
      </DashboardWrapper>
    );
  }
}

export default hot(module)(Home);
