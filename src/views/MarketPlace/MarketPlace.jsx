import React, { useState } from 'react';
import './MarketPlace.css'
import add from '../../assets/images/add.png'
import missionappcoin from '../../assets/images/missionappcoin.png'
import frontdesk from '../../assets/images/frontdesk.jpeg'
import bookkeeping from '../../assets/images/bookkeeping.jpg'
import socialmedhandler from '../../assets/images/socialmed.png'
import virtualassistant from '../../assets/images/virtualassistant.jpg'
import programming from '../../assets/images/programmer.jpg'
import entertainment from '../../assets/images/entertainment.png'
import callcenter from '../../assets/images/callcenter.jpg'
import Influencer from '../../assets/Components/Influencer-Section/Influencer';
const MarketPlace = () => {


    return (
        <div className="market-page">
            <header className="market-header">
                <div className="market-header-container">
                    <div className="left-market-header">
                        <button className="wallet-btn"><img className="add-img" src={add} alt="" />Wallet</button>
                        <div className="wallet-txt">
                            <p className="market-header-txt">My Balance:</p>
                            <p className="amount-balance">$100,000</p>
                        </div>

                    </div>

                    <div className="center-market-header">
                        <p className="market-header-txt">Membership Status</p>
                        <img className="missionapp-img" src={missionappcoin} alt="" />
                        <p className="membership-rank">Bronze</p>
                    </div>

                    <div className="right-market-header">
                        <p className="market-header-txt">Subscriptions</p>
                    </div>
                </div>

            </header>


            <div className="market-body">
                <div className="m-body-container">
                    <div className="m-title-container">
                        <h2 className="m-title">City That Marketplace</h2>
                        <p className="m-subtitle">Your Gateway to Great Deals.</p>
                    </div>
                    <div className="m-cards-container">
                        <div className="m-card card-frontdesk">
                            <img src={frontdesk} alt="Cover 1" className="m-card-cover" />
                            <h3 className="card-title">Front Desk Services</h3>
                        </div>
                        <div className="m-card card-bookkeeping">
                            <img src={bookkeeping} alt="Cover 2" className="m-card-cover" />
                            <h3 className="card-title">Book keeping / Accounting</h3>
                        </div>
                        <div className="m-card card-socialmedhandler">
                            <img src={socialmedhandler} alt="Cover 3" className="m-card-cover" />
                            <h3 className="card-title">Social Media Handler</h3>
                        </div>
                        <div className="m-card card-programming">
                            <img src={programming} alt="Cover 4" className="m-card-cover" />
                            <h3 className="card-title">Website Programming</h3>
                        </div>
                        <div className="m-card card-virtualassistant">
                            <img src={virtualassistant} alt="Cover 5" className="m-card-cover" />
                            <h3 className="card-title">Virtual Assistant</h3>
                        </div>
                        <div className="m-card card-entertainment">
                            <img src={entertainment} alt="Cover 6" className="m-card-cover" />
                            <h3 className="card-title">Entertainment</h3>
                        </div>
                        <div className="m-card card-callcenter">
                            <img src={callcenter} alt="Cover 7" className="m-card-cover" />
                            <h3 className="m-card-title">Call Center</h3>
                        </div>
                    </div>




                </div>

            </div>

            <Influencer/>
        


        </div>
    )
}

export default MarketPlace
