import React from 'react';
import './HistoryItem.css';
import moment from 'moment';

const HistoryItem = ({data}) => {
    const openRecipent = () => {
        window.navigator.clipboard.writeText(data.transaction_digest).then(() => {
            alert("COPY TO BOARD");
            if (!confirm("Go To Sui Explorer")) {

            } else {
                window.open(`https://explorer.devnet.sui.io`, '_blank')
            }
        });
    }
    
    return (
        <div className="HistoryItem" onClick={openRecipent}>
            <div className='history-digest'>{data.transaction_digest}</div>
            <div className='history-inner-box'>
                <div>Method</div>
                <div className='history-type'>{data.transaction_type}</div>
            </div>
            <div className='history-inner-box'>
                <div>Type</div>
                <div className='history-type'>{data.transaction_flag}</div>
            </div>
            <div className='history-inner-box'>
                <div>Recipient</div>
                <div className='history-recipients'>{data.recipient}</div>
            </div>
            <div className='history-inner-box'>
                <div>Amount</div>
                <div className='history-amount'>{data.total_amount}</div>
            </div>
            <div className='history-inner-box'>
                <div>TotalGasFee</div>
                <div className='history-gas'>{data.total_gas_fee}</div>
            </div>
            <div className='history-inner-box'>
                <div>Date</div>
                <div className='history-date'>{moment(data.timestamp).format('YYYY-MM-DD hh:mm:ss')}</div>
            </div>
        </div>
    );
};

export default HistoryItem;
