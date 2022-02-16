import React from "react";
import Layout from "../components/layout/Layout";

function Stake() {
  return (
    <Layout>
      <div className="main-background">
        <div className="text-center mt-32 ">
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
      </div>
    </Layout>
  );
}

export default Stake;
