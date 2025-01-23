import "./ExpenseForm.css";
import { MdSend } from "react-icons/md";
import PropTypes from 'prop-types';

const ExpenseForm = ({ handleCharge, charge, handleAmount, amount, handleSubmit, edit }) => {
    return (
        <form>
            <div className="form-center">
                <div className="form-group">
                    <label htmlFor="charge">지출 항목 </label>
                    <input
                        type="text"
                        className="form-control"
                        id="charge"
                        name="charge"
                        value={charge}
                        placeholder="예) 렌트비"
                        onChange={handleCharge}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">비용 </label>
                    <input
                        type="number"
                        className="form-control"
                        id="amount"
                        name="amount"
                        value={amount}
                        placeholder="예) 10000"
                        onChange={handleAmount}
                    />
                </div>
            </div>
            <button type="submit" className="btn" onClick={handleSubmit}>
                {edit ? "수정" : "제출"} <MdSend />
            </button>
        </form>
    );
};
ExpenseForm.propTypes = {
    handleCharge: PropTypes.func.isRequired,
    charge: PropTypes.string.isRequired,
    handleAmount: PropTypes.func.isRequired,
    amount: PropTypes.number.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    edit: PropTypes.bool.isRequired,
};

export default ExpenseForm;

