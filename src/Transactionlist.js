import React from 'react'

const Transactionlist = () => {
  return (
    <div>
        <h3>History</h3>
        <ul id="list" className="list">
            <li className = "minus">
                cash<span>$400</span>
                <button className="delete-btn">X</button>
                


            </li>
            <li className = "minus">
                cash<span>$400</span>
                <button className="delete-btn">X</button>
                


            </li>
            <li className = "minus">
                Book<span>$400</span>
                <button className="delete-btn">X</button>
                


            </li>
            <li className = "minus">
                Camera<span>$400</span>
                <button className="delete-btn">X</button>
                


            </li>
            </ul>    </div>
  )
}

export default Transactionlist