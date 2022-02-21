import React from "react";
import Layout from "../components/layout/Layout";
import UnstakingCard from "../components/unstakingCard/UnstakingCard";
import SummaryCard from "../components/summary/SummaryCard";

function Stake() {
  return (
    <Layout>
      <div className="main-background">
        <div className="text-center mt-28 ">
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
        <div className="grid grid-cols-6 mx-56 gap-4 my-12">
          <div className="col-span-4">
            <UnstakingCard />
          </div>
          <div className="mt-8">
            <SummaryCard />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Stake;
