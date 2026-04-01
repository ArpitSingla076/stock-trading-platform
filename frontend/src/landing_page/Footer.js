import React from 'react';

function Footer() {
    return ( 
        <footer style={{backgroundColor:"rgb(250,250,250)"}}>
        <div className='container border-top mt-5'>
            <div className='row mt-5'>
                <div className='col'>
                    <img src='media/images/logo.svg' style={{width:"50%"}}></img>
                    <p>&copy; 2010 - 2026, Zerodha Broking Ltd.All rights reserved.</p>

                </div>

                <div className='col'>
                    <p>Company</p>
                    <a href='' className='text-muted text-decoration-none'>About</a>
                    <br/>
                    <a href='' className='text-muted text-decoration-none'>Philosophy</a>
                    <br/>
                    <a href='' className='text-muted text-decoration-none'>Press & media</a>
                    <br/>
                    <a href='' className='text-muted text-decoration-none'>Careers</a>
                    <br/>
                    <a href='' className='text-muted text-decoration-none'>Zerodha Cares (CSR)</a>
                    <br/>
                    <a href='' className='text-muted text-decoration-none'>Zerodha.tech</a>
                    <br/>
                    <a href='' className='text-muted text-decoration-none'>Open source</a>
                    <br/>
                    <a href='' className='text-muted text-decoration-none'>Referral program</a>
                    <br/>
                </div>

                <div className='col'>
                    <p>Support</p>
                    <a href='' className='text-muted text-decoration-none'>Contact us</a>
                    <br/>
                    <a href='' className='text-muted text-decoration-none'>Support portal</a>
                    <br/>
                    <a href='' className='text-muted text-decoration-none'>How to file a complaint?</a>
                    <br/>
                    <a href='' className='text-muted text-decoration-none'>Status of your complaints</a>
                    <br/>
                    <a href='' className='text-muted text-decoration-none'>Bulletin</a>
                    <br/>
                    <a href='' className='text-muted text-decoration-none'>Circular</a>
                    <br/>
                    <a href='' className='text-muted text-decoration-none'>Z-Connect blog</a>
                    <br/>
                    <a href='' className='text-muted text-decoration-none'>Downloads</a>
                    <br/>
                </div>

                <div className='col'>
                    <p>Accounts</p>
                    <a href='' className='text-muted text-decoration-none'>Open demat account</a>
                    <br/>
                    <a href='' className='text-muted text-decoration-none'>Minor demat account</a>
                    <br/>
                    <a href='' className='text-muted text-decoration-none'>NRI demat account</a>
                    <br/>
                    <a href='' className='text-muted text-decoration-none'>HUF demat account</a>
                    <br/>
                    <a href='' className='text-muted text-decoration-none'>Commodity</a>
                    <br/>
                    <a href='' className='text-muted text-decoration-none'>Dematerialisation</a>
                    <br/>
                    <a href='' className='text-muted text-decoration-none'>Fund transfer</a>
                    <br/>
                    <a href='' className='text-muted text-decoration-none'>MTF</a>
                    <br/>
                </div>
            </div>
            <div className='mt-5 text-muted' style={{fontSize:"14px"}}>
            <p>Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

            <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

            <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

            <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
            </div>
                <div className="text-center mt-4 pb-3">
                <a href="" className="text-muted text-decoration-none mx-3">NSE</a>
                <a href="" className="text-muted text-decoration-none mx-3">BSE</a>
                <a href="" className="text-muted text-decoration-none mx-3">MCX</a>
                <a href="" className="text-muted text-decoration-none mx-3">Terms & conditions</a>
                <a href="" className="text-muted text-decoration-none mx-3">Policies & procedures</a>
                <a href="" className="text-muted text-decoration-none mx-3">Privacy policy</a>
                <a href="" className="text-muted text-decoration-none mx-3">Disclosure</a>
                <a href="" className="text-muted text-decoration-none mx-3">For investor's attention</a>
                <a href="" className="text-muted text-decoration-none mx-3">Investor charter</a>
            </div>
        </div>
        </footer>
     );
}

export default Footer;