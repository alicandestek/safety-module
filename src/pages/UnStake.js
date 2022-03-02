import React from "react";
import Layout from "../components/layout/Layout";
import UnstakingCard from "../components/unstakingCard/UnstakingCard";
import SummaryCard from "../components/summary/SummaryCard";

function Stake() {
  return (
    <Layout>
      <div className="main-background">
        <div className="text-center lg:mt-28 lg:text-base lg:mx-0 mx-6 text-sm my-16">
          <p>
            Stakers on{" "}
            <a
              href="http://"
              className="primary-color underline underline-offset-4"
            >
              Balancer’s Liquidity Pool {"->"}{" "}
            </a>
            can stake their BBPT here and gain more incentives while securing
            the protocol.
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-6 lg:mx-56 lg:gap-4 lg:my-12 md:flex">
          <div className="col-span-4">
            <UnstakingCard />
          </div>
          <div className="lg:mt-8">
            <SummaryCard />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Stake;
