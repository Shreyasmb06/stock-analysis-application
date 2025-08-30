import React from 'react';

function Footer() {
    return (
        <footer className='footer' style={{ backgroundColor: '#e6e8eaff', }}>
        <div className='container' >
            <div className='row  p-5'>
                <div className='col'>
                    <img src="./images/logo.svg" alt="Zerodha" className="img-fluid" style={{ maxWidth: '50%' }} />
                    <p className='text-muted mt-2' style={{ fontSize: '0.8rem' }}>© 2010 - 2025, Zerodha Broking Ltd.All rights reserved.</p>
                </div>
                <div className='col' >
                    <p>Company</p>
                    <a href='/about' className='text-muted'>About</a><br/><br/>
                    <a href='/philosophy' className='text-muted'>Philosophy</a><br/><br/>
                    <a href='/press' className='text-muted'>Press & media</a><br/><br/>
                    <a href='/careers' className='text-muted'>Careers</a><br/><br/>
                    <a href='/csr' className='text-muted'>Zerodha Cares (CSR)</a><br/><br/>
                    <a href='/zerodha-tech' className='text-muted'>Zerodha.tech</a><br/><br/>
                    <a href='/open-source' className='text-muted'>Open source</a><br/><br/>
                </div>
                    
                <div className='col'>
                    <p>Support</p>
                    <a href='/support' className='text-muted'>Support portal</a><br/><br/>
                    <a href='/complaints' className='text-muted'>How to file a complaint?</a><br/><br/>
                    <a href='/complaints-status' className='text-muted'>Status of your complaints</a><br/><br/>
                    <a href='/bulletin' className='text-muted'>Bulletin</a><br/><br/>
                    <a href='/circular' className='text-muted'>Circular</a><br/><br/>
                    <a href='/blog' className='text-muted'>Z-Connect blog</a><br/><br/>
                    <a href='/contact' className='text-muted'>Downloads</a><br/><br/>
                </div>
                <div className='col'>
                    <p>Account</p>
                    <a href='/open-account' className='text-muted'>Open demat account</a><br/><br/>
                    <a href='/account-activation' className='text-muted'>Minor demat account</a><br/><br/>
                    <a href='/account-closure' className='text-muted'>NRI demat account</a><br/><br/>
                    <a href='/account-operations' className='text-muted'>Commodity</a><br/><br/>
                    <a href='/account-operations' className='text-muted'>Dematerialisation</a><br/><br/>
                    <a href='/account-operations' className='text-muted'>Fund transfer</a><br/><br/>
                    <a href='/account-operations' className='text-muted'>MTF</a><br/><br/>
                    <a href='/account-operations' className='text-muted'>Referral program</a><br/><br/>
                </div>
                <div className='row text-small text-muted mt-5 ' style={{ fontSize: '0.8rem' }}>
                <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

                <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

                <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>

                <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

                <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

                <p>India's largest broker based on networth as per NSE. NSE broker factsheet</p>

                <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
                </div>
            </div>
                
        </div>
    </footer>
    );
}

export default Footer;