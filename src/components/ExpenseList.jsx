import PropTypes from "prop-types";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
import { MdDelete } from "react-icons/md";

const ExpenseList = ({ expenses, handleDelete, handleEdit, clearItems }) => {
    return (
        <>
            <ul className="list">
                {}
                {expenses.map((expense) => {
                    return (
                        <ExpenseItem
                            key={expense.id}
                            expense={expense}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                        />
                    );
                })}
            </ul>
            {expenses.length > 0 && (
                <button className="btn" onClick={clearItems}>
                    목록지우기
                    <MdDelete className="btn-icons" />
                </button>
            )}
        </>
    );
};

ExpenseList.propTypes = {
    expenses: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            // Add other expense properties here if needed
        })
    ).isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleEdit: PropTypes.func.isRequired,
    clearItems: PropTypes.func.isRequired,
};

export default ExpenseList;
