import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Alert from "./components/Alert";

//props(Propertise 의 줄임말)로 전달받은 데이터를 이용하여 화면에 표시하는 컴포넌트

const App = () => {
    const [charge, setCharge] = useState("");

    const [amount, setAmount] = useState(0);

    const [alert, setAlert] = useState({ show: false });

    const [id, setId] = useState(0);

    const [edit, setEdit] = useState(false);

    const [expenses, setExpenses] = useState([
        { id: 1, charge: "렌트비", amount: 1000 },
        { id: 2, charge: "식비", amount: 2000 },
        { id: 3, charge: "커피", amount: 3000 },
    ]);

    const clearItems = () => {
        setExpenses([]);
    };

    const handleCharge = (e) => {
        console.log(e.target.value);
        setCharge(e.target.value);
    };

    const handleAmount = (e) => {
        console.log(e.target.value);
        setAmount(e.target.valueAsNumber);
    };

    const handleEdit = (id) => {
        const expense = expenses.find((expense) => expense.id === id);
        const { charge, amount } = expense;
        setId(id);
        setCharge(charge);
        setAmount(amount);
        setEdit(true);
    };

    const handleDelete = (id) => {
        const newExpense = expenses.filter((expense) => expense.id != id);
        console.log(newExpense);
        setExpenses(newExpense);
        handleAlert({ type: "danger", text: "아이템이 삭제되었습니다" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (charge !== "" && amount > 0) {
            if (edit) {
                const newExpenses = expenses.map((item) => {
                    return item.id === id ? { ...item, charge, amount } : item;
                });
                setExpenses(newExpenses);
                setEdit(false);
                handleAlert({
                    type: "success",
                    text: "아이템이 수정되었습니다",
                });
            } else {
                const newExpense = { id: crypto.randomUUID(), charge, amount };

                //불변성을 지켜주기위해서 새로운 expense를 만들어서 기존의 expense에 추가해준다.

                const newExpenses = [...expenses, newExpense];
                setExpenses(newExpenses);
                setCharge("");
                setAmount(0);
                handleAlert({
                    type: "success",
                    text: "아이템이 생성되었습니다",
                });
            }
            setCharge("");
            setAmount(0);
        } else {
            console.log("error");
            handleAlert({ type: "danger", text: "정상적인 값을 넣어주세요" });
        }
    };

    const handleAlert = ({ type, text }) => {
        setAlert({ show: true, type, text });
        setTimeout(() => {
            setAlert({ show: false });
        }, 7000);
    };

    return (
        <main className="main-container">
            {alert.show ? <Alert type={alert.type} text={alert.text} /> : null}
            <h1> 예산 계산기 </h1>
            <div
                style={{
                    width: "100%",
                    backgroundColor: "white",
                    padding: "1rem",
                }}
            >
                {}
                <ExpenseForm
                    handleCharge={handleCharge}
                    charge={charge}
                    handleAmount={handleAmount}
                    amount={amount}
                    handleSubmit={handleSubmit}
                    edit={edit}
                />
            </div>
            <div
                style={{
                    width: "100%",
                    backgroundColor: "white",
                    padding: "1rem",
                }}
            >
                {}
                <ExpenseList
                    expenses={expenses}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    clearItems={clearItems}
                />
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "end",
                    marginTop: "1rem",
                }}
            >
                <p style={{ fontSize: "2rem" }}>
                    총지출:
                    <span>
                        {expenses.reduce((acc, curr) => {
                            return (acc += curr.amount);
                        }, 0)}
                        원
                    </span>
                </p>
            </div>
        </main>
    );
};

export default App;
