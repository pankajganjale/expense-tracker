import React from 'react';
import "./Dashboard.css";
import Edit from "../../Utilities/images/dashboard/edit.png";
import Delete from "../../Utilities/images/dashboard/delete.png";

const Dashboard = () => {
    return (
        <div className='dash-container'>
            <div className='dash-head'>

            </div>
            <div className='dash-body'>
                <div className='dash-forms'>
                    <div className='income-form'>
                        <div className='heading'>Add Your Income</div>
                        <form action="">
                            <div>
                                <div>
                                    <label for="date">Date</label>
                                </div>
                                <div>
                                    <input className='set-size' type="date" name="date" required />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label for="category">Category</label>
                                </div>
                                <div>
                                    <select className='set-size' name="category" required>
                                        <option value="" selected>Please choose</option>
                                        <option value="Salary">Salary</option>
                                        <option value="Allowance">Allowance</option>
                                        <option value="Borrowing">Borrowing</option>
                                        <option value="Bonus">Bonus</option>
                                        <option value="Passive Income">Passive Income</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label for="subcategory">Sub-category</label>
                                </div>
                                <div>
                                    <input className='set-size' type="text " name='subcategory' />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label for="amount">Amount</label>
                                </div>
                                <div>
                                    <input className='set-size' type="text " name='amount' required />
                                </div>
                            </div>
                            <div>
                                <input className="submit-btn" type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>
                    <div className='expense-form'>
                    <div className='heading'>Add Your Expense</div>
                        <form action="">
                            <div>
                                <div>
                                    <label for="date">Date</label>
                                </div>
                                <div>
                                    <input className='set-size' type="date" name="date" required />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label for="category">Category</label>
                                </div>
                                <div>
                                    <select className='set-size' name="category" required>
                                        <option value="" selected>Please choose</option>

                                        <option value="Household">Household</option>
                                        <option value="Education">Education</option>
                                        <option value="Donation">Donation</option>
                                        <option value="Shopping">Shopping</option>
                                        <option value="Lending">Lending</option>
                                        <option value="Food">Food</option>
                                        <option value="Transportation">Transportation</option>
                                        <option value="Health">Health</option>
                                        <option value="Beauty">Beauty</option>
                                        <option value="EMI">EMI</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label for="subcategory">Sub-category</label>
                                </div>
                                <div>
                                    <input className='set-size' type="text " name='subcategory' />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label for="amount">Amount</label>
                                </div>
                                <div>
                                    <input className='set-size' type="text " name='amount' required />
                                </div>
                            </div>
                            <div>
                                <input className="submit-btn" type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className='income-conatiner'>
                    <div className='heading'>Income</div>
                    <div className='content-container'>
                        <div className='content'>
                            <div>12-02-1999</div>
                            <div>Category</div>
                            <div>Subcategory</div>
                            <div>Amount</div>
                            <div>
                                <button><img src={Edit} alt="" /></button>
                                <button><img src={Delete} alt="" /></button>
                            </div>
                        </div>
                        <div className='content'>
                            <div>12-02-1999</div>
                            <div>Category</div>
                            <div>Subcategory</div>
                            <div>Amount</div>
                            <div>
                                <button><img src={Edit} alt="" /></button>
                                <button><img src={Delete} alt="" /></button>
                            </div>
                        </div>
                        <div className='content'>
                            <div>12-02-1999</div>
                            <div>Category</div>
                            <div>Subcategory</div>
                            <div>Amount</div>
                            <div>
                                <button><img src={Edit} alt="" /></button>
                                <button><img src={Delete} alt="" /></button>
                            </div>
                        </div>
                        <div className='content'>
                            <div>12-02-1999</div>
                            <div>Category</div>
                            <div>Subcategory</div>
                            <div>Amount</div>
                            <div>
                                <button><img src={Edit} alt="" /></button>
                                <button><img src={Delete} alt="" /></button>
                            </div>
                        </div>
                        <div className='content'>
                            <div>12-02-1999</div>
                            <div>Category</div>
                            <div>Subcategory</div>
                            <div>Amount</div>
                            <div>
                                <button><img src={Edit} alt="" /></button>
                                <button><img src={Delete} alt="" /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='expense-container'>
                    <div className='heading'>Expense</div>
                </div>
                <div className='investment-container'>
                    <div className='heading'>Investment</div>
                </div>
            </div>
        </div >
    )
}

export default Dashboard;
