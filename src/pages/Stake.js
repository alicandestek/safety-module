import React from "react";
import Layout from "../components/layout/Layout";
import StakingCard from "../components/stakingCard/StakingCard";

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
        <div className="grid grid-cols-6 items-center mx-56 gap-4">
          <div className="col-span-4">
            <StakingCard />
          </div>
          <div>2</div>
        </div>
      </div>
    </Layout>
  );
}

export default Stake;
